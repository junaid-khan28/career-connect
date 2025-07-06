
import { HeroSection } from "@/components/HeroSection";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { CompaniesSection } from "@/components/CompaniesSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedJobs />
        <CompaniesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
