'use client';

import Header from '@/components/Header';
import { Toaster } from 'sonner';

export default function DomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-4 max-w-3xl px-4">
      <Header onClickLogo={() => (window.location.href = '/')} />
      {children}
      <Toaster />
    </div>
  );
}
