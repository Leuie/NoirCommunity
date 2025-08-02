/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev }) => {
    // Disable all webpack caching to prevent I/O errors
    config.cache = false;
    return config;
  },
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true
};

module.exports = nextConfig;
