import { hasLocale, NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Iterview',
  description:
    'An AI-powered web application to practice coding interviews across multiple domains.',
};

export default async function RootLayout({
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
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Iterview" />
        <meta
          property="og:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://iterview-ai.vercel.app/logo.jpg"
        />
        <meta property="og:url" content="https://iterview-ai.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Iterview" />
        <meta
          name="twitter:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Iterview" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
