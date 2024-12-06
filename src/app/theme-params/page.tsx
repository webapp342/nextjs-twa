'use client';

import { useSignal, themeParams } from '@telegram-apps/sdk-react';
import { List } from '@telegram-apps/telegram-ui';

import { DisplayData } from '@/components/DisplayData/DisplayData';
import { Page } from '@/components/Page';
import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';  // Import your BottomNavbar

export default function ThemeParamsPage() {
  const tp = useSignal(themeParams.state);

  // Ensure bg and text are strings, providing fallback values
  const theme = {
    bg: tp.bg || '#ffffff',  // Default background color (white)
    text: tp.text || '#000000',  // Default text color (black)
  };

  return (
    <Page>
      <List>
        <DisplayData
          rows={
            Object
              .entries(tp)
              .map(([title, value]) => ({
                title: title
                  .replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)
                  .replace(/background/, 'bg'),
                value,
              }))
          }
        />
      </List>

      {/* Pass the theme as a prop with fallback values */}
      <BottomNavbar theme={theme} />
    </Page>
  );
};
