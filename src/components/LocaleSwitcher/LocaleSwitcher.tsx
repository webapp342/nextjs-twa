'use client';

import { Select } from '@telegram-apps/telegram-ui';
import { FC, useEffect, useState } from 'react';
import { localesMap } from '@/core/i18n/config';  // Yerel dillerin listesi
import { setLocale } from '@/core/i18n/locale';  // Locale'ı güncelleyen fonksiyon

export const LocaleSwitcher: FC = () => {
  const [locale, setLocaleState] = useState<string>('en'); // Başlangıç dilini 'en' olarak ayarlıyoruz

  // Dil değişimi olduğunda locale'ı güncelliyoruz
  const onChange = (value: string) => {
    setLocaleState(value);  // Dil değişimini local state'e kaydediyoruz
    setLocale(value);  // Dil değişimini cookie ya da localStorage'a kaydediyoruz
  };

  return (
    <Select value={locale} onChange={({ target }) => onChange(target.value)}>
      {localesMap.map((locale) => (
        <option key={locale.key} value={locale.key}>
          {locale.title}
        </option>
      ))}
    </Select>
  );
};
