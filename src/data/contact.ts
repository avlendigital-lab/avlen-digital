export const CONTACT = {
  email: 'avlendigital@gmail.com',
  instagramHandle: '@avlendigital',
  instagramUrl: 'https://www.instagram.com/avlendigital',
} as const;

export const CONTACT_LINKS = {
  email: `mailto:${CONTACT.email}`,
  instagram: CONTACT.instagramUrl,
} as const;
