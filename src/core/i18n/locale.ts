//use server is required
"use server";

import { cookies } from 'next/headers'; // Next.js cookies API

const COOKIE_NAME = 'NEXT_LOCALE';

// Kullanıcının seçtiği dil değerini cookie'ye kaydetme
const setLocale = (locale: string) => {
  cookies().set(COOKIE_NAME, locale);
};

// Kullanıcının dilini almak için cookie'den okuma
const getLocale = () => {
  return cookies().get(COOKIE_NAME)?.value || 'en'; // Varsayılan dil 'en' olacak
};

export { setLocale, getLocale };
