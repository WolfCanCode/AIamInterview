import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Evaluation } from '@/types/Evaluation';
import FuturisticCard from './FuturisticCard';
import FuturisticButton from './FuturisticButton';
import EasyIcon from './icons/EasyIcon';
import MediumIcon from './icons/MediumIcon';
import HardIcon from './icons/HardIcon';
import MadnessIcon from './icons/MadnessIcon';
import SkipNextIcon from './icons/SkipNextIcon';
import StartIcon from './icons/StartIcon';
import StartMockInterviewIcon from './icons/StartMockInterviewIcon';
import type { LinkProps } from 'next/link';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  isPending: boolean;
  evaluation: Evaluation | null;
  onStart: () => void;
  isStartDisabled?: boolean;
  showMockInterviewButton?: boolean;
  mockInterviewButtonProps?: {
    disabled?: boolean;
    href?: LinkProps['href'];
    label?: string;
  };
}

const difficultyConfig = [
  {
    mode: 'Easy',
    icon: <EasyIcon width={32} height={32} />,
    glowColor: 'green',
  },
  {
    mode: 'Medium',
    icon: <MediumIcon width={32} height={32} />,
    glowColor: 'blue',
  },
  {
    mode: 'Hard',
    icon: <HardIcon width={32} height={32} />,
    glowColor: 'pink',
  },
  {
    mode: 'Madness',
    icon: <MadnessIcon width={32} height={32} />,
    glowColor: 'purple',
  },
] as const;

export default function DifficultySelector({
  difficulty,
  setDifficulty,
  isPending,
  evaluation,
  onStart,
  isStartDisabled,
  showMockInterviewButton = false,
  mockInterviewButtonProps = {},
}: DifficultySelectorProps) {
  const t = useTranslations('');

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl p-2 sm:p-8 border border-gray-500/20 bg-[#101624] z-0 transition-opacity duration-500 shadow-md">
      <div className="text-gray-300 text-sm font-medium mb-4 text-center">
        {t('choose_difficulty')}
      </div>

      <div className="mb-4 grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-4 gap-4 w-full px-2">
        {difficultyConfig.map(({ mode, icon, glowColor }) => (
          <FuturisticCard
            key={mode}
            glowColor={glowColor}
            variant="dark"
            className={`transition-all duration-300 cursor-pointer p-2 ${
              difficulty === mode
                ? 'scale-105 border-gray-300 shadow-gray-300/40 bg-[#23272e] ring-2 ring-gray-300/80'
                : ''
            }`}
            onClick={() => setDifficulty(mode as Difficulty)}
            hover
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">{icon}</span>
              <span className="text-sm font-medium">
                {t(`difficulty_${mode.toLowerCase()}`)}
              </span>
            </div>
          </FuturisticCard>
        ))}
      </div>

      <div
        className={`flex justify-center pb-4${
          showMockInterviewButton ? ' flex-col sm:flex-row gap-0 sm:gap-4' : ''
        }`}
      >
        <FuturisticButton
          onClick={onStart}
          disabled={isPending || isStartDisabled}
          color="cyan"
          className="min-w-[180px]"
          icon={
            isPending ? (
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            ) : evaluation ? (
              <SkipNextIcon />
            ) : (
              <StartIcon width={24} height={24} />
            )
          }
        >
          {isPending
            ? t('getting_question')
            : evaluation
            ? t('next_question')
            : t('start')}
        </FuturisticButton>
        {showMockInterviewButton &&
          (mockInterviewButtonProps?.disabled ? (
            <FuturisticButton
              disabled
              color="purple"
              className="min-w-[180px] relative"
              icon={<StartMockInterviewIcon width={24} height={24} />}
            >
              {mockInterviewButtonProps.label}
              <span className="absolute top-0 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                {t('new')}
              </span>
            </FuturisticButton>
          ) : (
            <Link
              href={mockInterviewButtonProps.href ?? '/'}
              style={{ width: '100%' }}
            >
              <FuturisticButton
                color="purple"
                className="min-w-[180px] relative"
                icon={<StartMockInterviewIcon width={24} height={24} />}
              >
                {mockInterviewButtonProps.label}
                <span className="absolute top-0 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                  {t('new')}
                </span>
              </FuturisticButton>
            </Link>
          ))}
      </div>
    </div>
  );
}
