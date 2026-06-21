import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Community from "@/components/sections/Community";
import News from "@/components/sections/News";
import Philosophy from "@/components/sections/Philosophy";
import InquiryOptions from "@/components/sections/InquiryOptions";
import QuoteForm from "@/components/sections/QuoteForm";
import Brands from "@/components/sections/Brands";
import StoreBanner from "@/components/sections/StoreBanner";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Community />
        <Philosophy />
        <InquiryOptions />
        <QuoteForm />
        <Brands />
        <News />
        <StoreBanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
