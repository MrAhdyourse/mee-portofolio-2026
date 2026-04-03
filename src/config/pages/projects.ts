import type { PageMeta } from '../types';

export const projectsMeta: PageMeta = {
  title: 'Proyek | Portofolio',
  description:
    'Studi kasus, aplikasi, dan eksperimen — filter menurut tag. Data tiap kartu ada di src/data/projects.ts.',
  socialImage: 'og-banner.svg',
};

export const projectsPageContent = {
  section: {
    eyebrow: 'Karya terpilih',
    title: 'Proyek',
    lead:
      'Susun narasi per proyek di `src/data/projects.ts` (judul, deskripsi, tag, tautan). Filter di bawah otomatis mengikuti tag yang Anda pakai.',
  },
  emptyFilterMessage: 'Tidak ada proyek dengan tag ini.',
} as const;
