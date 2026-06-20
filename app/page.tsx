import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Community from "@/components/sections/Community";
import News from "@/components/sections/News";
import Philosophy from "@/components/sections/Philosophy";
import InquiryOptions from "@/components/sections/InquiryOptions";
import Brands from "@/components/sections/Brands";
import StoreBanner from "@/components/sections/StoreBanner";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Community />
        <News />
        <Philosophy />
        <InquiryOptions />
        <Brands />
        <StoreBanner />
      </main>
      <Footer />
    </>
  );
}
