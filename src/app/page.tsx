import type { Metadata } from "next";
import Hero from "~/components/landing/hero";
import FeaturesSection from "~/components/landing/features-section";
import FaqSection from "~/components/landing/faq-section";
import CtaSection from "~/components/landing/cta-section";
import SiteLayout from "~/components/layout/site-layout";
import { siteName } from "~/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteName} — Competitor SEO & Social Benchmarking` },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
    </SiteLayout>
  );
}
