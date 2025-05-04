'use client';
import { getMockInterviewQuestionsAction } from '@/actions/getMockInterviewQuestionsAction';
import { submitMockInterviewAction } from '@/actions/submitMockInterviewAction';
import EvaluationCard from '@/components/EvaluationCard';
import FuturisticButton from '@/components/FuturisticButton';
import FuturisticCard from '@/components/FuturisticCard';
import QuestionCard, { QuestionCardSkeleton } from '@/components/QuestionCard';
import { EvaluationResult } from '@/types/Evaluation';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { createRef, useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaClock,
  FaPlay,
  FaRedo,
  FaPaperPlane,
} from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import TextareaAutosize from 'react-textarea-autosize';
const TOTAL_TIME = 10 * 60; // 10 minutes in seconds

function AnimatedGradingMessage({ t }: { t: (key: string) => string }) {
  const messages = [
    t('please_wait'),
    t('skeleton_loading_2'),
    t('skeleton_loading_3'),
    t('skeleton_loading_4'),
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIdx((i) => (i + 1) % messages.length),
      2000
    );
    return () => clearInterval(interval);
  }, [messages.length]);
  return (
    <p className="text-sm mt-0 text-cyan-100 min-h-[28px] transition-all duration-500 animate-fade-in-slow text-center">
      {messages[idx]}
    </p>
  );
}

