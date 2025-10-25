"use client";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Stop <span className="text-red-500">bleeding</span> money on customer support with our <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">AI Voice Agents</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Every day with traditional call centers costs you money. Switch to AI agents and cut costs by 70% instantly.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#schedule">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold">
                Book Your Free Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};