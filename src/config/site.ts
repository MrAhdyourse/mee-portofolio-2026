import type { SiteConfig } from './types';

/**
 * Konten global: navigasi, brand, pratinjau CV (gambar), unduhan PDF, footer.
 * Narasi per halaman: `src/config/pages/`.
 */
export const site: SiteConfig = {
  brand: {
    name: 'Ahdi Aghni',
    shortTagline: 'IT Administrator',
  },
  person: {
    name: 'Ahdi Aghni',
    jsonLdSameAs: ['https://github.com/MrAhdyourse'],
  },
  nav: [
    { id: 'home', label: 'Beranda', segment: '' },
    { id: 'about', label: 'Tentang', segment: 'tentang' },
    { id: 'projects', label: 'Proyek', segment: 'proyek' },
    { id: 'contact', label: 'Kontak', segment: 'kontak' },
  ],
  profile: {
    /** Pratinjau visual CV (PNG penuh) — ditampilkan dengan object-contain di beranda. */
    image: 'images/CV-IMAGE.jpg',
    imageAlt:
      'Pratinjau CV Ahdi Aghni — IT Administrator, pengalaman di sistem digital, jaringan, dan administrasi.',
  },
  cv: {
    file: 'cv/CV-AHDI.pdf',
    label: 'Unduh CV',
  },
  footer: {
    note: 'Portofolio web — Astro, TypeScript & Tailwind · deploy GitHub Pages.',
    repoUrl: 'https://github.com/MrAhdyourse/mee-portofolio-2026',
    repoLabel: 'Sumber di GitHub',
  },
};
