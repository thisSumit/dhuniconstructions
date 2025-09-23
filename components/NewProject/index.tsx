import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, PhoneIncomingIcon } from "lucide-react";
import Image from "next/image";
import localFont from "next/font/local";
import "../Hero/imp.scss";
import { motion } from "framer-motion";
import { trackContactUs } from "@/lib/gtm";
gsap.registerPlugin(ScrollTrigger);

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
        y: "-20%",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1, scale: 1.02 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
    <div className="flex flex-col justify-center items-center w-full md:mt-[150px] mb-20">
      <div className="p-3 xl:px-20 w-full items-center m-0 grid object-center grid-cols-1 grid-flow-auto md:grid-cols-2 gap-0">
        <div className=" sm:p-0  md:p-4 md:order-1 flex-col justify-center items-start text-black order-last">
          <div>
            <p
              className={`${numFont.className} md:md:text-8xl text-6xl font-thin uppercase tracking-widest`}
            >
              Ongoing Project
            </p>
            
            <Image
              width={10000}
              height={10000}
              className="md:w-[280px] w-[220px] mt-8 mb-4 rounded-md"
              src="/arctic-logo.png"
              alt="arctic apartments"
            />

            <p className="max-w-3xl font-thin text-md text-justify leading-normal">
              Discover Arctic Luxurious Apartments, Where modern design meets
              premium living. With sleek architecture, curving balconies, & 6+
              world-class amenities, Arctic offers an elevated lifestyle of
              elegance, comfort, & innovation.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between">
            <div className="grid gap-4 grid-cols-2 my-6 text-nowrap">
              <div className="flex flex-col items-center justify-end">
                <i className="fa-regular fa-code"></i>
                <p className="font-normal md:text-6xl text-4xl">2BHK & 3BHK</p>
                <p className="text-2xl text-center leading-5">
                  Luxurious Apartments
                </p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <i className="fa-regular fa-code"></i>
                <p className="font-normal md:text-6xl text-4xl">25000</p>
                <p className="text-2xl text-center leading-5">
                  Sq. Ft. Plot Size
                </p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <i className="fa-regular fa-code"></i>
                <p className="font-normal md:text-6xl text-4xl">G+12</p>
                <p className="text-2xl text-center leading-5">
                  Floors Apartment
                </p>
              </div>

              <div className="flex flex-col items-center justify-end">
                <i className="fa-regular fa-code"></i>
                <p className="font-normal md:text-6xl text-4xl">9+</p>
                <p className="text-2xl text-center leading-5">
                  World Class Amenities
                </p>
              </div>
            </div>

            <div className="flex gap-3 py-2">
              <button
                onClick={() => (window.location.href = "/artic")}
                className="btn-contact"
              >
                <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="arrow h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from- opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </button>
              <button
                onClick={() => {
                  trackContactUs('new_project_section');
                  window.location.href = "/contact";
                }}
                className="btn-contact"
              >
                <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
                  Contact Us
                  <ArrowUpRight className="arrow h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:order-2 sm:items-center sm:justify-center order-first mb-10">
          <Image
  width={800}
  height={500}
  src="/arctic.png"
  alt="Arctic Apartment Project Dhuni Constructions"
  className="w-full h-auto sm:w-[300px] lg:w-[80%] lg:h-full rounded-md"
/>

        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default index;
