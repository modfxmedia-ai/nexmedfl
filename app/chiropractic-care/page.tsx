import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildMedicalProcedureSchema, buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { getServiceContent } from "@/lib/service-content";
import { ServicePageBody } from "@/components/ServicePageBody";

const PAGE = getStaticPage("/chiropractic-care/");
const CONTENT = getServiceContent("/chiropractic-care/");

export const metadata: Metadata = buildMetadata({ ...PAGE, image: PAGE.image ?? CONTENT.heroImage });

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd
        data={buildMedicalProcedureSchema({
          path: PAGE.path,
          name: CONTENT.heading,
          description: PAGE.description,
          bodyLocation: "Spine",
        })}
      />
      {CONTENT.faqs && <JsonLd data={buildFAQSchema(CONTENT.faqs)} />}
      <ServicePageBody {...CONTENT} />
    </>
  );
}
