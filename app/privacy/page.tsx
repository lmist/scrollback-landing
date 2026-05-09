import Link from 'next/link';
import { ScrollbackMark } from '@/components/ScrollbackMark';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy — scrollback',
};

export default function PrivacyPage() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <Link href="/" className="landing-brand" aria-label="scrollback home">
          <ScrollbackMark size={22} />
          <span className="landing-brand-name">scrollback</span>
        </Link>
      </header>

      <main className="legal-page">
        <p className="eyebrow eyebrow--ink">Privacy</p>
        <h1 className="display">We don&rsquo;t collect your data.</h1>
        <div className="legal-body">
          <p>
            scrollback runs entirely on your Mac. Your saves, your searches, your history — none
            of it leaves your machine. There is no account, no sync server, and no database
            somewhere with your stuff in it.
          </p>

          <h2>What stays on your computer</h2>
          <ul>
            <li>Everything you save from Instagram, X, YouTube, and your browser</li>
            <li>Your classifications and search history</li>
            <li>Any notes or tags you add</li>
          </ul>
          <p>All of it lives in a single file on your disk. You own it. Move it, back it up, delete it — entirely your call.</p>

          <h2>What we never do</h2>
          <ul>
            <li>We don&rsquo;t track you</li>
            <li>We don&rsquo;t use cookies</li>
            <li>We don&rsquo;t sell anything about you</li>
            <li>We don&rsquo;t have ads</li>
            <li>We don&rsquo;t run analytics on your content</li>
          </ul>

          <h2>The one exception</h2>
          <p>
            If you use the AI search feature, your query and the relevant saved items are sent
            to the AI provider you chose (e.g. OpenAI). That&rsquo;s subject to their privacy
            policy. We don&rsquo;t store a copy on our end.
          </p>

          <h2>This website</h2>
          <p>
            This landing page has no tracking scripts, no analytics, and no cookies. We use
            Vercel to host it; their infrastructure logs basic request data (IP, timestamp) in
            the normal course of serving traffic.
          </p>

          <p className="legal-updated">Last updated May 2026.</p>
        </div>
      </main>

      <footer className="landing-foot">
        <span>scrollback &middot; made in lisbon &middot; 2026</span>
        <span>
          <Link href="/tos">Terms of service</Link>
        </span>
      </footer>
    </div>
  );
}
