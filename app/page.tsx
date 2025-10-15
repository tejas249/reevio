import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-2";
import StatsSection from "@/components/stats-2";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <IntegrationsSection/>
      <StatsSection/>
      <FAQsFour/>
      <FooterSection/>
    </div>
  );
}
