"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-slate-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold">ZTechAI</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#schedule">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">Book a free call</Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};