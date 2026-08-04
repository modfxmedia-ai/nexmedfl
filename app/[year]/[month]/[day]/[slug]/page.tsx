import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { BLOG_POSTS, findBlogPost, getBlogPostPath } from "@/lib/posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    year: post.year,
    month: post.month,
    day: post.day,
    slug: post.slug,
  }));
}

// Only the known posts above are valid — any other /YYYY/MM/DD/slug/
// combination should 404 instead of being treated as a dynamic route.
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/[year]/[month]/[day]/[slug]">
): Promise<Metadata> {
  const { year, month, day, slug } = await props.params;
  const post = findBlogPost(year, month, day, slug);
  if (!post) return {};

  return buildMetadata({
    path: getBlogPostPath(post),
    title: post.title,
    description: post.description,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage(
  props: PageProps<"/[year]/[month]/[day]/[slug]">
) {
  const { year, month, day, slug } = await props.params;
  const post = findBlogPost(year, month, day, slug);
  if (!post) notFound();

  const path = getBlogPostPath(post);

  return (
    <>
      <JsonLd
        data={buildGraph({
          path,
          title: post.title,
          description: post.description,
          image: post.image,
          imageWidth: post.imageWidth,
          imageHeight: post.imageHeight,
          imageCaption: post.imageCaption,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          articleType: "BlogPosting",
          section: post.section,
        })}
      />
      <PagePlaceholder title={post.title} path={path} />
    </>
  );
}
