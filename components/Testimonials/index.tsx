import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";
import localFont from "next/font/local";


const headingFont = localFont({
  src: "../../app/fonts/wasted.ttf",
  weight: "400",
  style: 'normal'
})
const headingFont2 = localFont({
  src: "../../app/fonts/new.ttf",
  weight: "400",
  style: "normal",
});
const Index = () => {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [isMutedArray, setIsMutedArray] = useState<boolean[]>(
    Array(8).fill(true) // Initialize mute state for each video
  );

  const videoSources = ["life1.mp4", "life2.mp4", "life3.mp4", "life4.mp4", "life1.mp4", "life2.mp4", "life3.mp4", "life4.mp4"];

  const toggleMute = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !isMutedArray[index];
      setIsMutedArray((prev) =>
        prev.map((muted, i) => (i === index ? !muted : muted))
      );
    }
  };

  return (
    <div /* className="pt-[200px] px-4 w-full h-full" */>
{/*       <div className="w-full flex items-baseline gap-1 mb-4 justify-center">
      <p className="text-lg font-thin text-white">What our</p>
      <h2 className={`${headingFont2.className} md:text-8xl text-6xl text-white`}>Customers Says?</h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 h-full w-full gap-8">
        {videoSources.map((src, index) => (
          <div
            key={index}
            className="relative w-full max-w-[400px] md:h-[450px] h-[300px] overflow-hidden rounded-lg shadow-lg bg-black">

            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              autoPlay
              src={src}
              preload="auto"
              muted={isMutedArray[index]}
              playsInline
              loop
              className="w-full h-full object-cover"
            />


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
      </div> */}
    </div>
  );
};

export default Index;
