import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import CTAButton from "@/components/CTAButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto pb-24">
        <Hero />
        <HowItWorks />
        <TrustSection />
      </main>
      <CTAButton />
    </div>
  );
};

export default Index;
