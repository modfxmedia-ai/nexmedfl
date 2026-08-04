import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { buildGraph, MEDICAL_BUSINESS_SCHEMA } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { getStaticPage } from "@/lib/pages";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { StatsSection } from "@/components/home/StatsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";

const PAGE = getStaticPage("/");

export const metadata: Metadata = buildMetadata(PAGE);

export default function Home() {
  return (
    <>
      <JsonLd data={buildGraph(PAGE)} />
      {/* Standalone MedicalBusiness schema — only present on the live homepage. */}
      <JsonLd data={MEDICAL_BUSINESS_SCHEMA} />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <WelcomeSection />
        <HowItWorks />
        <StatsSection />
        <TestimonialsCarousel />
        {/* "Get in Touch" CTA band is intentionally not repeated here — it's
            already rendered site-wide by SiteFooter (via app/layout.tsx),
            using the same FOOTER_CTA copy the live homepage's footer uses. */}
      </main>
    </>
  );
}
