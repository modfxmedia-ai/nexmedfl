import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site-config";

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
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
