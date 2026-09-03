export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ormondspinenervecenter.com"
).replace(/\/$/, "");

export const DEFAULT_COVER = "/images/blog/default-cover.jpg";

export const DEFAULT_COVER_ALT = "Ormond Spine & Nerve Center blog article cover";

const TOPIC_COVERS: Record<string, readonly string[]> = {
  "Spine & Chiropractic": [
    "/images/blog/chiropractic-care-blog.jpg",
    "/images/blog/spinal-decompression-blog.jpg",
    "/images/blog/car-accident-blog.jpg",
    "/images/back-pain-featured.jpg",
  ],
  "Knee & Joint": [
    "/images/blog/knee-pain-blog.jpg",
    "/images/knee-decompression-therapy.jpg",
    "/images/knee-pain-treatment.jpg",
  ],
  "Neuropathy & Nerve Health": [
    "/images/neuropathy-treatment.jpg",
    "/images/legacy/blog-neuropathy-specialist.jpg",
    "/images/legacy/blog-burning-sensation.webp",
  ],
  "Recovery & Advanced Therapies": [
    "/images/blog/laser-therapy-blog.jpg",
    "/images/blog/shockwave-therapy-blog.jpg",
    "/images/compression-therapy.jpg",
    "/images/laser-therapy.jpg",
  ],
};

const ALL_TOPIC_COVERS = Object.values(TOPIC_COVERS).flat();

function inferCoverTopic(title: string): string {
  const text = title.toLowerCase();
  if (/neuropath|nerve|numb|tingl|burning/.test(text)) {
    return "Neuropathy & Nerve Health";
  }
  if (/knee|joint|meniscus|osteo/.test(text)) {
    return "Knee & Joint";
  }
  if (/shockwave|laser|compression|recovery|circulation/.test(text)) {
    return "Recovery & Advanced Therapies";
  }
  if (
    /chiropract|spinal|spine|disc|sciatica|whiplash|back pain|neck|accident/.test(
      text,
    )
  ) {
    return "Spine & Chiropractic";
  }
  return "";
}

function pickFrom(pool: readonly string[], key: string): string {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash + key.charCodeAt(i) * (i + 1)) % 2147483647;
  }
  return pool[hash % pool.length] || DEFAULT_COVER;
}

/** Deterministic clinic photo when Blob/AI cover is not ready yet. */
export function fallbackCover(title: string, slug?: string): string {
  const topic = inferCoverTopic(title);
  const pool = (topic && TOPIC_COVERS[topic]) || ALL_TOPIC_COVERS;
  return pickFrom(pool, slug || title);
}

export const DEFAULT_CTA = {
  label: "Request an Appointment",
  href: "/appointment-request/",
};

/** Cover prompt for this brand. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
    "Editorial photograph, 16:9 landscape, premium medical clinic photography.",
    "Modern chiropractic and spine-care clinic in coastal Florida, calm and professional.",
    `Theme inspired by: ${title.slice(0, 120)}.`,
    "Cinematic lighting, sharp, no grain, no watermark.",
    "No text, no letters, no logos, no captions, no readable signage.",
    "No patient faces, no medical gore, no graphic injuries.",
  ].join(" ");
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = [];
