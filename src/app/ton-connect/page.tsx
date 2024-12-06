'use client';

import { AppRoot, Cell, List, Section } from '@telegram-apps/telegram-ui';

const cellsTexts = ['Chat Settings', 'Data and Storage', 'Devices'];

const page = () => (
  <AppRoot>
    <List>
      <Section header="Header for the section" footer="Footer for the section">
        {cellsTexts.map((cellText, index) => (
          <Cell key={index}>{cellText}</Cell>
        ))}
      </Section>
    </List>
  </AppRoot>
);

export default page;
