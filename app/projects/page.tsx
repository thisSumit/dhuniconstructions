'use client'
import React, { useRef, useState } from 'react'
import { portfolioItems } from '@/data';
import { motion, useDragControls } from "framer-motion"
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const page = ({
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
    <div className="w-full px-2 my-[150px]  lg:px-20">
      <div className='flex justify-between items-end'>
        <div>
        <p className='text-lg font-thin'>Works</p>
        <h2 className="text-8xl text-nowrap">Our All Projects</h2>
        </div>
      </div>


      <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full'>
  {portfolioItems.map((items) => (
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
                  className="lg:h-[550px] md:h-[300px] sm:h-[200] relative w-full object-cover"
                />
              )}
            </div>
                <div className="bottom-0 left-0 pt-2 text-black">
                <p className="text-gray-300 text-6xl leading-7 mb-1 font-bold">{items.title}</p>
                  <p className="text-2xl leading-5 font-light">{items.description}</p>
                  <div className='flex items-center py-1 space-x-2 text-orange-400 hover:text-orange-300 transition-colors uppercase'>
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
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

export default page;