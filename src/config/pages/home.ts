import type { PageMeta } from '../types';

/** SEO + Open Graph khusus halaman beranda. */
export const homeMeta: PageMeta = {
  title: 'Beranda | Portofolio',
  description:
    'Perkenalan singkat, fokus kerja, dan ajakan untuk melihat proyek — portofolio web statis yang cepat dan responsif.',
  socialImage: 'og-banner.svg',
};

export const homeContent = {
  hero: {
    eyebrow: 'Portofolio · Siap Anda isi',
    headlineBefore: 'Halo — saya ',
    headlineAccent: 'Nama Anda',
    headlineAfter: ', dan ini ruang untuk narasi profesional Anda.',
    lead:
      'Ganti teks ini dengan satu paragraf kuat: peran, niche, atau masalah yang Anda selesaikan. Calon klien/rekruter biasanya baca ini dalam hitungan detik.',
    /** Tombol utama menuju halaman proyek (path relatif dari situs). */
    primaryCta: { label: 'Lihat proyek', segment: 'proyek' as const },
    secondaryCta: { label: 'Tentang saya', segment: 'tentang' as const },
  },
  /** Tiga kartu ringkas di bawah hero — ganti judul & isi. */
  pillars: [
    {
      title: 'Fokus',
      body: 'Satu kalimat tentang spesialisasi Anda (mis. frontend, full-stack, UX).',
      icon: '◆',
    },
    {
      title: 'Cara kerja',
      body: 'Singkat: komunikasi, iterasi, dokumentasi, atau praktik tim yang Anda jaga.',
      icon: '◇',
    },
    {
      title: 'Stack & tools',
      body: 'Contoh: Astro, TypeScript, Tailwind, Git, CI — sesuaikan dengan skill nyata.',
      icon: '○',
    },
  ],
} as const;
