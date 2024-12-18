'use client'
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lifestyle from "@/components/Lifestyle";
import NewProject from "@/components/NewProject";
// import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Set timeout for loading and other DOM manipulations
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 5000);

      // Dynamically import LocomotiveScroll after mounting
      import('locomotive-scroll').then((module) => {
        const LocomotiveScroll = module.default;
        const locomotiveScroll = new LocomotiveScroll();
      });
    }
  }, []);
  
  return (
    <main className="overflow-hidden">
    {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
    <Hero/>
    <Description/>
    <NewProject/>
    <Projects id={1}/>
    <Lifestyle/>
    {/* <Testimonials/> */}
    <Faq/>
    </main>
  );
}
