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
    <div className="group relative w-full max-w-3xl mx-auto backdrop-blur-xl bg-white/5 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-6 animate-fade-in overflow-hidden border border-white/10 dark:border-gray-700/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_oklch(70%_0.3_240/0.3)]">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(60%_0.3_240/0.1)] to-[oklch(60%_0.3_280/0.1)] opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

      {/* Animated Aurora Effect */}
      <div className="absolute inset-0 bg-radial-[at_center] from-[oklch(70%_0.3_240/0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(20%_0.1_240)] text-[oklch(80%_0.3_240)] hover:bg-[oklch(30%_0.2_240)] hover:text-[oklch(98%_0_0)] transition-all duration-300 border border-[oklch(70%_0.2_240/0.3)] focus:outline-none focus:ring-2 focus:ring-[oklch(70%_0.3_240/0.4)] backdrop-blur-md overflow-hidden group/btn"
        type="button"
        aria-label={t('back')}
      >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(70%_0.3_240/0.2)] to-[oklch(70%_0.3_280/0.2)] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 relative z-10 transform group-hover/btn:scale-110 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Domain Icon */}
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-slow blur-xl opacity-50">
          <domain.icon className="text-6xl text-[oklch(70%_0.3_240)]" />
        </div>
        <domain.icon className="text-6xl relative z-10 text-[oklch(85%_0.3_240)] transform group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Domain Info */}
      <div className="relative z-10 text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[oklch(85%_0.3_240)] to-[oklch(85%_0.3_280)] bg-clip-text text-transparent">
          {t(domain.name || domain.key)}
        </h2>
        <p className="text-[oklch(85%_0.2_240)] font-medium max-w-lg">
          {t(domain.description || '')}
        </p>
        {child && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(30%_0.1_240)] border border-[oklch(70%_0.2_240/0.3)] backdrop-blur-md mt-3">
            <span className="text-[oklch(85%_0.2_240)] font-semibold">
              {t('language_framework')}
            </span>
            <span className="text-[oklch(85%_0.3_240)]">{child}</span>
          </div>
        )}
      </div>
    </div>
  );
}
