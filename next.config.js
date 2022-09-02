/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
