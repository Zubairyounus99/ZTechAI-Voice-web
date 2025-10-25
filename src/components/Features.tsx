"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Bot, Calendar, BarChart, Languages, Zap } from "lucide-react";

const voiceFeatures = [
  {
    icon: <Phone className="h-8 w-8 text-cyan-400" />,
    title: "24/7 Inbound & Outbound Calling",
    description: "Our AI agents work around the clock, handling calls, qualifying leads, and ensuring you never miss an opportunity.",
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-400" />,
    title: "Human-Like Conversations",
    description: "Leveraging advanced NLP, our agents engage callers in fluid, natural-sounding conversations that build rapport.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-green-400" />,
    title: "Automated Appointment Setting",
    description: "Seamlessly book, confirm, and reschedule appointments directly into your calendar, reducing no-shows.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-red-400" />,
    title: "Intelligent Lead Qualification",
    description: "Agents ask targeted questions to qualify leads, ensuring your sales team talks to only the hottest prospects.",
  },
  {
    icon: <Languages className="h-8 w-8 text-yellow-400" />,
    title: "Multi-language Support",
    description: "Engage a global audience with AI agents that can converse fluently in multiple languages and accents.",
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    title: "CRM Integration",
    description: "Automatically log call details, notes, and outcomes into your CRM, keeping your data perfectly in sync.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Future of Customer Communication is Here</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our AI Voice Agents are more than just bots; they're a dedicated, scalable, and cost-effective workforce.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {voiceFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};