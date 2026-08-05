import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, buildFAQSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { PaymentPlansPageBody } from "@/components/PaymentPlansPageBody";
import { PAYMENT_PLANS_FAQS } from "@/lib/payment-content";

const PAGE = getStaticPage("/payment-plans/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Page() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      <JsonLd data={buildFAQSchema(PAYMENT_PLANS_FAQS)} />
      <PaymentPlansPageBody />
    </>
  );
}
