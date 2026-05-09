import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'scrollback — a quiet home for the things you save',
  description:
    'scrollback is a calm, private home for everything you bookmark, save, like and forget. Gather your saves from Instagram, X, YouTube and your browser.',
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
