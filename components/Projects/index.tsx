import React from "react";
import { portfolioItems } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight } from 'lucide-react';

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

const Index = ({id}: {id?: number}) => {
  return (
    <div className="w-full px-2 md:mt-0 mt-[200px] lg:px-20">
      <div className="flex justify-between items-end">
        <div>
          <p className={`text-6xl font-normal text-white`}>Work</p>
          <h2 className={`${headingFont2.className} tracking-normal text-8xl text-nowrap text-white`}>Our Projects</h2>
        </div>
        <div>
          <button
            onClick={() => (window.location.href = "/projects")}
            className="btn-projects"
          >
            <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
              All Projects
            </span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
        {portfolioItems.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ item }: { item: typeof portfolioItems[number] }) => {
  return (
    <Link href={`/projects/${item.id}`} className="project-link">
      <motion.div
        className="w-full group my-3 relative overflow-hidden rounded-md"
        whileHover={{ scale: 0.98 }} 
        transition={{ duration: 0.3 }} 
      >

        <motion.div
          className="h-[550px] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-6 text-black">
            <p className="text-white text-6xl mb-1 font-bold">{item.title}</p>
            <p className="text-2xl font-light text-white"></p>
            <div className="flex items-center py-1 space-x-2 text-white hover:text-cream transition-colors uppercase">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Index;
