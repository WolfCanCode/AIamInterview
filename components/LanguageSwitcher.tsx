'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'vi', flag: '🇻🇳', label: 'Tiếng Việt' },
] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2 items-center">
      {LANGUAGES.map((lng) => (
        <button
          key={lng.code}
          onClick={() => handleLanguageChange(lng.code)}
          aria-label={lng.label}
          className={`transition-all duration-200 focus:outline-none bg-[#0B1221]/80 backdrop-blur-md border border-cyan-400/20 rounded-full p-1 shadow-md hover:scale-110 hover:shadow-cyan-400/20 focus:ring-2 focus:ring-cyan-400/40 text-lg ${
            locale === lng.code
              ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] scale-110 ring-2 ring-cyan-400/60'
              : 'opacity-80'
          }`}
          style={{ lineHeight: 1 }}
        >
          <span>{lng.flag}</span>
        </button>
      ))}
    </div>
  );
}
