// next.config.ts
import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/CRM-LandingPage',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;