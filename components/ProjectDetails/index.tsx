"use client";
import {
  MapPin,
  IndianRupee,
  Calendar,
  Check,
  BedDouble,
  LandPlot,
  Building,
  Earth,
} from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

import localFont from "next/font/local";
import "../../components/Hero/imp.scss";
import { GoogleTagManager } from "@next/third-parties/google";
import { trackContactNow, trackDownloadBrochure } from "@/lib/gtm";

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
export interface Property {
  rerano: string;
  reraqr: string;
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
  alocation: string[];
  atime: string[];
}

export function ProjectDetails({ project }: { project: Property }) {
  

  return (
    <div>
      <div className="bg-blue w-full h-[60px]">
      </div>
      <div className="bg-gray-50 text-black my-[100px] py-12">
        <div className="lg:px-[200px] mx-auto px-4 sm:px-6">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <p className="w-[30%] font-bold">{project.event}</p>
              <p className="w-[30%] flex justify-end">Updated on {new Date().toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric',})}</p>
            </div>
            <h1 className="md:text-8xl text-6xl uppercase font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <div className="flex text-xl items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-1 text-gold" />
              <span>{project.location}</span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="w-full h-full">
              <Image
                width={10000}
                height={10000}
                src={project.img || ""}
                alt={project.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <Image
                width={10000}
                height={10000}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:col-span-2 order-1">
              <div className="md:p-8 mb-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Price
                  </h3>
                  <div className="flex items-center text-3xl font-bold text-blue-600">
                    <IndianRupee className="w-8 h-8 mr-2" />
                    <span className="font-semibold">{project.price}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  About This Property
                </h2>
                <div className="grid pb-5 gap-4 md:grid-cols-2 grid-cols-1 my-4 text-nowrap">
                  <div className="flex gap-2 items-center justify-start">
                    <BedDouble />
                    <p className="font-normal md:text-6xl text-4xl">
                      {project.bed}
                    </p>
                    <p className="text-2xl text-center leading-5">
                      Luxurious Apartments
                    </p>
                  </div>

                  {/* <div className="flex gap-2 items-center justify-start">
                    <LandPlot />
                    <p className="font-normal md:text-6xl text-4xl">
                      {project.plot}
                    </p>
                    <p className="text-2xl text-center leading-5">
                      Sq. Ft. Plot Size
                    </p>
                  </div> */}

                  <div className="flex gap-2 items-center justify-start">
                    <Building />
                    <p className="font-normal md:text-6xl text-4xl">
                      {project.floor}
                    </p>
                    <p className="text-2xl text-center leading-5">
                      Floors Apartment
                    </p>
                  </div>

                  <div className="flex gap-2 items-center justify-start">
                    <Earth />
                    <p className="font-normal md:text-6xl text-4xl">
                      {project.amenities}
                    </p>
                    <p className="text-2xl text-center leading-5">
                      World Class Amenities
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-1 order-2">
              <div className="border-l max-w-3xl shadow-sm py-2 mb-5 p-8 top-20">
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      trackDownloadBrochure('project_details_page', project.title);
                      window.location.href = `https://wa.me/+918830256985?text=I'm%20inquiring%20about%20the%20apartment%20listing%20${project.title}`;
                    }}
                    className={`btn-contact w-full bg-blue-600 border text-black py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors`}
                  >
                    Download Brochure
                  </button>

                  <button
                    onClick={() => {
                      trackContactNow('project_details_page', project.title);
                      window.location.href = "tel:+918830256985";
                    }}
                    className={`btn-contact w-full bg-cream text-black border border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors`}
                  > <GoogleTagManager gtmId="AW-577226494" />
                    Contact Now
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>Email: dhuniconstructionspvtltd@gmail.com</p>
                    <p>Phone: +91 8830256985 | +91 8262899382</p>
                    <p>Office Hours: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              </div>
            
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex flex-col sm:grid sm:grid-cols-2 my-10 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Property Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="w-5 h-5 mr-2 text-gold" />
                          <span className="capitalize text-4xl">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 my-4">
                      Nearby Locations
                    </h3>
                    <div className="flex items-center gap-10">
                      <ul className="space-y-3 capitalize font-sans font-light">
                        {project.alocation.map((alocation, index) => (
                          <li
                            key={index}
                            className="flex capitalize items-center text-black font-normal"
                          >
                            <MapPin className="w-5 h-5 mr-2 text-gold" />
                            <span className="capitalize text-4xl text-black">
                              {alocation}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-3 capitalize font-sans font-light">
                        {project.atime.map((atime, index) => (
                          <li
                            key={index}
                            className="flex capitalize text-nowrap items-start w-full text-black font-normal"
                          >
                            <span className="capitalize text-4xl">{atime}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 my-4">
                      Project Timeline
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex text-2xl md:text-4xl items-center">
                        <Calendar className="w-5 h-5 mr-2 text-gold" />
                        <span>Completion: {project.complition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:p-8 mt-[80px] md:mt-0">
                <div className="flex mb-[100px] flex-col md:flex-row w-full items-center gap-2">
                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${numFont.className} md:text-8xl text-6xl font-thin uppercase tracking-widest`}
                    >
                      {project.ahead1}
                    </h2>
                    <p className="font-thin">{project.apara1}</p>
                  </div>
                  <Image
                width={10000}
                height={10000}
                    className="md:h-[auto] md:w-[25vw]"
                    src={project.aimg1 || ""}
                    alt={project.ahead1}
                  />
                </div>
                <div className="flex mb-[100px] flex-col md:flex-row w-full items-center gap-2">
                  <Image
                width={10000}
                height={10000}
                    className="md:h-[auto] md:w-[25vw] mb-5"
                    src={project.aimg2 || ""}
                    alt={project.ahead2}
                  />
                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${numFont.className} md:text-8xl text-6xl font-thin uppercase tracking-widest`}
                    >
                      {project.ahead2}
                    </h2>
                    <p>{project.apara2}</p>
                  </div>
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="border-l h-fit shadow-sm p-8 order-3">
                <h2 className="font-bold text-gray-900 mb-6">
                  Location: {project.location}
                </h2>
                <iframe
                  src={project.mapUrl}
                  width="100%"
                  height="400vh"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="border-l shadow-sm p-8">
                        <Image width={100} height={100} src={project.reraqr} alt={project.rerano} ></Image>
                        <p className="mt-2">MAHARera No.</p>
                        <p className="text-2xl font-semibold">{project.rerano}</p>
                      </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
