import React from 'react';
import { useTranslations } from 'next-intl';
import { FaHeart } from 'react-icons/fa';

const BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_SHA?.slice(0, 7) || 'local';

export default function Footer() {
  const t = useTranslations('');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 safe-area-pb text-center text-gray-500 text-xs sm:text-sm flex flex-col items-center gap-2 w-full">
      <span>
        <strong>{t('build')}</strong>{' '}
        <span className="font-mono text-xs">v1.3 {BUILD_VERSION}</span>
      </span>
      <span>
        <strong>{t('model')}</strong>{' '}
        <span className="font-mono text-xs">meta-llama/llama-4-maverick</span>
      </span>
      <span
        className="cursor-pointer hover:text-teal-400"
        onClick={() => window.open('https://www.linkedin.com/in/wolfcancode/')}
      >
        {t('made_by')} <FaHeart className="inline-block text-red-500" />
      </span>
      <span className="text-xs text-gray-400 cursor-pointer">
        {t.rich('copyright', {
          year: currentYear,
          fallback: `© ${currentYear} ITerview. All rights reserved.`,
        })}
      </span>
    </footer>
  );
}
