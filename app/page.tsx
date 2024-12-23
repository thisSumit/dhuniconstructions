'use client'
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Lifestyle from "@/components/Lifestyle";
import NewProject from "@/components/NewProject";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery"
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";




export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

/*       lenis.on('scroll', (e: any) => {
        console.log(e);
      }); */

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 10);

      // Dynamically import LocomotiveScroll after mounting
/*       import('locomotive-scroll').then((module) => {
        const LocomotiveScroll = module.default;
        const locomotiveScroll = new LocomotiveScroll();
      }); */
    }
  }, []);
  
  return (
    <main className="overflow-hidden">
    <Hero/>
    <Description/>
    <NewProject/>
    <Projects id={1}/>
    <Lifestyle/>
    <Testimonials/>
    <Gallery />
    <Faq/>
    </main>
  );
}
