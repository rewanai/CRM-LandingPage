import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This is the most crucial part. It tells Next.js to export a static site.
  output: 'export',

  // This sets the base URL for all your assets (CSS, JS, images, etc.).
  // It MUST match the repository name exactly.
  // Your repository name is 'CRM-LandingPage'.
  basePath: '/CRM-LandingPage',

  // This disables the built-in image optimization feature for static export.
  images: {
    unoptimized: true,
  },

  // You can keep any other existing configurations here as well.
};

export default nextConfig;