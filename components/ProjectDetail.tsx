'use client';
import { MapPin, IndianRupee, Calendar, Check } from 'lucide-react';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';
import Link from 'next/link';

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  img?: string;
  event: string;
  link: string;
  complition: string;
  features: string[];
  images: string[];
  className?: string;
  mapUrl?: string;
}

export function ProjectDetail({ project }: { project: Property }) {
  useEffect(() => {
    async function loadGSAP() {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const gsap = (await import("gsap")).default;
        gsap.registerPlugin(ScrollTrigger);
      }
    }

    loadGSAP();
  }, []);

  return (
    <div>
      <div className="bg-gray-50 py-12">
      <div className='w-full flex justify-between items-center'>
                <Link href="/" className="menu-logo flex items-end capitalize gap-2 mb-4">
                    <img src="logo org.svg" alt="Company Logo" className='w-[38px]' />
                    <p className='text-sm leading-4'>
                        <span className={` flex flex-col text-4xl`}>DHUNI</span> 
                        CONSTRUCTIONS PVT. LTD.
                    </p>
                </Link>
                <p className="transition p-3 cursor-pointer">Menu</p>
                </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Project Header */}
          <div className="mb-8 flex flex-col">
            <div>
            <p className='text-[12px]'>{project.event}</p>
            <h1 className="mb-2 text-6xl font-bold text-gray-900">{project.title}</h1> 
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="w-full h-full">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Property</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className='border-r-2'>
                    <h3 className="font-semibold text-gray-900 mb-4">Property Features</h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 mr-2 text-green-500" />
                          <span className="capitalize">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Project Timeline</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        <span>Completion: {project.complition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="bg-white border-t-2 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                <div className="w-full h-full bg-gray-100 rounded-lg">
                  <iframe src={project.mapUrl} width='100%' height='100%' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 rounded-xl shadow-sm p-8 sticky top-20">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Price</h3>
                <div className="flex items-center text-3xl font-bold text-blue-600">
                  <IndianRupee className="w-8 h-8 mr-2" />
                  <span>{project.price}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => window.location.href = '#'}
                  className="w-full bg-blue-600 text-black py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Download Brochure
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p>Email: dhuniconstructionspvtltd@gmail.com</p>
                  <p>Phone: +91 123 456 7890</p>
                  <p>Office Hours: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
}