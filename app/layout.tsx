import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";


export const metadata: Metadata = {
  title: "Dhuni Constructions Pvt. Ltd.",
  description:
    "Explore BHK Wise Flats for Sale in Nagpur Discover a diverse range of 1 BHK, 2 BHK, 3 BHK, 4 BHK, and 5 BHK flats for sale in Nagpur. Whether you are a first-time buyer or looking to upgrade, Nagpur offers a variety of options tailored to your needs. Top Localities in Nagpur Find your dream home in some of the most sought-after areas: Flats in Laxmi Nagar Flats in Besa Flats in Manish Nagar Flats in Koradi Road Flats in Wardha Road Flats in Jaitala Flats in Khapri Flats in Jamtha Flats in Shankarpur Flats in Zingabai Takali Top Properties in Nagpur Explore various property types available in Nagpur: Houses for Sale in Nagpur Builder Floors in Nagpur Resale Flats in Nagpur Plots for Sale in Nagpur Villas for Sale in Nagpur Property in Nagpur Low Budget Flats in Nagpur Ready to Move Flats in Nagpur Penthouses in Nagpur Agricultural Land for Sale in Nagpur New Projects in Nagpur Stay updated with the latest developments: Godrej Anandam Nagpur Kalpataru Launch Code Nagpur Waman Nagari ANANDAM ELITE Mauli Town 21 Royal Avenue Vastu Square 2 Luxury Properties in Nagpur Indulge in luxury living with our selection of: Luxury Apartments in Nagpur Luxury Houses in Nagpur Luxury Villas in Nagpur Luxury Bungalows in Nagpur Affordable Flats in Nagpur Find budget-friendly options to suit your financial needs: Flats in Nagpur under 10 Lakhs Flats in Nagpur under 15 Lakhs Flats in Nagpur under 20 Lakhs Flats in Nagpur under 25 Lakhs Flats in Nagpur under 30 Lakhs Flats in Nagpur under 35 Lakhs Flats in Nagpur under 40 Lakhs Flats in Nagpur under 50 Lakhs Flats in Nagpur under 60 Lakhs Flats in Nagpur under 70 Lakhs Flats in Nagpur under 80 Lakhs Flats in Nagpur under 90 Lakhs Flats in Nagpur in Crore Explore premium properties: Flats in Nagpur under 1 Cr Flats in Nagpur under 1.50 Cr Flats in Nagpur under 2 Cr Flats in Nagpur under 3 Cr Flats in Nagpur under 4 Cr Flats in Nagpur under 5 Cr Flats Near Me Looking for something nearby? Check out: 1 BHK Flats for Sale Near Me 2 BHK Flats for Sale Near Me 3 BHK Flats for Sale Near Me 4 BHK Flats for Sale Near Me 5 BHK Flats for Sale Near Me Flats for Sale Near Me Ready to Move Flats for Sale Near Me Resale Flats for Sale Near Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <GoogleTagManager gtmId="AW-577226494" />
      <body className="antialiased box-content ">

        <Header />
        {children}
        <Whatsapp />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
