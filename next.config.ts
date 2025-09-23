
// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Sets the prefix for all assets
  // Must match the repository name exactly
  assetPrefix: '/CRM-LandingPage/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;