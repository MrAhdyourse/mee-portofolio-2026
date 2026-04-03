import type { SiteConfig } from './types';

/**
 * Konten global: navigasi, brand, foto profil, CV, footer.
 * Tiap halaman punya file sendiri di `src/config/pages/`.
 */
export const site: SiteConfig = {
  brand: {
    name: 'Nama Anda',
    shortTagline: 'Portofolio',
  },
  person: {
    name: 'Nama Anda',
    jsonLdSameAs: [
      'https://github.com/MrAhdyourse',
      // Tambahkan LinkedIn, Behance, dll.
    ],
  },
  nav: [
    { id: 'home', label: 'Beranda', segment: '' },
    { id: 'about', label: 'Tentang', segment: 'tentang' },
    { id: 'projects', label: 'Proyek', segment: 'proyek' },
    { id: 'contact', label: 'Kontak', segment: 'kontak' },
  ],
  profile: {
    image: 'images/profile-placeholder.svg',
    imageAlt: 'Foto profil — ganti dengan foto Anda di public/images/',
  },
  cv: {
    /** Taruh PDF asli di `public/cv/` dan samakan nama file di sini. */
    file: 'cv/CV-NamaAnda.pdf',
    label: 'Unduh CV',
  },
  footer: {
    note: 'Dibangun dengan Astro, TypeScript & Tailwind — deploy GitHub Pages.',
    repoUrl: 'https://github.com/MrAhdyourse/mee-portofolio-2026',
    repoLabel: 'Sumber di GitHub',
  },
};
