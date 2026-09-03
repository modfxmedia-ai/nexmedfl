import { listRankedContent } from "./client";
import { getRankedCoverImage } from "./cover";
import { isBlogContentType, isRankedPostLive, slugFromTitle } from "./html-to-post";

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
  if (
    process.env.RANKED_PROJECT_ID &&
    projectId !== process.env.RANKED_PROJECT_ID
  ) {
    console.error("[ranked] refused cover generation for another project");
    return [];
  }

  const items = await listRankedContent(projectId);
  const slugs: string[] = [];

  for (const item of items) {
    if (
      !isBlogContentType(item.content_type) ||
      !isRankedPostLive(item.status, item.scheduled_date)
    ) {
      continue;
    }

    const slug = slugFromTitle(item.title);
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
    });
    slugs.push(slug);
  }

  return slugs;
}
