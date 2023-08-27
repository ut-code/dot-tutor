/** @type {import('next').NextConfig} */

import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const BASE_URL = process.env.GITHUB_ACTIONS ? process.env.BASE_URL : "";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
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

export default withMDX(nextConfig);
