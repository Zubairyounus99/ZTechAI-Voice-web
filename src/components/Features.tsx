"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, BrainCircuit, MessageSquare, Settings } from "lucide-react";

const features = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI agents, freeing up your team to focus on high-value activities.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "AI Chatbots",
    description: "Deploy intelligent chatbots for customer support, lead generation, and user engagement, available 24/7.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Consulting",
    description: "Get expert guidance on how to leverage AI in your business. We help you identify opportunities and create a roadmap for success.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Custom AI Solutions",
    description: "We build bespoke AI solutions tailored to your unique business needs, from data analysis to predictive modeling.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We offer a range of AI services to help your business thrive in the digital age.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index}>
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