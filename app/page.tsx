import Link from 'next/link';
import { ScrollbackMark } from '@/components/ScrollbackMark';

const specRows = [
  { label: 'Brings together', value: '4 places' },
  { label: 'Sign in with', value: 'Google · X' },
  { label: 'Lives', value: 'On your Mac' },
  { label: 'Sorts your saves', value: 'Automatically' },
  { label: 'Ask anything', value: 'In plain English' },
  { label: 'Tracking', value: 'None, ever' },
  { label: 'Subscription', value: 'Pay once' },
];

const sourcesGrid = [
  {
    num: '01',
    title: 'Instagram saves',
    body: "Every post you've tapped the bookmark on. Captions, who made it, when you saved it. Right where you can find it.",
  },
  {
    num: '02',
    title: 'X bookmarks',
    body: 'Threads stitched back together so you read them the way they were written. Quotes and replies kept in context.',
  },
  {
    num: '03',
    title: 'YouTube Watch Later',
    body: "The growing list you keep meaning to get to. Renamed in human words so you can actually search what's in it.",
  },
  {
    num: '04',
    title: 'Your browser saves',
    body: 'The pages you keep going back to from Chrome. Filtered down to the ones that actually matter to you.',
  },
  {
    num: '05',
    title: 'Anything else you drop in',
    body: 'A link, a screenshot, a PDF, an image. Drag it onto scrollback and it joins the right pile by itself.',
  },
  {
    num: '06',
    title: 'Nothing you didn’t ask for',
    body: 'No friend graph. No suggested accounts. No “you might also like.” It only ever shows you your own saves.',
  },
];

const howGrid = [
  {
    num: '▸ gather',
    title: 'Sign in once',
    body: "Connect the accounts you want, and scrollback quietly catches up on everything you’ve saved. You can stop and resume any time.",
  },
  {
    num: '▸ sort',
    title: 'Sorted by feel',
    body: "Your saves are grouped by what they’re really about — knives, films, ideas, recipes. You can rename a group, split it, or merge it.",
  },
  {
    num: '▸ ask',
    title: 'Just ask',
    body: '“What did I save about kitchen knives last spring?” — and you get the actual posts, tweets and videos back, with the source on every answer.',
  },
];

const manifestoPoints = [
  {
    title: 'No second feed.',
    body: 'scrollback never tries to keep you here. It only helps you find what you already saved.',
  },
  {
    title: 'Stays on your Mac.',
    body: 'Your saves live in a single file on your computer. You can move it, back it up, or delete it whenever you want.',
  },
  {
    title: "You’re not the product.",
    body: 'No ads, no tracking, nothing sold on. Just an app you bought once.',
  },
  {
    title: 'Honest about limits.',
    body: 'If something breaks, we tell you. If a site changes, we say so. No magic.',
  },
];

