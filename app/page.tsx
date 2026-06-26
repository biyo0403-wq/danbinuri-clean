import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/sections/HeroSlider";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Story from "@/components/sections/Story";
import Brands from "@/components/sections/Brands";
import News from "@/components/sections/News";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <Vision />
        <Mission />
        <Story />
        <Brands />
        <News />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
