import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;