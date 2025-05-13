import { useEffect, useState } from 'react';
import LogoIcon from './icons/LogoIcon';

export default function SplashScreen({ visible }: { visible: boolean }) {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else {
      // Wait for fade-out transition before unmounting
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#101624] transition-opacity duration-500 ${
        visible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <LogoIcon width={96} height={96} className="mb-6 drop-shadow-2xl" />
      <div className="flex items-center justify-center">
        <span className="text-3xl font-bold text-cyan-400">
          Interview Trainer
        </span>
        <span className="ml-4 px-2 text-lg font-medium bg-gray-200 text-gray-700 rounded">
          AI
        </span>
      </div>
      <span className="text-base text-gray-400">
        Sharpen your skills, and ace your next interview
      </span>
    </div>
  );
}
