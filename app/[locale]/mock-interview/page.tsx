'use client';
import React, { useEffect, useState, useRef, createRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getMockInterviewQuestionsAction } from '@/actions/getMockInterviewQuestionsAction';
import { submitMockInterviewAction } from '@/actions/submitMockInterviewAction';
import QuestionCard, { QuestionCardSkeleton } from '@/components/QuestionCard';
import FuturisticCard from '@/components/FuturisticCard';
import EvaluationCard from '@/components/EvaluationCard';
import TextareaAutosize from 'react-textarea-autosize';
import { EvaluationResult } from '@/types/Evaluation';
import FuturisticButton from '@/components/FuturisticButton';
import { FaPlay } from 'react-icons/fa';
const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

const MockInterviewPage = () => {
  const t = useTranslations('');

  const searchParams = useSearchParams();
  const domain = searchParams.get('domain');
  const child = searchParams.get('child');
  const difficulty = searchParams.get('difficulty');
  const locale = useLocale();

  const [questions, setQuestions] = useState<
    { title: string; description: string; constraints: string[] }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch questions from backend on mount or when params change
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const qs = await getMockInterviewQuestionsAction(
          domain,
          child,
          difficulty,
          5,
          locale
        );
        setQuestions(qs);
        setAnswers(Array(qs.length).fill(''));
      } catch {
        setQuestions([]);
        setAnswers([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [domain, child, difficulty, locale]);

  // Timer logic
  useEffect(() => {
    if (submitted || loading) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, loading]);

  const handleAnswerChange = (idx: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setEvaluating(true);
    try {
      const evalResult = await submitMockInterviewAction(
        questions.map((q) => q.description),
        answers,
        locale,
        domain,
        child,
        difficulty
      );
      setEvaluation(evalResult);
    } catch {
      setEvaluation(null);
    } finally {
      setEvaluating(false);
    }
  };

  const handleAutoSubmit = handleSubmit;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Mock Interview</h1>
      <div className="mb-4">
        <span className="font-semibold">Domain:</span> {t(domain || '')}
        {child && <span> &mdash; {t(child || '')}</span>}
        <br />
        <span className="font-semibold">Difficulty:</span>{' '}
        {t(`difficulty_${difficulty?.toLowerCase() || ''}`)}
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg font-medium">Time Left:</span>
        <span
          className={`font-mono text-xl ${
            timeLeft <= 60 ? 'text-red-500' : ''
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <QuestionCardSkeleton />
          <div className="text-center text-cyan-400 mt-6 animate-pulse font-semibold">
            {t('getting_question')}
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!submitted) handleSubmit();
          }}
        >
          {questions.map((q, idx) => (
            <div key={idx} className="mb-10">
              {idx > 0 && (
                <div className="flex items-center my-10">
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-transparent" />
                  <span className="mx-4 px-4 py-1 rounded-full bg-blue-900/60 text-cyan-300 font-bold text-lg shadow-lg border border-cyan-400/30">
                    {t('question')} {idx + 1}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-l from-blue-500/30 via-cyan-400/30 to-transparent" />
                </div>
              )}
              {idx === 0 && (
                <div className="flex items-center my-10 justify-center">
                  <span className="px-4 py-1 rounded-full bg-blue-900/60 text-cyan-300 font-bold text-lg shadow-lg border border-cyan-400/30">
                    {t('question')} {idx + 1}
                  </span>
                </div>
              )}
              <QuestionCard
                question={{
                  ...q,
                  constraints: null,
                  input_format: '',
                  output_format: '',
                }}
                selectedDomain={null}
              />
              <div className="mt-6">
                <TextareaAutosize
                  id={`answer-textarea-${idx}`}
                  minRows={3}
                  maxRows={30}
                  disabled={submitted}
                  value={answers[idx]}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  className={`relative w-full backdrop-blur-xl bg-white/5 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 text-gray-100 p-4 pb-16 rounded-xl focus:ring-2 focus:ring-blue-500/50 resize-none transition-all duration-300 text-base sm:text-lg shadow-lg focus:shadow-blue-500/20 focus:border-blue-500/50`}
                  aria-label={t('enter_answer')}
                  placeholder={t('type_your_answer')}
                />
              </div>
              {/* Compact evaluation for each question */}
              {submitted &&
                evaluation &&
                evaluation.results &&
                evaluation.results[idx] &&
                !evaluating && (
                  <FuturisticCard
                    className="mt-4"
                    glowColor={
                      evaluation.results[idx].overall_score >= 7
                        ? 'green'
                        : evaluation.results[idx].overall_score >= 4
                        ? 'yellow'
                        : 'red'
                    }
                  >
                    <div className="flex flex-wrap gap-4 items-center mb-2">
                      <span className="text-lg font-bold text-green-400">
                        {t('score')}: {evaluation.results[idx].overall_score}/10
                      </span>
                      <span className="text-lg font-bold text-blue-400">
                        {t('creative_score')}:{' '}
                        {evaluation.results[idx].creative_score}/10
                      </span>
                    </div>
                    <div className="mb-1">
                      <b>{t('evaluation_result')}:</b>{' '}
                      {evaluation.results[idx].result_text}
                    </div>
                    <div className="mb-1">
                      <b>{t('suggestion')}</b>{' '}
                      {evaluation.results[idx].suggestions}
                    </div>
                    <div className="mb-1">
                      <b>{t('key_point')}</b>{' '}
                      {evaluation.results[
                        idx
                      ].key_points_of_main_argument?.join(', ')}
                    </div>
                    <div className="mb-1">
                      <b>{t('perfect_answer')}</b>{' '}
                      {evaluation.results[idx].perfect_answer}
                    </div>
                  </FuturisticCard>
                )}
            </div>
          ))}
          <FuturisticButton
            type="submit"
            color="cyan"
            icon={<FaPlay />}
            disabled={submitted}
            className="mt-8"
          >
            {t('submit_answer')}
          </FuturisticButton>
        </form>
      )}
      {submitted && evaluating && (
        <div className="mt-12 flex flex-col items-center justify-center gap-6 animate-fade-in">
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl text-cyan-400 animate-spin-slow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-16 h-16"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#22d3ee"
                  strokeWidth="4"
                  opacity="0.2"
                />
                <path
                  d="M24 4a20 20 0 0120 20"
                  stroke="#22d3ee"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="24" cy="24" r="8" fill="#22d3ee" opacity="0.2" />
                <circle cx="24" cy="24" r="4" fill="#22d3ee" />
              </svg>
            </span>
            <h2 className="font-bold text-2xl mb-2 text-cyan-300 animate-pulse">
              {t('grading')}
            </h2>
            <div className="w-64 h-3 bg-cyan-900/40 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-progress-bar"
                style={{ width: '80%' }}
              />
            </div>
            <p className="mt-4 text-cyan-200 text-lg animate-fade-in-slow">
              {t('please_wait')}
              <br />
              {t('skeleton_loading_2')}
            </p>
          </div>
        </div>
      )}
      {submitted && evaluation && !evaluating && (
        <div className="mt-8">
          <EvaluationCard
            evaluation={{
              overall_score: evaluation.overall_score,
              creative_score: null,
              result_text: evaluation.overall_result_text,
              suggestions: evaluation.overall_suggestions,
              key_points_of_main_argument: null,
              perfect_answer: null,
              title_level_text: evaluation.title_level_text,
            }}
            evaluationRef={createRef()}
          />
        </div>
      )}
    </div>
  );
};

export default MockInterviewPage;
