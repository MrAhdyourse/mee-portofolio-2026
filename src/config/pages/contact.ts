import type { PageMeta } from '../types';

export const contactMeta: PageMeta = {
  title: 'Kontak | Ahdi Aghni',
  description:
    'Hubungi Ahdi Aghni melalui email, WhatsApp, atau GitHub untuk diskusi kerja sama atau dukungan IT.',
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
      'Untuk peluang kerja, proyek IT & administrasi, atau pertanyaan teknis — silakan hubungi melalui saluran di bawah. Saya berdomisili di Cirebon-Indramayu, Jawa Barat.',
  },
  links: [
    {
      label: 'Email',
      href: 'mailto:ahdi.aghnii@gmail.com',
      variant: 'primary',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/6283867055809',
      variant: 'secondary',
      external: true,
    },
    {
      label: 'Telepon',
      href: 'tel:+6283867055809',
      variant: 'secondary',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/MrAhdyourse',
      variant: 'ghost',
      external: true,
    },
  ] satisfies ReadonlyArray<ContactLink>,
} as const;
