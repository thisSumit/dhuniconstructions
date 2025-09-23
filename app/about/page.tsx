"use client";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.scss";
import { ImQuotesLeft } from "react-icons/im";
import Lenis from "lenis/react";

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

const imageUrls = [
  "/venus.png",
  "/uranus.png",
  "/neptune.png",
  "/mercury.png",
  "/mars2.png",
  "/mars.png",
  "/orbit.png",
  "/earth.png",
  "/arctic.png",
];

const Page = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<HTMLHeadingElement[]>([]);

  useEffect(() => {
    headingRefs.current.forEach((element) => {
      gsap.fromTo(
        element,
        {
          height: 0,
          overflow: "hidden",
        },
        {
          height: "auto",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );
    });

    const row1 = row1Ref.current;


      gsap.to(row1, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: row1,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });});

  return (
    <Lenis root>
    <main className="relative w-full h-auto overflow-hidden">
      <div>
    <div className="bg-blue w-full h-[60px]">
      </div>
      <div className="main-container hero-about w-[90vw] mx-auto h-auto pt-20 relative">
        <section className="note mt-10 founders-note">
          <h2
            className={`${numFont.className} md:text-8xl text-6xl font-thin uppercase tracking-widest`}
            ref={(el) => {
              if (el && !headingRefs.current.includes(el)) {
                headingRefs.current.push(el);
              }
            }}
          >
            A Message from the founders
          </h2>
          <hr />
          <div className="note flex flex-col xl:flex-row justify-between gap-10 mt-32 items-center">
            {/* <Image
              src={founders}
              alt="founders"
              className="w-[90vw] md:w-[50vw] xl:w-[30vw] rounded-md"
            /> */}
            <div className="">
              <ImQuotesLeft className="text-cream text-10xl" />
              <p
                className={`${numFont.className} text-6xl font-thin uppercase tracking-widest md:text-10xl text-black leading-snug`}
              >
                Great architecture isn’t just built; it’s felt, lived, &
                remembered forever.
              </p>
              <p className="italic text-black uppercase font-thin">
                Directors- Mr. Amit Tarekar & Mr. Swapnil Gode
              </p>
            </div>
          </div>
        </section>
        <div className="dhuni-desc mt-20 w-full text-black rounded-md">
          <h2
            className={`${numFont.className} md:text-8xl text-6xl font-thin uppercase tracking-widest`}
            ref={(el) => {
              if (el && !headingRefs.current.includes(el)) {
                headingRefs.current.push(el);
              }
            }}
          >
            About Us
          </h2>
          <hr className="mb-4" />
          <div className="overflow-hidden mt-10">
            <div ref={row1Ref} className="flex space-x-4 lg:space-x-8 items-center">
              {imageUrls.slice(0, 8).map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  width={1000}
                  height={1000}
                  alt="Image"
                  className="w-[100px] h-[auto] sm:w-80 sm:h-80 object-cover rounded-lg"
                />
              ))}
            </div>
            <div ref={row2Ref} className="flex space-x-4 lg:space-x-8 items-center mt-8">
              {imageUrls.slice(10).map((url, index) => (
                <Image
                width={1000}
                  height={1000}
                  key={index}
                  src={url}
                  alt="Image"
                  className="w-80 h-80 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="about-content flex flex-col-reverse xl:flex-row gap-2">
            <p className="font-thin text-justify uppercase text-lg">
              Dhuni Constructions Pvt. Ltd., established in 2012 by Mr. Amit Tarekar & Mr. Swapnil Gode, is a premier construction company based in Nagpur. We specialize in crafting residential & commercial spaces that epitomize luxury, quality, & simplicity. Our commitment to exceptional architecture & meticulous craftsmanship ensures that each project enhances lives through timeless design & functionality. With a focus on customer satisfaction, we transform visions into reality, delivering excellence at every step.
            </p>
          </div>
        </div>
        <section className="values">
          <h2
            className={`${headingFont2.className} text-black md:text-8xl text-6xl mt-20`}
            ref={(el) => {
              if (el && !headingRefs.current.includes(el)) {
                headingRefs.current.push(el);
              }
            }}
          >
            Our Values
          </h2>
          <hr />

          <div className="flex flex-col xl:flex-row gap-10 mt-20 mb-20 md:mt-32 md:mb-32 items-start">
            <div className="value-card rounded-md flex flex-col items-center justify-center p-5 ">
              <Image
              width={100}
                  height={100}
                className="w-[50px] h-auto mb-4"
                src="/luxury.png"
                alt="luxury"
              />
              <h3 className="text-black font-normal tracking-[5px] text-6xl mb-4 uppercase">
                Luxury
              </h3>
              <p className="text-black text-lg text-justify font-thin">
                We craft luxurious apartments in Nagpur with elegant designs, spacious layouts, & premium finishes perfect for modern families seeking upscale living.
              </p>
            </div>
            <div className="value-card rounded-md flex flex-col items-center justify-center p-5 ">
              <Image
              width={100}
                  height={100}
                className="w-[50px] h-auto mb-4"
                src="/quality.png"
                alt="quality"
              />
              <h3 className="text-black font-normal tracking-[5px] text-6xl mb-4 uppercase">
                Quality
              </h3>
              <p className="text-black text-lg text-justify font-thin">
                Each home is constructed using top-grade materials & skilled workmanship, ensuring durability, safety, & long-term value.
              </p>
            </div>
            <div className="value-card rounded-md flex flex-col items-center justify-center p-5 ">
              <Image
              width={100}
                  height={100}
                className="w-[50px] h-auto mb-4"
                src="/simplicity.png"
                alt="simplicity"
              />
              <h3 className="text-black tracking-[5px] font-normal text-6xl mb-4 uppercase">
                Simplicity
              </h3>
              <p className="text-black text-lg text-justify font-thin">
               Our homes feature minimal, intelligent designs that offer comfort, easy maintenance, & efficient everyday living.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>
    </main>
    </Lenis>
  );
};

export default Page;
