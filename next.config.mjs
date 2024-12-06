import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // You can add other Next.js configurations here
  reactStrictMode: true,
  swcMinify: true,
};

export default withNextIntl(nextConfig);
