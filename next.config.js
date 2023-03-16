/** @type {import('next').NextConfig} */

const BASE_URL = process.env.GITHUB_ACTIONS ? process.env.BASE_URL : "";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  assetPrefix: `${BASE_URL}/`,
  basePath: BASE_URL,
  publicRuntimeConfig: {
    staticFolder: BASE_URL,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
