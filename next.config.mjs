import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://i.ytimg.com",
  "frame-src https://www.youtube-nocookie.com",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'"
];

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspDirectives.join("; ")
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=()"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload"
  },
  {
    key: "X-XSS-Protection",
    value: "0"
  }
];
const immutableCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable"
  }
];
const immutablePublicAssets = [
  "/ahmed-saif-hero.webp",
  "/apple-touch-icon.png",
  "/favicon-square.webp",
  "/favicon.ico",
  "/favicon.webp"
];

const nextConfig = {
  poweredByHeader: false,
  experimental: {
    globalNotFound: true
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      },
      {
        source: "/fonts/:path*",
        headers: immutableCacheHeaders
      }
    ].concat(
      immutablePublicAssets.map((source) => ({
        source,
        headers: immutableCacheHeaders
      }))
    );
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400
  },
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;