'use client';

import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { Evaluation } from '@/types/Evaluation';
import { Question } from '@/types/Question';
import { domainGroups } from '@/utils/constants/domain';
import { useState, useTransition, useEffect, useRef } from 'react';
import DomainBanner from '../components/DomainBanner';
import DifficultySelector from '../components/DifficultySelector';
import QuestionCard from '../components/QuestionCard';
import EvaluationCard from '../components/EvaluationCard';
import AnswerForm from '../components/AnswerForm';
import DomainSelector from '../components/DomainSelector';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDomainInstanceByName } from '@/utils/functions/getDomainInstanceByName';
import { getQuestionAction } from '@/actions/getQuestionAction';
import { QuestionCardSkeleton } from '../components/QuestionCard';
import { useTranslations } from 'next-intl';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

export default function PracticePageWithDomains() {
  const t = useTranslations('');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();
  const [skipPending, setSkipPending] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const evaluationRef = useRef<HTMLDivElement | null>(null);

  // Always enable dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll to evaluation when it appears
  useEffect(() => {
    if (evaluation && evaluationRef.current) {
      evaluationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [evaluation]);

  const handleSelectDomain = (domain: string) => {
    startTransition(async () => {
      setSelectedDomain(domain);
      setSelectedChild(null);
      setAnswer('');
      setEvaluation(null);
    });
  };

  const handleGetQuestion = (isSkip = false) => {
    if (!selectedDomain) return;
    const topic = selectedChild
      ? `${selectedDomain} - ${selectedChild}`
      : selectedDomain;
    if (isSkip) setSkipPending(true);
    startTransition(async () => {
      const data = await getQuestionAction(topic, difficulty);
      setQuestion(data);
      setAnswer('');
      setEvaluation(null);
      setSkipPending(false);
    });
  };

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (!question) return;
      const result = await submitAnswerAction(question.description, answer);
      setEvaluation(result);
    });
  };

  const goBack = () => {
    startTransition(async () => {
      setAnswer('');
      setQuestion(null);
      setEvaluation(null);
      setSelectedDomain(null);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-4xl mx-auto flex-1 p-2 px-4 sm:p-4 md:p-6 space-y-4 sm:space-y-8 bg-gray-900 rounded-none sm:rounded-3xl shadow-2xl flex flex-col">
        <Header
          onClickLogo={goBack}
          {...(question ? { onBack: goBack } : {})}
        />

        {!selectedDomain && (
          <DomainSelector
            domainGroups={domainGroups}
            handleSelectDomain={handleSelectDomain}
          />
        )}

        {/* Show only one skeleton or card at a time */}
        {isPending && !question ? (
          <div className="w-full transition-all duration-500">
            <QuestionCardSkeleton />
            <div className="text-center text-blue-300 mt-4 animate-pulse font-semibold text-base">
              {t('getting_question')}
            </div>
          </div>
        ) : skipPending ? (
          <div className="w-full transition-all duration-500">
            <QuestionCardSkeleton />
            <div className="text-center text-blue-300 mt-4 animate-pulse font-semibold text-base">
              {t('getting_another_question')}
            </div>
          </div>
        ) : (
          question && (
            <QuestionCard question={question} selectedDomain={selectedDomain} />
          )
        )}

        {/* Only show selectors when not loading and no question is present */}
        {selectedDomain && !question && !isPending && (
          <>
            {(() => {
              const domain = getDomainInstanceByName(selectedDomain);
              const child = selectedDomain.split('-')?.[1];
              return domain ? (
                <DomainBanner
                  domain={domain}
                  child={child}
                  onBack={() => {
                    setEvaluation(null);
                    setSelectedDomain(null);
                  }}
                />
              ) : null;
            })()}
            {(() => {
              const domain = getDomainInstanceByName(selectedDomain);
              return domain && domain.children && domain.children.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {domain.children.map((child) => (
                    <button
                      key={child}
                      type="button"
                      onClick={() => setSelectedChild(child)}
                      className={`animate-fade-in px-4 py-2 rounded-full border font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40
                        ${
                          selectedChild === child
                            ? 'bg-cyan-600 text-white border-cyan-400 shadow-md'
                            : 'bg-gray-800 text-cyan-200 border-gray-700 hover:bg-cyan-900 hover:text-white'
                        } animate-bounce-once`}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              ) : null;
            })()}
            <DifficultySelector
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              isPending={isPending}
              evaluation={evaluation}
              onStart={handleGetQuestion}
            />
          </>
        )}

        {/* Fade out AnswerForm when skipPending */}
        {question && !skipPending && (
          <AnswerForm
            answer={answer}
            setAnswer={setAnswer}
            onSubmit={handleSubmitAnswer}
            isPending={isPending}
            skipPending={skipPending}
            evaluation={evaluation}
            onStop={goBack}
            onSkip={() => {
              handleGetQuestion(true);
            }}
            className={skipPending ? 'fade-out' : ''}
          />
        )}

        {evaluation ? (
          <>
            <EvaluationCard
              evaluation={evaluation}
              evaluationRef={evaluationRef}
            />
            <DifficultySelector
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              isPending={isPending}
              evaluation={evaluation}
              onStart={handleGetQuestion}
            />
          </>
        ) : null}

        <Footer />
      </div>
    </div>
  );
}
