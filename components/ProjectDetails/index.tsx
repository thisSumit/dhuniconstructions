'use client';
import { MapPin, IndianRupee, Calendar, Check, BedDouble, LandPlot, Building, Earth } from 'lucide-react';
import { useEffect } from 'react';
import Headers from '../Header';
import Contact from '../Contact';
import Footer from '../Footer';
import './style.css';
import { Metadata } from 'next';
import { portfolioItems } from '@/data';
import Head from 'next/head';

export interface Property {
  atime: string[];
  alocation: string[];
  apara2: string;
  ahead2: string;
  aimg2: string | undefined;
  aimg1: string | undefined;
  apara1: string;
  ahead1: string;
  bed: string;
  plot: string;
  amenities: string;
  floor: string;
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
  aimg3: string;
}



export function ProjectDetails({ project }: { project: Property }) {
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
    <>
    <Head>
    <title>{project.title}</title>
    <meta name="description" content={`${project.description}`} />
    <meta name="keywords" content={`${project.features}`}/>
    </Head>
    <div>
      <div className="bg-gray-50 text-white my-[100px] py-12">
        <div className="mx-auto px-4 sm:px-6">
          {/* Project Header */}
          <div className="mb-8">
            <p>{project.event}</p>
            <h1 className="text-8xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <div className="flex text-xl items-center text-gray-600">
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

          <div className="lg:col-span-2 order-1">
              <div className="md:p-8 mb-8">
              <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Price</h3>
                  <div className="flex items-center text-8xl text-blue-600">
                    <IndianRupee className="w-8 h-8 mr-2" />
                    <h2><span>{project.price}</span></h2>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900">About This Property</h3>
                <div className='grid border-b pb-5 gap-4 grid-cols-1 my-4 text-nowrap'>
                  <div className='flex gap-2 items-center justify-start'>
                    <BedDouble/>
                    <p className='font-normal md:text-6xl text-4xl'>{project.bed}</p>
                    <p className='text-2xl text-center leading-5'>Apartments</p>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <Building/>
                    <p className='font-normal md:text-6xl text-4xl'>{project.floor}</p>
                    <p className='text-2xl text-center leading-5'>Floors Apartment</p>
                  </div>

                  <div className='flex gap-2 items-center justify-start'>
                    <Earth/>
                    <p className='font-normal md:text-6xl text-4xl'>{project.amenities}</p>
                    <p className='text-2xl text-center leading-5'>World Class Amenities</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="md:grid flex flex-col grid-cols-2 my-10 md:gap-6 gap-10">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Property Features</h3>
                    <ul className="space-y-3 capitalize font-sans font-light">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex capitalize items-center text-gray-600">
                          <Check className="w-5 h-5 mr-2 text-green-500" />
                          <span className="capitalize text-4xl">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Nearby Locations</h3>
                    <div className='flex items-center gap-10'>

                    <ul className="space-y-3 capitalize font-sans font-light">
                      {project.alocation.map((alocation, index) => (
                        <li key={index} className="flex capitalize items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-2 text-green-500" />
                          <span className="capitalize text-4xl">{alocation}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3 capitalize font-sans font-light">
                      {project.atime.map((atime, index) => (
                        <li key={index} className="flex capitalize text-nowrap items-start w-full text-gray-600">
                          <span className="capitalize text-4xl">{atime}</span>
                        </li>
                      ))}
                    </ul>

                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 my-5">Project Timeline</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex text-4xl items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        <span>Completion: {project.complition}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className='md:p-8 mt-[80px] md:mt-0'>
              <div className='flex mb-[100px] flex-col md:flex-row w-full items-center gap-2'>
                <div className='flex flex-col md:p-2 gap-2'>
                <h2 className='text-8xl capitalize'>{project.ahead1}</h2>
                <p>{project.apara1}</p>
                </div>
                <img className='md:h-[500px]' src={project.aimg1} alt="" />
              </div>
              <div className='flex mb-[100px] flex-col md:flex-row w-full items-center gap-2'>
                <img className='md:h-[500px]' src={project.aimg2} alt="" />
                <div className='flex flex-col md:p-2 gap-2'>
                <h2 className='text-8xl capitalize'>{project.ahead2}</h2>
                <p>{project.apara2}</p>
                </div>
              </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="border-l h-fit shadow-sm p-8 order-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                <iframe src={project.mapUrl} width='100%' height='400vh' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div className="lg:col-span-1 order-2">
              <div className="border-l shadow-sm p-8 sticky top-20">
                <div className="space-y-4">
                  <button
                    onClick={() => window.location.href = `https://wa.me/+918830256985?text=I'm%20inquiring%20about%20the%20apartment%20listing%20${project.title}`}
                    className="w-full bg-blue-600 border text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Download Brochure
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-white text-black border border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Contact Now
                  </button>
                  {/* <button
                    onClick={() => window.location.href = 'https://cal.com/avantula'}
                    className="w-full bg-blue-600 border text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Schedule a Visit
                  </button> */}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>Email: dhuniconstructionspvtltd@gmail.com</p>
                    <p>Phone: +91 8830256985</p>
                    <p>Office Hours: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div >
    <div className='hidden'>
      <p>Discover Luxurious Living with Dhuni Constructions Pvt. Ltd.

Looking for apartments for sale in Nagpur? Your search ends here! Dhuni Constructions Pvt. Ltd. offers premium 2 BHK flats in Nagpur, 3 BHK flats in Nagpur, and luxury apartments in Nagpur designed to elevate your lifestyle. Whether you’re interested in flats for sale, flats in Nagpur city, or new flats in Nagpur, we have the perfect home for you.

Explore a range of real estate apartments tailored for modern living. From 2 BHK apartments in Nagpur to spacious 3 BHK flats in Nagpur for sale, find your dream home with competitive pricing and unmatched quality. Looking for Nagpur 2 BHK flat prices or Nagpur 3 BHK flat prices? Dhuni Constructions provides transparent pricing and value-driven options for your investment.

Our luxurious flats in Nagpur include state-of-the-art amenities and prime locations to offer an exceptional living experience. Whether you're looking to buy apartments in Nagpur, purchase a flat, or explore flats for sale in Nagpur, Dhuni Constructions is here to help you find the best deal.

Planning to buy a flat in Nagpur or searching for flats on rent in Nagpur? With a portfolio of full apartments for sale, 2 BHK flats for sale in Nagpur, and 3 BHK luxury flats in Nagpur, we ensure options that suit every need.

Choose Dhuni Constructions Pvt. Ltd. for high-quality, reliable real estate for apartments near you. Contact us today to explore our latest projects and discover the perfect 2 or 3 BHK flats in Nagpur to call home.

Your dream home is just a visit away!</p>
    </div>
    </>
  );
}

export function generateMetadata(project: Property): Metadata {
  return {
    title: project.title,
    description: project.description,
  };
}