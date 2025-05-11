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
      <h2 className="text-2xl sm:text-5xl font-bold text-cyan-300 max-w-full mx-auto">
        {t('select_domain')}
        <BlinkingCursor />
      </h2>
      <p className="text-gray-300 text-center mb-6 mt-1 text-xs sm:text-xl">
        {t('explore_domain')}
      </p>
      <div className="flex flex-col gap-8 w-full">
        {domainGroups.map((group) => (
          <div key={group.key} className="w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">
                <group.icon width={32} height={32} className="text-gray-300" />
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
                    className={`group w-full px-4 py-6 sm:px-6 sm:py-8 rounded-2xl flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300/70 bg-gradient-futuristic shadow-lg border-2 border-gray-900 relative overflow-hidden hover:shadow-2xl hover:border-gray-300 ${
                      selectedDomain === d.name
                        ? 'ring-2 ring-gray-300/80 scale-105 border-gray-300 shadow-gray-300/40 bg-[#23272e]'
                        : ''
                    } h-[200px] sm:h-auto flex flex-col justify-center items-center`}
                    aria-pressed={selectedDomain === d.name}
                    tabIndex={0}
                    style={{ touchAction: 'manipulation' }}
                  >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl z-0 pointer-events-none" />
                    {/* Ripple effect - simplified for mobile */}
                    <span className="absolute inset-0 pointer-events-none bg-gradient-futuristic rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-200"></span>
                    <span className="text-3xl sm:text-5xl mb-2 transition-transform duration-200 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] relative z-10 flex items-center justify-center">
                      <d.icon width={48} height={48} />
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-cyan-300 group-hover:animate-shimmer max-w-[120px] sm:max-w-full relative z-10 text-center">
                      {t(d.name || d.key)}
                    </span>
                    <span className="text-xs text-cyan-300 mt-1 text-center hidden sm:block relative z-10">
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
