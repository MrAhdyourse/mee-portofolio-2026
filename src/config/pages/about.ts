import type { PageMeta } from '../types';

export const aboutMeta: PageMeta = {
  title: 'Tentang | Portofolio',
  description:
    'Latar belakang, nilai yang diutamakan, dan keahlian — disusun untuk memudahkan pembaca mengenal Anda.',
  socialImage: 'og-banner.svg',
};

export const aboutContent = {
  intro: {
    title: 'Cerita singkat',
    paragraphs: [
      'Paragraf pertama: siapa Anda, apa yang Anda kerjakan sekarang, dan arah karier yang ingin ditonjolkan. Boleh formal atau hangat — disesuaikan audiens.',
      'Paragraf kedua: pencapaian, lingkungan kerja yang Anda sukai, atau proyek yang membentuk gaya profesional Anda.',
    ],
  },
  principles: {
    title: 'Nilai yang saya jaga',
    items: [
      {
        title: 'Klaritas',
        text: 'Antarmuka dan komunikasi yang mudah dipahami, bukan sekadar tampil rumit.',
      },
      {
        title: 'Konsistensi',
        text: 'Pola desain dan kode yang bisa dirawat bersama tim dalam jangka panjang.',
      },
      {
        title: 'Akses & performa',
        text: 'Produk yang dipakai banyak orang harus ringan dan dijangkau sebanyak mungkin.',
      },
    ],
  },
  skills: {
    title: 'Keahlian (placeholder)',
    /** Grup skill — ganti label dan item sesuai CV Anda. */
    groups: [
      {
        label: 'Frontend',
        items: ['HTML & semantik', 'CSS / Tailwind', 'TypeScript', 'Astro / React (opsional)'],
      },
      {
        label: 'Proses',
        items: ['Git & review', 'Desain responsif', 'A11y dasar', 'Deploy & CI'],
      },
    ],
  },
} as const;
