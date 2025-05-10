import React from 'react';
import { useTranslations } from 'next-intl';
import { Evaluation } from '@/types/Evaluation';
import EditIcon from './icons/EditIcon';
import CheckCircleFillIcon from './icons/CheckCircleFillIcon';
import StarIcon from './icons/StarIcon';

export default function EvaluationCard({
  evaluation,
  evaluationRef,
}: {
  evaluation: Evaluation;
  evaluationRef: React.RefObject<HTMLDivElement | null>;
}) {
  const t = useTranslations('');
  return (
    <div
      ref={evaluationRef}
      className="bg-[#101624] p-3 sm:p-8 rounded-xl sm:rounded-3xl shadow-2xl space-y-6 sm:space-y-8 animate-fade-in overflow-hidden border border-gray-700/60 w-full max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-green-400 text-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <h4 className="text-2xl font-extrabold text-green-300 tracking-tight">
          {t('evaluation_result')}
        </h4>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        {/* Score Badges */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-400 bg-gray-900 text-green-200 text-4xl font-bold shadow-lg animate-scale-in">
            {evaluation.overall_score}
          </div>
          <span className="text-green-400 font-semibold">
            {t('total_score')}
          </span>
        </div>
        {evaluation.creative_score ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-gray-300 bg-[#23272e] text-gray-300 text-4xl font-bold shadow-lg animate-scale-in">
              {evaluation.creative_score}
            </div>
            <span className="text-gray-300 font-semibold">
              {t('creative_score')}
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-yellow-300 bg-gray-900 text-yellow-200 text-4xl font-bold shadow-lg animate-scale-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <span className="inline-block px-3 py-1 rounded-xl bg-yellow-900/80 text-yellow-200 font-semibold text-sm mt-1">
          {evaluation.result_text}
        </span>
      </div>
      {/* Suggestions Inline Card */}
      {evaluation.suggestions && (
        <div className="flex items-start gap-3 bg-gray-800/80 border-l-4 border-gray-300 rounded-xl p-5 shadow-inner animate-fade-in-slow">
          <span className="text-2xl mt-1 text-gray-300">
            <EditIcon />
          </span>
          <p className="text-gray-300 font-medium">
            <b>{t('suggestion')}</b> {evaluation.suggestions}
          </p>
        </div>
      )}
      {evaluation.key_points_of_main_argument && (
        <div className="flex items-start gap-3 bg-gray-800/80 border-l-4 border-green-400 rounded-xl p-5 shadow-inner animate-fade-in-slow">
          <span className="text-2xl mt-1 text-green-400">
            <CheckCircleFillIcon />
          </span>
          <div className="text-gray-300 font-medium">
            <b>{t('key_point')}</b>
            <ul className="list-decimal list-inside">
              {evaluation.key_points_of_main_argument.map((keyPoint, index) => (
                <li key={index} className="text-gray-300">
                  {keyPoint}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {evaluation.perfect_answer && (
        <div className="flex items-start gap-3 bg-gray-800/80 border-l-4 border-yellow-300 rounded-xl p-5 shadow-inner animate-fade-in-slow">
          <span className="text-2xl mt-1 text-yellow-300">
            <StarIcon />
          </span>
          <p className="text-gray-300 font-medium">
            <b>{t('perfect_answer')}</b> {evaluation.perfect_answer}
          </p>
        </div>
      )}
      {evaluation.title_ranking_text && (
        <div className="flex items-start gap-3 bg-gray-800/80 border-l-4 border-yellow-300 rounded-xl p-5 shadow-inner animate-fade-in-slow">
          <span className="text-2xl mt-1 text-yellow-300">
            <StarIcon />
          </span>
          <p className="text-gray-300 font-medium">
            <b>{t('title_level_text')}</b> {evaluation.title_ranking_text}
          </p>
        </div>
      )}
    </div>
  );
}
