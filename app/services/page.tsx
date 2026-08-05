import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildMedicalWebPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { ServicesHub } from "@/components/ServicesHub";

const PAGE = getStaticPage("/services/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd
        data={buildMedicalWebPageSchema({
          path: PAGE.path,
          name: PAGE.title,
          description: PAGE.description,
        })}
      />
      <ServicesHub />
    </>
  );
}
