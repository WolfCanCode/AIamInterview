import React from 'react';
import Image from 'next/image';

export default function SplashScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0f1a] via-[#101624] to-[#05070d] transition-opacity duration-700 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/icon-192x192.png"
            alt="AI am Interview Logo"
            width={64}
            height={64}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-lg bg-[#0a0f1a]"
            draggable={false}
            priority
          />
          <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            AI am Interview
          </span>
        </div>
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-cyan-200 text-lg font-medium animate-fade-in-slow">
          Ace your next interview with AI
        </div>
      </div>
    </div>
  );
}
