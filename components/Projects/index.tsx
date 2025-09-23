import React from "react";
import { portfolioItems } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight, ArrowUpRight, ArrowUpRightFromSquare, MapPin } from 'lucide-react';
import Image from "next/image";

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
          <p className={`text-6xl font-thin text-black`}>Work</p>
          <h2 className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl text-nowrap text-black`}>Our Projects</h2>
        </div>
        <div>
          <button
            onClick={() => (window.location.href = "/projects")}
            className="btn-contact"
          >
            <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
              All Projects
              <ArrowUpRightFromSquare className="arrow w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
      {portfolioItems.slice(0, 6).map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ item }: { item: typeof portfolioItems[number] }) => {
  return (
    <Link href={`/${item.id}`} className="project-link">
      <motion.div
        className="w-full group my-3 relative overflow-hidden rounded-md"
        whileHover={{ scale: 0.98 }} 
        transition={{ duration: 0.3 }}
      >

        <motion.div
          className="h-[550px] w-full brightness-105"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-white/0 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute flex w-full justify-center bottom-0 px-8 text-black">
            <Image
                            width={2000}
                            height={1000}
                            src={item.logo}
                            alt={item.title}
                            className="w-[180px] md:w-[250px] h-full py-5"
                          />
            {/* <p className="text-white leading-6 text-6xl mb-1 font-bold">{item.title}</p>
            <p className="flex items-end gap-1 mb-2 leading-5 text-2xl font-light text-white"><MapPin className="w-4"></MapPin>{item.location}</p> */}
            {/* <div className="flex items-center py-1 text-white hover:text-cream transition-colors uppercase">
              <span>View Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </div> */}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Index;
