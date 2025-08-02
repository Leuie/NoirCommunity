/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  images: { unoptimized: true },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
