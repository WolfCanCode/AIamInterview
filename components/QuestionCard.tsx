import React from 'react';
import { Question } from '@/types/Question';
import { useTranslations } from 'next-intl';

export function QuestionCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-pulse">
      <div className="flex flex-col justify-start gap-2">
        <div className="w-32 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
        <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      </div>
      <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
      <div className="space-y-2 mt-4">
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
}

export default function QuestionCard({
  question,
  selectedDomain,
}: {
  question: Question;
  selectedDomain: string | null;
}) {
  const t = useTranslations('');

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-2 sm:p-6 rounded-xl sm:rounded-3xl shadow-2xl space-y-4 sm:space-y-6 animate-fade-in w-full max-w-3xl mx-auto">
      <div className="flex flex-col justify-start">
        <span className="w-fit mb-2 px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-semibold uppercase tracking-wider">
          {selectedDomain}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 flex-1">
          {question.title}
        </h2>
      </div>
      <p className="text-base leading-relaxed">{question.description}</p>
      <div className="space-y-2">
        <h3 className="font-semibold">{t('interview_requirements')}</h3>
        <ul className="list-disc list-inside ml-4">
          {question.constraints.map((c: string, idx: number) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
