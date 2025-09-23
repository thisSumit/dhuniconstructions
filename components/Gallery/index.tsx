"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const headingFont2 = localFont({
  src: "../../app/fonts/new.ttf",
  weight: "400",
  style: "normal",
});
const numFont = localFont({
  src: "../../app/fonts/wasted.ttf",
  weight: "400",
  style: "normal",
});

const imageUrls = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
  "/17.jpg",
  "/18.jpg",
  "/19.jpg",
  "/20.jpg",
];

const GridAnimation: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      // Row 1 Animation
      gsap.to(row1, {
        xPercent: -20, // Moves left to right when scrolling down
        ease: "none",
        force3D: true, // Enable GPU acceleration
        scrollTrigger: {
          trigger: row1,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrub effect
        },
      });

      // Row 2 Animation
      gsap.to(row2, {
        xPercent: -80, // 40% faster movement
        ease: "none",
        force3D: true, // Enable GPU acceleration
        scrollTrigger: {
          trigger: row2,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrub effect
        },
      });
    }
  }, []);

  return (
    <section className="image-gallery mt-40 mx-4">
      <div className="px-0 lg:px-[200px] mx-auto flex-col mb-20">
        <h2 className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl leading-9`}>
          We know the Art Of Luxury
        </h2>
        <p className="text-black font-thin">
          Experience the pinnacle of craftsmanship & design through our curated gallery, where every project reflects unparalleled elegance & timeless sophistication.
        </p>
      </div>
      <div className="overflow-hidden">
        <div ref={row1Ref} className="flex space-x-4 lg:space-x-8 items-center">
          {imageUrls.slice(0, 20).map((url, index) => (
            <Image
            width={1000}
                    height={1000}
              key={index}
              src={url}
              alt="Image"
              className="w-40 h-40 sm:w-80 sm:h-80 object-cover rounded-lg"
            />
          ))}
        </div>
        <div ref={row2Ref} className="flex space-x-4 lg:space-x-8 items-center mt-8">
          {imageUrls.slice(0).map((url, index) => (
            <Image
            width={1000}
                    height={1000}
              key={index}
              src={url}
              alt="Image"
              className="w-40 h-40 sm:w-80 sm:h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridAnimation;
