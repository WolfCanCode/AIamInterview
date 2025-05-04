'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { getDomainInstanceByName } from '@/utils/functions/getDomainInstanceByName';
import DomainBanner from '@/components/DomainBanner';
import DifficultySelector from '@/components/DifficultySelector';
import Footer from '@/components/Footer';

type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Madness';

export default function DomainDetailPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = React.use(params);
  const t = useTranslations('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [selectedChild, setSelectedChild] = useState(
    searchParams.get('child') || ''
  );
  const [difficulty, setDifficulty] = useState<Difficulty>(
    (searchParams.get('difficulty') as Difficulty) || 'Medium'
  );

  const domainInstance = getDomainInstanceByName(domain);
  const hasChildren =
    domainInstance?.children && domainInstance.children.length > 0;

  const handleStart = () => {
    if (hasChildren && !selectedChild) return;
    router.push(
      `/${locale}/domain/${domain}/question?child=${selectedChild}&difficulty=${difficulty}`
    );
  };

  return (
    <>
      {/* Domain Banner */}
      {domainInstance && (
        <DomainBanner
          domain={domainInstance}
          child={selectedChild}
          onBack={() => router.push(`/${locale}`)}
        />
      )}
      {/* Child Domain Selector */}
      {hasChildren && (
        <div className="mb-4">
          <div className="text-[oklch(85%_0.2_240)] text-sm font-medium mt-4 text-center">
            {t('select_subtopic')}
          </div>
          <div className="domain-children-grid animate-fade-in">
            {domainInstance?.children?.map((child: string) => (
              <button
                key={child}
                type="button"
                onClick={() => setSelectedChild(child)}
                className={`relative w-full rounded-xl font-black px-4 py-3 text-sm transition-all duration-200 overflow-hidden border-2 backdrop-blur bg-gradient-to-br from-cyan-900/70 via-gray-900/80 to-blue-900/70 shadow border-cyan-900 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-400/80 ${
                  selectedChild === child
                    ? 'scale-105 border-cyan-400 ring-2 ring-cyan-400/60 shadow-cyan-400/20'
                    : ''
                }`}
                aria-pressed={selectedChild === child}
                tabIndex={0}
              >
                <span className="relative text-sm font-inherit bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
                  {t(child)}
                </span>
                {selectedChild === child && (
                  <span className="absolute inset-0 pointer-events-none animate-pulse blur-xl opacity-40 bg-gradient-to-r from-cyan-400/30 to-blue-400/30" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Difficulty Selector */}
      <div className="mb-6">
        <DifficultySelector
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          isPending={false}
          evaluation={null}
          onStart={handleStart}
          isStartDisabled={hasChildren && !selectedChild}
          showMockInterviewButton={true}
          mockInterviewButtonProps={{
            disabled: (() => {
              return (
                domainInstance?.children &&
                domainInstance.children.length > 0 &&
                !selectedChild
              );
            })(),
            href: {
              pathname: `/${locale}/domain/${domain}/mock-interview`,
              query: {
                domain: domain,
                ...(selectedChild ? { child: selectedChild } : {}),
                difficulty,
              },
            },
            label: t('start_mock_interview'),
          }}
        />
      </div>
      <Footer />
    </>
  );
}
