import type { PageMeta } from '../types';

export const projectsMeta: PageMeta = {
  title: 'Proyek | Ahdi Aghni',
  description:
    'Ringkasan kontribusi di bidang IT, digitalisasi administrasi, dan infrastruktur — filter menurut tag.',
  socialImage: 'og-banner.svg',
};

export const projectsPageContent = {
  section: {
    eyebrow: 'Ringkasan kontribusi',
    title: 'Proyek & fokus kerja',
    lead:
      'Kartu berikut merangkum arah kerja dan proyek yang relevan dengan pengalaman IT & administrasi. Detail tiap entri dapat diedit di src/data/projects.ts.',
  },
  emptyFilterMessage: 'Tidak ada proyek dengan tag ini.',
} as const;
