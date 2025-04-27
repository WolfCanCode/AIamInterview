import React from 'react';
import { Evaluation } from '@/types/Evaluation';

export default function AnswerForm({
  answer,
  setAnswer,
  onSubmit,
  isPending,
  evaluation,
}: {
  answer: string;
  setAnswer: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  evaluation: Evaluation | null;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 sm:space-y-4 animate-fade-in w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <textarea
          disabled={!!evaluation}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder=" "
          className="peer w-full min-h-[100px] sm:min-h-[120px] bg-gray-800 text-white p-3 sm:p-4 pt-8 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none border border-gray-700 placeholder-transparent transition-all duration-200 text-base sm:text-lg"
          maxLength={1000}
          required
        />
        <label className="absolute left-4 top-2 text-gray-400 text-sm pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-blue-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500">
          Nhập câu trả lời...
        </label>
        <div className="absolute right-4 bottom-2 text-xs text-gray-400">
          {answer.length}/1000
        </div>
      </div>
      {!evaluation ? (
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full px-6 py-3 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition-all duration-200 flex items-center justify-center gap-2 mx-auto block min-h-12"
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
              <span>Đang chấm điểm...</span>
            </>
          ) : (
            'Gửi câu trả lời'
          )}
        </button>
      ) : null}
    </form>
  );
}
