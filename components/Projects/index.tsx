import React, { useRef, useState } from 'react'
import { projectItems } from '@/data';
import { motion, useDragControls } from "framer-motion"
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const index = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  event,
  link,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  event?: string;
  link?: string;
}) => {


  return (
    <div className="w-full px-2 md:mt-0 mt-[200px]  lg:px-20">
      <div className='flex justify-between items-end'>
        <div>
        <p className='text-lg font-thin'>Work</p>
        <h2 className="text-8xl text-nowrap">Our Projects</h2>
        </div>
        <div>
        <button onClick={() => window.location.href = '/projects'} className=" uppercase group relative overflow-hidden border-[1px] border-white bg-transparent md:px-8 md:py-4 px-2 py-1 text-black transition-all duration-300 hover:border-orange-400">
                        <span className="text-nowrap text-sm relative z-10 flex items-center gap-2">
                            All Projects
                            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                    </button>
        </div>
      </div>


      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full'>
  {projectItems.map((items) => (
    <Link 
      key={items.id}  // Use a unique identifier from the items object
      href={`/projects/${items.id}`} 
      className='project-link'
    >
          <div // Ensure to add a key to avoid React warnings
            className="w-full group my-3 relative overflow-hidden"
          >
            {/* Image Container */}
            <div>
              {items.img && (
                <img
                  src={items.img} // Ensure the image URL is correct
                  alt={items.title || "Project Image"}
                  className="h-[550px] relative w-full object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-black">
                <p className="text-gray-300 text-6xl mb-1 font-bold">{items.title}</p>
                  <p className="text-2xl font-light">{items.description}</p>
                  <div className='flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors uppercase'>
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                  </div>
                  
                </div>
              </div>
            {/* <a href={link} className="bg-white backdrop-blur-sm cursor-pointer bg-opacity-35 bottom-0 w-full justify-end items-start flex flex-col p-2 z-10">
              <div>
              <p className="text-6xl font-semibold">{items.title}</p>
              </div>
              <div className="flex text-2xl w-full font-thin justify-between items-end">
                <p className='flex md:gap-2 gap-1 items-center'><MapPin/> {items.location}</p>
                <p className='text-4xl font-bold text-nowrap text-gold'>₹{items.price}</p>
              </div>
            </a> */}
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;