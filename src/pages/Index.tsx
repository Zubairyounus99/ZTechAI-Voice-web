import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowWeHelp } from "@/components/HowWeHelp";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Scheduler } from "@/components/Scheduler";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <HowWeHelp />
        <Faq />
        <Scheduler />
      </main>
      <Footer />
    </div>
  );
};

export default Index;