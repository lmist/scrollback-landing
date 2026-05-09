import type { MetadataRoute } from 'next';

// Web App Manifest — Next emits this at /manifest.webmanifest. Surfaces in
// "Add to Home Screen" prompts on iOS/Android and PWA installers on desktop.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'scrollback',
    short_name: 'scrollback',
    description:
      'A quiet home for the things you save. Gathers your bookmarks from Instagram, X, YouTube and your browser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f7fb',
    theme_color: '#f6f7fb',
    categories: ['productivity', 'utilities'],
    icons: [
      { src: '/icons/icon-master.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icons/icon-48.png', sizes: '48x48', type: 'image/png' },
      { src: '/icons/icon-128.png', sizes: '128x128', type: 'image/png' },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
