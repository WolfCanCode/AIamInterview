import React from 'react';
import { Question } from '@/types/Question';
import { useTranslations } from 'next-intl';

export function QuestionCardSkeleton() {
  const t = useTranslations('');

  return (
    <div className="relative backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-pulse overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 z-0" />
      <div className="relative z-10 flex flex-col justify-start gap-2">
        <div className="w-32 h-6 bg-gray-300/50 dark:bg-gray-700/50 rounded-full mb-2" />
        <div className="w-3/4 h-8 bg-gray-200/50 dark:bg-gray-700/50 rounded-full mb-2" />
      </div>
      <div className="relative z-10">
        <div className="h-4 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full mb-2" />
        <div className="h-4 w-5/6 bg-gray-200/50 dark:bg-gray-700/50 rounded-full mb-2" />
        <div className="h-4 w-2/3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full mb-2" />
      </div>
      <div className="relative z-10 space-y-2 mt-4">
        <div className="h-4 w-1/2 bg-gray-300/50 dark:bg-gray-700/50 rounded-full" />
        <div className="h-4 w-2/3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full" />
        <div className="h-4 w-1/3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full" />
      </div>
      <div className="text-center text-[oklch(85%_0.2_240)] mt-4 font-medium">
        {t('loading_question')}
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
    <div className="group relative backdrop-blur-xl bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-fade-in w-full max-w-3xl mx-auto overflow-hidden transition-all duration-500 hover:shadow-blue-500/10 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 z-0 transition-opacity duration-500 group-hover:opacity-75" />

      <div className="relative z-10 flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-md border border-white/10 dark:border-gray-700/30 text-blue-100 rounded-full text-sm font-medium tracking-wider shadow-lg">
            {t(selectedDomain || '')}
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex-1 transition-colors duration-300 group-hover:from-blue-300 group-hover:to-purple-300">
          {question.title}
        </h2>
      </div>

      <p className="relative z-10 text-base sm:text-lg leading-relaxed text-gray-300/90">
        {question.description}
      </p>

      <div className="relative z-10 space-y-3">
        <h3 className="font-semibold text-lg text-blue-300/90">
          {t('interview_requirements')}
        </h3>
        <ul className="space-y-2">
          {question.constraints.map((c: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300/90">
              <span className="text-blue-400/90 mt-1">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
