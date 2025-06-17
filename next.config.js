/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '/api/*': ['./node_modules/**/*'],
    },
  },
};

module.exports = nextConfig;