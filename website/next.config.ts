import type { NextConfig } from "next";

// When building for GitHub Pages (project site at /<repo>/), the workflow sets
// GITHUB_PAGES=true so assets resolve under the /fernlight base path. Local
// `next dev` / `next build` leave it unset and serve from the root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "fernlight";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGithubPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
