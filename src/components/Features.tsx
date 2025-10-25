"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PhoneCall, Languages, Zap, CalendarClock, Users, BrainCircuit } from "lucide-react";

const voiceFeatures = [
  {
    icon: <PhoneCall className="h-8 w-8 text-cyan-400" />,
    title: "Inbound & Outbound Calling",
    description: "Our AI handles both incoming customer queries and proactive outbound calls for sales and support.",
  },
  {
    icon: <Languages className="h-8 w-8 text-purple-400" />,
    title: "Multi-language Support",
    description: "Engage with a global audience. Our agents can communicate fluently in multiple languages and accents.",
  },
  {
    icon: <Zap className="h-8 w-8 text-green-400" />,
    title: "24/7 Availability",
    description: "Provide round-the-clock support without the cost of a 24/7 human team. Never miss a customer call again.",
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-yellow-400" />,
    title: "Appointment Scheduling",
    description: "Automate your booking process. The AI can schedule, reschedule, and send reminders for appointments.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-400" />,
    title: "Lead Qualification",
    description: "Automatically qualify leads by asking targeted questions, ensuring your sales team talks to the hottest prospects.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-blue-400" />,
    title: "Human-like Conversation",
    description: "Powered by advanced NLP, our agents provide natural, empathetic, and effective conversations.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Future of Customer Communication</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our AI Voice Agents are packed with features to automate and elevate your business.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voiceFeatures.map((feature, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};