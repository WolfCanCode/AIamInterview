import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="Iterview" />
        <meta
          property="og:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/app/logo.png" />
        <meta property="og:url" content="https://iterview-ai.vercel.app" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Iterview" />
        <meta
          name="twitter:description"
          content="An AI-powered web application to practice coding interviews across multiple domains."
        />
        <meta name="twitter:image" content="/app/favicon.ico" />
        <meta property="og:site_name" content="Iterview" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
