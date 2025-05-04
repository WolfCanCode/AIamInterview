import React from 'react';
import QuestionCard from '../QuestionCard';
import FuturisticCard from '../FuturisticCard';
import TextareaAutosize from 'react-textarea-autosize';
import { EvaluationResult } from '@/types/Evaluation';

interface MockInterviewQuestionProps {
  question: { title: string; description: string; constraints: string[] };
  idx: number;
  answer: string;
  onAnswerChange: (idx: number, value: string) => void;
  submitted: boolean;
  evaluation: EvaluationResult | null;
  evaluating: boolean;
  t: (key: string) => string;
}

const MockInterviewQuestion: React.FC<MockInterviewQuestionProps> = ({
  question,
  idx,
  answer,
  onAnswerChange,
  submitted,
  evaluation,
  evaluating,
  t,
}) => (
  <div className="mb-10">
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
        ...question,
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
        value={answer}
        onChange={(e) => onAnswerChange(idx, e.target.value)}
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
              {t('creative_score')}: {evaluation.results[idx].creative_score}/10
            </span>
          </div>
          <div className="mb-1">
            <b>{t('evaluation_result')}:</b>{' '}
            {evaluation.results[idx].result_text}
          </div>
          <div className="mb-1">
            <b>{t('suggestion')}</b> {evaluation.results[idx].suggestions}
          </div>
          <div className="mb-1">
            <b>{t('key_point')}</b>{' '}
            {evaluation.results[idx].key_points_of_main_argument?.join(', ')}
          </div>
          <div className="mb-1">
            <b>{t('perfect_answer')}</b>{' '}
            {evaluation.results[idx].perfect_answer}
          </div>
        </FuturisticCard>
      )}
  </div>
);

export default MockInterviewQuestion;
