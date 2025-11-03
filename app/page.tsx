import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <StatsSection />
      <FAQsFour />
      <FooterSection />
    </div>
  );
}
