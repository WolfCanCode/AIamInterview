import React from 'react';
import { useTranslations } from 'next-intl';
import { Domain, DomainGroup } from '@/utils/types/Domain';

export default function DomainSelector({
  domainGroups,
  handleSelectDomain,
}: {
  domainGroups: DomainGroup[];
  handleSelectDomain: (name: string) => void;
}) {
  const t = useTranslations('');

  const handleDomainClick = (domain: Domain) => {
    handleSelectDomain(domain.name || domain.key);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center animate-fade-in">
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
                    className={`group w-full px-4 py-6 sm:px-6 sm:py-8 rounded-2xl flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
                      bg-gradient-to-br from-blue-900/80 via-gray-900/90 to-cyan-900/70
                      shadow-lg border-2 border-blue-900 relative overflow-hidden
                      hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 hover:scale-105
                      hover:bg-cyan-900/80
                    `}
                    style={{ boxShadow: '0 2px 16px 0 rgba(56,189,248,0.10)' }}
                  >
                    {/* Ripple effect */}
                    <span className="absolute inset-0 pointer-events-none group-active:animate-ripple bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl"></span>
                    <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:animate-bounce-slow text-blue-200 drop-shadow-lg">
                      <d.icon />
                    </span>
                    <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:animate-shimmer">
                      {t(d.name || d.key)}
                    </span>
                    <span className="text-xs text-blue-300 mt-1 text-center hidden sm:block">
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
