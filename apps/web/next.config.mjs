/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'standalone',
  transpilePackages: ['@portfolio/templates', '@portfolio/ui', '@portfolio/types'],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;