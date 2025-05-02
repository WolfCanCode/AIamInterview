import React from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import Link from 'next/link';

export default function Header({
  onClickLogo,
  onBack,
}: {
  onClickLogo: () => void;
  onBack?: () => void;
}) {
  const t = useTranslations('');
  return (
    <header className="mb-4 sm:mb-8 flex items-center relative w-full">
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/80 text-cyan-300 hover:bg-cyan-900 hover:text-white transition-all duration-200 border border-cyan-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            type="button"
            aria-label={t('back')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <h1
          onClick={onClickLogo}
          className="group text-xl sm:text-2xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent relative inline-flex items-center gap-2 cursor-pointer select-none drop-shadow-lg"
        >
          {/* Animated Logo Icon */}
          <span className="inline-flex items-center justify-center text-xl sm:text-2xl group-hover:animate-spin-slow transition-transform duration-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 drop-shadow-lg"
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
          <span className="text-2xl bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent animate-shimmer font-extrabold relative drop-shadow-md">
            {t('app_title')}
          </span>
          {/* Enhanced Underline Animation */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 group-hover:w-4/5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full transition-all duration-700 animate-border-grow shadow-lg"></span>
        </h1>
      </div>

      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
