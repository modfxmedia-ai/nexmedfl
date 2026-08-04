import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { getStaticPage } from "@/lib/pages";

const PAGE = getStaticPage("/neuropathy-appointment-request/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <PagePlaceholder title={PAGE.title} path={PAGE.path} />
    </>
  );
}
