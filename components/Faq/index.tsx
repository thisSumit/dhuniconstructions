import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const index = () => {
    return (
        <div className="flex flex-col md:p-[200px] py-[200px] px-2">
            <div>
                <p className='text-lg font-thin'>FAQ</p>
                <h2 className="text-8xl">Frequently Ask Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-xl'>Why to Choose Us?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Choosing Dhuni Construction Pvt. Ltd. means opting for unparalleled luxury, quality, and simplicity in every aspect of your new home. Our wave-inspired architectural designs set us apart, creating a unique living experience that combines aesthetic beauty with functional elegance. With a commitment to using the highest quality materials and incorporating the latest construction technologies, we ensure that every detail meets the highest standards. Our dedicated team of professionals works tirelessly to transform your vision into reality, providing personalized service and unmatched craftsmanship.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-xl'>Why you want to Buy Under Construction Flat?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Buying an under-construction flat offers several advantages:

Early Bird Offers: Gain access to pre-launch prices and exclusive offers not available once the project is completed.

Customization: Personalize your new home with finishes and fixtures that reflect your style.

Modern Amenities: Enjoy the latest amenities and designs that cater to contemporary living.

Investment Potential: Benefit from potential price appreciation as the project nears completion.

Flexible Payment Plans: Take advantage of flexible payment options during the construction phase.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-xl'>How to Contact Us?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                        Dhuni Construction Pvt. Ltd. are well known brand in Central India. You can directly come to Office or Can call on give Phone Number

Address: Flat no. 202, Ganraj Sankul, Pratap Nagar, Nagpur, Maharashtra 440022

Phone Number: 079726 70402
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className='text-xl'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-xl'>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default index