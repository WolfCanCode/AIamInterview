import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Evaluation } from '@/types/Evaluation';
import FuturisticCard from './FuturisticCard';
import FuturisticButton from './FuturisticButton';
import {
  FaSeedling,
  FaRocket,
  FaFire,
  FaSkull,
  FaPlay,
  FaUserGraduate,
} from 'react-icons/fa';
import { MdSkipNext } from 'react-icons/md';
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
    icon: <FaSeedling className="text-green-400" />,
    glowColor: 'green',
  },
  {
    mode: 'Medium',
    icon: <FaRocket className="text-blue-400" />,
    glowColor: 'blue',
  },
  {
    mode: 'Hard',
    icon: <FaFire className="text-pink-400" />,
    glowColor: 'pink',
  },
  {
    mode: 'Madness',
    icon: <FaSkull className="text-purple-400" />,
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
    <div className="w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-8  border border-gray-500/20 from-blue-500/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 z-0 transition-opacity duration-500 shadow-md">
      <div className="text-[oklch(85%_0.2_240)] text-sm font-medium mb-4 text-center">
        {t('choose_difficulty')}
      </div>

      <div className="mb-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full px-2">
        {difficultyConfig.map(({ mode, icon, glowColor }) => (
          <FuturisticCard
            key={mode}
            glowColor={glowColor}
            variant="dark"
            className={
              `transition-all duration-300 cursor-pointer p-2 ` +
              (difficulty === mode ? 'scale-105 ring-2 ring-cyan-400/50' : '')
            }
            onClick={() => setDifficulty(mode as Difficulty)}
            hover
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">{icon}</span>
              <span className="text-xs font-medium">
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
              <MdSkipNext />
            ) : (
              <FaPlay />
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
              icon={<FaUserGraduate />}
            >
              {mockInterviewButtonProps.label}
              <span className="absolute top-1 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
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
                icon={<FaUserGraduate />}
              >
                {mockInterviewButtonProps.label}
                <span className="absolute top-1 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">
                  {t('new')}
                </span>
              </FuturisticButton>
            </Link>
          ))}
      </div>
    </div>
  );
}
