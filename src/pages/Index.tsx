import { HeroSection } from "@/components/HeroSection";
import { WhyMerchdigs } from "@/components/WhyMerchdigs";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <HeroSection />
      <WhyMerchdigs />
      <SocialProof />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
