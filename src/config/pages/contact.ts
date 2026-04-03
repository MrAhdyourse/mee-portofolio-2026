import type { PageMeta } from '../types';

export const contactMeta: PageMeta = {
  title: 'Kontak | Portofolio',
  description:
    'Saluran untuk kolaborasi, freelance, atau diskusi santai — ganti tautan dengan akun asli Anda.',
  socialImage: 'og-banner.svg',
};

export type ContactLinkVariant = 'primary' | 'secondary' | 'ghost';

export type ContactLink = {
  label: string;
  href: string;
  variant: ContactLinkVariant;
  external?: boolean;
};

export const contactContent = {
  section: {
    title: 'Mari berbicara',
    lead:
      'Ceritakan singkat kebutuhan atau ide — ganti email dan URL di bawah agar mengarah ke Anda. Tombol menyalin email bisa ditambahkan nanti jika perlu.',
  },
  /** Ganti href menjadi milik Anda; urutan = tampilan di halaman. */
  links: [
    {
      label: 'Email',
      href: 'mailto:ganti@email.com',
      variant: 'primary',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/MrAhdyourse',
      variant: 'secondary',
      external: true,
    },
    {
      label: 'LinkedIn (ganti URL)',
      href: 'https://www.linkedin.com/in/ganti-profesional/',
      variant: 'ghost',
      external: true,
    },
  ] satisfies ReadonlyArray<ContactLink>,
} as const;
