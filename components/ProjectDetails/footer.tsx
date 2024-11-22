import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import localFont from 'next/font/local';
import Link from 'next/link';
const myFont = localFont({ src: '../ui/MyFont.ttf', weight: '400' });

export default function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="py-12 mx-2">
        <div className="grid gap-8 items-center justify-center lg:grid-cols-4">
          <div className="lg:col-span-2 md:px-6">
          <Link href="/" className="menu-logo mr-2 flex items-end capitalize gap-2 mb-4">
                    <img src="logo w-org.svg" alt="Company Logo" className='w-[44px]' />
                    <p className='text-sm'>
                        <span className={`${myFont.className} flex flex-col text-4xl`}>DHUNI</span> 
                        CONSTRUCTIONS PVT. LTD.
                    </p>
                </Link>
            <p className="mb-4 max-w-md text-gray-400">
              Experience the pinnacle of Dhuni Constructions Pvt. Ltd. with our exceptional properties and unparalleled service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-orange-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-orange-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-orange-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-orange-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors duration-300 hover:text-orange-500">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dhuni Constructions Pvt. Ltd.. All rights reserved. Real estate regulations apply.
          </p>
        </div>
      </div>
    </footer>
  );
}