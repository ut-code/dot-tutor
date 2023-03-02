/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "development" ? "" : process.env.BASE_URL,
  basePath: process.env.NODE_ENV === "development" ? "" : process.env.BASE_URL,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
