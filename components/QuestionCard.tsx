import { Question } from '@/types/Question';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import RobotIcon from './icons/RobotIcon';

// Remove all animation, shimmer, tilt, and floating effects for performance
export const QuestionCardSkeleton = React.memo(function QuestionCardSkeleton() {
  return (
    <div
      className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] mx-auto rounded-3xl overflow-hidden flex flex-col items-center justify-center bg-[#101624] border-2 border-cyan-400/30 shadow-[0_0_40px_0_rgba(34,211,238,0.15)]"
      style={{ transition: 'none' }}
    >
      <div className="relative z-10 flex flex-col gap-4 w-4/5">
        <div className="h-5 w-2/3 rounded-full mb-2 overflow-hidden bg-[#18223a] animate-pulse-skeleton" />
        <div className="h-4 w-full rounded-full mb-2 overflow-hidden bg-[#18223a] animate-pulse-skeleton" />
        <div className="h-4 w-5/6 rounded-full mb-2 overflow-hidden bg-[#18223a] animate-pulse-skeleton" />
        <div className="h-4 w-3/4 rounded-full mb-2 overflow-hidden bg-[#18223a] animate-pulse-skeleton" />
        <div className="h-4 w-1/2 rounded-full mb-2 overflow-hidden bg-[#18223a] animate-pulse-skeleton" />
      </div>
      {/* Static robot icon, no animation */}
      <span
        className="absolute top-4 right-4 text-cyan-300 text-3xl drop-shadow-lg"
        aria-label="Loading robot"
      >
        <RobotIcon width={48} height={48} />
      </span>
    </div>
  );
});

const QuestionCardComponent = ({
  question,
  selectedDomain,
  className = '',
}: {
  question: Question;
  selectedDomain: string | null;
  className?: string;
}) => {
  const t = useTranslations('');
  // Check for prefers-reduced-motion
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
    }
  }, []);

  return (
    <div
      className={`group relative bg-white/10 dark:bg-gray-900/30 border border-white/20 dark:border-gray-700/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 w-full max-w-5xl mx-auto overflow-hidden ${className}`}
      style={reduceMotion ? { transition: 'none' } : {}}
    >
      <div className="absolute inset-0 bg-futuristic-bg bg-gradient-futuristic z-0 mb-0" />
      <div className="relative z-10 flex flex-col justify-start">
        {selectedDomain ? (
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-[#23272e] border border-gray-300/30 text-gray-300 rounded-full text-sm font-medium tracking-wider shadow-lg">
              {t(selectedDomain || '')}
            </span>
            <div className="h-[1px] flex-1 bg-cyan-400/30" />
          </div>
        ) : (
          ''
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 flex-1">
          {question.title}
        </h2>
      </div>
      <p className="relative z-10 text-base sm:text-lg leading-relaxed text-gray-300/90">
        {question.description}
      </p>
      <div className="relative z-10 space-y-3">
        {question.constraints && (
          <>
            <h3 className="font-semibold text-lg text-gray-300">
              {t('interview_requirements')}
            </h3>
            <ul className="space-y-2">
              {question.constraints?.map((c: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-300/90"
                >
                  <span className="text-gray-400/90 mt-1">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(QuestionCardComponent);
