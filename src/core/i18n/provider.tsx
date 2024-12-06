'use client';

import { NextIntlClientProvider } from "next-intl";
import { useState, useEffect } from "react";
import { getMessages } from "next-intl/server";

// Mesaj tipi
type MessagesType = Record<string, string>;

const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<MessagesType | null>(null);
  const [locale, setLocale] = useState<string>("en"); // Varsayılan olarak İngilizce dilini kullanıyoruz

  const loadMessages = async (locale: string) => {
    try {
      const fetchedMessages = await getMessages({ locale }); // doğru parametreyi geçiyoruz
      setMessages(fetchedMessages as MessagesType);
    } catch (error) {
      console.error("Mesajlar yüklenirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    loadMessages(locale); // Başlangıçta varsayılan dili yükle
  }, [locale]);

  
  return (
    <NextIntlClientProvider >
      {children}
    </NextIntlClientProvider>
  );
};

export { I18nProvider };
