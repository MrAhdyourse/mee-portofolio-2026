/** Identitas item navigasi — dipakai Header + penanda halaman aktif. */
export type NavId = 'home' | 'about' | 'projects' | 'contact';

export type NavItem = {
  id: NavId;
  label: string;
  /** Segmen URL setelah base GitHub Pages; kosong = beranda. */
  segment: string;
};

export type SiteConfig = {
  brand: { name: string; shortTagline: string };
  person: { name: string; jsonLdSameAs: string[] };
  nav: NavItem[];
  profile: { image: string; imageAlt: string };
  /** File di folder `public/` (contoh: cv/CV-Anda.pdf). */
  cv: { file: string; label: string };
  footer: {
    note: string;
    repoUrl: string;
    repoLabel: string;
  };
};

export type PageMeta = {
  title: string;
  description: string;
  socialImage?: string;
};
