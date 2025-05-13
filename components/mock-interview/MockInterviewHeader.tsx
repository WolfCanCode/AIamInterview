import ClockIcon from '../icons/ClockIcon';
import { useRouter } from 'next/navigation';
import React from 'react';
import BackButton from '../BackButton';

interface MockInterviewHeaderProps {
  t: (key: string) => string;
  domain: string | null;
  child: string | null;
  difficulty: string | null;
  timeLeft: number;
  showBackButton?: boolean;
  onBack?: () => void;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const MockInterviewHeader: React.FC<MockInterviewHeaderProps> = ({
  t,
  domain,
  child,
  difficulty,
  timeLeft,
  showBackButton = true,
  onBack,
}) => {
  const router = useRouter();
  return (
    <div className="w-full rounded-2xl bg-[#101624] shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
      <div className="w-full sm:w-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          {showBackButton && (
            <BackButton
              onClick={onBack || (() => router.back())}
              ariaLabel={t('back') || 'Back'}
            />
          )}
          <h1 className="text-lg sm:text-2xl font-bold text-white">
            {t('mock_interview')}
          </h1>
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2 items-center mb-2">
          <span className="font-semibold text-gray-200 text-sm sm:text-base">
            {t('domain')}:
          </span>
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-700/40 text-cyan-200 font-medium text-sm sm:text-base">
            {t(domain || '')}
          </span>
          {child && (
            <>
              <span className="text-cyan-400 font-bold">—</span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-700/40 text-purple-200 font-medium text-sm sm:text-base">
                {t(child || '')}
              </span>
            </>
          )}
        </div>
        <div className="flex gap-1 sm:gap-2 items-center mb-1">
          <span className="font-semibold text-gray-200 text-sm sm:text-base">
            {t('difficulty')}:
          </span>
          <span
            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium text-sm sm:text-base ${
              (difficulty || '').toLowerCase() === 'easy'
                ? 'bg-green-700/40 text-green-200'
                : (difficulty || '').toLowerCase() === 'medium'
                ? 'bg-yellow-700/40 text-yellow-200'
                : (difficulty || '').toLowerCase() === 'hard'
                ? 'bg-red-700/40 text-red-200'
                : 'bg-purple-700/40 text-purple-200'
            }`}
          >
            {t(`difficulty_${(difficulty || 'easy').toLowerCase()}`)}
          </span>
        </div>
      </div>
      <div className="hidden sm:flex flex-col items-center w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex flex-row *:text-base sm:text-lg font-medium text-gray-200  items-center gap-2">
          <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
          <div className="whitespace-nowrap">
            {t('time_left') || 'Time Left'}
          </div>
        </div>
        <span
          className={`font-mono text-2xl sm:text-3xl mt-1 ${
            timeLeft <= 60 ? 'text-red-400' : 'text-cyan-300'
          }`}
        >
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default MockInterviewHeader;
