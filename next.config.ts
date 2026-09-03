import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live WordPress site serves every URL with a trailing slash
  // (e.g. /payment-plans/). This preserves those exact URLs with no
  // redirects, protecting current SEO rankings.
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
      },
    ],
  },
  // Keep cron/webhook bundles small: never file-trace public media.
  outputFileTracingExcludes: {
    "*": [
      "./public/images/**",
      "./public/**/*.mp4",
      "./public/**/*.webm",
    ],
  },
};

export default nextConfig;
