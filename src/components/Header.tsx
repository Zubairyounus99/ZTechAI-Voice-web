"use client";

import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold">Ztechai</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            How It Works
          </a>
          <a href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
            FAQ
          </a>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};