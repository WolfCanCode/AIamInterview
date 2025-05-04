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

  return (
    <NextIntlClientProvider locale={locale}>
      {/* Aurora animated blobs background */}
      <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-32 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-700/30 via-cyan-400/20 to-purple-700/30 rounded-full blur-2xl animate-aurora2" />
      </div>
      {children}
    </NextIntlClientProvider>
  );
}
