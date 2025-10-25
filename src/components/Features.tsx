"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Zap, Check } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-8 w-8 text-cyan-400" />,
    title: "AI Chatbot",
    description: "Intelligent conversational AI that handles customer inquiries 24/7 with human-like interactions.",
    points: [
      "24/7 Customer Support",
      "Natural Language Processing",
      "Multi-language Support",
      "Smart Escalation",
    ],
    benefit: "Reduces Support Load by 70%",
  },
  {
    icon: <Phone className="h-8 w-8 text-purple-400" />,
    title: "AI Voice Calling Agent",
    description: "Advanced voice AI that handles outbound calls and lead qualification with natural conversations.",
    points: [
      "Outbound Call Automation",
      "Lead Qualification",
      "Appointment Scheduling",
      "Natural Voice Synthesis",
    ],
    benefit: "Handles 1000+ Calls Daily",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-400" />,
    title: "AI Automation",
    description: "Comprehensive workflow automation that streamlines processes and eliminates repetitive tasks.",
    points: [
      "Workflow Automation",
      "Data Processing",
      "Email Marketing",
      "Performance Analytics",
    ],
    benefit: "Saves 40+ Hours Weekly",
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Build for Your Business</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Discover our AI-powered solutions designed to transform operations
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 flex flex-col">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 text-2xl">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="text-center p-3 rounded-lg bg-slate-800 text-white font-semibold">
                  {feature.benefit}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};