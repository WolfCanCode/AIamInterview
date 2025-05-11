'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';

const LANGUAGES = [
  { code: 'en', country: 'GB', label: 'English' },
  { code: 'vi', country: 'VN', label: 'Tiếng Việt' },
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
          className={`transition-all duration-200 focus:outline-none bg-[#0B1221]/80 border border-cyan-400/20 rounded-full p-1 shadow-md hover:scale-110 hover:shadow-cyan-400/20 focus:ring-2 focus:ring-cyan-400/40 text-lg ${
            locale === lng.code
              ? 'drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] scale-100 ring-2 ring-cyan-400/60'
              : 'opacity-80'
          }`}
          style={{ lineHeight: 1 }}
        >
          <ReactCountryFlag
            countryCode={lng.country}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
              borderRadius: '50%',
              boxShadow: locale === lng.code ? '0 0 8px #22d3ee' : undefined,
              verticalAlign: 'middle',
            }}
            title={lng.label}
          />
        </button>
      ))}
    </div>
  );
}
