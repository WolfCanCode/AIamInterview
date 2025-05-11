import '@/app/globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import { getTranslations } from 'next-intl/server';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Interview Trainer',
  description:
    'Ace your next interview with AI! Practice real-world interview questions, get instant feedback, and boost your skills across all domains—tech, business, healthcare, law, and more.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Interview Trainer',
    startupImage: [
      {
        url: '/icons/splash-screen.png',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#0a0f1a',
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-title': 'Interview Trainer',
  },
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const metaTitle = t('meta_title');
  const metaDescription = t('meta_description');
  const ogLocale = locale === 'vi' ? 'vi_VN' : 'en_US';
  const baseUrl = 'https://interview-ai-trainer.vercel.app';

  return (
    <html lang={locale}>
      <head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/logo.jpg`} />
        <meta
          property="og:url"
          content={baseUrl + (locale === 'en' ? '/en' : '/vi')}
        />
        <meta property="og:site_name" content={metaTitle} />
        <meta property="og:locale" content={ogLocale} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="vi" href={`${baseUrl}/vi`} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://interview-ai-trainer.vercel.app/logo.jpg"
        />
        <meta
          property="og:url"
          content="https://interview-ai-trainer.vercel.app"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Interview Trainer" />
        <meta
          name="twitter:description"
          content="Ace your next interview with AI! Practice real-world interview questions, get instant feedback, and boost your skills across all domains—tech, business, healthcare, law, and more."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Interview Trainer" />
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
        <ClientLayout>{children}</ClientLayout>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable right-click context menu
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
