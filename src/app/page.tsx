'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/ton.svg';

export default function Home() {
  const t = useTranslations('i18n');  // Get translations for 'i18n'

  return (
    <Page back={false}>
      <List>
        <Section
          header={t('featuresHeader')}  // Translate header
          footer={t('featuresFooter')}  // Translate footer
        >
          <Link href="/ton-connect">
            <Cell
              before={<Image src={tonSvg} alt={t('tonLogoAlt')} />}  // Translated alt text
              subtitle={t('connectWallet')}  // Translate subtitle
            >
              {t('tonConnect')} 
            </Cell>
          </Link>
        </Section>

        <Section
          header={t('launchDataHeader')}  // Translate header
          footer={t('launchDataFooter')}  // Translate footer
        >
          <Link href="/init-data">
            <Cell subtitle={t('initDataSubtitle')}>
              {t('initData')}
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle={t('launchParamsSubtitle')}>
              {t('launchParams')}
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle={t('themeParamsSubtitle')}>
              {t('themeParams')}
            </Cell>
          </Link>
        </Section>

        <Section header={t('localeSwitcherHeader')} footer={t('localeSwitcherFooter')}>
          <LocaleSwitcher />
        </Section>
      </List>
    </Page>
  );
}
