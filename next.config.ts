import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(self)" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31_536_000 },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "letacom-website.vercel.app" }], destination: "https://letacom.co.za/:path*", permanent: true },
      { source: "/request-quote", destination: "/contact", permanent: true },
      { source: "/solutions", destination: "/services", permanent: true },
      { source: "/industries/:path*", destination: "/services", permanent: true },
      { source: "/products/:category", destination: "/products", permanent: true },
      { source: "/refund", destination: "/refund-policy", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/terms-and-conditions", permanent: true },
    ];
  },
};

export default nextConfig;
