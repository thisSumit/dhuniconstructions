'use client';

import React from 'react';
import { portfolioItems } from '@/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="w-full px-2 my-[150px] lg:px-20">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <p className="text-lg font-thin">Works</p>
          <h2 className="text-8xl text-nowrap">Our All Projects</h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
        {portfolioItems.map((items) => (
          <Link 
            key={items.id} // Use a unique identifier from the items object
            href={`/projects/${items.id}`} 
            className="project-link"
          >
            <div className="w-full group my-3 relative overflow-hidden">
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
                <p className="text-gray-300 md:text-6xl text-4xl leading-6 mb-1 font-bold">{items.title}</p>
                <div className="flex items-center py-1 space-x-2 text-orange-400 hover:text-orange-300 transition-colors uppercase">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
