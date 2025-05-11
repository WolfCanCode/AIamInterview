'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from 'sonner';

export default function DomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen-safe flex flex-col w-full">
      <div className="container mx-auto p-4 sm:p-6 max-w-3xl sm:max-w-5xl  space-y-6 sm:space-y-8 flex-1 flex flex-col">
        <Header onClickLogo={() => (window.location.href = '/')} />
        {children}
        <Toaster />
      </div>
      <Footer />
    </div>
  );
}
