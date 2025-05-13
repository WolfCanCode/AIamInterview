'use client';
import { submitMockInterviewAction } from '@/actions/submitMockInterviewAction';
import FuturisticButton from '@/components/FuturisticButton';
import PenIcon from '@/components/icons/PenIcon';
import RedoIcon from '@/components/icons/RedoIcon';
import SendIcon from '@/components/icons/SendIcon';
import MockInterviewConfirm from '@/components/mock-interview/MockInterviewConfirm';
import MockInterviewEvaluation from '@/components/mock-interview/MockInterviewEvaluation';
import MockInterviewFooter from '@/components/mock-interview/MockInterviewFooter';
import MockInterviewHeader from '@/components/mock-interview/MockInterviewHeader';
import MockInterviewQuestion from '@/components/mock-interview/MockInterviewQuestion';
import { EvaluationResult } from '@/types/Evaluation';
import { useMockInterviewQuestions } from '@/utils/hooks/useMockInterviewQuestions';
import { useMockInterviewTimer } from '@/utils/hooks/useMockInterviewTimer';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const AnimatedGradingMessage = React.memo(function AnimatedGradingMessage({
  t,
}: {
  t: (key: string) => string;
}) {
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
});

const getTotalTime = (difficulty: string | null, numQuestions: number) => {
  // Returns time in seconds
  const d = (difficulty || '').toLowerCase();

  if (d === 'easy') {
    return numQuestions === 5 ? 10 * 60 : 20 * 60;
  } else if (d === 'medium') {
    return numQuestions === 5 ? 9 * 60 : 18 * 60;
  } else if (d === 'hard') {
    return numQuestions === 5 ? 8 * 60 : 15 * 60;
  } else if (d === 'madness') {
    return numQuestions === 5 ? 5 * 60 : 10 * 60;
  }
  return numQuestions === 5 ? 10 * 60 : 20 * 60;
};

const MockInterviewPage = () => {
  const t = useTranslations('');
  const router = useRouter();

  const searchParams = useSearchParams();
  const domain = searchParams.get('domain');
  const child = searchParams.get('child');
  const difficulty = searchParams.get('difficulty');
  const locale = useLocale();

  const [numQuestions, setNumQuestions] = useState(5);
  const { questions, loading, fetchQuestions, retakeQuestions } =
    useMockInterviewQuestions({
      domain,
      child,
      difficulty,
      locale,
      numQuestions,
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
    const retry = async () => {
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
        toast.dismiss();
      } catch {
        setEvaluation(null);
        toast.error('Failed to submit answers.', {
          action: {
            label: 'Retry',
            onClick: retry,
          },
        });
      } finally {
        setEvaluating(false);
      }
    };
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
      toast.error('Failed to submit answers.', {
        action: {
          label: 'Retry',
          onClick: retry,
        },
      });
      setShowFooter(true);
    } finally {
      setEvaluating(false);
    }
  };

  const handleAutoSubmit = handleSubmit;

  const totalTime = getTotalTime(difficulty, numQuestions);
  const { timeLeft, setTimeLeft, startTimer } = useMockInterviewTimer({
    initialTime: totalTime,
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
      setAnswers(Array(numQuestions).fill(''));
      setShowFooter(true);
      setTimeLeft(totalTime);
      startTimer();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmed, domain, child, difficulty, locale, numQuestions, totalTime]);

  // Timer logic is now handled by useMockInterviewTimer

  const handleAnswerChange = (idx: number, value: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[idx] = value;
      return updated;
    });
  };

  // Handler for starting the interview
  const handleStartInterview = () => setConfirmed(true);

  // Handler for going back
  const handleBack = () => router.push(`/${locale}/domain/${domain}`);

  // Handler for form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitted) handleSubmit();
  };

  // Handler for retake interview
  const handleRetakeInterview = async () => {
    setEvaluation(null);
    setSubmitted(false);
    setTimeLeft(totalTime);
    setShowFooter(false);
    setAnswers([]);
    await retakeQuestions(questions);
    setAnswers(Array(numQuestions).fill(''));
    setShowFooter(true);
    setTimeLeft(totalTime);
    startTimer();
  };

  return (
    <>
      <div className="animate-fade-in">
        {questions.length === 0 ? (
          <MockInterviewConfirm
            t={t}
            onStart={handleStartInterview}
            domain={domain}
            child={child}
            difficulty={difficulty}
            timeLeft={totalTime}
            numQuestions={numQuestions}
            setNumQuestions={setNumQuestions}
            onBack={handleBack}
            loading={loading}
          />
        ) : (
          <>
            <MockInterviewHeader
              t={t}
              domain={domain}
              child={child}
              difficulty={difficulty}
              timeLeft={timeLeft}
              showBackButton={true}
              onBack={handleBack}
            />
            <form onSubmit={handleFormSubmit}>
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
                    icon={<SendIcon width={20} height={20} />}
                    disabled={submitted}
                    className="!mt-0 min-w-[120px]"
                  >
                    {t('submit_answer')}
                  </FuturisticButton>
                </div>
              )}
            </form>
          </>
        )}
        {submitted && evaluating && (
          <div className="mt-16 flex flex-col items-center justify-center gap-8 animate-fade-in relative">
            {/* Aurora background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#18223a] blur-3xl opacity-60 animate-pulse-skeleton" />
            </div>
            {/* Glassy card */}
            <div className="relative z-10 w-[340px] sm:w-[400px] rounded-3xl bg-white/10 border border-cyan-400/20 shadow-2xl flex flex-col items-center py-10 px-6">
              {/* Animated robot/AI icon */}
              <span className="text-4xl text-cyan-300 drop-shadow-lg mb-4">
                <PenIcon width={32} height={32} />
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
            <MockInterviewEvaluation
              evaluation={evaluation}
              domain={domain}
              child={child}
              difficulty={difficulty}
            />
            <FuturisticButton
              color="pink"
              className="mt-4"
              icon={<RedoIcon width={32} height={32} />}
              onClick={handleRetakeInterview}
            >
              {t('retake_interview')}
            </FuturisticButton>
          </div>
        )}
      </div>
      {showFooter && (
        <MockInterviewFooter
          timeLeft={timeLeft}
          submitted={submitted}
          onSubmit={handleFormSubmit}
          t={t}
          TOTAL_TIME={totalTime}
        />
      )}
    </>
  );
};

export default React.memo(MockInterviewPage);
