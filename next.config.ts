import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    agentFeedback: true,
  },
  // Static export for GitHub Pages. BASE_PATH is set by the deploy workflow
  // (the default Pages URL is a sub-path); local dev serves from "/".
  output: "export",
  basePath: process.env.BASE_PATH ?? "",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
