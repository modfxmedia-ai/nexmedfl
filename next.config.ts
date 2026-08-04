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
        hostname: "nexmedfl.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
};

export default nextConfig;
