import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildLocalBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { ContactUsPageBody } from "@/components/ContactUsPageBody";

const PAGE = getStaticPage("/contact-us/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd data={buildLocalBusinessSchema()} />
      <ContactUsPageBody />
    </>
  );
}
