"use client"; // Ensures the component is client-only

import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import localFont from "next/font/local";

// Load custom fonts
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

const Hero = () => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [isMutedArray, setIsMutedArray] = useState<boolean[]>([]);
  const [isClient, setIsClient] = useState(false); // Ensures client-side rendering

  const videoSources = [
    "/life1.mp4",
    "/life2.mp4",
    "/life3.mp4",
    "/life4.mp4",
  ];

  const toggleMute = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !isMutedArray[index];
      setIsMutedArray((prev) =>
        prev.map((muted, i) => (i === index ? !muted : muted))
      );
    }
  };

  useEffect(() => {
    // Client-side check for consistent state initialization
    setIsClient(true);
    setIsMutedArray(Array(videoSources.length).fill(true));
  }, [videoSources.length]);

  return (
    <div className="pt-[200px] px-4 w-full h-full">
      {/* Heading */}
      <div className="w-full md:flex items-center md:items-baseline gap-3 mb-4 justify-center text-black">
        <p
          className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl font-normal`}
        >
          Inspirational
        </p>
        <h2 className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl`}>
          Lifestyle
        </h2>
      </div>

      {/* Video Grid */}
      <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-8">
        {isClient &&
          videoSources.map((src, index) => (
            <div
              key={index}
              className="relative w-full max-w-[400px] h-[700px] overflow-hidden rounded-lg shadow-lg bg-black"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={src}
                autoPlay
                loop
                muted={isMutedArray[index]}
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              {/* Mute/Unmute Button */}
              <div
                onClick={() => toggleMute(index)}
                className="absolute bottom-5 right-5 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black text-white shadow-md cursor-pointer"
              >
                {isMutedArray[index] ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
