import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 text-center text-gray-500 text-xs sm:text-sm flex flex-col items-center gap-2 w-full">
      <span>
        Made by Tommy (Wolf) with love <span className="inline-block">❤️</span>
      </span>
      <span className="text-xs text-gray-400">
        © {new Date().getFullYear()} ITerview. All rights reserved.
      </span>
    </footer>
  );
}
