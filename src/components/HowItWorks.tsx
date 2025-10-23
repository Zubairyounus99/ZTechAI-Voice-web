"use client";

const steps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We start with a free consultation to understand your business, challenges, and goals. We'll identify the best opportunities for AI integration.",
  },
  {
    step: 2,
    title: "Solution Design & Build",
    description: "Our team designs and develops a custom AI solution tailored to your specific needs. We keep you updated throughout the process.",
  },
  {
    step: 3,
    title: "Deploy & Support",
    description: "We deploy the solution into your existing systems and provide ongoing support and optimization to ensure maximum performance and ROI.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our process is simple, transparent, and designed for your success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                {step.step}
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};