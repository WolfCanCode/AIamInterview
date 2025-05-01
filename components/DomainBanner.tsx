import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain } from '@/utils/types/Domain';
import FuturisticButton from './FuturisticButton';

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
    <div className="w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-[oklch(20%_0.1_240/0.8)] border border-cyan-400/20 shadow-md relative">
      {/* Back Button */}
      <FuturisticButton
        onClick={onBack}
        className="absolute top-4 left-4 !w-10 !h-10 !p-0 flex items-center justify-center"
        aria-label={t('back')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </FuturisticButton>

      {/* Domain Icon */}
      <div className="relative flex flex-col items-center gap-4 sm:gap-6 pt-0 pb-4">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-slow blur-xl opacity-50">
            <domain.icon className="text-6xl text-[oklch(70%_0.3_240)]" />
          </div>
          <domain.icon className="text-6xl relative z-10 text-[oklch(85%_0.3_240)] transform group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Domain Info */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[oklch(85%_0.3_240)] to-[oklch(85%_0.3_280)] bg-clip-text text-transparent truncate max-w-[280px] sm:max-w-full mx-auto">
            {t(domain.name || domain.key)}
          </h2>
          <p className="text-[oklch(85%_0.2_240)] font-medium max-w-lg">
            {t(domain.description || '')}
          </p>
          {child && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(30%_0.1_240)] border border-[oklch(70%_0.2_240/0.3)] mt-3">
              <span className="text-[oklch(85%_0.2_240)] font-semibold">
                {t('language_framework')}
              </span>
              <span className="text-[oklch(85%_0.3_240)]">{child}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
