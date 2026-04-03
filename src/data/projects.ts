export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

/** Ganti dengan proyek Anda; daftar ini dipakai section Proyek + filter tag. */
export const projects: Project[] = [
  {
    title: 'mee-portofolio-2026',
    description:
      'Situs portofolio statis dengan Astro & Tailwind; deploy otomatis ke GitHub Pages.',
    tags: ['Astro', 'Tailwind', 'GitHub Pages'],
    repo: 'https://github.com/MrAhdyourse/mee-portofolio-2026',
  },
  {
    title: 'Contoh: API layanan',
    description:
      'Ganti dengan studi kasus singkat: masalah yang diselesaikan, pola integrasi, dan bagaimana Anda menjaga keamanan atau performa.',
    tags: ['Backend', 'API'],
    href: '#',
  },
  {
    title: 'Contoh: Dashboard internal',
    description:
      'Ganti dengan cerita desain sistem, komponen UI, aksesibilitas, atau bagaimana data ditampilkan untuk pengguna akhir.',
    tags: ['Frontend', 'UI'],
    href: '#',
  },
];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort((a, b) => a.localeCompare(b));
