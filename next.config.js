/** @type {import('next').NextConfig} */

const BASE_URL = process.env.GITHUB_ACTIONS ? process.env.BASE_URL : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: `${BASE_URL}/`,
  basePath: BASE_URL,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
