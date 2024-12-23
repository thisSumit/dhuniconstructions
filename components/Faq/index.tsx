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
          className="text-white rounded-md px-4 font-normal"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              Why to Choose Us?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              Choosing Dhuni Construction Pvt. Ltd. means opting for
              unparalleled luxury, quality, and simplicity in every aspect of
              your new home. Our wave-inspired architectural designs set us
              apart, creating a unique living experience that combines aesthetic
              beauty with functional elegance. With a commitment to using the
              highest quality materials and incorporating the latest
              construction technologies, we ensure that every detail meets the
              highest standards. Our dedicated team of professionals works
              tirelessly to transform your vision into reality, providing
              personalized service and unmatched craftsmanship.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              Why you want to Buy Under Construction Flat?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              Buying an under-construction flat offers several advantages: Early
              Bird Offers: Gain access to pre-launch prices and exclusive offers
              not available once the project is completed. Customization:
              Personalize your new home with finishes and fixtures that reflect
              your style. Modern Amenities: Enjoy the latest amenities and
              designs that cater to contemporary living. Investment Potential:
              Benefit from potential price appreciation as the project nears
              completion. Flexible Payment Plans: Take advantage of flexible
              payment options during the construction phase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">
              How to Contact Us?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              Dhuni Construction Pvt. Ltd. are well known brand in Central
              India. You can directly come to Office or Can call on give Phone
              Number Address: Flat no. 202, Ganraj Sankul, Pratap Nagar, Nagpur,
              Maharashtra 440022 Phone Number: 079726 70402
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">
              Can I visit ongoing projects or completed sites?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              Absolutely! We are happy to arrange site visits so you can
              experience the quality and craftsmanship of our work firsthand.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">
              What sets Dhuni Constructions apart from other companies?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              Our dedication to quality, luxury, and customer satisfaction is
              unmatched. We believe in building long-term relationships with
              clients and ensuring their dreams are brought to life with
              meticulous attention to detail.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg">
              How does Dhuni Constructions ensure quality in its projects?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              We use premium materials, hire skilled professionals, and follow
              rigorous quality checks at every stage of construction to deliver
              lasting excellence.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg">
              Where is Dhuni Constructions located?
            </AccordionTrigger>
            <AccordionContent className="text-lg font-thin">
              We are based in Nagpur, India, but we undertake projects across
              various locations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Index;
