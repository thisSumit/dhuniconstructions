"use client"; // Ensures the component is client-only

import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

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
      <div className="w-full flex items-baseline gap-3 mb-4 justify-center text-white">
        <p
          className={`text-8xl font-normal tracking-normal`}
        >
          Inspirational
        </p>
        <h2 className={`text-8xl tracking-normal`}>
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
                className="absolute bottom-5 right-5 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white text-black shadow-md cursor-pointer"
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
