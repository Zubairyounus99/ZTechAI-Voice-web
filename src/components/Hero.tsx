"use client";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            We Build Your AI Workforce
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Leverage our expertise to build and deploy custom AI agents that automate tasks, streamline operations, and drive growth for your business.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};