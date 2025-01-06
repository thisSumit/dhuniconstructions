"use client";

import React from "react";
import { portfolioItems } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "../../components/Hero/imp.scss";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const headingFont2 = localFont({
  src: "../../app/fonts/new.ttf",
  weight: "400",
  style: "normal",
});
const Page = () => {
  return (
    <div
      className="w-full px-2 my-[150px] lg:px-20 text-white"

    >
      {/* Header Section */}
      <div className="flex justify-between items-end ">
        <div>
          <p className={` text-4xl font-thin`}>Works</p>
          <h2 className={`${headingFont2.className} text-8xl font-thin`}>All Projects</h2>
        </div>
      </div>


      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
        {portfolioItems.map((items) => (
          <Link
            key={items.id} 
            href={`/projects/${items.id}`}
            className="project-link"
          >
            <motion.div
              className="w-full group my-3 relative overflow-hidden rounded-md"
              whileHover={{ scale: 0.98 }} 
              transition={{ duration: 0.3 }} 
            >
              {/* Image Container */}
              <div>
                {items.img && (
                  <img
                    src={items.img} 
                    alt={items.title || "Project Image"}
                    className="lg:h-[550px] md:h-[400px] sm:h-[200] relative w-full object-cover"
                  />
                )}
              </div>
              <div className="bottom-0 left-0 pt-2 text-white">
                <p className="text-gray-300 text-4xl md:text-6xl leading-6 my-1 font-bold">
                  {items.title}
                </p>

                <div className="flex items-center py-1 space-x-2 text-white group-hover:text-gold transition-colors uppercase">
                  <span className="text-sm">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
