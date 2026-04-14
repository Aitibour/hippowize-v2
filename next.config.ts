import type { NextConfig } from "next";

// Security headers are defined in netlify.toml [[headers]] for = "/*"
// next.config.ts headers() has no effect with output: "export"

const nextConfig: NextConfig = {
  output: "export",
  compress: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.w3layouts.com",
        pathname: "/execution/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
