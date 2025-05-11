'use client';

import DomainSelector from '@/components/DomainSelector';
import Footer from '@/components/Footer';
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
    <div className="min-h-screen-safe w-full flex flex-col safe-area-pt">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Main content wrapper */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center min-h-screen-safe overflow-x-hidden">
        <div className="w-full max-w-5xl space-y-6 sm:space-y-8">
          <div className="relative p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 text-white">
            <Header />
            <DomainSelector
              domainGroups={domainGroups}
              handleSelectDomain={handleSelectDomain}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
