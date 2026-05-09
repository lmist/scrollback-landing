import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

// Resolve the canonical site origin once. In Vercel production we trust the
// project's production URL; preview deployments fall through to the public site
// so previews don't poison Open Graph caches with branch URLs.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://scrollback.xyz');

// Browser-tab title stays short — just the wordmark next to the favicon.
// Social cards get the hero hook so the unfurl reads like the page does.
const tabTitle = 'scrollback';
const socialTitle = 'scrollback — stop losing the internet you already found.';
const description =
  'scrollback is a calm, private home for everything you bookmark, save, like and forget. Gather your saves from Instagram, X, YouTube and your browser, sorted automatically and asked in plain language.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: tabTitle,
    // Per-page <title> appears as "Page · scrollback".
    template: '%s · scrollback',
  },
  description,
  applicationName: 'scrollback',
  authors: [{ name: 'scrollback' }],
  creator: 'scrollback',
  publisher: 'scrollback',
  keywords: [
    'scrollback',
    'bookmark manager',
    'save for later',
    'instagram saves',
    'x bookmarks',
    'twitter bookmarks',
    'youtube watch later',
    'personal knowledge graph',
    'private bookmarks',
    'mac app',
  ],
  alternates: {
    canonical: '/',
  },
  // Phone numbers, addresses and emails should not be auto-linkified by iOS Safari.
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    siteName: 'scrollback',
    title: socialTitle,
    description,
    url: '/',
    locale: 'en_US',
    // Images are emitted by app/opengraph-image.tsx — no need to declare them here.
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description,
    creator: '@scrollback',
    // Images emitted by app/twitter-image.tsx.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Icons are auto-emitted from app/favicon.ico, app/icon.png, app/apple-icon.png.
  // We add the SVG mark and rasterized 192/512 entries so PWA installers and
  // browsers that prefer scalable icons get the crisp version.
  icons: {
    icon: [
      // Transparent, tightly-cropped mark. SVG first so capable browsers get
      // the scalable version; PNG fallbacks for the rest.
      { url: '/icons/scrollback-favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  category: 'productivity',
  other: {
    // Pinned-tab icon for Safari (still honored by some installs even though
    // the meta tag is officially deprecated; harmless if ignored).
    'apple-mobile-web-app-title': 'scrollback',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#f6f7fb' },
  ],
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
