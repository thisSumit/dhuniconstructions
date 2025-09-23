import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
const myFont = localFont({
  src: "../ui/MyFont.ttf",
  weight: "400",
  style: "normal",
});
import Image from "next/image";
import dhuniLogo from '../../public/logob.png'

export default function Footer() {
  return (
    <footer className="text-black lg:px-[150px] w-full">
      <div className="py-12 mx-2">
        <div className="grid w-full gap-8 items-center justify-center lg:grid-cols-4">
          <div className="lg:col-span-2 md:px-6">
            <Link
              href="/"
              className="menu-logo mr-2 text-nowrap flex items-baseline capitalize gap-2 mb-4"
            >
              <Image
              src={dhuniLogo}
              alt="Company Logo"
              width={35}
              height={35}
            />
              <p className="flex flex-row gap-1 md:text-6xl text-4xl items-baseline">
                <span className={`${myFont.className} flex flex-col`}>
                  DHUNI
                </span>
                CONSTRUCTIONS PVT. LTD.
              </p>
            </Link>
            <p className="mb-4 max-w-md uppercase text-gray-400">
            We build homes with Trust, Quality, & Excellence. As the Best Construction & Builder Company in Nagpur, We deliver unmatched Luxury, Quality, & Simplicity in every project.
            </p>
            <div className="flex gap-4">
            <a href="https://www.facebook.com/Dhuniconstructionsnagpur/" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-gold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dhuniconstructions/" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/dhuni-constructions-pvt-ltd/" className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-gold">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@DhuniConstructionsPvt.Ltd." className="rounded-full bg-gray-800 p-2 transition-colors duration-300 hover:bg-gold">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2">
            <li>
                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Legal</h4>
            <ul className="space-y-2">
            <li>
                <a href="/legal/privacy" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/term" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/legal/disclaimer" className="text-gray-400 transition-colors duration-300 hover:text-gold">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

<p className="text-gray my-4 px-3 text-xs">Explore BHK Wise Flats for Sale in Nagpur

Discover a diverse range of 1 BHK, 2 BHK, 3 BHK, 4 BHK, & 5 BHK flats for sale in Nagpur. Whether you are a first-time buyer or looking to upgrade, Nagpur offers a variety of options tailored to your needs.

Top Localities in Nagpur
Find your dream home in some of the most sought-after areas:

Flats in Laxmi Nagar
Flats in Besa
Flats in Manish Nagar
Flats in Koradi Road
Flats in Wardha Road
Flats in Jaitala
Flats in Khapri
Flats in Jamtha
Flats in Shankarpur
Flats in Zingabai Takali
Top Properties in Nagpur
Explore various property types available in Nagpur:

Houses for Sale in Nagpur
Builder Floors in Nagpur
Resale Flats in Nagpur
Plots for Sale in Nagpur
Villas for Sale in Nagpur
Property in Nagpur
Low Budget Flats in Nagpur
Ready to Move Flats in Nagpur
Penthouses in Nagpur
Agricultural Land for Sale in Nagpur
New Projects in Nagpur
Stay updated with the latest developments:

Godrej Anandam Nagpur
Kalpataru Launch Code Nagpur
Waman Nagari
ANANDAM ELITE
Mauli Town 21
Royal Avenue
Vastu Square 2
Luxury Properties in Nagpur
Indulge in luxury living with our selection of:

Luxury Apartments in Nagpur
Luxury Houses in Nagpur
Luxury Villas in Nagpur
Luxury Bungalows in Nagpur
Affordable Flats in Nagpur
Find budget-friendly options to suit your financial needs:

Flats in Nagpur under 10 Lakhs
Flats in Nagpur under 15 Lakhs
Flats in Nagpur under 20 Lakhs
Flats in Nagpur under 25 Lakhs
Flats in Nagpur under 30 Lakhs
Flats in Nagpur under 35 Lakhs
Flats in Nagpur under 40 Lakhs
Flats in Nagpur under 50 Lakhs
Flats in Nagpur under 60 Lakhs
Flats in Nagpur under 70 Lakhs
Flats in Nagpur under 80 Lakhs
Flats in Nagpur under 90 Lakhs
Flats in Nagpur in Crore
Explore premium properties:

Flats in Nagpur under 1 Cr
Flats in Nagpur under 1.50 Cr
Flats in Nagpur under 2 Cr
Flats in Nagpur under 3 Cr
Flats in Nagpur under 4 Cr
Flats in Nagpur under 5 Cr
Flats Near Me
Looking for something nearby? Check out:

1 BHK Flats for Sale Near Me
2 BHK Flats for Sale Near Me
3 BHK Flats for Sale Near Me
4 BHK Flats for Sale Near Me
5 BHK Flats for Sale Near Me
Flats for Sale Near Me
Ready to Move Flats for Sale Near Me
Resale Flats for Sale Near Me</p>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Dhuni Constructions Pvt. Ltd.. All
            rights reserved. Real estate regulations apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
