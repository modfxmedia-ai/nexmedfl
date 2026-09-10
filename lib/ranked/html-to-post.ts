import { DEFAULT_COVER, DEFAULT_COVER_ALT, DEFAULT_CTA } from "./config";
import type { BlogPostData } from "./types";

// Named entities Google Docs/rich-text exporters commonly emit that aren't
// covered by the numeric/basic entities below.
const NAMED_ENTITIES: Record<string, string> = {
  bull: "•",
  middot: "•",
  rsquo: "\u2019",
  lsquo: "\u2018",
  ldquo: "\u201c",
  rdquo: "\u201d",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  apos: "'",
  copy: "\u00a9",
  reg: "\u00ae",
  trade: "\u2122",
  deg: "\u00b0",
};

function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&(bull|middot|rsquo|lsquo|ldquo|rdquo|mdash|ndash|hellip|apos|copy|reg|trade|deg);/gi, (_, name: string) => NAMED_ENTITIES[name.toLowerCase()] ?? "")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, " ")
    .trim();
}

// Marks real <li> list items so they survive the paragraph split below and
// render as an actual bullet list instead of a stray "•" in running text.
const BULLET_MARKER = "@@BULLET@@";

function markListItems(html: string): string {
  return html.replace(/<li[^>]*>/gi, `</p>${BULLET_MARKER}`);
}

// Detects a leading bullet marker: either the <li> marker above, or a
// literal bullet glyph (e.g. from the &bull;/&middot; entities) left in
// plain text that wasn't wrapped in real <li> tags.
function extractBullet(text: string): { bullet: boolean; text: string } {
  if (text.startsWith(BULLET_MARKER)) {
    return { bullet: true, text: text.slice(BULLET_MARKER.length).trim() };
  }
  const match = text.match(/^[•●▪‣∙]\s*/);
  if (!match) return { bullet: false, text };
  return { bullet: true, text: text.slice(match[0].length).trim() };
}

function stripTags(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );
}

function isSeoMetaLine(text: string): boolean {
  return /^(meta\s*title|meta\s*description|seo title|focus keyword)\s*:/i.test(
    text.trim(),
  );
}

function htmlChunkToPlain(html: string): string {
  const withLinks = html.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_m, href: string, inner: string) => {
      const label = stripTags(inner);
      if (!label) return "";
      return `[${label}](${href})`;
    },
  );
  return stripTags(withLinks);
}

function usableParas(parts: string[]): { text: string; bullet: boolean }[] {
  return parts
    .map(htmlChunkToPlain)
    .map(extractBullet)
    .filter((p) => p.text.length > 1 && !isSeoMetaLine(p.text));
}

export function slugFromTitle(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || "ranked-article";
}

function metaFromPlain(text: string, fallbackTitle: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return fallbackTitle.slice(0, 155);
  if (clean.length <= 155) return clean;
  const cut = clean.slice(0, 152);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : 152).trim()}…`;
}

export function htmlToBlogPost(input: {
  title: string;
  html: string | null;
  description: string | null;
  publishDate: string;
  slug: string;
  coverImage: string | null;
}): BlogPostData | null {
  const html = (input.html ?? "").trim();
  if (!html) return null;

  const headingSplit = html.split(/<(h[1-6])[^>]*>/i);
  const sections: { heading: string; paragraphs: string[]; bullets: string[] }[] = [];
  let intro = "";
  const titleNorm = input.title.replace(/\s+/g, " ").trim().toLowerCase();

  const toSection = (heading: string, lines: { text: string; bullet: boolean }[]) => ({
    heading,
    paragraphs: lines.filter((l) => !l.bullet).map((l) => l.text),
    bullets: lines.filter((l) => l.bullet).map((l) => l.text),
  });

  if (headingSplit.length === 1) {
    const paras = usableParas(markListItems(html).split(/<\/p>/i));
    if (paras.length === 0) return null;
    intro = paras[0].text;
    sections.push(toSection(input.title, paras.slice(1, 40).length ? paras.slice(1, 40) : paras));
  } else {
    const preface = htmlChunkToPlain(headingSplit[0]);
    if (preface && !isSeoMetaLine(preface)) intro = preface;

    for (let i = 1; i < headingSplit.length; i += 2) {
      const tag = (headingSplit[i] ?? "").toLowerCase();
      const rest = headingSplit[i + 1] ?? "";
      const close = rest.indexOf("</");
      const headingHtml = close >= 0 ? rest.slice(0, close) : rest;
      const heading = stripTags(headingHtml);
      const bodyHtml = close >= 0 ? rest.slice(rest.indexOf(">", close) + 1) : "";
      const paras = usableParas(markListItems(bodyHtml).split(/<\/p>/i));
      const headingIsTitle =
        tag === "h1" && heading.replace(/\s+/g, " ").trim().toLowerCase() === titleNorm;

      if (headingIsTitle) {
        if (!intro && paras[0]) intro = paras[0].text;
        if (paras.length > 1) {
          sections.push(toSection(input.title, paras.slice(1)));
        }
        continue;
      }

      if (!heading && paras.length === 0) continue;
      const lines = paras.length ? paras : [{ text: htmlChunkToPlain(bodyHtml) || heading, bullet: false }];
      sections.push(toSection(heading || input.title, lines));
    }
  }

  const usable = sections.filter((s) =>
    [...s.paragraphs, ...s.bullets].some((p) => p.length > 8 && !isSeoMetaLine(p)),
  );
  if (usable.length === 0) return null;

  if (!intro || isSeoMetaLine(intro)) {
    intro =
      [...usable[0].paragraphs, ...usable[0].bullets].find((p) => !isSeoMetaLine(p)) ??
      input.description ??
      input.title;
  }

  return {
    slug: input.slug,
    title: input.title,
    metaDescription: metaFromPlain(input.description || intro, input.title),
    h1: input.title,
    publishDate: input.publishDate,
    coverImage: input.coverImage || DEFAULT_COVER,
    coverAlt: input.coverImage ? input.title : DEFAULT_COVER_ALT,
    intro,
    sections: usable,
    cta: DEFAULT_CTA,
  };
}

export function isBlogContentType(contentType: string | null): boolean {
  const type = (contentType ?? "").trim().toLowerCase();
  if (!type) return true;
  return type.includes("blog");
}

export function isRankedPostLive(
  status: string,
  scheduledDate: string | null = null,
  now = new Date(),
): boolean {
  const s = status.trim().toLowerCase();
  if (s === "revising" || s === "cancelled" || s === "canceled") return false;
  if (!scheduledDate) return true;
  const day = scheduledDate.slice(0, 10);
  const today = now.toLocaleDateString("en-CA", { timeZone: "America/New_York" });
  return day <= today;
}

export function publishDateFromRanked(
  scheduledDate: string | null,
  fallback: string,
): string {
  if (scheduledDate) return scheduledDate.slice(0, 10);
  return fallback.slice(0, 10);
}
