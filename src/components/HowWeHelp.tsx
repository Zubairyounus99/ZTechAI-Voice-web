"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Cpu, Zap, ShieldCheck, Rocket, Check } from "lucide-react";

const items = [
  {
    icon: <Cpu className="h-8 w-8 text-cyan-400" />,
    title: "Advanced AI Technology",
    description: "State-of-the-art artificial intelligence powering your business processes.",
    points: ["Intelligent automation workflows", "Smart decision making", "Adaptive learning systems", "Advanced pattern recognition"],
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-400" />,
    title: "Seamless Integration",
    description: "Effortlessly integrate our solutions with your existing infrastructure.",
    points: ["Custom integrations", "Flexible architecture", "Multi-platform support", "Smooth data migration"],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
    title: "Enterprise Security",
    description: "Military-grade security protecting your data and operations.",
    points: ["Advanced threat protection", "Secure data handling", "Privacy protection", "Continuous monitoring"],
  },
  {
    icon: <Rocket className="h-8 w-8 text-red-400" />,
    title: "Rapid Deployment",
    description: "Quick implementation and deployment of AI solutions.",
    points: ["Streamlined onboarding", "Dedicated support team", "Comprehensive training", "Scalable solutions"],
  },
];

export const HowWeHelp = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How We Help You Win</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Discover the comprehensive suite of AI-powered solutions our specialized teams offer.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800">
              <CardHeader>
                {item.icon}
                <CardTitle className="mt-4">{item.title}</CardTitle>
                <CardDescription className="mt-2">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};