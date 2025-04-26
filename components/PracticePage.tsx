'use client';

import { useState, useTransition } from 'react';
import { getQuestionAction } from '@/actions/getQuestionAction';
import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { domains } from '@/utils/constants/domain';
import { Question } from '@/types/Question';
import { Evaluation } from '@/types/Evaluation';

export default function PracticePageWithDomains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSelectDomain = (domain: string) => {
    startTransition(async () => {
      setSelectedDomain(domain);
      setAnswer('');
      setEvaluation(null);
    });
  };

  const handleGetQuestion = () => {
    if (!selectedDomain) return;
    startTransition(async () => {
      const data = await getQuestionAction(selectedDomain, 'Medium');
      setQuestion(data);
      setAnswer('');
      setEvaluation(null);
    });
  };

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (!question) return;
      const result = await submitAnswerAction(question.description, answer);
      setEvaluation(result);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8">
      <header className="mb-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 relative inline-block">
          ITerview
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-0 group-hover:w-2/3 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full transition-all duration-700 animate-border-grow"></span>
        </h1>
        <p className="mt-2 text-center text-gray-500 dark:text-gray-300 text-base sm:text-lg">
          Practice coding interviews, get instant feedback, and level up your
          skills!
        </p>
      </header>

      {!selectedDomain && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {domains.map((d, idx) => (
            <button
              key={d.name}
              onClick={() => handleSelectDomain(d.name)}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-200 text-gray-900 dark:text-gray-100 px-6 py-8 rounded-2xl flex flex-col items-center space-y-3 hover:bg-blue-50 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="text-3xl">
                {/* Example icons, replace with relevant ones for each domain if available */}
                {d.icon}
              </span>
              <span className="text-lg font-semibold">{d.name}</span>
            </button>
          ))}
        </div>
      )}

      {selectedDomain && (!question || evaluation) && (
        <button
          onClick={handleGetQuestion}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto block"
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
              <span>Đang tạo câu hỏi...</span>
            </>
          ) : evaluation ? (
            'Câu hỏi tiếp theo'
          ) : (
            'Bắt đầu'
          )}
        </button>
      )}

      {question && (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 flex-1">
              {question.title}
            </h2>
            <span className="ml-4 px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold uppercase tracking-wider">
              {selectedDomain}
            </span>
          </div>

          <p className="text-base leading-relaxed">{question.description}</p>

          <div className="space-y-2">
            <h3 className="font-semibold">Yêu cầu:</h3>
            <ul className="list-disc list-inside ml-4">
              {question.constraints.map((c: string, idx: number) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {question && (
        <form
          onSubmit={handleSubmitAnswer}
          className="space-y-4 animate-fade-in"
        >
          <div className="relative">
            <textarea
              disabled={!!evaluation}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder=" "
              className="peer w-full min-h-[120px] bg-gray-800 text-white p-4 pt-8 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none border border-gray-700 placeholder-transparent transition-all duration-200"
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
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-900 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto block"
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
      )}

      {evaluation && (
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4 animate-fade-in">
          <h4 className="text-lg font-bold flex items-center gap-2">
            <span className="text-green-500 text-2xl">✔️</span> Kết quả đánh
            giá:
          </h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-xl p-4 flex flex-col items-center shadow">
              <span className="text-3xl">🎯</span>
              <p className="mt-2">
                <b>Điểm chính xác:</b> {evaluation.correctness_score}/10
              </p>
            </div>
            <div className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-xl p-4 flex flex-col items-center shadow">
              <span className="text-3xl">💡</span>
              <p className="mt-2">
                <b>Điểm rõ ràng:</b> {evaluation.clarity_score}/10
              </p>
            </div>
            <div className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-xl p-4 flex flex-col items-center shadow">
              <span className="text-3xl">⚡</span>
              <p className="mt-2">
                <b>Hiệu quả:</b> {evaluation.time_complexity}
              </p>
            </div>
          </div>
          <div className="mt-4 bg-blue-50 dark:bg-blue-900/40 rounded-xl p-4 flex items-center gap-2">
            <span className="text-2xl">📝</span>
            <p>
              <b>Gợi ý:</b> {evaluation.suggestions}
            </p>
          </div>
        </div>
      )}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400 text-sm flex flex-col items-center gap-2">
        <span>
          Make by Tommy (Wolf) with love{' '}
          <span className="inline-block animate-bounce">❤️</span>
        </span>
        <span className="text-xs text-gray-400">
          © {new Date().getFullYear()} ITerview. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
