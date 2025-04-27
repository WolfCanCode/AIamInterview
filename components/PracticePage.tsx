'use client';

import { getQuestionAction } from '@/actions/getQuestionAction';
import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { Evaluation } from '@/types/Evaluation';
import { Question } from '@/types/Question';
import { domains } from '@/utils/constants/domain';
import { useState, useTransition, useEffect } from 'react';

export default function PracticePageWithDomains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();

  // Always enable dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleSelectDomain = (domain: string) => {
    startTransition(async () => {
      setSelectedDomain(domain);
      setAnswer('');
      setEvaluation(null);
    });
  };

  const handleGetQuestion = () => {
    const getKeyDomain = (name: string): string => {
      if (!name) return '';
      return domains.find((d) => d.name === name)?.key || '';
    };
    if (!selectedDomain) return;
    console.log(selectedDomain, getKeyDomain(selectedDomain));

    startTransition(async () => {
      const data = await getQuestionAction(
        getKeyDomain(selectedDomain),
        'Medium'
      );
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 bg-gray-900 rounded-3xl shadow-2xl">
        <header className="mb-8 flex flex-col items-center">
          <div className="flex w-full justify-between items-center">
            <h1
              onClick={() => (location.href = '/')}
              className="group text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent relative inline-block cursor-pointer select-none flex items-center gap-3 drop-shadow-lg"
            >
              {/* Animated Logo Icon */}
              <span className="inline-flex items-center justify-center text-5xl animate-bounce-slow group-hover:animate-spin-slow transition-transform duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-10 h-10 text-blue-300 drop-shadow-lg"
                >
                  <rect
                    x="4"
                    y="8"
                    width="24"
                    height="14"
                    rx="3"
                    className="fill-blue-800"
                  />
                  <rect
                    x="7"
                    y="11"
                    width="18"
                    height="8"
                    rx="2"
                    className="fill-gray-900"
                  />
                  <rect
                    x="2"
                    y="24"
                    width="28"
                    height="3"
                    rx="1.5"
                    className="fill-blue-900"
                  />
                  <circle
                    cx="16"
                    cy="15"
                    r="2"
                    className="fill-blue-400 animate-pulse"
                  />
                </svg>
              </span>
              {/* Animated Gradient Text */}
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent animate-shimmer font-extrabold relative drop-shadow-md">
                ITerview
              </span>
              {/* Enhanced Underline Animation */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-0 group-hover:w-4/5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full transition-all duration-700 animate-border-grow shadow-lg"></span>
            </h1>
          </div>
        </header>

        {!selectedDomain && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {domains.map((d) => (
              <button
                key={d.name}
                onClick={() => handleSelectDomain(d.name)}
                className={`domain-card group px-6 py-8 rounded-2xl flex flex-col items-center space-y-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                    bg-gray-900
                    shadow-md border-2 border-blue-900 relative overflow-hidden
                    hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 hover:scale-105
                    hover:bg-gray-800
                  `}
                style={{ boxShadow: '0 2px 16px 0 rgba(56,189,248,0.08)' }}
              >
                {/* Ripple effect */}
                <span className="absolute inset-0 pointer-events-none group-active:animate-ripple bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl"></span>
                <span className="text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce-slow text-blue-200">
                  {d.icon}
                </span>
                <span className="text-lg font-semibold bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:animate-shimmer">
                  {d.name}
                </span>
              </button>
            ))}
          </div>
        )}

        {selectedDomain && (!question || evaluation) && (
          <>
            <button
              onClick={() => setSelectedDomain(null)}
              className="mb-4 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium shadow hover:bg-gray-300 transition-all duration-200 block mx-auto"
              type="button"
            >
              ← Quay lại
            </button>
            <h2 className="text-center text-2xl">{selectedDomain}</h2>

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
          </>
        )}

        {question && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 animate-fade-in">
            <div className="flex flex-col justify-start">
              <span className="w-fit mb-2 px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-semibold uppercase tracking-wider">
                {selectedDomain}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 flex-1">
                {question.title}
              </h2>
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
          <div className="bg-gradient-to-br from-green-50 to-green-100 text-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-4 animate-fade-in">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <span className="text-green-500 text-2xl">✔️</span> Kết quả đánh
              giá:
            </h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white/70 rounded-xl p-4 flex flex-col items-center shadow">
                <span className="text-3xl">🎯</span>
                <p className="mt-2">
                  <b>Điểm tổng:</b> {evaluation.overall_score}/10
                </p>
              </div>
              <div className="flex-1 bg-white/70 rounded-xl p-4 flex flex-col items-center shadow">
                <span className="text-3xl">💡</span>
                <p className="mt-2">
                  <b>Điểm sáng tạo:</b> {evaluation.creative_score}/10
                </p>
              </div>
              <div className="flex-1 bg-white/70 rounded-xl p-4 flex flex-col items-center shadow">
                <span className="text-3xl">⚡</span>
                <p className="mt-2">
                  <b>Kết quả:</b> {evaluation.result_text}
                </p>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 flex items-center gap-2">
              <span className="text-2xl">📝</span>
              <p>
                <b>Gợi ý:</b> {evaluation.suggestions}
              </p>
            </div>
          </div>
        )}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm flex flex-col items-center gap-2">
          <span>
            Made by Tommy (Wolf) with love{' '}
            <span className="inline-block animate-bounce">❤️</span>
          </span>
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()} ITerview. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}
