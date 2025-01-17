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
        <p className="text-lg font-normal text-white">FAQ</p>
        <h2 className={`${headingFont2.className} text-8xl text-white`}>
          Frequently Asked Questions
        </h2>
        <Accordion
          className="text-white rounded-md font-normal"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1" className="px-1">
            <AccordionTrigger className="text-lg font-medium">
              Why to Choose Us?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            Dhuni Constructions stands out for its expertise in delivering high-quality residential and commercial projects with modern amenities and Vastu-compliant designs. Located in prime areas, the company ensures quality construction, transparency, and a customer-centric approach, making it a trusted choice for your dream space.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="px-1">
            <AccordionTrigger className="text-lg">
              Why you want to Buy Under Construction Flat?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            Buying an under-construction flat is a smart choice, offering early bird deals, the opportunity to personalize interiors, and access to modern amenities. It also provides excellent investment potential with price appreciation as the project nears completion, along with flexible payment plans during the construction phase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="px-1">
            <AccordionTrigger className="text-lg">
            How do you ensure the quality of construction?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            We use high-grade materials, follow industry standards, and conduct rigorous quality checks at every stage of the construction process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="px-1">
            <AccordionTrigger className="text-lg">
            Can I customize the design of my property?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            Yes, we offer customization options depending on the project phase, allowing clients to personalize layouts, interiors, and finishes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="px-1">
            <AccordionTrigger className="text-lg">
            What are your timelines for project completion?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            Timelines vary based on project size and complexity, but we are committed to meeting agreed deadlines while maintaining quality standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="px-1">
            <AccordionTrigger className="text-lg">
            Do you assist with obtaining necessary permits and approvals?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            Yes, we handle all legal and regulatory requirements, including permits, approvals, and documentation, to ensure a hassle-free process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="px-1">
            <AccordionTrigger className="text-lg">
            What is your payment schedule?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            We offer flexible payment plans linked to the project’s progress, ensuring transparency and convenience for our clients.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="px-1">
            <AccordionTrigger className="text-lg">
            How do you handle delays or unforeseen circumstances?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            We prioritize proactive communication and take necessary measures to address delays, ensuring minimal impact on the project timeline.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="px-1">
            <AccordionTrigger className="text-lg">
            How to Contact Dhuni Constructions Pvt. Ltd.?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
            You can reach out to us through filling below "Contact Us" form we will reach out to you, or you can directly call us on our contact number- +918830256985 and visit our office- Flat no. 202, Ganraj Sankul, Pratap Nagar, Nagpur, Maharashtra 440022.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Index;
