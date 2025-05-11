import '@/app/globals.css';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Static background for performance
  // (If you want to keep a little color, use a simple gradient div)
  return (
    <NextIntlClientProvider locale={locale}>
      {/* Static, non-blurred, non-animated background for performance */}
      <div
        className="fixed inset-0 z-10 overflow-hidden pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(139,92,246,0.15) 100%)',
        }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
