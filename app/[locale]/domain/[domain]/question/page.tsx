'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import { getQuestionAction } from '@/actions/getQuestionAction';
import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { Question } from '@/types/Question';
import { Evaluation } from '@/types/Evaluation';
import QuestionCard, { QuestionCardSkeleton } from '@/components/QuestionCard';
import AnswerForm from '@/components/AnswerForm';
import EvaluationCard from '@/components/EvaluationCard';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

export default function SingleQuestionPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = React.use(params);
  const t = useTranslations('');
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const child = searchParams.get('child') || '';
  const difficulty = searchParams.get('difficulty') || 'Medium';

  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();
  const [skipPending, setSkipPending] = useState(false);
  const evaluationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!domain) return;
    setEvaluation(null);
    setAnswer('');
    setQuestion(null);
    setSkipPending(false);
    handleGetQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain, child, difficulty, locale]);

  useEffect(() => {
    if (evaluation && evaluationRef.current) {
      evaluationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [evaluation]);

  const handleGetQuestion = (isSkip = false) => {
    if (!domain) return;
    setEvaluation(null);
    setSkipPending(isSkip);
    startTransition(async () => {
      const topic = child ? `${domain} - ${child}` : domain;
      const data = await getQuestionAction(topic, difficulty, locale);
      setQuestion(data);
      setAnswer('');
      setSkipPending(false);
    });
  };

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (!question) return;
      const result = await submitAnswerAction(
        question.description,
        answer,
        locale
      );
      setEvaluation(result);
    });
  };

  const handleBack = () => {
    router.push(
      `/${locale}/domain/${domain}?child=${child}&difficulty=${difficulty}`
    );
  };

  return (
    <>
      <BackButton onClick={handleBack} className="mb-4" />
      <div className="mb-6">
        {isPending && !question ? (
          <div className="w-full min-h-[70vh] pt-2">
            <QuestionCardSkeleton />
            <div className="text-center text-cyan-400 mt-4 animate-pulse font-medium">
              {skipPending
                ? t('getting_another_question')
                : t('getting_question')}
            </div>
          </div>
        ) : question ? (
          <QuestionCard question={question} selectedDomain={domain} />
        ) : null}
      </div>
      {question && !skipPending && (
        <AnswerForm
          answer={answer}
          setAnswer={setAnswer}
          onSubmit={handleSubmitAnswer}
          isPending={isPending}
          skipPending={skipPending}
          evaluation={evaluation}
          onStop={handleBack}
          onSkip={() => handleGetQuestion(true)}
        />
      )}
      {evaluation ? (
        <div ref={evaluationRef}>
          <EvaluationCard
            evaluation={evaluation}
            evaluationRef={evaluationRef}
          />
        </div>
      ) : null}
      <Footer />
    </>
  );
}
