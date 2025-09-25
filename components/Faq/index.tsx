import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import localFont from "next/font/local";

const numFont = localFont({
  src: "../../app/fonts/wasted.ttf",
  weight: "400",
  style: "normal",
});
const headingFont2 = localFont({
  src: "../../app/fonts/new.ttf",
  weight: "400",
  style: "normal",
});

const Index = () => {
  return (
    <div className="flex flex-col md:p-[200px] py-[200px] px-2">
      <div>
        <p className="text-lg font-thin text-black">FAQ</p>
        <h2 className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl text-black`}>
          Frequently Asked Questions
        </h2>
        <Accordion
          className="rounded-md"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1" className="px-1">
            <AccordionTrigger className="text-md">
              Why choose Dhuni Constructions?
            </AccordionTrigger>
            <AccordionContent className="text-md">
              We deliver modern, Vastu-compliant homes in prime Nagpur locations, combining quality construction with a customer-first approach.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="px-1">
            <AccordionTrigger className="text-md">
              What are the benefits of under-construction flats?
            </AccordionTrigger>
            <AccordionContent className="text-md">
              Early booking discounts, flexible payment options, & scope for customizing interiors before completion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="px-1">
            <AccordionTrigger className="text-md">
              How do you ensure construction quality?
            </AccordionTrigger>
            <AccordionContent className="text-md">
              We use top-grade materials & follow strict quality checks at every stage.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="px-1">
            <AccordionTrigger className="text-md">
              Can I customize my apartment?
            </AccordionTrigger>
            <AccordionContent className="text-md">
              Yes, limited customization is available during the early construction phase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="px-1">
            <AccordionTrigger className="text-md">
              How do I contact Dhuni Constructions?
            </AccordionTrigger>
            <AccordionContent className="text-md">
              Fill out our contact form or call us at +91 8830256985 | +91 8262899382. Visit: Flat No. 202, Ganraj Sankul, Pratap Nagar, Nagpur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Index;
