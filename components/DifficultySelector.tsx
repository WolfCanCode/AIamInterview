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
    <div className="w-full max-w-sm mx-auto py-4 animate-fade-in">
      <div className="text-blue-200 text-xs font-semibold text-center mb-2 ">
        Chọn độ khó:
      </div>
      <div className="flex justify-center gap-2 w-full mb-8">
        {[
          { mode: 'Easy', icon: '🌱' },
          { mode: 'Medium', icon: '🚀' },
          { mode: 'Hard', icon: '🔥' },
          { mode: 'Madness', icon: '💀' },
        ].map(({ mode, icon }) => (
          <button
            key={mode}
            onClick={() => setDifficulty(mode as Difficulty)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full border font-semibold text-xs transition-all duration-200
              ${
                difficulty === mode
                  ? 'bg-cyan-600 text-white border-cyan-400 shadow font-bold'
                  : 'bg-transparent text-cyan-300 border-cyan-700 hover:bg-cyan-900/30'
              }`}
          >
            <span className="text-base">{icon}</span>
            <span>{mode}</span>
          </button>
        ))}
      </div>
      <button
        onClick={onStart}
        className="mt-3 w-full py-4 rounded-xl font-bold text-base bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-200 flex items-center justify-center gap-2 shadow focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
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
            <span className="ml-1">Đang tạo...</span>
          </>
        ) : evaluation ? (
          <>
            <span className="text-base">⏭️</span>
            <span>Câu hỏi tiếp theo</span>
          </>
        ) : (
          <>
            <span className="text-base">▶️</span>
            <span>Bắt đầu</span>
          </>
        )}
      </button>
    </div>
  );
}
