import React, { useLayoutEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { slideUp } from './animation';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, MapPin, PhoneIncomingIcon } from 'lucide-react';

const index = () => {

  const imageRef = useRef<HTMLImageElement>(null); 
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for content
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      });

      // Parallax effect for video
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scale: 1,
        y: '-20%',
      });
    });

    return () => ctx.revert();
  }, []);



  return (
    <div className="flex flex-col justify-center items-center w-full md:mt-[200px] mx-4">
      <div className='md:mx-10 pr-5 items-center m-0 grid object-center grid-cols-1 md:grid-cols-2 gap-0'>
        <div className='flex order-2 p-4 md:order-1 flex-col justify-center items-start'>
          <div>
              <p className='text-lg font-thin'>Upcoming Project</p>
              <img className='md:w-[280px] w-[200px]' src="arctic-logo.png" alt="" />
              <p className='max-w-3xl'>Discover Arctic Luxurious Apartments, Where modern design meets premium living. With sleek architecture, curving balconies, and 6+ world-class amenities, Arctic offers an elevated lifestyle of elegance, comfort, and innovation.</p>
            <div className='my-6 flex gap-2 text-white'>
            <MapPin/><p>Location: <span>Jaitala Road, Nagpur</span></p>
            </div>
          </div>

          <div className='flex flex-col items-start justify-between'>
            <div className='grid gap-4 grid-cols-2 my-6 text-nowrap'>
              <div className='flex flex-col items-center justify-end'>
                <i className="fa-regular fa-code"></i>
                <p className='font-normal md:text-6xl text-4xl'>2BHK & 3BHK</p>
                <p className='text-2xl text-center leading-5'>Luxurious Apartments</p>
              </div>

              <div className='flex flex-col items-center justify-end'>
                <i className="fa-regular fa-code"></i>
                <p className='font-normal md:text-6xl text-4xl'>25000</p>
                <p className='text-2xl text-center leading-5'>Sq. Ft. Plot Size</p>
              </div>

              <div className='flex flex-col items-center justify-end'>
                <i className="fa-regular fa-code"></i>
                <p className='font-normal md:text-6xl text-4xl'>G+12</p>
                <p className='text-2xl text-center leading-5'>Floors Apartment</p>
              </div>

              <div className='flex flex-col items-center justify-end'>
                <i className="fa-regular fa-code"></i>
                <p className='font-normal md:text-6xl text-4xl'>9+</p>
                <p className='text-2xl text-center leading-5'>World Class Amenities</p>
              </div>
            </div>

            <div className="flex gap-3 py-2">
            <button onClick={() => window.location.href = '/contact'} className=" uppercase group relative overflow-hidden border-[1px] border-white bg-white md:px-8 md:py-4 px-6 py-4 text-black transition-all duration-300 hover:border-orange-400">
                        <span className="text-nowrap text-black text-sm relative z-10 flex items-center gap-2">
                            Contact Us
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from- opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </button>
              <button onClick={() => window.location.href = '/projects/1'} className=" uppercase group relative overflow-hidden border-[1px] border-white bg-transparent md:px-8 md:py-4 px-6 py-4 text-black transition-all duration-300 hover:border-orange-400">
                        <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
                            Learn More
                            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </button>
            </div>
          </div>
        </div>
        <div className='flex w-full order-1 md:order-2 p-4 items-center justify-center'>
        <img ref={imageRef} className='w-full' src="arctic.png" alt="Arctic Project" />
        </div>
      </div>
    </div>
  )
}

export default index