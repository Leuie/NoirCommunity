/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev }) => {
    // Disable all webpack caching to prevent I/O errors
    config.cache = false;
    
    // Fix for Sanity Studio dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    
    return config;
  },
  images: { unoptimized: true },
  trailingSlash: true,
  skipTrailingSlashRedirect: true
};

module.exports = nextConfig;
