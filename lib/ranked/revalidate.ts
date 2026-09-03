import { revalidatePath, revalidateTag } from "next/cache";
import { RANKED_CACHE_TAG } from "./types";

export function revalidateRankedBlog() {
  revalidateTag(RANKED_CACHE_TAG, "max");
  revalidatePath("/blogs");
  revalidatePath("/[year]/[month]/[day]/[slug]", "page");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  revalidatePath("/post-sitemap.xml");
  revalidatePath("/sitemap");
}
