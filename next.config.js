/** @type {import('next').NextConfig} */

const BASE_URL =
  process.env.NODE_ENV === "development" ? "" : process.env.BASE_URL;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: `${BASE_URL}/`,
  basePath: BASE_URL,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
