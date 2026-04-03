/** Base GitHub Pages / Astro `base` — selalu diakhiri `/`. */
export function baseUrl(): string {
  const b = import.meta.env.BASE_URL;
  return b.endsWith('/') ? b : `${b}/`;
}

/** URL ke aset di `public/` (tanpa awalan slash di argument). */
export function assetUrl(pathFromPublic: string): string {
  const p = pathFromPublic.startsWith('/') ? pathFromPublic.slice(1) : pathFromPublic;
  return `${baseUrl()}${p}`;
}

/** Link internal ke halaman (segment kosong = beranda). */
export function pageUrl(segment: string): string {
  const base = baseUrl();
  return segment ? `${base}${segment}` : base;
}
