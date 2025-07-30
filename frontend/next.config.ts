import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  }
}


export default nextConfig
