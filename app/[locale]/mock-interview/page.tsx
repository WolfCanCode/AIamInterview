'use client';
import { submitMockInterviewAction } from '@/actions/submitMockInterviewAction';
import { EvaluationResult } from '@/types/Evaluation';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRedo, FaPaperPlane } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';
import MockInterviewHeader from '@/components/mock-interview/MockInterviewHeader';
import MockInterviewFooter from '@/components/mock-interview/MockInterviewFooter';
import MockInterviewQuestion from '@/components/mock-interview/MockInterviewQuestion';
import MockInterviewEvaluation from '@/components/mock-interview/MockInterviewEvaluation';
import FuturisticButton from '@/components/FuturisticButton';
import MockInterviewLoading from '@/components/mock-interview/MockInterviewLoading';
import MockInterviewConfirm from '@/components/mock-interview/MockInterviewConfirm';
import { useMockInterviewQuestions } from '@/utils/hooks/useMockInterviewQuestions';
import { useMockInterviewTimer } from '@/utils/hooks/useMockInterviewTimer';
import Footer from '@/components/Footer';
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

  const { questions, loading, fetchQuestions, retakeQuestions } =
    useMockInterviewQuestions({
      domain,
      child,
      difficulty,
      locale,
    });
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async () => {
    setShowFooter(false);
    setSubmitted(true);
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

  const { timeLeft, setTimeLeft, startTimer } = useMockInterviewTimer({
    initialTime: TOTAL_TIME,
    submitted,
    loading,
    questionsLength: questions.length,
    onAutoSubmit: handleAutoSubmit,
  });

  // Fetch questions from backend on mount or when params change
  useEffect(() => {
    if (!confirmed) return;
    (async () => {
      await fetchQuestions();
      setAnswers(Array(questions.length).fill(''));
      setShowFooter(true);
      setTimeLeft(TOTAL_TIME);
      startTimer();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmed, domain, child, difficulty, locale]);

  // Timer logic is now handled by useMockInterviewTimer

  const handleAnswerChange = (idx: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl px-4">
      {!confirmed ? (
        <MockInterviewConfirm
          t={t}
          onStart={() => setConfirmed(true)}
          domain={domain}
          child={child}
          difficulty={difficulty}
          timeLeft={timeLeft}
        />
      ) : (
        <div className="w-full max-w-2xl mx-auto mb-6 relative">
          <MockInterviewHeader
            t={t}
            domain={domain}
            child={child}
            difficulty={difficulty}
            timeLeft={timeLeft}
            showBackButton={true}
          />
        </div>
      )}
      {loading ? (
        <MockInterviewLoading t={t} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!submitted) handleSubmit();
          }}
        >
          {questions.map((q, idx) => (
            <MockInterviewQuestion
              key={idx}
              question={q}
              idx={idx}
              answer={answers[idx]}
              onAnswerChange={handleAnswerChange}
              submitted={submitted}
              evaluation={evaluation}
              evaluating={evaluating}
              t={t}
            />
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
          <MockInterviewEvaluation evaluation={evaluation} />
          <FuturisticButton
            color="pink"
            className="mt-4"
            icon={<FaRedo />}
            onClick={async () => {
              setEvaluation(null);
              setSubmitted(false);
              setTimeLeft(TOTAL_TIME);
              setShowFooter(false);
              setAnswers([]);
              const newQuestions = await retakeQuestions(questions);
              setAnswers(Array(newQuestions.length).fill(''));
              setShowFooter(true);
              setTimeLeft(TOTAL_TIME);
              startTimer();
            }}
          >
            {t('retake_interview')}
          </FuturisticButton>
        </div>
      )}
      {showFooter && (
        <>
          <div className="h-20 sm:h-0" />
          <MockInterviewFooter
            timeLeft={timeLeft}
            submitted={submitted}
            onSubmit={(e) => {
              e.preventDefault();
              if (!submitted) handleSubmit();
            }}
            t={t}
            TOTAL_TIME={TOTAL_TIME}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MockInterviewPage;
