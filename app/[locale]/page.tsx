'use client';

import DomainSelector from '@/components/DomainSelector';
import Header from '@/components/Header';
import { domainGroups } from '@/utils/constants/domain';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Page() {
  const locale = useLocale();
  const router = useRouter();

  const handleSelectDomain = (domain: string) => {
    router.push(`/${locale}/domain/${domain}`);
  };

  return (
    <div className="min-h-screen-safe w-full flex flex-col bg-[#0a0f1a] safe-area-pt">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#101624] to-[#05070d] pointer-events-none" />

      {/* Aurora animated blobs background */}
      <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-700/30 via-cyan-400/20 to-purple-700/30 rounded-full blur-2xl animate-aurora2" />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center min-h-screen-safe overflow-x-hidden">
        <div className="w-full max-w-5xl space-y-6 sm:space-y-8">
          <div className="relative p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 text-white">
            <Header />
            <DomainSelector
              domainGroups={domainGroups}
              handleSelectDomain={handleSelectDomain}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
