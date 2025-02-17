import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
      </main>
    </div>
  );
}