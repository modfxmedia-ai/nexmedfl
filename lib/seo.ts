import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site-config";

// Fallback OG/Twitter image (1200x630) for any page that doesn't pass its
// own `image`, so every page always has a valid share-preview image.
const DEFAULT_OG_IMAGE = "/images/og-default.jpg";

export interface PageSeoInput {
  /** Path including leading and trailing slash, e.g. "/contact-us/" */
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}

/**
 * Builds a Next.js `Metadata` object (title, description, canonical,
 * Open Graph, Twitter) matching the exact copy scraped from the live
 * nexmedfl.com page for the given path.
 */
export function buildMetadata({
  path,
  title,
  description,
  image,
  type = "website",
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
