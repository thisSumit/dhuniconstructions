import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const index = () => {
    return (
        <div className="flex text-white justify-start flex-col md:p-[200px] py-[200px] px-2">
            <div>
                <p className='text-lg font-thin'>FAQ</p>
                <h2 className="text-8xl">Frequently Ask Questions</h2>
                <Accordion type="single" className='font-sans' collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-xl'>What sets Dhuni Constructions Pvt. Ltd. apart from other builders in Nagpur?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        We focus on luxury, quality, and simplicity in every project. Our modern designs and top-quality construction ensure that each of our homes is a symbol of elegance and functionality.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-xl'>What is the price range for apartments in your upcoming projects?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        The prices vary depending on factors such as size, location, and amenities. However, we are committed to offering luxurious apartments at competitive prices, providing great value for our clients.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-xl'>How can I book an apartment with Dhuni Constructions?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Booking an apartment is simple. You can reach out via our website or contact our customer service for personalized assistance. We also offer online booking options for added convenience.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className='text-xl'>What amenities are included in your apartments?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Our apartments are equipped with premium amenities, including modern kitchens, spacious living areas, fitness centers, community spaces, and more, ensuring your comfort and convenience.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className='text-xl'>Can I visit the site before making a purchase?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Yes, we encourage all potential buyers to visit our project sites. Our team will be happy to give you a guided tour and answer any questions you may have.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default index