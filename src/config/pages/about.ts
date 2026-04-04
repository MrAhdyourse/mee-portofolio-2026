import type { PageMeta } from '../types';

export const aboutMeta: PageMeta = {
  title: 'Tentang | Ahdi Aghni',
  description:
    'Profil, nilai kerja, keahlian IT & administrasi, serta riwayat pengalaman — selaras dengan CV profesional.',
  socialImage: 'og-banner.svg',
};

export const aboutContent = {
  intro: {
    title: 'Profil profesional',
    paragraphs: [
      'Saya tenaga profesional di bidang IT dan administrasi dengan pengalaman kerja lebih dari 2,5 tahun. Lulusan SMKS NU Indramayu (2022) jurusan Teknik Komputer & Jaringan, dengan fondasi kuat di sistem komputer, jaringan, dan administrasi.',
      'Keahlian saya meliputi manajemen basis data digital, dukungan teknis dan troubleshooting, serta digitalisasi sistem administrasi. Saya terbiasa bekerja detail di depan komputer, menyusun laporan berkala, dan memberikan layanan yang solutif. Berdomisili di Cirebon-Indramayu dan terbuka berkontribusi untuk efisiensi operasional organisasi.',
    ],
  },
  principles: {
    title: 'Nilai yang saya jaga',
    items: [
      {
        title: 'Pemecahan masalah',
        text: 'Menganalisis gangguan teknis dan administratif secara sistematis hingga tuntas.',
      },
      {
        title: 'Kepuasan pengguna',
        text: 'Mendengarkan kebutuhan pengguna internal maupun eksternal dan merespons dengan jelas.',
      },
      {
        title: 'Kerja sama & ketelitian',
        text: 'Selaras dengan tim, konsisten dalam dokumentasi, dan cekatan dalam operasional harian.',
      },
    ],
  },
  skills: {
    title: 'Keahlian utama',
    groups: [
      {
        label: 'IT & sistem',
        items: [
          'Network administrator',
          'Digitalisasi sistem',
          'Software specialist',
          'Dukungan teknis & troubleshooting',
        ],
      },
      {
        label: 'Administrasi & perkantoran',
        items: [
          'Administrasi perkantoran',
          'Pengelolaan arsip',
          'Microsoft Office',
          'Manajemen basis data digital',
        ],
      },
    ],
  },
  experience: {
    title: 'Pengalaman kerja',
    items: [
      {
        role: 'IT Support',
        org: 'LP3I College Indramayu',
        period: 'November 2025 – Maret 2026',
        points: [
          'Mengembangkan dan mengelola ekosistem administrasi berbasis digital untuk mempercepat alur kerja dan menjaga integritas data.',
          'Dukungan teknis operasional harian: troubleshooting hardware, software, dan jaringan untuk staf dan mahasiswa.',
        ],
      },
      {
        role: 'Administrator',
        org: 'SMK NU Indramayu',
        period: 'Februari 2025 – Agustus 2025',
        points: [
          'Mengelola dan mengintegrasikan basis data siswa ke sistem digital untuk akurasi dan aksesibilitas data.',
          'Mengembangkan platform E-learning untuk mendukung pembelajaran online dan distribusi materi.',
          'Mengoptimalkan dan mengamankan infrastruktur digital sekolah, termasuk jaringan serta perawatan hardware/software.',
        ],
      },
      {
        role: 'Staf IT',
        org: 'Indolocal Network',
        period: 'Juli 2023 – Desember 2024',
        points: [
          'Mengoperasikan dan memantau sistem payment gateway untuk transaksi digital yang lancar dan aman secara real-time.',
          'Menyusun laporan kinerja sistem berkala (mingguan & bulanan) untuk evaluasi teknis manajemen.',
          'Memberikan dukungan teknis responsif untuk isu sistem dan menangani umpan balik pelanggan.',
        ],
      },
    ],
  },
} as const;
