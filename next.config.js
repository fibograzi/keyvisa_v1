/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // allow static export on Vercel if needed
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  experimental: { optimizePackageImports: ['framer-motion'] }
};
module.exports = nextConfig;
