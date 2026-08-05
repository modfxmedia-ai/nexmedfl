import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildAggregateRatingSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { ReviewsPageBody } from "@/components/ReviewsPageBody";
import { AGGREGATE_RATING } from "@/lib/reviews-content";

const PAGE = getStaticPage("/reviews/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd data={buildAggregateRatingSchema(AGGREGATE_RATING)} />
      <ReviewsPageBody />
    </>
  );
}
