import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sakibkhan-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
