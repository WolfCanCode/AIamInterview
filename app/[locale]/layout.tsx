import { hasLocale, NextIntlClientProvider } from 'next-intl';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export default async function pageLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  );
}
