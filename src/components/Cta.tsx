"use client";

import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Schedule a free, no-obligation consultation with our AI experts to discover how we can help you achieve your goals.
        </p>
        <div className="mt-8">
          <a href="#contact">
            <Button size="lg">Book a Free Consultation</Button>
          </a>
        </div>
      </div>
    </section>
  );
};