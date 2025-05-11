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
    <div className="animate-fade-in relative w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 bg-[#101624] border border-gray-500/20 z-0 transition-opacity duration-500 group-hover:opacity-75">
      {/* Back Button */}
      <BackButton
        onClick={onBack}
        ariaLabel={t('back')}
        className="absolute top-4 left-4 z-50"
      />

      {/* Domain Icon */}
      <div className="relative flex flex-col items-center gap-4 sm:gap-6 pt-0 pb-4">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-slow opacity-50">
            <domain.icon width={120} height={120} />
          </div>
          <domain.icon
            width={120}
            height={120}
            className="relative z-10 transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Domain Info */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 truncate max-w-[280px] sm:max-w-full mx-auto">
            {t(domain.name || domain.key)}
          </h2>
          <p className="text-gray-300 font-medium max-w-lg">
            {t(domain.description || '')}
          </p>
        </div>
      </div>
    </div>
  );
}
