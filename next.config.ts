import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.w3layouts.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
