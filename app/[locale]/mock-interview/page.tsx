'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getMockInterviewQuestionsAction } from '@/actions/getMockInterviewQuestionsAction';
import { submitMockInterviewAction } from '@/actions/submitMockInterviewAction';

const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

type EvaluationResult = {
  overall_score: number;
  title: string;
  overall_suggestions: string;
  results: {
    question: string;
    answer: string;
    overall_score: number;
    creative_score: number;
    result_text: string;
    suggestions: string;
    perfect_answer: string;
    key_points_of_main_argument: string[];
  }[];
};

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
        <div className="text-center py-12 text-cyan-500 animate-pulse font-semibold">
          Generating questions for your mock interview...
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!submitted) handleSubmit();
          }}
        >
          {questions.map((q, idx) => (
            <div key={idx} className="mb-6">
              <label className="block font-semibold mb-2">
                {idx + 1}. {q.title}
              </label>
              <div className="text-gray-700 mb-2 text-sm">{q.description}</div>
              <textarea
                className="w-full border rounded p-2 min-h-[60px]"
                value={answers[idx]}
                onChange={(e) => handleAnswerChange(idx, e.target.value)}
                disabled={submitted}
                required
              />
              {submitted &&
                evaluation &&
                evaluation.results &&
                evaluation.results[idx] &&
                !evaluating && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded text-sm">
                    <div>
                      <span className="font-semibold">Score:</span>{' '}
                      {evaluation.results[idx].overall_score} / 10
                    </div>
                    <div>
                      <span className="font-semibold">Creativity:</span>{' '}
                      {evaluation.results[idx].creative_score} / 10
                    </div>
                    <div>
                      <span className="font-semibold">Feedback:</span>{' '}
                      {evaluation.results[idx].result_text}
                    </div>
                    <div>
                      <span className="font-semibold">Suggestions:</span>{' '}
                      {evaluation.results[idx].suggestions}
                    </div>
                    <div>
                      <span className="font-semibold">Perfect Answer:</span>{' '}
                      {evaluation.results[idx].perfect_answer}
                    </div>
                    <div>
                      <span className="font-semibold">Key Points:</span>{' '}
                      {evaluation.results[
                        idx
                      ].key_points_of_main_argument?.join(', ')}
                    </div>
                  </div>
                )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
            disabled={submitted}
          >
            Submit Answers
          </button>
        </form>
      )}
      {submitted && evaluating && (
        <div className="mt-8 p-4 bg-blue-100 border border-blue-300 rounded text-center animate-pulse">
          <h2 className="font-bold text-lg mb-2 text-blue-700">
            Evaluating your answers...
          </h2>
          <p>Please wait while we review your responses.</p>
        </div>
      )}
      {submitted && evaluation && !evaluating && (
        <div className="mt-8 p-4 bg-green-50 border border-green-300 rounded">
          <h2 className="font-bold text-lg mb-2 text-green-700">Results</h2>
          <div className="mb-4">
            <span className="font-semibold">Overall Score:</span>{' '}
            {evaluation.overall_score}
            <br />
            <span className="font-semibold">Title:</span> {evaluation.title}
            <br />
            <span className="font-semibold">Suggestions:</span>{' '}
            {evaluation.overall_suggestions}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockInterviewPage;
