import React from 'react';
import { getBuildVersion } from '@/lib/buildInfo';

export default function Footer() {
  const version = getBuildVersion();

  return (
    <footer className="mt-auto pt-8 text-center text-gray-500 text-xs sm:text-sm flex flex-col items-center gap-2 w-full">
      <span>
        <strong>Build:</strong>{' '}
        <span className="font-mono text-xs">v1.1 {version}</span>
      </span>
      <span>
        <strong>Model:</strong>{' '}
        <span className="font-mono text-xs">meta-llama/llama-4-maverick</span>
      </span>
      <span>
        Made by Tommy (Wolf) with love <span className="inline-block">❤️</span>
      </span>

      <span className="text-xs text-gray-400">
        © {new Date().getFullYear()} ITerview. All rights reserved.
      </span>
    </footer>
  );
}
