import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
      turbopack: {
    root: __dirname, // forces this folder as the project root
  },

};

export default nextConfig;
