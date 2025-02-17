import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { ShoppingSection } from "@/components/ShoppingSection";
import { IntegrateSection } from "@/components/IntegrateSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { WhatsNewSection } from "@/components/WhatsNewSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <ShoppingSection />
        <IntegrateSection />
        <WhoWeHelpSection />
        <WhatsNewSection />
      </main>
    </div>
  );
}