// JSON-LD structured data — gives Google enough to render a rich brand card
// (logo, description, sameAs links) instead of the generic title/snippet pair.
const SITE_URL = 'https://scrollback.xyz';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#org`,
      name: 'scrollback',
      url: SITE_URL,
      logo: `${SITE_URL}/icons/scrollback-favicon.svg`,
      description:
        'A quiet home for the things you save — bookmarks from Instagram, X, YouTube and your browser, sorted automatically and asked in plain language.',
      // Add @-handles here as the brand picks them up; sameAs powers Google's
      // brand sidebar and entity disambiguation.
      sameAs: [] as string[],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}#app`,
      name: 'scrollback',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'macOS',
      description:
        'scrollback gathers everything you bookmark, save, like and forget — Instagram saves, X bookmarks, YouTube Watch Later, browser saves — into one private, searchable home on your Mac.',
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      publisher: { '@id': `${SITE_URL}#org` },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        // Replace with the real price once finalized; "0" + a freeTrial flag
        // would also be valid if there's a free tier.
        price: '0',
        availability: 'https://schema.org/PreOrder',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#site`,
      url: SITE_URL,
      name: 'scrollback',
      publisher: { '@id': `${SITE_URL}#org` },
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="landing">
      {/* Structured data — rendered inline so Google sees it on the first byte. */}
      <script
        type="application/ld+json"
        // Stringify here rather than dangerouslySetInnerHTML+JSON.stringify
        // gymnastics; same effect, slightly tidier.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Nav */}
      <header className="landing-nav">
        <a href="/" className="landing-brand" aria-label="scrollback home">
          <ScrollbackMark size={22} />
          <span className="landing-brand-name">scrollback</span>
        </a>
        <nav className="landing-nav-links" aria-label="Site navigation">
          <a href="#how">How it works</a>
          <a href="#sources">What it pulls in</a>
          <a href="#why">Why we made it</a>
        </nav>
        <button className="btn btn--sm" type="button">
          Open the app →
        </button>
      </header>

      {/* Hero */}
      <section className="landing-hero" aria-labelledby="hero-heading">
        <div className="landing-hero-left">
          <p className="eyebrow eyebrow--ink">a quiet home for the things you save</p>
          <h1 id="hero-heading" className="display">
            stop losing
            <br />
            the internet you
            <br />
            <em>already found.</em>
          </h1>
          <p className="landing-hero-body">
            scrollback is a calm, private home for everything you bookmark, save, like and forget.
            It quietly gathers your saves from Instagram, X, YouTube and your browser, sorts them
            by what they actually are, and lets you ask questions in plain language. No feed.
            No suggestions. Just the things you already chose, easy to find again.
          </p>
          <div className="landing-hero-actions">
            <button className="btn btn--lg" type="button">
              Download for Mac
            </button>
            <button className="btn btn--ghost btn--lg" type="button">
              See a tour
            </button>
          </div>
          <div className="landing-hero-meta">
            <span>Stays on your Mac</span>
            <span>&middot;</span>
            <span>For Apple Silicon &amp; Intel</span>
            <span>&middot;</span>
            <span>Small, fast, free to try</span>
          </div>
        </div>

        <aside className="landing-hero-spec" aria-label="At a glance">
          <p className="eyebrow">At a glance</p>
          <div>
            {specRows.map((row) => (
              <div key={row.label} className="landing-hero-spec-row">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Sources */}
      <section className="landing-section" id="sources" aria-labelledby="sources-heading">
        <p className="eyebrow eyebrow--ink">&sect;01 &mdash; what it pulls in</p>
        <h2 id="sources-heading">
          One place
          <br />
          for the good stuff.
        </h2>
        <div className="landing-grid-3">
          {sourcesGrid.map((item) => (
            <div key={item.num}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="landing-section" id="how" aria-labelledby="how-heading">
        <p className="eyebrow eyebrow--ink">&sect;02 &mdash; how it works</p>
        <h2 id="how-heading">Gather. Sort. Ask.</h2>
        <div className="landing-grid-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {howGrid.map((item) => (
            <div key={item.num}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="landing-manifesto" id="why" aria-labelledby="manifesto-heading">
        <p className="landing-manifesto-quote" id="manifesto-heading">
          &ldquo;The whole point of saving something was so you&rsquo;d{' '}
          <em>come back to it.</em> Most of what we save, we never do. We made scrollback because
          we were tired of losing the things we&rsquo;d already chosen.&rdquo;
        </p>
        <div className="landing-manifesto-aside">
          {manifestoPoints.map((point) => (
            <p key={point.title}>
              <strong>{point.title}</strong>
              {point.body}
            </p>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="landing-cta" aria-label="Download call to action">
        <h2>
          Stop scrolling forward.
          <br />
          <em>Scroll back.</em>
        </h2>
        <div className="landing-cta-actions">
          <button className="btn btn--lg" type="button">
            Download for Mac
          </button>
          <button className="btn btn--ghost btn--lg" type="button">
            Windows &amp; Linux &middot; soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-foot">
        <span>scrollback &middot; made in lisbon &middot; 2026</span>
        <span>
          <Link href="/privacy" style={{ textDecoration: 'none' }}>Privacy</Link>
          {' · '}
          <Link href="/tos" style={{ textDecoration: 'none' }}>Terms</Link>
          {' · for the people who saved it for later'}
        </span>
      </footer>
    </div>
  );
}
