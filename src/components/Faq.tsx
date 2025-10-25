"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to get my AI Agent live?",
    answer: "The deployment time varies based on complexity, but we aim for a rapid setup. A standard AI agent can be live within 1-2 weeks, including integration and testing.",
  },
  {
    question: "What types of businesses use ZTECH AI?",
    answer: "We serve a wide range of industries, including e-commerce, real estate, healthcare, and customer service centers. Any business looking to automate communication and reduce costs can benefit.",
  },
  {
    question: "Can it integrate with my booking or management software?",
    answer: "Yes, our AI agents are designed for seamless integration with most popular CRM, booking, and management software. We provide support for custom integrations as well.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: "Our AI agents are programmed with smart escalation protocols. If they encounter a question they cannot answer, they can seamlessly transfer the conversation to a human agent.",
  },
  {
    question: "Can I customize the voice, language, or tone?",
    answer: "Absolutely. We offer a variety of customization options for voice, language, accent, and tone to ensure the AI agent aligns perfectly with your brand identity.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer: "Not at all. We handle the entire setup and integration process. You'll get a fully functional AI agent without needing any technical expertise on your end.",
  },
  {
    question: "What's included in the free demo?",
    answer: "The free demo includes a consultation to understand your needs, a showcase of the AI agent's capabilities, and a customized proposal outlining the solution and pricing.",
  },
  {
    question: "Is my data and customer information safe?",
    answer: "Yes, we prioritize security. All data is encrypted, and we adhere to strict data protection and privacy regulations to ensure your and your customers' information is secure.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-6xl mx-auto grid gap-x-8 gap-y-4 md:grid-cols-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 4).map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className="border-slate-800">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(4).map((faq, index) => (
              <AccordionItem value={`item-${index + 5}`} key={index} className="border-slate-800">
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