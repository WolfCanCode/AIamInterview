import React from 'react';
import { Evaluation } from '@/types/Evaluation';
import TextareaAutosize from 'react-textarea-autosize';

export default function AnswerForm({
  answer,
  setAnswer,
  onSubmit,
  isPending,
  skipPending,
  evaluation,
  onStop,
  onSkip,
}: {
  answer: string;
  setAnswer: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
  skipPending?: boolean;
  evaluation: Evaluation | null;
  onStop: () => void;
  onSkip: () => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 sm:space-y-4 animate-fade-in w-full max-w-3xl mx-auto"
    >
      <div className="w-full">
        <label
          className="block text-gray-400 text-sm mb-1"
          htmlFor="answer-textarea"
        >
          Nhập câu trả lời...
        </label>
        <TextareaAutosize
          id="answer-textarea"
          minRows={3}
          maxRows={30}
          disabled={!!evaluation}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className={`w-full bg-gray-800 text-white p-3 pb-16 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none border transition-all duration-200 text-base sm:text-lg shadow-sm focus:shadow-lg ${
            answer.length > 1000 ? 'border-red-500' : 'border-gray-700'
          }`}
          aria-label="Nhập câu trả lời..."
        />
        <div className="flex justify-between items-center mt-1 mb-2">
          {answer.length > 1000 && (
            <span className="text-xs text-red-500">
              Đã vượt quá {answer.length - 1000} ký tự!
            </span>
          )}
          <span
            className={`text-xs ${
              answer.length > 1000 ? 'text-red-500' : 'text-gray-400'
            }`}
          >
            {answer.length}/1000
          </span>
        </div>
      </div>
      {!evaluation ? (
        <div className="w-full mt-4 mb-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold text-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-105 hover:shadow-xl transition-all duration-200"
            disabled={isPending || skipPending}
          >
            <span>📨</span>
            <span>
              {isPending || skipPending
                ? skipPending
                  ? 'Đang lấy câu hỏi mới...'
                  : 'Đang chấm điểm...'
                : 'Gửi câu trả lời'}
            </span>
          </button>
          <div className="flex justify-center py-2 text-gray-400 text-sm mt-2">
            Hoặc
          </div>
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-base bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:scale-105 hover:shadow transition-all duration-200"
              disabled={isPending || skipPending}
            >
              <span>⏭️</span>
              <span>Bỏ qua</span>
            </button>
            <button
              type="button"
              onClick={onStop}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-base bg-red-500 text-white hover:bg-red-600 hover:scale-105 hover:shadow transition-all duration-200"
              disabled={isPending || skipPending}
            >
              <span>🛑</span>
              <span>Từ bỏ</span>
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
