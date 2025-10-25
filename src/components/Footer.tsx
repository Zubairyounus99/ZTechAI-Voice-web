"use client";

import { Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-lg font-bold">ZTechAI</p>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ZTechAI. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};