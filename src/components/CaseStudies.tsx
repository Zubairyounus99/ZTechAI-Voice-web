"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "ZTechAI's voice agent transformed our customer service. We're handling 50% more calls with the same team size, and customer satisfaction is at an all-time high.",
    name: "Jane Doe",
    title: "COO, Innovate Corp",
    avatar: "/placeholder.svg",
    fallback: "JD",
  },
  {
    quote: "The lead qualification feature is a game-changer. Our sales team now spends their time on pre-qualified, high-intent leads, boosting our conversion rates by 30%.",
    name: "John Smith",
    title: "Head of Sales, Growth Solutions",
    avatar: "/placeholder.svg",
    fallback: "JS",
  },
  {
    quote: "We were skeptical about AI handling appointments, but the system is flawless. It has reduced no-shows by 25% and freed up our front desk staff for more critical tasks.",
    name: "Emily White",
    title: "Clinic Manager, HealthFirst Medical",
    avatar: "/placeholder.svg",
    fallback: "EW",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            See how businesses like yours are winning with ZTechAI.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};