import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a self-contained server with only the files it needs.
  output: "standalone",
};

export default nextConfig;
