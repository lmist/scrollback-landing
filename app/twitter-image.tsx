// Twitter / X uses the same 1200x630 summary_large_image card as Open Graph.
// We re-export the OG generator so X has its own URL (separate cache key on
// twitter's side) without us having to maintain two image components.
export {
  default,
  alt,
  size,
  contentType,
} from './opengraph-image';
