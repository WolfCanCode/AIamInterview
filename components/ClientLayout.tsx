'use client';

import { Analytics } from '@vercel/analytics/react';
import SplashScreen from './SplashScreen';
import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
    <div className="relative">
      <SplashScreen visible={showSplash} />
      {children}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
