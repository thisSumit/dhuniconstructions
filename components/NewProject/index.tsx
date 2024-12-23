import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, PhoneIncomingIcon } from "lucide-react";
import localFont from "next/font/local";
import "../Hero/imp.scss";
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
    <div className="flex flex-col justify-center items-center w-full md:mt-[150px] mb-20">
      <div className="p-3 xl:px-20 w-full items-center m-0 grid object-center grid-cols-1 grid-flow-auto md:grid-cols-2 gap-0">
        <div className=" sm:p-0  md:p-4 md:order-1 flex-col justify-center items-start text-white order-last">
          <div>
            <p
              className={`${headingFont2.className} text-8xl font-thin tracking-normal`}
            >
              Upcoming Project
            </p>
            <img
              className="md:w-[280px] w-[200px] my-2 mix-blend-difference rounded-md"
              src="arctic-logo.png"
              alt="failed to load"
            />

            <p className="max-w-3xl font-thin text-md leading-normal">
              Discover Arctic Luxurious Apartments, Where modern design meets
              premium living. With sleek architecture, curving balconies, and 6+
              world-class amenities, Arctic offers an elevated lifestyle of
              elegance, comfort, and innovation.
            </p>
            <div className="my-6">
              <p className="text-md">
                Location: <span className="font-thin">Arctic</span>
              </p>
              <p className="text-lg">
                Category: <span className="font-thin">Construction</span>
              </p>
              <p className="text-lg">
                Start Date: <span className="font-thin">12/12/2022</span>
              </p>
              <p className="text-lg">
                End Date: <span className="font-thin">12/12/2023</span>
              </p>
            </div>
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
                onClick={() => (window.location.href = "/contact")}
                className="btn-projects"
              >
                <span className="text-nowrap  text-sm relative z-10 flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from- opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </button>
              <button
                onClick={() => (window.location.href = "/projects/artic")}
                className="btn-projects"
              >
                <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:order-2 sm:items-center sm:justify-center order-first mb-10">
          <img
            className="w-full h-auto sm:w-[300px] lg:w-[80%] lg:h-full rounded-md"
            src="arctic.png"
            alt="Arctic Project"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
