import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';

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
  manifest: '/manifest.json',
  themeColor: '#0a0f1a',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Iterview',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#0a0f1a',
    'msapplication-tap-highlight': 'no',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
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
        {/* iOS Safari notch and bottom bar translucency */}
        <meta
          name="theme-color"
          content="#0a0f1a"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#0a0f1a"
          media="(prefers-color-scheme: light)"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0a0f1a" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
