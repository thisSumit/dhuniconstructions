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
        <p>Looking for apartments for sale in Nagpur? Your search ends here! Dhuni Constructions Pvt. Ltd. offers premium 2 BHK flats in Nagpur, 3 BHK flats in Nagpur, and luxury apartments in Nagpur designed to elevate your lifestyle. Whether you’re interested in flats for sale, flats in Nagpur city, or new flats in Nagpur, we have the perfect home for you.</p>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
        {portfolioItems.map((items) => (
          <Link 
            key={items.url} // Use a unique identifier from the items object
            href={`/${items.url}`} 
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
      <p>Explore a range of real estate apartments tailored for modern living. From 2 BHK apartments in Nagpur to spacious 3 BHK flats in Nagpur for sale, find your dream home with competitive pricing and unmatched quality. Looking for Nagpur 2 BHK flat prices or Nagpur 3 BHK flat prices? Dhuni Constructions provides transparent pricing and value-driven options for your investment.</p>
      <p>Our luxurious flats in Nagpur include state-of-the-art amenities and prime locations to offer an exceptional living experience. Whether you're looking to buy apartments in Nagpur, purchase a flat, or explore flats for sale in Nagpur, Dhuni Constructions is here to help you find the best deal.

Planning to buy a flat in Nagpur or searching for flats on rent in Nagpur? With a portfolio of full apartments for sale, 2 BHK flats for sale in Nagpur, and 3 BHK luxury flats in Nagpur, we ensure options that suit every need.

Choose Dhuni Constructions Pvt. Ltd. for high-quality, reliable real estate for apartments near you. Contact us today to explore our latest projects and discover the perfect 2 or 3 BHK flats in Nagpur to call home.

Your dream home is just a visit away!</p>
    </div>
  );
};

export default Page;
