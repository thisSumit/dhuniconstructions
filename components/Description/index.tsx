import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import NumberTicker from "@/components/ui/number-ticker";
import { ArrowUpRight, Pause, PauseIcon } from "lucide-react";
import localFont from "next/font/local";

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

export default function index() {
  const phrase = "We  craft  home  with  Luxury  Quality  and  Simplicity";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={`${styles.description} text-white`}>
      <div className={styles.body}>
        <h2
          className={`${headingFont2.className} tracking-normal md:text-[40px] text-[20px] font-thin heading-font`}
          style={{ fontSize: "3rem" }}
        >
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>
        <motion.p
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="tracking-normal text-lg text-white md:text-lg font-thin "
        >
          For over 20 years, we've mastered the art of crafting impeccable
          lifestyle standards that are both luxurious and sustainable.
          Experience the future of Dhuni Constructions Pvt. Ltd., where timeless
          elegance and modern sustainability converge to create a truly
          unparalleled living experience.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          {/* <Rounded className={styles.button}>
                        <p><a href="/about">About Us</a></p>
                    </Rounded> */}
          <button
            onClick={() => (window.location.href = "/about")}
            className="btn-projects z-10 relative  bg-white md:px-8 md:py-4 px-6 py-4  rounded-full"
          >
            <span className="z-30  text-nowrap text-sm relative flex uppercase items-center gap-1">
              About us
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
      {/* <video className='mt-10' src="video1.mp4" autoPlay autoFocus muted onAbort={close}></video> */}
      {/* <img src="dhuni-intro.jpg" className='mt-10 rounded-md' alt="" /> */}

      <div className="md:flex grid grid-cols-2 gap-8 my-8 p-4 items-center content-center justify-between">
        <div className="flex flex-col items-center justify-center ">
          <p
            className={`  text-nowrap whitespace-pre-wrap text-8xl font-normal tracking-normal text-white`}
          >
            <NumberTicker

              value={128000}
            />
            +
          </p>
          <p className={`text-white text-center leading-5 font-normal test `}>
            Sq.ft. Land We Developed
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            className={` whitespace-pre-wrap text-8xl font-normal tracking-normal text-white`}
          >
            <NumberTicker
              
              value={21}
            />
            +
          </p>
          <p className="text-center leading-5 text-white">
            Years of Experience
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p
            className={` whitespace-pre-wrap text-8xl   font-normal tracking-normal text-white`}
          >
            <NumberTicker value={11}  />+
          </p>
          <p className="text-center leading-5 text-white">
            Successful Projects Delivered
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-white">
          <p
            className={` whitespace-pre-wrap text-8xl font-normal tracking-normal text-white`}
          >
            <NumberTicker
              
              value={98}
            />
            %
          </p>
          <p className="text-center leading-5">Happy Customers Rate</p>
        </div>
      </div>
    </div>
  );
}
