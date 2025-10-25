"use client";

import React, { useEffect } from 'react';

// Add Cal.com to the window type
declare global {
  interface Window {
    Cal: any;
  }
}

export const Scheduler = () => {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            (d.head.appendChild(d.createElement("script")) as any).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", theme: "auto" },
      calLink: "zubair-younous-ztechai/30min",
    });

    window.Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Book Your Free Strategy Call
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Find a time that works for you. Let's discuss how our AI Voice Agents can revolutionize your business.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card rounded-lg p-2">
           <div style={{ width: '100%', height: '650px', overflow: 'auto' }} id="my-cal-inline-30min"></div>
        </div>
      </div>
    </section>
  );
};