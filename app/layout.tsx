import '@/app/globals.css';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

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
  title: 'AI am Interview',
  description:
    'An AI-powered web application to practice coding interviews across multiple domains.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'AI am Interview',
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
    'apple-mobile-web-app-title': 'AI am Interview',
  },
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta property="og:title" content="AI am Interview" />
        <meta
          property="og:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://aiminterview.vercel.app/logo.jpg"
        />
        <meta property="og:url" content="https://aiminterview.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="AI am Interview" />
        <meta
          name="twitter:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta property="og:site_name" content="AI am Interview" />
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
        <style>{`
          /* Custom iOS install prompt styling */
          #ios-prompt {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 14px;
            padding: 16px 24px;
            color: white;
            font-size: 15px;
            text-align: center;
            z-index: 9999;
            width: 90%;
            max-width: 320px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            animation: slideUp 0.3s ease-out;
          }

          #ios-prompt .icon {
            font-size: 24px;
            margin-bottom: 8px;
          }

          #ios-prompt .message {
            margin-bottom: 12px;
            line-height: 1.4;
          }

          #ios-prompt .steps {
            font-size: 13px;
            opacity: 0.9;
          }

          @keyframes slideUp {
            from {
              transform: translate(-50%, 100%);
              opacity: 0;
            }
            to {
              transform: translate(-50%, 0);
              opacity: 1;
            }
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Show custom prompt for iOS devices
              if (
                navigator.standalone === false &&
                navigator.userAgent.match(/iPhone|iPad|iPod/) &&
                !sessionStorage.getItem('installPromptShown')
              ) {
                setTimeout(() => {
                  const prompt = document.createElement('div');
                  prompt.id = 'ios-prompt';
                  prompt.innerHTML = '<div class="icon">⭐️</div><div class="message">Install AII for the best experience</div><div class="steps">Tap Share → Add to Home Screen</div>';
                  document.body.appendChild(prompt);
                  
                  // Hide prompt after 10 seconds
                  setTimeout(() => {
                    prompt.style.display = 'none';
                  }, 10000);
                  
                  // Don't show again in this session
                  sessionStorage.setItem('installPromptShown', 'true');
                }, 2000);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
