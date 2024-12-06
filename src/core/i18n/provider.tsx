'use client'; // Add this line to mark the component as a Client Component

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { getMessages } from "next-intl/server";

// Define MessagesType to match the structure of the returned messages
type MessagesType = Record<string, string>;

const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<MessagesType | null>(null);

  useEffect(() => {
    // Fetch the messages asynchronously
    const fetchMessages = async () => {
      const fetchedMessages = await getMessages();
      setMessages(fetchedMessages as MessagesType); // Explicitly cast the fetched messages to the expected type
    };

    fetchMessages();
  }, []);

  if (!messages) {
    return <div>Loading...</div>; // Loading state while messages are being fetched
  }

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export { I18nProvider };