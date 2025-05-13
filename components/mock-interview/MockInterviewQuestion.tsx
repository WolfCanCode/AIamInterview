import React from 'react';
import QuestionCard from '../QuestionCard';
import FuturisticCard from '../FuturisticCard';
import TextareaAutosize from 'react-textarea-autosize';
import { EvaluationResult } from '@/types/Evaluation';
import CheckCircleFillIcon from '../icons/CheckCircleFillIcon';

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
    {(idx > 0 || idx === 0) && (
      <div className="flex items-center my-10 justify-center">
        <span className="px-4 py-1 rounded-full bg-[#23272e] text-gray-300 font-bold text-lg shadow-lg border border-gray-300/30 flex items-center gap-2 transition-all duration-300">
          {t('question')} {idx + 1}
          {(answer || '').trim().length > 0 && (
            <CheckCircleFillIcon
              className="ml-2 transition-all duration-300"
              width={22}
              height={22}
            />
          )}
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
      className={
        (answer || '').trim().length > 0
          ? 'border-2 border-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.3)] transition-all duration-300'
          : 'transition-all duration-300'
      }
    />
    <div className="mt-6">
      <TextareaAutosize
        id={`answer-textarea-${idx}`}
        minRows={3}
        maxRows={30}
        disabled={submitted}
        value={answer}
        onChange={(e) => onAnswerChange(idx, e.target.value)}
        className={`relative w-full bg-white/5 dark:bg-gray-900/30 border transition-all duration-300
          ${
            (answer || '').trim().length > 0
              ? 'border-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.3)] focus:ring-cyan-400/50 focus:border-cyan-400'
              : 'border-white/20 dark:border-gray-700/30 focus:ring-blue-500/50 focus:border-blue-500/50'
          }
          text-gray-100 p-4 pb-16 rounded-xl focus:ring-2 resize-none text-base sm:text-lg shadow-lg focus:shadow-blue-500/20
        `}
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
            <span className="text-lg font-bold text-gray-300">
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
