import type { PageMeta } from '../types';

export const homeMeta: PageMeta = {
  title: 'Beranda | Ahdi Aghni — IT Administrator',
  description:
    'Ahdi Aghni — IT Administrator di Cirebon-Indramayu. Spesialis administrasi digital, basis data, jaringan, dan dukungan teknis. Lihat pratinjau CV dan proyek.',
  socialImage: 'og-banner.svg',
};

export const homeContent = {
  hero: {
    eyebrow: 'IT Administrator · Cirebon-Indramayu, Jawa Barat',
    headlineBefore: 'Halo — saya ',
    headlineAccent: 'Ahdi Aghni',
    headlineAfter: ', tenaga IT & administrasi yang fokus pada sistem digital, data, dan operasional yang rapi.',
    lead:
      'Lebih dari 2,5 tahun berpengalaman mendukung infrastruktur IT, digitalisasi administrasi, dan layanan teknis. Terbiasa dengan basis data, jaringan, Microsoft Office, serta dokumentasi dan pelaporan yang akurat.',
    primaryCta: { label: 'Lihat proyek', segment: 'proyek' as const },
    secondaryCta: { label: 'Tentang & pengalaman', segment: 'tentang' as const },
  },
  /** Pratinjau CV di samping hero — teks bantuan singkat (opsional). */
  cvPreviewCaption: 'Pratinjau CV',
  pillars: [
    {
      title: 'Administrasi digital',
      body: 'Digitalisasi arsip, basis data, dan alur kerja perkantoran agar data rapi dan mudah diaudit.',
      icon: '◆',
    },
    {
      title: 'IT & jaringan',
      body: 'Dukungan teknis, troubleshooting, serta perawatan infrastruktur hardware, software, dan jaringan.',
      icon: '◇',
    },
    {
      title: 'Kolaborasi',
      body: 'Komunikasi jelas dengan tim dan pengguna akhir; orientasi pada solusi dan kepuasan layanan.',
      icon: '○',
    },
  ],
} as const;
