export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Portofolio web ini',
    description:
      'Situs portofolio statis dengan Astro & Tailwind: multi-halaman, mode terang/gelap, pratinjau CV, unduhan PDF, dan deploy otomatis ke GitHub Pages.',
    tags: ['Astro', 'Tailwind', 'TypeScript', 'GitHub Pages'],
    repo: 'https://github.com/MrAhdyourse/mee-portofolio-2026',
  },
  {
    title: 'Sistem Manajemen Sekolah',
    description:
      'Platform manajemen sekolah terintegrasi untuk administrasi akademik, data siswa, dan pelaporan. Dibangun dengan fokus pada efisiensi dan kemudahan penggunaan.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Administrasi'],
    href: '#',
  },
  {
    title: 'Digitalisasi & basis data',
    description:
      'Pengalaman mengintegrasikan data administrasi dan akademik ke sistem digital, menjaga akurasi entri dan akses yang terkontrol untuk tim.',
    tags: ['Administrasi', 'Basis data', 'IT Support'],
    href: '#',
  },
  {
    title: 'Infrastruktur & E-learning',
    description:
      'Pendukung pengembangan platform pembelajaran online dan perawatan infrastruktur jaringan serta perangkat di lingkungan pendidikan.',
    tags: ['Jaringan', 'E-learning', 'Hardware'],
    href: '#',
  },
];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
).sort((a, b) => a.localeCompare(b));
