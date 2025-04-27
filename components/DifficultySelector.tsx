import React from 'react';
import { Evaluation } from '@/types/Evaluation';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

interface DifficultySelectorProps {
  difficulty: Difficulty;
  setDifficulty: (d: Difficulty) => void;
  isPending: boolean;
  evaluation: Evaluation | null;
  onStart: () => void;
}

export default function DifficultySelector({
  difficulty,
  setDifficulty,
  isPending,
  evaluation,
  onStart,
}: DifficultySelectorProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto bg-gray-900/95 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-8 flex flex-col items-center gap-4 sm:gap-6 animate-fade-in">
      {/* Prompt */}
      <div className="mt-2 text-blue-200 text-sm sm:text-base font-semibold text-center">
        Sẵn sàng chưa? Chọn độ khó và bắt đầu!
      </div>
      {/* Difficulty Selection */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 w-full mt-2">
        {(
          [
            { mode: 'Easy', icon: '🌱' },
            { mode: 'Medium', icon: '🚀' },
            { mode: 'Hard', icon: '🔥' },
            { mode: 'Madness', icon: '💀' },
          ] as { mode: Difficulty; icon: string }[]
        ).map(({ mode, icon }) => (
          <button
            key={mode}
            type="button"
            onClick={() => setDifficulty(mode)}
            className={`flex items-center gap-1 px-4 py-3 sm:px-5 sm:py-2 rounded-full font-semibold text-base border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 w-full sm:w-auto justify-center
              ${
                difficulty === mode
                  ? 'bg-cyan-700 text-white border-cyan-400 shadow-md'
                  : 'bg-gray-800 text-cyan-200 border-gray-700 hover:bg-cyan-900 hover:text-white'
              }
            `}
          >
            <span className="text-lg">{icon}</span>
            <span>{mode}</span>
          </button>
        ))}
      </div>
      {/* Start Button */}
      <button
        onClick={onStart}
        className="mt-6 w-full min-h-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
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
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span className="ml-2">Đang tạo câu hỏi...</span>
          </>
        ) : evaluation ? (
          <>
            <span className="text-lg">⏭️</span>
            <span>Câu hỏi tiếp theo</span>
          </>
        ) : (
          <>
            <span className="text-lg">▶️</span>
            <span>Bắt đầu</span>
          </>
        )}
      </button>
    </div>
  );
}
