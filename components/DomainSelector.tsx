import { Domain, DomainGroup } from '@/utils/types/Domain';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
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

  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDomainClick = (domain: Domain) => {
    handleSelectDomain(domain.name || domain.key);
  };

  // Scroll to group section
  const handleGroupNavClick = (idx: number) => {
    const ref = groupRefs.current[idx];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
      {/* Domain Group Navigation Bar */}
      <nav className="w-full overflow-x-auto mt-2 mb-4">
        <ul className="futuristic-nav flex gap-4 justify-start items-center py-2 rounded-xl shadow-lg relative overflow-x-auto scrollbar-hide">
          {domainGroups.map((group, idx) => (
            <li key={group.key} className="first:ml-4 last:mr-4">
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1 rounded-lg text-cyan-200 hover:bg-cyan-900/30 focus:bg-cyan-900/40 transition-colors text-sm sm:text-base font-semibold futuristic-nav-btn"
                onClick={() => handleGroupNavClick(idx)}
                aria-label={t(group.group || group.key)}
              >
                <group.icon
                  width={28}
                  height={28}
                  className="text-cyan-300 drop-shadow-glow"
                />
                <span className="whitespace-nowrap">
                  {t(group.group || group.key)}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .futuristic-nav {
          }
          .futuristic-nav-btn {
            box-shadow: 0 0 8px #22d3ee88, 0 0 2px #818cf8;
            transition: box-shadow 0.2s, background 0.2s;
            position: relative;
            z-index: 1;
          }
          .futuristic-nav-btn:hover,
          .futuristic-nav-btn:focus {
            box-shadow: 0 0 16px #22d3eecc, 0 0 8px #818cf8, 0 0 0 2px #818cf8;
            background: linear-gradient(90deg, #0ff4 0%, #818cf8 100%);
            color: #fff;
          }
          .drop-shadow-glow {
            filter: drop-shadow(0 0 6px #22d3eecc);
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </nav>
      <div className="flex flex-col gap-8 w-full">
        {domainGroups.map((group, idx) => (
          <div
            key={group.key}
            className="w-full"
            ref={(el) => {
              groupRefs.current[idx] = el;
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">
                <group.icon width={56} height={56} className="text-gray-300" />
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
                    } h-[150px] sm:h-auto flex flex-col justify-center items-center`}
                    aria-pressed={selectedDomain === d.name}
                    tabIndex={0}
                    style={{ touchAction: 'manipulation' }}
                  >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl z-0 pointer-events-none" />
                    {/* Ripple effect - simplified for mobile */}
                    <span className="absolute inset-0 pointer-events-none bg-gradient-futuristic rounded-2xl opacity-0 group-active:opacity-100 transition-opacity duration-200"></span>
                    <span className="text-3xl sm:text-5xl mb-2 transition-transform duration-200 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] relative z-10 flex items-center justify-center">
                      <d.icon width={64} height={64} />
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