const MockInterviewPage = () => {
  const t = useTranslations('');

  const searchParams = useSearchParams();
  const domain = searchParams.get('domain');
  const child = searchParams.get('child');
  const difficulty = searchParams.get('difficulty');
  const locale = useLocale();
  const router = useRouter();

  const [questions, setQuestions] = useState<
    { title: string; description: string; constraints: string[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showFooter, setShowFooter] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Fetch questions from backend on mount or when params change
  useEffect(() => {
    if (!confirmed) return;
    setLoading(true);
    (async () => {
      setLoading(true);
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
        setShowFooter(true);
        setTimeLeft(TOTAL_TIME); // Reset timer only after questions are fetched
      } catch {
        setQuestions([]);
        setAnswers([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [confirmed, domain, child, difficulty, locale]);

  // Timer logic
  useEffect(() => {
    console.log(submitted, loading, questions.length);
    if (submitted || loading || !questions.length) return;
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
  }, [submitted, loading, questions.length]);

  const handleAnswerChange = (idx: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  const handleSubmit = async () => {
    setShowFooter(false);
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setEvaluating(true);
    try {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
      const evalResult = await submitMockInterviewAction(
        questions.map((q) => q.description),
        answers,
        locale,
        domain,
        child,
        difficulty
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="container mx-auto py-8 max-w-2xl px-4">
      {!confirmed ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-full rounded-2xl bg-gradient-to-br from-blue-900/60 via-cyan-900/60 to-blue-800/60 shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className=" top-5 left-1 w-10 h-10 flex items-center justify-center rounded-full bg-cyan-700/70 backdrop-blur-xl shadow-xl border-2 border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/90 hover:text-white active:scale-95 transition-all duration-200 z-30 "
                  style={{ boxShadow: '0 4px 24px 0 rgba(34,211,238,0.15)' }}
                  aria-label={t('back') || 'Back'}
                >
                  <FaArrowLeft className="text-2xl" />
                </button>

                <h1 className="text-lg sm:text-2xl font-bold text-white">
                  {t('mock_interview')}
                </h1>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 items-center mb-2">
                <span className="font-semibold text-gray-200 text-sm sm:text-base">
                  {t('domain')}:
                </span>
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-700/40 text-cyan-200 font-medium text-sm sm:text-base">
                  {t(domain || '')}
                </span>
                {child && (
                  <>
                    <span className="text-cyan-400 font-bold">—</span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-700/40 text-purple-200 font-medium text-sm sm:text-base">
                      {t(child || '')}
                    </span>
                  </>
                )}
              </div>
              <div className="flex gap-1 sm:gap-2 items-center mb-1">
                <span className="font-semibold text-gray-200 text-sm sm:text-base">
                  {t('difficulty')}:
                </span>
                <span
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium text-sm sm:text-base ${
                    (difficulty || '').toLowerCase() === 'easy'
                      ? 'bg-green-700/40 text-green-200'
                      : (difficulty || '').toLowerCase() === 'medium'
                      ? 'bg-yellow-700/40 text-yellow-200'
                      : (difficulty || '').toLowerCase() === 'hard'
                      ? 'bg-red-700/40 text-red-200'
                      : 'bg-purple-700/40 text-purple-200'
                  }`}
                >
                  {t(`difficulty_${(difficulty || 'easy').toLowerCase()}`)}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-center w-full sm:w-auto mt-4 sm:mt-0">
              <span className="text-base sm:text-lg font-medium text-gray-200 flex items-center gap-2">
                <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                <span className="whitespace-nowrap">
                  {t('time_left') || 'Time Left'}
                </span>
              </span>
              <span
                className={`font-mono text-2xl sm:text-3xl mt-1 ${
                  timeLeft <= 60 ? 'text-red-400' : 'text-cyan-300'
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <FuturisticButton
            onClick={() => setConfirmed(true)}
            color="cyan"
            className="text-lg px-8 py-4"
            icon={<FaPlay />}
          >
            {t('start_interview')}
          </FuturisticButton>
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto mb-6 relative">
          {/* Back button */}

          <div className="rounded-2xl bg-gradient-to-br from-blue-900/60 via-cyan-900/60 to-blue-800/60 shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
            <div className="w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-700/70 backdrop-blur-xl shadow-xl border-2 border-cyan-400/30 text-cyan-100 hover:bg-cyan-500/90 hover:text-white active:scale-95 transition-all duration-200 z-30 "
                  style={{ boxShadow: '0 4px 24px 0 rgba(34,211,238,0.15)' }}
                  aria-label={t('back') || 'Back'}
                >
                  <FaArrowLeft className="text-2xl" />
                </button>
                <h1 className="text-lg sm:text-2xl font-bold text-white">
                  {t('mock_interview')}
                </h1>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 items-center mb-2">
                <span className="font-semibold text-gray-200 text-sm sm:text-base">
                  {t('domain')}:
                </span>
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-700/40 text-cyan-200 font-medium text-sm sm:text-base">
                  {t(domain || '')}
                </span>
                {child && (
                  <>
                    <span className="text-cyan-400 font-bold">—</span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-700/40 text-purple-200 font-medium text-sm sm:text-base">
                      {t(child || '')}
                    </span>
                  </>
                )}
              </div>
              <div className="flex gap-1 sm:gap-2 items-center mb-1">
                <span className="font-semibold text-gray-200 text-sm sm:text-base">
                  {t('difficulty')}:
                </span>
                <span
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium text-sm sm:text-base ${
                    (difficulty || '').toLowerCase() === 'easy'
                      ? 'bg-green-700/40 text-green-200'
                      : (difficulty || '').toLowerCase() === 'medium'
                      ? 'bg-yellow-700/40 text-yellow-200'
                      : (difficulty || '').toLowerCase() === 'hard'
                      ? 'bg-red-700/40 text-red-200'
                      : 'bg-purple-700/40 text-purple-200'
                  }`}
                >
                  {t(`difficulty_${(difficulty || 'easy').toLowerCase()}`)}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-center w-full sm:w-auto mt-4 sm:mt-0">
              <span className="text-base sm:text-lg font-medium text-gray-200 flex items-center gap-2">
                <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                <span className="whitespace-nowrap">
                  {t('time_left') || 'Time Left'}
                </span>
              </span>
              <span
                className={`font-mono text-2xl sm:text-3xl mt-1 ${
                  timeLeft <= 60 ? 'text-red-400' : 'text-cyan-300'
                }`}
              >
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] mt-20">
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
          {questions.length > 0 && (
            <div className="hidden sm:block">
              <FuturisticButton
                type="submit"
                color="cyan"
                icon={<FaPaperPlane />}
                disabled={submitted}
                className="!mt-0 min-w-[120px]"
              >
                {t('submit_answer')}
              </FuturisticButton>
            </div>
          )}
        </form>
      )}
      {submitted && evaluating && (
        <div className="mt-16 flex flex-col items-center justify-center gap-8 animate-fade-in relative">
          {/* Aurora background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/30 animate-aurora" />
          </div>
          {/* Glassy card */}
          <div className="relative z-10 w-[340px] sm:w-[400px] rounded-3xl bg-white/10 backdrop-blur-2xl border border-cyan-400/20 shadow-2xl flex flex-col items-center py-10 px-6">
            {/* Animated robot/AI icon */}
            <span className="text-4xl text-cyan-300 drop-shadow-lg animate-robot-wave mb-4">
              <FaPen />
            </span>

            {/* Rotating/fading messages */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-bold text-2xl text-cyan-200 animate-pulse">
                {t('grading')}
              </h2>
              <AnimatedGradingMessage t={t} />
            </div>
          </div>
        </div>
      )}
      {submitted && evaluation && !evaluating && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <EvaluationCard
            evaluation={{
              overall_score: evaluation.overall_score,
              creative_score: null,
              result_text: evaluation.overall_result_text,
              suggestions: null,
              key_points_of_main_argument: null,
              perfect_answer: null,
              title_ranking_text: evaluation.title_ranking_text,
            }}
            evaluationRef={createRef()}
          />
          <FuturisticButton
            color="pink"
            className="mt-4"
            icon={<FaRedo />}
            onClick={async () => {
              setLoading(true);
              setEvaluation(null);
              setSubmitted(false);
              setTimeLeft(TOTAL_TIME);
              setShowFooter(false);
              setAnswers([]);
              // Fetch new questions, ensuring they are different from the previous set
              let newQuestions = [];
              let attempts = 0;
              while (attempts < 5) {
                const qs = await getMockInterviewQuestionsAction(
                  domain,
                  child,
                  difficulty,
                  5,
                  locale
                );
                // Compare by description to avoid duplicates
                const prevDescriptions = questions
                  .map(
                    (q: {
                      title: string;
                      description: string;
                      constraints: string[];
                    }) => q.description
                  )
                  .join('||');
                const newDescriptions = qs
                  .map(
                    (q: {
                      title: string;
                      description: string;
                      constraints: string[];
                    }) => q.description
                  )
                  .join('||');
                if (prevDescriptions !== newDescriptions) {
                  newQuestions = qs;
                  break;
                }
                attempts++;
              }
              setQuestions(newQuestions);
              setAnswers(Array(newQuestions.length).fill(''));
              setShowFooter(true);
              setLoading(false);
            }}
          >
            {t('retake_interview')}
          </FuturisticButton>
        </div>
      )}
      {showFooter && (
        <>
          <div className="h-20 sm:h-0" />
          {/* Fixed bottom bar for mobile: timer + submit button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!submitted) handleSubmit();
            }}
            className="sm:hidden"
            style={{ margin: 0 }}
          >
            <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900/90 via-cyan-900/90 to-blue-800/90 border-t border-cyan-400/20 flex items-center justify-between px-4 pb-6 pt-4 gap-4 backdrop-blur-xl shadow-2xl">
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  zIndex: 100,
                  pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    width: `${(timeLeft / TOTAL_TIME) * 100}%`,
                    height: '100%',
                    background:
                      timeLeft <= 60
                        ? '#f87171'
                        : 'linear-gradient(to right, #22d3ee, #2563eb)',
                    borderRadius: '2px',
                    transition: 'width 0.5s linear, background 0.3s',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* Single fire dot at the tail of the progress bar, color matches the bar */}
                  {timeLeft > 0 && (
                    <span
                      className="fire-dot"
                      style={{
                        left: 'calc(100% - 5px)',
                        background:
                          timeLeft <= 60
                            ? '#f87171'
                            : 'linear-gradient(135deg, #22d3ee 60%, #2563eb 100%)',
                        boxShadow:
                          timeLeft <= 60
                            ? '0 0 8px 2px #f87171, 0 0 16px 4px #f87171'
                            : '0 0 8px 2px #22d3ee, 0 0 16px 4px #2563eb',
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-5 h-5 text-cyan-400" />
                <span
                  className={`font-mono text-lg ${
                    timeLeft <= 60 ? 'text-red-400' : 'text-cyan-200'
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
              <FuturisticButton
                type="submit"
                color="cyan"
                icon={<FaPaperPlane />}
                disabled={submitted}
              >
                {t('submit_answer')}
              </FuturisticButton>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default MockInterviewPage;
