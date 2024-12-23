import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import localFont from "next/font/local";
import "../Hero/imp.scss";
import { usePathname } from "next/navigation";


gsap.registerPlugin(ScrollTrigger);

const mainFont = localFont({
  src: "../../app/fonts/mainFont.otf",
  weight: "400",
  style: "normal",
});

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });

      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        y: "50%",
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main
      key={pathname} // Force re-render on route change
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background with Cache-Busting Query */}
      <video
        ref={videoRef}
        autoPlay
        loop
        preload="auto"
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source
          src={`/video2.mp4`} // Prevent caching issues
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay with Parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/60"
      />

      <div className="relative h-full">
        <div
          ref={contentRef}
          className="flex h-full flex-col items-center justify-center px-4 text-black"
        >
          <div className="text-center z-1">
            <ul
              className={`${mainFont.className} md:text-10xl text-white uppercase text-6xl sm:8xl  list-none items-center justify-center flex flex-row
              gap-5 md:gap-8 tracking-tight   2xl:text-11xl `}
            >
              <li
                style={{ textShadow: "rgba(255,213,0,0.58) 0px 0px 7px" }}
                className="list-item font-thin text-white relative "
              >
                Luxury
              </li>
              <li
                style={{ textShadow: "rgba(255,213,0,0.58) 0px 0px 7px" }}
                className="list-item font-thin text-white"
              >
                Quality
              </li>
              <li
                style={{ textShadow: "rgba(255,213,0,0.58) 0px 0px 7px" }}
                className="list-item font-thin text-white"
              >
                Simplicity
              </li>
            </ul>
            <p className="pTagForAnimation mx-auto mb-8 max-w-2xl text-xs sm:text-sm leading-4 text-white md:text-xl font-thin">
              Experience the perfect blend of sophistication, innovation, and
              timeless design in every project we create.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4"
        >
          <button
            onClick={() => (window.location.href = "/projects")}
            className="btn-projects z-10 relative  bg-white md:px-8 md:py-4 px-6 py-4  rounded-full"
          >
            <span className="z-30  text-nowrap text-sm relative flex uppercase items-center gap-1 font-semibold">
              Our Projects
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="btn-projects z-10 relative  bg-white md:px-8 md:py-4 px-6 py-4  rounded-full"
          >
            <span className="z-30  text-nowrap text-sm relative flex uppercase items-center gap-1">
              Contact Us
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        <div
          onClick={toggleMute}
          className="absolute z-10 bottom-4 left-4 rounded-full bg-transparent text-white"
        >
          {isMuted ? (
            <VolumeX className="h-[38px] w-[38px]" />
          ) : (
            <Volume2 className="h-[38px] w-[38px]" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
