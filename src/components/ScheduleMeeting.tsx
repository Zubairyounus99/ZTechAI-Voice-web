"use client";

import React, { useEffect } from 'react';

declare global {
  interface Window {
    Cal: any;
  }
}

export const ScheduleMeeting = () => {
  useEffect(() => {
    const calScript = "https://app.cal.com/embed/embed.js";
    let script = document.querySelector(`script[src="${calScript}"]`) as HTMLScriptElement;

    const initCal = () => {
      if (window.Cal) {
        window.Cal("init", "30min", { origin: "https://app.cal.com" });
        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { "layout": "month_view", "theme": "auto" },
          calLink: "zubair-younous-ztechai/30min",
        });
        window.Cal.ns["30min"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = calScript;
      script.async = true;
      document.head.appendChild(script);
      script.onload = initCal;
    } else {
      initCal();
    }

  }, []);

  return (
    <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Book Your Free Strategy Call
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Find a time that works for you. Let's discuss how our AI Voice Agents can revolutionize your business.
          </p>
        </div>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
           <div style={{width:'100%', height:'650px', overflow:'auto'}} id="my-cal-inline-30min"></div>
        </div>
      </div>
    </section>
  );
};