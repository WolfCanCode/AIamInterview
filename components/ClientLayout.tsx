'use client';

import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

const AddToHomeScreenPrompt = dynamic(() => import('./AddToHomeScreenPrompt'), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AddToHomeScreenPrompt />
      <Analytics />
    </>
  );
}
