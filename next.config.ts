// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // New: Use assetPrefix for correct pathing.
  // Replace with your repository name.
  assetPrefix: '/CRM-LandingPage/',
};

export default nextConfig;