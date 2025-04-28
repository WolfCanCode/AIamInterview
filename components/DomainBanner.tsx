import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain } from '@/utils/types/Domain';

export default function DomainBanner({
  domain,
  child,
  onBack,
}: {
  domain: Domain;
  child: string;
  onBack: () => void;
}) {
  const t = useTranslations('');
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gray-900/95 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-8 flex flex-col items-center gap-4 sm:gap-6 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-cyan-300 hover:bg-cyan-900 hover:text-white transition-all duration-200 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        type="button"
        aria-label={t('back')}
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
      <span className="text-6xl mb-2">
        <domain.icon />
      </span>
      <div className="text-center">
        <div className="text-2xl font-bold text-cyan-300 mb-1">
          {t(domain.name || domain.key)}
        </div>
        <div className="text-base text-blue-100 font-medium">
          {t(domain.description || '')}
        </div>
        {child && (
          <div className="mt-2 text-sm text-cyan-200">
            <span className="font-semibold">{t('language_framework')}</span>{' '}
            {child}
          </div>
        )}
      </div>
    </div>
  );
}
