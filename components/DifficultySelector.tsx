import React from 'react';
import { useTranslations } from 'next-intl';
import { Evaluation } from '@/types/Evaluation';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  isPending: boolean;
  evaluation: Evaluation | null;
  onStart: () => void;
  isStartDisabled?: boolean;
}

export default function DifficultySelector({
  difficulty,
  setDifficulty,
  isPending,
  evaluation,
  onStart,
  isStartDisabled,
}: DifficultySelectorProps) {
  const t = useTranslations('');

  return (
    <div className="relative w-full max-w-3xl mx-auto pb-6 animate-fade-in">
      <div className="absolute inset-0 bg-radial-[at_center] from-[oklch(60%_0.3_240/0.1)] to-transparent rounded-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-[oklch(85%_0.2_240)] text-sm font-medium mb-3">
          {t('choose_difficulty')}
        </div>

        <div className="difficulty-grid mb-6">
          {[
            {
              mode: 'Easy',
              icon: '🌱',
              className: 'difficulty-button easy',
            },
            {
              mode: 'Medium',
              icon: '🚀',
              className: 'difficulty-button medium',
            },
            {
              mode: 'Hard',
              icon: '🔥',
              className: 'difficulty-button hard',
            },
            {
              mode: 'Madness',
              icon: '💀',
              className: 'difficulty-button insane',
            },
          ].map(({ mode, icon, className }) => (
            <button
              key={mode}
              onClick={() => setDifficulty(mode as Difficulty)}
              className={`${className} ${difficulty === mode ? 'active' : ''}`}
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-lg">{icon}</span>
                <span>{t(`difficulty_${mode.toLowerCase()}`)}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onStart}
          className={`start-button ${isStartDisabled ? 'opacity-50' : ''} mt-4`}
          disabled={isPending || isStartDisabled}
        >
          <div className="flex items-center justify-center gap-3">
            {isPending ? (
              <>
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
                <span>{t('getting_question')}</span>
              </>
            ) : evaluation ? (
              <>
                <span className="text-xl">⏭️</span>
                <span>{t('next_question')}</span>
              </>
            ) : (
              <>
                <span className="text-xl">▶️</span>
                <span>{t('start')}</span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
