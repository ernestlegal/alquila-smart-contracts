import HeroSection from "@/components/HeroSection";
import OwnersSection from "@/components/OwnersSection";
import TenantsSection from "@/components/TenantsSection";
import AgentsSection from "@/components/AgentsSection";
import PurposeSection from "@/components/PurposeSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <OwnersSection />
        <TenantsSection />
        <AgentsSection />
        <PurposeSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
