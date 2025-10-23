"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What kind of businesses can benefit from your AI solutions?",
    answer: "Virtually any business can benefit from AI. We work with clients across various industries, including e-commerce, real estate, healthcare, finance, and more. If you have repetitive tasks, large amounts of data, or want to improve customer engagement, AI can help.",
  },
  {
    question: "How long does it take to build and deploy an AI solution?",
    answer: "The timeline varies depending on the complexity of the project. A simple chatbot might take a few weeks, while a complex custom AI model could take several months. We provide a detailed project timeline after our initial discovery call.",
  },
  {
    question: "What is the cost of your services?",
    answer: "Our pricing is project-based and depends on the scope and complexity of the work. We offer flexible pricing models to suit different budgets. Contact us for a custom quote.",
  },
  {
    question: "Do I need to have technical expertise to work with you?",
    answer: "Not at all. We handle all the technical aspects. Our goal is to make AI accessible to everyone. We'll explain everything in simple terms and work closely with you to ensure the solution meets your business needs.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};