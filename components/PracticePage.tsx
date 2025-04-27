'use client';

import { getQuestionAction } from '@/actions/getQuestionAction';
import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { Evaluation } from '@/types/Evaluation';
import { Question } from '@/types/Question';
import { domainGroups } from '@/utils/constants/domain';
import { useState, useTransition, useEffect, useRef } from 'react';
import DomainBanner from './DomainBanner';
import DifficultySelector from './DifficultySelector';
import QuestionCard from './QuestionCard';
import EvaluationCard from './EvaluationCard';
import AnswerForm from './AnswerForm';
import DomainSelector from './DomainSelector';
import Header from './Header';
import Footer from './Footer';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

export default function PracticePageWithDomains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();
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
      setAnswer('');
      setEvaluation(null);
    });
  };

  const handleGetQuestion = () => {
    const getKeyDomain = (name: string): string => {
      if (!name) return '';
      for (const group of domainGroups) {
        const found = group.domains.find((d) => d.name === name);
        if (found) return found.key;
      }
      return '';
    };
    if (!selectedDomain) return;
    console.log(selectedDomain, getKeyDomain(selectedDomain));

    startTransition(async () => {
      const data = await getQuestionAction(
        getKeyDomain(selectedDomain),
        difficulty
      );
      setQuestion(data);
      setAnswer('');
      setEvaluation(null);
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
        <Header onClickLogo={goBack} />

        {!selectedDomain && (
          <DomainSelector
            domainGroups={domainGroups}
            handleSelectDomain={handleSelectDomain}
          />
        )}

        {selectedDomain && (!question || evaluation) && (
          <>
            {(() => {
              let domain = null;
              for (const group of domainGroups) {
                domain = group.domains.find((d) => d.name === selectedDomain);
                if (domain) break;
              }
              return domain ? (
                <DomainBanner
                  domain={domain}
                  onBack={() => {
                    setEvaluation(null);
                    setSelectedDomain(null);
                  }}
                />
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

        {question && (
          <QuestionCard question={question} selectedDomain={selectedDomain} />
        )}

        {question && (
          <AnswerForm
            answer={answer}
            setAnswer={setAnswer}
            onSubmit={handleSubmitAnswer}
            isPending={isPending}
            evaluation={evaluation}
          />
        )}

        {evaluation ? (
          <EvaluationCard
            evaluation={evaluation}
            evaluationRef={evaluationRef}
          />
        ) : (
          ''
        )}
        <Footer />
      </div>
    </div>
  );
}
