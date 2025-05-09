import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain } from '@/utils/types/Domain';
import BackButton from './BackButton';

export default function DomainBanner({
  domain,
  onBack,
}: {
  domain: Domain;
  child: string;
  onBack: () => void;
}) {
  const t = useTranslations('');
  return (
    <div className="card animate-fade-in relative w-full max-w-5xl mx-auto p-6 sm:p-8 z-0 transition-opacity duration-500 group-hover:opacity-75">
      {/* Back Button */}
      <BackButton
        onClick={onBack}
        ariaLabel={t('back')}
        className="absolute top-4 left-4 z-50"
      />

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
          <h2 className="text-main text-2xl sm:text-3xl font-bold truncate max-w-[280px] sm:max-w-full mx-auto">
            {t(domain.name || domain.key)}
          </h2>
          <p className="text-main font-medium max-w-lg">
            {t(domain.description || '')}
          </p>
        </div>
      </div>
    </div>
  );
}
