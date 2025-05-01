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
import { useTranslations, useLocale } from 'next-intl';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

export default function PracticePageWithDomains() {
  const t = useTranslations('');
  const locale = useLocale();
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
      const data = await getQuestionAction(topic, difficulty, locale);
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
      const result = await submitAnswerAction(
        question.description,
        answer,
        locale
      );
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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 p-3 sm:p-6 space-y-6 sm:space-y-8">
        <div className="relative glass-morphism rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-radial-[at_center] from-[oklch(70%_0.3_240/0.15)] to-[oklch(70%_0.3_280/0.15)]" />
          <div className="relative p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 text-[oklch(98%_0_0)]">
            <Header
              onClickLogo={goBack}
              {...(question ? { onBack: goBack } : {})}
            />

            {!selectedDomain && (
              <DomainSelector
                domainGroups={domainGroups}
                handleSelectDomain={handleSelectDomain}
                selectedDomain={selectedDomain || undefined}
              />
            )}

            {/* Show only one skeleton or card at a time */}
            {isPending && !question ? (
              <div className="w-full flex flex-1 min-h-[70vh] items-center justify-center flex-col transition-discrete starting:opacity-0">
                <QuestionCardSkeleton />
                <div className="text-center text-[oklch(85%_0.3_240)] mt-4 animate-pulse font-medium">
                  {t('getting_question')}
                </div>
              </div>
            ) : skipPending ? (
              <div className="w-full flex flex-1 min-h-[70vh] items-center justify-center flex-col transition-discrete starting:opacity-0">
                <QuestionCardSkeleton />
                <div className="text-center text-[oklch(85%_0.3_240)] mt-4 animate-pulse font-medium">
                  {t('getting_another_question')}
                </div>
              </div>
            ) : (
              question && (
                <QuestionCard
                  question={question}
                  selectedDomain={selectedDomain}
                />
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
                  return domain &&
                    domain.children &&
                    domain.children.length > 0 ? (
                    <div className="space-y-2">
                      <div className="text-[oklch(85%_0.2_240)] text-sm font-medium text-center">
                        {t('select_subtopic')}
                      </div>
                      <div className="domain-children-grid">
                        {domain.children.map((child) => (
                          <button
                            key={child}
                            type="button"
                            onClick={() => setSelectedChild(child)}
                            className={`animate-fade-in relative w-full rounded-xl font-black px-4 py-3 text-sm transition-all duration-200 overflow-hidden border-2 backdrop-blur-xl bg-gradient-to-br from-cyan-900/70 via-gray-900/80 to-blue-900/70 shadow-lg border-cyan-900 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ${
                              selectedChild === child
                                ? 'scale-105 border-cyan-400 ring-2 ring-cyan-400/60 shadow-cyan-400/20'
                                : ''
                            }`}
                            aria-pressed={selectedChild === child}
                            tabIndex={0}
                          >
                            <span className="relative text-sm font-inherit text-[oklch(98%_0_0)] bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                              {child}
                            </span>
                            {/* Glow effect */}
                            {selectedChild === child && (
                              <span className="absolute inset-0 pointer-events-none animate-pulse blur-xl opacity-40 bg-gradient-to-r from-cyan-400/30 to-blue-400/30" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null;
                })()}
                <DifficultySelector
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  isPending={isPending}
                  evaluation={evaluation}
                  onStart={handleGetQuestion}
                  isStartDisabled={(() => {
                    const domain = getDomainInstanceByName(selectedDomain);
                    return (
                      domain?.children &&
                      domain.children.length > 0 &&
                      !selectedChild
                    );
                  })()}
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
      </div>
    </div>
  );
}
