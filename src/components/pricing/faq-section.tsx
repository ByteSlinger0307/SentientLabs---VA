"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";
import SlideIn from "@/components/animations/slide-in";

export default function FAQSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-24 bg-slate-950">
      <div className="container mx-auto max-w-4xl">
        <SlideIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7861fc]">
              Questions
            </span>
          </h2>
        </SlideIn>

        <SlideIn delay={0.2}>
          <div className="mt-12 space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl px-6 py-2 hover:border-[#7861fc]/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-white hover:text-[#7861fc] hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}