import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

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
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        y: '50%',
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
    <main className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        className="absolute z-0 h-full w-full object-cover scale-105"
      >
        <source src='video.mp4'/>
      </video>

      {/* Gradient Overlay with Parallax */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
      />

      {/* Main Content */}
      <div className="relative h-full">
        <div
          ref={contentRef}
          className="flex h-full flex-col items-center justify-center px-4 text-black"
        >
          <div className="text-center">
            <ul className="md:text-8xl text-white uppercase text-4xl font-bold leading-tight list-none items-center justify-center flex gap-5 md:gap-8">
              <li>Luxury</li>
              <li>Quality</li>
              <li>Simplicity</li>
            </ul>
            <p className="mx-auto mb-8 max-w-2xl leading-5 capitalize text-gray-200 md:text-lg">
              Experience the perfect blend of sophistication, innovation, and timeless design
              in every project we create.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4"
        >
          <button 
          onClick={() => window.location.href = '/flats-in-nagpur-for-sale'}
          className="group relative overflow-hidden bg-white md:px-8 md:py-4 px-6 py-4 text-black transition-transform duration-300">
            <span className="text-black text-nowrap text-sm relative z-10 flex uppercase items-center gap-1">
              Our Projects
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </button>
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative overflow-hidden border-2 border-white bg-transparent md:px-8 md:py-4 px-6 py-4 text-black transition-all duration-300 hover:border-orange-400"
          >
            <span className=" text-nowrap text-sm relative z-10 flex uppercase items-center gap-1">
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </button>
        </div>

        <div
            onClick={toggleMute}
            className="absolute z-10 md:bottom-5 bottom-3 left-3 md:left-5 rounded-full p-2 bg-white text-black"
          >
              {isMuted ? <VolumeX className="w-[24px] h-[24px] rounded-full" /> : <Volume2 className="w-[24px] h-[24px] rounded-full" />}
          </div>
      </div>
    </main>
  );
};

export default Hero;