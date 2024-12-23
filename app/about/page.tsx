"use client";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "../../dhuni-intro.jpg";
import dhuni from "../../public/logo w-org.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.scss";
import { ImQuotesLeft } from "react-icons/im";
import founders from "../../public/founders.png";

gsap.registerPlugin(ScrollTrigger);

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
            start: "top 80%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );
    });

    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      gsap.to(row1, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: row1,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(row2, {
        xPercent: -40,
        ease: "none",
        scrollTrigger: {
          trigger: row2,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <main className="relative w-full h-auto overflow-hidden mx-auto">
      <div className="main-container hero-about w-[80vw] h-auto mx-auto pt-20 relative">
        <section className="note mt-10 founders-note">
          <h2
            className={`${headingFont2.className} text-white text-8xl`}
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
            <Image
              src={founders}
              alt="founders"
              className="w-[90vw] md:w-[50vw] xl:w-[30vw] rounded-md"
            />
            <div className="">
              <ImQuotesLeft className="text-cream text-10xl" />
              <p
                className={`${headingFont2.className} text-8xl md:text-10xl text-white leading-snug`}
              >
                Great architecture isn’t just built; it’s felt, lived, and
                remembered forever.
              </p>
              <p className="italic text-white font-thin">
                - Amit Tarekar & Swapnil Gode
              </p>
            </div>
          </div>
        </section>
        <div className="dhuni-desc mt-20 w-full bg-blue text-white rounded-md">
          <h2
            className={`${headingFont2.className} text-8xl`}
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
                <img
                  key={index}
                  src={url}
                  alt="Image"
                  className="w-[100px] h-[auto] sm:w-80 sm:h-80 object-cover rounded-lg"
                />
              ))}
            </div>
            <div ref={row2Ref} className="flex space-x-4 lg:space-x-8 items-center mt-8">
              {imageUrls.slice(10).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt="Image"
                  className="w-80 h-80 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="about-content flex flex-col-reverse xl:flex-row gap-2">
            <p className="font-thin text-justify text-lg">
              Dhuni Constructions Pvt. Ltd., founded in 2012 by Amit Tarekar and
              Swapnil Gode, is a trusted name in the construction industry.
              Guided by a passion for exceptional architecture, we deliver
              projects that blend luxury, simplicity, and quality craftsmanship.
              We believe great architecture enhances lives, combining timeless
              design with functionality. From residential to commercial spaces,
              our focus is on creating lasting impressions and exceeding client
              expectations. At Dhuni, customer satisfaction is our priority, and
              we take pride in transforming visions into reality with excellence
              at every step.
            </p>
          </div>
        </div>
        <section className="values">
          <h2
            className={`${headingFont2.className} text-white text-8xl mt-20`}
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
              <img
                className="w-[80px] h-auto mb-4"
                src="/Satisfaction.png"
                alt="customer satisfaction"
              />
              <h3 className="text-white font-normal text-6xl mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-white text-lg font-thin text-justify">
                At Dhuni Constructions, we prioritize understanding our clients'
                needs and delivering beyond expectations. Every project reflects
                our commitment to creating spaces that bring joy and comfort.
                Your satisfaction is the cornerstone of our success.
              </p>
            </div>
            <div className="value-card rounded-md flex flex-col items-center justify-center p-5 ">
              <img
                className="w-[80px] h-auto mb-4"
                src="/Guarantee.png"
                alt="customer satisfaction"
              />
              <h3 className="text-white font-normal text-6xl mb-4">
                Quality Excellence
              </h3>
              <p className="text-white text-lg font-thin text-justify">
                We are dedicated to delivering superior quality in every
                project. From top-notch materials to meticulous craftsmanship,
                we ensure every detail speaks of perfection. Our focus on
                excellence guarantees lasting value and beauty.
              </p>
            </div>
            <div className="value-card rounded-md flex flex-col items-center justify-center p-5 ">
              <img
                className="w-[80px] h-auto mb-4"
                src="/Trust.png"
                alt="customer satisfaction"
              />
              <h3 className="text-white font-normal text-6xl mb-4">
                Trust and Relationships
              </h3>
              <p className="text-white text-lg font-thin text-justify">
                Building strong, lasting relationships is at the heart of what
                we do. Through transparency, reliability, and personalized
                service, we have earned the trust of our clients. For us, every
                project is a journey together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
