'use client'
import Description from "@/components/Description";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Lifestyle from "@/components/Lifestyle";
import NewProject from "@/components/NewProject";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery"
import SEOContent from "@/components/SEOContent";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";




export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      setTimeout(() => {
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 10);
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
    {/* Hidden SEO Content - Searchable but not visible to users */}
    <div className="sr-only" aria-hidden="true">
      <SEOContent />
    </div>
    </main>
  );
}
