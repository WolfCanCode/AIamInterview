import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain, DomainGroup } from '@/utils/types/Domain';

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
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-400 mb-1 mt-2">
        {t('select_domain')}
      </h2>
      <p className="text-blue-200 text-center mb-6 text-base sm:text-lg">
        {t('explore_domain')}
      </p>
      <div className="flex flex-col gap-8 w-full">
        {domainGroups.map((group) => (
          <div key={group.key} className="w-full">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">
                <group.icon />
              </span>
              <span className="text-lg sm:text-xl font-bold text-cyan-300">
                {t(group.group || group.key)}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full">
              {group.domains.map((d) => (
                <div key={d.key} className="relative">
                  <button
                    onClick={() => handleDomainClick(d)}
                    className={`group w-full px-4 py-6 sm:px-6 sm:py-8 rounded-2xl flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 bg-gradient-to-br from-cyan-900/70 via-gray-900/80 to-blue-900/70 shadow-lg border-2 border-cyan-900 relative overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 hover:scale-105 hover:bg-cyan-900/80 backdrop-blur-xl ${
                      selectedDomain === d.name
                        ? 'ring-2 ring-cyan-400/60 scale-105 border-cyan-400 shadow-cyan-400/20'
                        : ''
                    }`}
                    aria-pressed={selectedDomain === d.name}
                    tabIndex={0}
                  >
                    {/* Ripple effect */}
                    <span className="absolute inset-0 pointer-events-none group-active:animate-ripple bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl"></span>
                    <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce-slow text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
                      <d.icon />
                    </span>
                    <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:animate-shimmer truncate max-w-[120px] sm:max-w-full">
                      {t(d.name || d.key)}
                    </span>
                    <span className="text-xs text-cyan-300 mt-1 text-center hidden sm:block">
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
