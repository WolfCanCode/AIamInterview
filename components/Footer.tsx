import React from 'react';
import { useTranslations } from 'next-intl';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const BUILD_VERSION = process.env.NEXT_PUBLIC_BUILD_SHA?.slice(0, 7) || 'local';

export default function Footer() {
  const t = useTranslations('');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8 safe-area-pb text-center text-main text-xs sm:text-sm flex flex-col items-center gap-2 w-full">
      <span>
        <strong className="text-main">{t('build')}</strong>{' '}
        <span className="font-mono text-xs text-main">
          v1.5 {BUILD_VERSION}
        </span>
      </span>
      <span>
        <strong className="text-main">{t('model')}</strong>{' '}
        <span className="font-mono text-xs text-main">
          meta-llama/llama-4-maverick
        </span>
      </span>
      <div className="flex gap-4 mb-2">
        <a
          href="https://www.facebook.com/woftcancode/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-cyan-400 transition-colors text-2xl text-main"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/WolfCanCode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-cyan-400 transition-colors text-2xl text-main"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/wolfcancode/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-400 transition-colors text-2xl text-main"
        >
          <FaLinkedin />
        </a>
      </div>
      <span className="text-xs text-main cursor-pointer">
        {t.rich('copyright', {
          year: currentYear,
          fallback: `© ${currentYear} AI am Interview. All rights reserved.`,
        })}
      </span>
    </footer>
  );
}
