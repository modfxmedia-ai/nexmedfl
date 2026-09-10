import { BLOG_POSTS, type BlogPostEntry } from "@/lib/posts";
import { assignUniqueBlogCovers, DEFAULT_CTA } from "./config";
import type { BlogPostData } from "./types";

export function blogPostDataToEntry(post: BlogPostData): BlogPostEntry {
  const day = post.publishDate.slice(0, 10);
  const [year, month, dayNum] = day.split("-");
  const iso = `${day}T12:00:00+00:00`;
  const ctaIsDefault = post.cta.href === DEFAULT_CTA.href;

  return {
    year,
    month,
    day: dayNum,
    slug: post.slug,
    title: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    imageCaption: post.coverAlt,
    datePublished: iso,
    dateModified: iso,
    section: "Medical Care",
    body: [
      ...(post.intro ? [{ paragraphs: [post.intro] }] : []),
      ...post.sections.map((section) => ({
        heading: section.heading,
        paragraphs: section.paragraphs,
        bullets: section.bullets,
      })),
    ],
    relatedServiceHref: ctaIsDefault ? undefined : post.cta.href,
    relatedServiceLabel: ctaIsDefault ? undefined : post.cta.label,
  };
}

export async function getPublishedBlogEntries(): Promise<BlogPostEntry[]> {
  const local = BLOG_POSTS;
  // Ranked CMS merge disabled — only hand-written local posts are served.
  const uniqued = assignUniqueBlogCovers(local, {
    reservedSlugs: new Set(local.map((p) => p.slug)),
  });

  return uniqued.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );
}

export async function findPublishedBlogPost(
  slug: string,
): Promise<BlogPostEntry | undefined> {
  const posts = await getPublishedBlogEntries();
  return posts.find((post) => post.slug === slug);
}

export async function getPublishedBlogEntryParams(): Promise<
  { slug: string }[]
> {
  const posts = await getPublishedBlogEntries();
  return posts.map((post) => ({ slug: post.slug }));
}
