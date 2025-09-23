import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import localFont from "next/font/local";
import "../Hero/imp.scss";
import { usePathname } from "next/navigation";
import { trackContactUs } from "@/lib/gtm";


gsap.registerPlugin(ScrollTrigger);

const mainFont = localFont({
  src: "../../app/fonts/wasted.ttf",
  weight: "400",
  style: "normal",
});

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Check if device is mobile/tablet
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

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

    return () => {
      ctx.revert();
      window.removeEventListener('resize', checkIsMobile);
    };
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
  preload="none"
  poster="/hero.png"
  muted={isMuted}
  playsInline
  className="absolute inset-0 h-full w-full object-cover scale-105 z-0"
>
  <source src="/introvideo.webm" type="video/webm" />
</video>

      {/* Gradient Overlay with Parallax */}
      <div
        ref={overlayRef}
        className="absolute z-5"
      />

      <div className="relative h-full z-20">

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 px-4 z-30"
        >
          <button
            onClick={() => (window.location.href = "/projects")}
            className="btn-projects z-10 relative  bg-white md:px-8 md:py-4 px-6 py-4  rounded-full"
          >
            <span className="z-30 text-nowrap text-sm relative flex uppercase items-center gap-1 font-semibold">
              Our Projects
              <ArrowUpRight className="arrow rotate-45 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
          <button
            onClick={() => {
              trackContactUs('hero_section');
              window.location.href = "/contact";
            }}
            className="btn-projects z-10 relative  bg-white md:px-8 md:py-4 px-6 py-4  rounded-full"
          >
            <span className="z-30  text-nowrap text-sm relative flex uppercase items-center gap-1">
              Contact Us
              <ArrowUpRight className="arrow h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* Mobile Sound Toggle Button - Bottom Right */}
        {isMobile && (
          <div
            onClick={toggleMute}
            className="absolute z-50 bottom-28 right-4 rounded-full bg-black/50 backdrop-blur-sm text-white p-3 shadow-lg border border-white/20"
          >
            {isMuted ? (
              <VolumeX className="h-6 w-6" />
            ) : (
              <Volume2 className="h-6 w-6" />
            )}
          </div>
        )}

        {/* Desktop Sound Toggle Button - Bottom Left */}
        <div
          onClick={toggleMute}
          className={`absolute z-30 bottom-4 left-4 rounded-full bg-white text-black p-2 ${
            isMobile ? 'hidden' : 'block'
          }`}
        >
          {isMuted ? (
            <VolumeX className="h-[28px] w-[28px]" />
          ) : (
            <Volume2 className="h-[28px] w-[28px]" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Hero;
