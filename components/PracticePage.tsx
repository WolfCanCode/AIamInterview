'use client';

import { getQuestionAction } from '@/actions/getQuestionAction';
import { submitAnswerAction } from '@/actions/submitAnswerAction';
import { Evaluation } from '@/types/Evaluation';
import { Question } from '@/types/Question';
import { domainGroups } from '@/utils/constants/domain';
import { useState, useTransition, useEffect, useRef } from 'react';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

export default function PracticePageWithDomains() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [isPending, startTransition] = useTransition();
  const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
  const evaluationRef = useRef<HTMLDivElement | null>(null);

  // Always enable dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll to evaluation when it appears
  useEffect(() => {
    if (evaluation && evaluationRef.current) {
      evaluationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [evaluation]);

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
      for (const group of domainGroups) {
        const found = group.domains.find((d) => d.name === name);
        if (found) return found.key;
      }
      return '';
    };
    if (!selectedDomain) return;
    console.log(selectedDomain, getKeyDomain(selectedDomain));

    startTransition(async () => {
      const data = await getQuestionAction(
        getKeyDomain(selectedDomain),
        difficulty
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

  const goBack = () => {
    startTransition(async () => {
      setAnswer('');
      setQuestion(null);
      setEvaluation(null);
      setSelectedDomain(null);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-4xl mx-auto flex-1 p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-8 bg-gray-900 rounded-none sm:rounded-3xl shadow-2xl flex flex-col">
        <header className="mb-4 sm:mb-8 flex flex-col items-center">
          <div className="flex w-full flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <h1
              onClick={goBack}
              className="group text-2xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent relative inline-block cursor-pointer select-none flex items-center gap-2 sm:gap-3 drop-shadow-lg"
            >
              {/* Animated Logo Icon */}
              <span className="inline-flex items-center justify-center text-3xl sm:text-5xl group-hover:animate-spin-slow transition-transform duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300 drop-shadow-lg"
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
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-400 mb-1 mt-2">
              Chọn lĩnh vực bạn muốn luyện tập
            </h2>
            <p className="text-blue-200 text-center mb-6 text-base sm:text-lg">
              Hãy chọn một lĩnh vực để bắt đầu luyện tập phỏng vấn!
            </p>
            <div className="flex flex-col gap-8 w-full">
              {domainGroups.map((group) => (
                <div key={group.group} className="w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{group.icon}</span>
                    <span className="text-lg sm:text-xl font-bold text-cyan-300">
                      {group.group}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full">
                    {group.domains.map((d) => (
                      <button
                        key={d.name}
                        onClick={() => handleSelectDomain(d.name)}
                        className={`group w-full px-4 py-6 sm:px-6 sm:py-8 rounded-2xl flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                          bg-gradient-to-br from-blue-900/80 via-gray-900/90 to-cyan-900/70
                          shadow-lg border-2 border-blue-900 relative overflow-hidden
                          hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 hover:scale-105
                          hover:bg-cyan-900/80
                        `}
                        style={{
                          boxShadow: '0 2px 16px 0 rgba(56,189,248,0.10)',
                        }}
                      >
                        {/* Ripple effect */}
                        <span className="absolute inset-0 pointer-events-none group-active:animate-ripple bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl"></span>
                        <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce-slow text-blue-200 drop-shadow-lg">
                          {d.icon}
                        </span>
                        <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:animate-shimmer">
                          {d.name}
                        </span>
                        <span className="text-xs text-blue-300 mt-1 text-center hidden sm:block">
                          {d.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDomain && (!question || evaluation) && (
          <>
            <div className="relative w-full max-w-lg mx-auto bg-gray-900/95 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-8 flex flex-col items-center gap-4 sm:gap-6 animate-fade-in">
              {/* Back Button */}
              <button
                onClick={() => {
                  setEvaluation(null);
                  setSelectedDomain(null);
                }}
                className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-cyan-300 hover:bg-cyan-900 hover:text-white transition-all duration-200 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                type="button"
                aria-label="Quay lại"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {/* Domain Icon and Info */}
              {(() => {
                let domain = null;
                for (const group of domainGroups) {
                  domain = group.domains.find((d) => d.name === selectedDomain);
                  if (domain) break;
                }
                return domain ? (
                  <>
                    <span className="text-6xl mb-2">{domain.icon}</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-300 mb-1">
                        {domain.name}
                      </div>
                      <div className="text-base text-blue-100 font-medium">
                        {domain.description}
                      </div>
                    </div>
                  </>
                ) : null;
              })()}
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
                onClick={handleGetQuestion}
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
          </>
        )}

        {question && (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-2 sm:p-6 rounded-xl sm:rounded-3xl shadow-2xl space-y-4 sm:space-y-6 animate-fade-in w-full max-w-2xl mx-auto">
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
        )}

        {evaluation ? (
          <div
            ref={evaluationRef}
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-3 sm:p-8 rounded-xl sm:rounded-3xl shadow-2xl space-y-6 sm:space-y-8 animate-fade-in overflow-hidden border border-gray-700/60 w-full max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-green-400 text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <h4 className="text-2xl font-extrabold text-green-300 tracking-tight">
                Kết quả đánh giá
              </h4>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              {/* Score Badges */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-400 bg-gray-900 text-green-200 text-4xl font-bold shadow-lg animate-scale-in">
                  {evaluation.overall_score}
                </div>
                <span className="text-green-400 font-semibold">Điểm tổng</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-400 bg-gray-900 text-blue-200 text-4xl font-bold shadow-lg animate-scale-in">
                  {evaluation.creative_score}
                </div>
                <span className="text-blue-400 font-semibold">
                  Điểm sáng tạo
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-yellow-300 bg-gray-900 text-yellow-200 text-4xl font-bold shadow-lg animate-scale-in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 rounded-xl bg-yellow-900/80 text-yellow-200 font-semibold text-sm mt-1">
                {evaluation.result_text}
              </span>
            </div>
            {/* Suggestions Inline Card */}
            <div className="flex items-start gap-3 bg-gray-800/80 border-l-4 border-blue-400 rounded-xl p-5 shadow-inner animate-fade-in-slow">
              <span className="text-2xl mt-1">📝</span>
              <p className="text-blue-100 font-medium">
                <b>Gợi ý:</b> {evaluation.suggestions}
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
        <footer className="mt-auto pt-8 text-center text-gray-500 text-xs sm:text-sm flex flex-col items-center gap-2 w-full">
          <span>
            Made by Tommy (Wolf) with love{' '}
            <span className="inline-block">❤️</span>
          </span>
          <span className="text-xs text-gray-400">
            © {new Date().getFullYear()} ITerview. All rights reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}
