"use client";

import React from "react";
import { portfolioItems } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "../../components/Hero/imp.scss";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { Lenis } from "lenis/react";

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
const Page = () => {
  return (
    <Lenis root>
    <div>
    <div className="bg-blue w-full h-[60px]">
      </div>
    <div
      className="w-full px-2 my-[50px] lg:px-20"
    >
      {/* Header Section */}
      <div className="flex justify-between items-end ">
        <div>
          <p className={`text-black text-4xl font-thin`}>Works</p>
          <h2 className={`${numFont.className} md:text-8xl text-6xl font-thin uppercase tracking-widest text-black`}>All Projects</h2>
        </div>
      </div>


      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
        {portfolioItems.map((items) => (
          <Link
            key={items.id} 
            href={`/${items.id}`}
            className="project-link"
          >
            <motion.div
              className="w-full group my-3 relative overflow-hidden rounded-md"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }} 
            >
              {/* Image Container */}
              <div className="overflow-hidden relative group">
  {items.img && (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full"
    >
      <Image
        width={10000}
        height={10000}
        src={items.img}
        alt={items.title || "Project Image"}
        className="lg:h-[550px] md:h-[400px] sm:h-[200px] w-full lg:object-cover object-contain transition-transform duration-500"
      />
    </motion.div>
  )}
</div>
              <div className="bottom-0 left-0 pt-2 text-black">
                <p className="text-gray-300 uppercase text-4xl md:text-6xl leading-6 my-1">
                  {items.title}
                </p>

                <div className="flex items-center py-1 space-x-2 text-black group-hover:text-gold transition-colors uppercase">
                  <span className="text-sm">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
    </div>
    </Lenis>
  );
};

export default Page;
