import Link from 'next/link';
import { ScrollbackMark } from '@/components/ScrollbackMark';
import type { Metadata } from 'next';

// Bare title; the root layout's `%s · scrollback` template wraps it.
export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TosPage() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <Link href="/" className="landing-brand" aria-label="scrollback home">
          <ScrollbackMark size={22} />
          <span className="landing-brand-name">scrollback</span>
        </Link>
      </header>

      <main className="legal-page">
        <p className="eyebrow eyebrow--ink">Terms of Service</p>
        <h1 className="display">Pretty simple, really.</h1>
        <div className="legal-body">
          <p>
            You pay once, you get the app. No subscription, no gotchas. Here&rsquo;s the full
            deal in plain language.
          </p>

          <h2>What you can do</h2>
          <ul>
            <li>Use scrollback on your own Mac for personal use</li>
            <li>Move, copy, or delete your data file whenever you want</li>
            <li>Get a refund within 30 days if it&rsquo;s not for you, no questions asked</li>
          </ul>

          <h2>What you can&rsquo;t do</h2>
          <ul>
            <li>Redistribute or resell the app</li>
            <li>Use it to scrape or bulk-collect other people&rsquo;s content at scale</li>
            <li>Reverse-engineer the binary</li>
          </ul>

          <h2>The app is provided as-is</h2>
          <p>
            We try hard to keep it working, but social platforms change their interfaces without
            warning and we can&rsquo;t always catch up instantly. We&rsquo;re not liable if a
            source breaks or data is lost. Back up your file.
          </p>

          <h2>That&rsquo;s it</h2>
          <p>
            No class action waiver buried in paragraph 47. No mandatory arbitration. No wall of
            legalese designed to confuse you. If something feels unfair, email us and we&rsquo;ll
            sort it out like adults.
          </p>

          <p className="legal-updated">Last updated May 2026.</p>
        </div>
      </main>

      <footer className="landing-foot">
        <span>scrollback &middot; made in lisbon &middot; 2026</span>
        <span>
          <Link href="/privacy">Privacy policy</Link>
        </span>
      </footer>
    </div>
  );
}
