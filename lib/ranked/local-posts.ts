import { BLOG_POSTS } from "@/lib/posts";
import { DEFAULT_COVER, DEFAULT_COVER_ALT, DEFAULT_CTA } from "./config";
import type { BlogPostData } from "./types";

/** Existing compiled posts win on slug collision with a Ranked import. */
export function getLocalBlogPosts(): BlogPostData[] {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    metaDescription: post.description,
    h1: post.title,
    publishDate: post.datePublished.slice(0, 10),
    intro: post.body?.[0]?.paragraphs[0] ?? post.description,
    coverImage: post.image || DEFAULT_COVER,
    coverAlt: post.imageCaption || DEFAULT_COVER_ALT,
    sections: (post.body ?? []).map((block) => ({
      heading: block.heading || post.title,
      body: block.paragraphs,
    })),
    cta: post.relatedServiceHref
      ? {
          label: post.relatedServiceLabel || DEFAULT_CTA.label,
          href: post.relatedServiceHref,
        }
      : DEFAULT_CTA,
  }));
}
