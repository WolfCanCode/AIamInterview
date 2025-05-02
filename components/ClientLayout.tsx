'use client';

import { Analytics } from '@vercel/analytics/react';
import SplashScreen from './SplashScreen';
import { useEffect, useState } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen visible={showSplash} />
      {children}
      <Analytics />
    </>
  );
}
