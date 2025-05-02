import React from 'react';
import Image from 'next/image';

export default function SplashScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#101624] to-[#05070d] transition-opacity duration-700 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-20 h-20 text-blue-300 drop-shadow-lg"
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
          <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            AI am Interview
          </span>
        </div>
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-cyan-200 text-lg font-medium animate-fade-in-slow">
          Ace your next interview with AI
        </div>
      </div>
    </div>
  );
}
