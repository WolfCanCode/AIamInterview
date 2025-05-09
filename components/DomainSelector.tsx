import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain, DomainGroup } from '@/utils/types/Domain';
import BlinkingCursor from './BlinkingCursor';

export default function DomainSelector({
  domainGroups,
  handleSelectDomain,
  selectedDomain,
}: {
  domainGroups: DomainGroup[];
  handleSelectDomain: (name: string) => void;
  selectedDomain?: string;
}) {
  const t = useTranslations('');

  const handleDomainClick = (domain: Domain) => {
    handleSelectDomain(domain.name || domain.key);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-center animate-fade-in">
      <h2 className="text-main text-2xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent max-w-full mx-auto">
        {t('select_domain')}
        <BlinkingCursor />
      </h2>
      <p className="text-main text-center mb-6 mt-1 text-xs sm:text-xl">
        {t('explore_domain')}
      </p>
      <div className="flex flex-col gap-8 w-full">
        {domainGroups.map((group) => (
          <div key={group.key} className="w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl text-main">
                <group.icon />
              </span>
              <span className="text-lg sm:text-xl font-bold text-cyan-300">
                {t(group.group || group.key)}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full">
              {group.domains.map((d) => (
                <div key={d.key} className="relative ">
                  <button
                    onClick={() => handleDomainClick(d)}
                    className={`card group w-full px-4 py-6 sm:px-6 sm:py-8 flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 border border-white text-main relative overflow-hidden hover:shadow-2xl hover:border-cyan-400 backdrop-blur-sm ${
                      selectedDomain === d.name
                        ? 'ring-2 ring-cyan-400/60 scale-105 border-cyan-400 shadow-cyan-400/20'
                        : ''
                    } h-[116px] sm:h-auto flex flex-col justify-center items-center`}
                    aria-pressed={selectedDomain === d.name}
                    tabIndex={0}
                    style={{ touchAction: 'manipulation' }}
                  >
                    {/* Ripple effect - simplified for mobile */}
                    <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-200"></span>
                    <span
                      className="text-3xl sm:text-4xl transition-transform duration-200 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                      style={{ contain: 'strict' }}
                    >
                      <d.icon />
                    </span>
                    <span className="text-main text-base sm:text-lg font-semibold group-hover:animate-shimmer max-w-[120px] sm:max-w-full">
                      {t(d.name || d.key)}
                    </span>
                    <span className="text-secondary text-xs mt-1 text-center hidden sm:block">
                      {t(d.description || '')}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
