import React from 'react';

export default function Header({ onClickLogo }: { onClickLogo: () => void }) {
  return (
    <header className="mb-4 sm:mb-8 flex flex-col items-center">
      <div className="flex w-full flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h1
          onClick={onClickLogo}
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
  );
}
