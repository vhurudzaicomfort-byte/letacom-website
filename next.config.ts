import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern format ladder — Next.js negotiates the smallest acceptable format
    // for the requesting browser (AVIF first, WebP fallback, original last).
    formats: ["image/avif", "image/webp"],
    // 1y cache for optimized variants
    minimumCacheTTL: 31_536_000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
