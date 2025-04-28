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
    <div className="flex gap-4 items-center">
      {LANGUAGES.map((lng) => (
        <button
          key={lng.code}
          onClick={() => handleLanguageChange(lng.code)}
          aria-label={lng.label}
          className={`transition-all duration-200 focus:outline-none bg-transparent p-0 m-0
            ${
              locale === lng.code
                ? 'drop-shadow-[0_0_6px_rgba(34,211,238,0.7)] scale-110'
                : 'opacity-80 hover:scale-125 hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.4)]'
            }
          `}
          style={{ fontSize: 28, lineHeight: 1 }}
        >
          <span>{lng.flag}</span>
        </button>
      ))}
    </div>
  );
}
