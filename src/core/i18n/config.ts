export const defaultLocale = 'en';

export const timeZone = 'Europe/Amsterdam';

export const locales = [defaultLocale, 'ru', 'tr'] as const;

export const localesMap = [
  { key: 'en', title: 'English' },
  { key: 'ru', title: 'Русский' },
  { key: 'tr', title: 'Türkçe' },
];
