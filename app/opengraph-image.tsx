import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata — picked up by Next 16's file-based metadata API.
export const alt = 'scrollback — a quiet home for the things you save';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens, kept in sync with /app/globals.css.
const BG = '#f6f7fb';        // bg, oklch(0.995 0.003 250)
const SURFACE = '#eef1f7';   // bg-elevated
const INK = '#224da3';       // brand blue, rgb(34,77,163)
const TEXT = '#27314a';      // text
const DIM = '#6f7891';       // text-dim
const RULE = '#dde0e7';      // border

export default async function Image() {
  // Inline the brand mark so the SVG is rendered locally without a network hop.
  const markSvg = await readFile(
    join(process.cwd(), 'public/scrollback-mark.svg'),
    'utf8',
  );
  const markDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(markSvg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BG,
          padding: '64px 72px',
          color: TEXT,
          position: 'relative',
        }}
      >
        {/* Top rule + tiny eyebrow, mirrors the site's editorial chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 18,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src={markDataUrl} width={44} height={48} alt="" />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 2,
                color: TEXT,
              }}
            >
              scrollback
            </div>
          </div>
          <div
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: DIM,
              display: 'flex',
            }}
          >
            § a quiet home for the things you save
          </div>
        </div>

        {/* Headline — accent word picked out in brand ink, since Geist has no italic */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            paddingTop: 48,
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -1,
              color: TEXT,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ display: 'flex' }}>stop losing</span>
            <span style={{ display: 'flex' }}>the internet you</span>
            <span style={{ display: 'flex', color: INK }}>already found.</span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 24,
              lineHeight: 1.45,
              color: DIM,
              maxWidth: 880,
              display: 'flex',
            }}
          >
            A calm, private home for everything you bookmark, save, like and forget —
            from Instagram, X, YouTube and your browser.
          </div>
        </div>

        {/* Spec strip — distilled from the hero "At a glance" panel */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: `1px solid ${RULE}`,
            fontSize: 16,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: DIM,
            background: SURFACE,
            margin: '0 -72px -64px',
            padding: '22px 72px 26px',
          }}
        >
          <span style={{ display: 'flex' }}>Stays on your Mac</span>
          <span style={{ display: 'flex' }}>·</span>
          <span style={{ display: 'flex' }}>No tracking, ever</span>
          <span style={{ display: 'flex' }}>·</span>
          <span style={{ display: 'flex' }}>Pay once</span>
          <span style={{ display: 'flex' }}>·</span>
          <span style={{ display: 'flex', color: INK }}>scrollback.xyz</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
