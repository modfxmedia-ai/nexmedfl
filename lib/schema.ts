import { BUSINESS, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site-config";

/**
 * Pure JSON-LD graph builder — replicates the exact Rank Math `@graph`
 * emitted on the live nexmedfl.com site (verified field-by-field via curl
 * against the homepage, a static page, and a blog post). Do NOT add fields
 * that aren't present in the live output — the live graph intentionally
 * keeps the Organization node minimal (name/url/openingHours only) and
 * only includes `potentialAction`/`WebPage.about` on the homepage, and
 * only includes an `ImageObject` node when the page has a featured image.
 *
 * No Node built-ins are used here, so this module is safe to import from
 * both Server and Client Components.
 */

export interface GraphInput {
  /** Path including leading and trailing slash, e.g. "/contact-us/" */
  path: string;
  title: string;
  description: string;
  image?: string;
  /** Defaults to "200"/"200" (the WordPress theme's fixed thumbnail size,
   *  used by every non-post page on the live site regardless of the
   *  actual source image's native dimensions). Blog posts pass the real
   *  values scraped from the live JSON-LD instead. */
  imageWidth?: string;
  imageHeight?: string;
  imageCaption?: string;
  datePublished?: string;
  dateModified?: string;
  /** "Article" for pages, "BlogPosting" for /YYYY/MM/DD/slug/ posts */
  articleType?: "Article" | "BlogPosting";
  /** article:section, blog posts only */
  section?: string;
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// The live site's Person node is the WordPress "developer" author account
// on every single page/post — it is not per-author data, so it's a fixed
// constant rather than something derived per page.
const PERSON_ID = `${SITE_URL}/author/developer/`;
const PERSON_NODE = {
  "@type": "Person" as const,
  "@id": PERSON_ID,
  name: "developer",
  url: PERSON_ID,
  image: {
    "@type": "ImageObject",
    "@id":
      "https://secure.gravatar.com/avatar/7eceadbfff0bcd04a129e895bfc0bc0120de2678295978e7ab443ac3927e6951?s=96&d=mm&r=g",
    url: "https://secure.gravatar.com/avatar/7eceadbfff0bcd04a129e895bfc0bc0120de2678295978e7ab443ac3927e6951?s=96&d=mm&r=g",
    caption: "developer",
    inLanguage: "en",
  },
  sameAs: [SITE_URL],
  worksFor: { "@id": ORGANIZATION_ID },
};

export function buildGraph(input: GraphInput) {
  const {
    path,
    title,
    description,
    image,
    imageWidth = "200",
    imageHeight = "200",
    imageCaption,
    datePublished,
    dateModified,
    articleType = "Article",
    section,
  } = input;

  const isHomePage = path === "/";
  const pageUrl = `${SITE_URL}${path}`;
  const webPageId = `${pageUrl}#webpage`;
  const richSnippetId = `${pageUrl}#richSnippet`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization"],
        "@id": ORGANIZATION_ID,
        name: BUSINESS.name,
        url: SITE_URL,
        openingHours: BUSINESS.openingHours,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
        ...(isHomePage
          ? {
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }
          : {}),
      },
      ...(image
        ? [
            {
              "@type": "ImageObject",
              "@id": image,
              url: image,
              width: imageWidth,
              height: imageHeight,
              ...(imageCaption ? { caption: imageCaption } : {}),
              inLanguage: "en",
            },
          ]
        : []),
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: title,
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        ...(isHomePage ? { about: { "@id": ORGANIZATION_ID } } : {}),
        isPartOf: { "@id": WEBSITE_ID },
        ...(image ? { primaryImageOfPage: { "@id": image } } : {}),
        inLanguage: "en",
      },
      PERSON_NODE,
      {
        "@type": articleType,
        headline: title,
        ...(datePublished ? { datePublished } : {}),
        ...(dateModified ? { dateModified } : {}),
        ...(section ? { articleSection: section } : {}),
        author: { "@id": PERSON_ID, name: "developer" },
        publisher: { "@id": ORGANIZATION_ID },
        description,
        name: title,
        "@id": richSnippetId,
        isPartOf: { "@id": webPageId },
        ...(image ? { image: { "@id": image } } : {}),
        inLanguage: "en",
        mainEntityOfPage: { "@id": webPageId },
      },
    ],
  };
}

export interface MedicalProcedureInput {
  /** Path including leading and trailing slash, e.g. "/chiropractic-care/" */
  path: string;
  name: string;
  description: string;
  /** Body part(s) this procedure/therapy targets, e.g. "Spine" or "Knee". */
  bodyLocation?: string;
  /** schema.org MedicalProcedureType enumeration value (bare label is fine
   *  — most of NexMed's new offerings are non-invasive). */
  procedureType?: "NoninvasiveProcedure" | "PercutaneousProcedure";
}

/**
 * `MedicalProcedure` JSON-LD for the new equipment/program-driven service
 * pages. Emitted as an ADDITIONAL <script> tag alongside the standard
 * `buildGraph()` output (same pattern as the homepage's standalone
 * `MedicalBusiness` block) — not a replacement for it.
 */
export function buildMedicalProcedureSchema({
  path,
  name,
  description,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureInput) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${SITE_URL}${path}`,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation ? { bodyLocation } : {}),
    provider: {
      "@type": "MedicalBusiness",
      "@id": ORGANIZATION_ID,
      name: BUSINESS.name,
    },
  };
}

/**
 * Standalone MedicalBusiness JSON-LD block — a SECOND, separate
 * <script type="application/ld+json"> tag emitted only on the live
 * homepage (in addition to the main @graph above). Values copied
 * exactly from the live page's own script tag.
 */
export const MEDICAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  logo: "https://nexmedfl.com/wp-content/uploads/2025/08/Nexmed-Transparent-Background-1.avif",
  image: "https://nexmedfl.com/wp-content/uploads/2025/08/Nexmed-Transparent-Background-1.avif",
  description:
    "NexMed in Ormond Beach, FL specializes in neuropathy treatment, medical weight loss, hormone therapy, and regenerative medicine.",
  telephone: BUSINESS.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.2696495,
    longitude: -81.0986862,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "08:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "14:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.youtube,
  ],
};
