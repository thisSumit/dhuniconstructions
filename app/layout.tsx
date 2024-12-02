import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/common/Whatsapp";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = Roboto({
  subsets: ["latin"], weight: ["300", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["500"],
});
const myFont = localFont({ src: "./fonts/MyFont.ttf" });
const Nelphim = localFont({ src: "./fonts/Nephim.otf" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dhuniconstructions.com/"),
  title: { default:"Dhuni Constructions Pvt. Ltd.", 
    template: "%s - Dhuni Constructions Pvt. Ltd.",
  },
  description: "Dhuni Constructions Pvt. Ltd. is a construction company based in Nagpur, India. Dhuni Constructions Pvt. Ltd. develops Luxurious Flats and Commercials Projects in Nagpur.", 
  keywords: ['Flat in Nagpur', 'Apartments in Nagpur', 'Affordable Flat in Nagpur', 'flat on rent in nagpur','Flat in Jaitala Nagpur', 'Flats near IT Park Nagpur', 'Amit Tarekar', 'Swapnil Gode','Luxurious Flats in Nagpur', 'Commercial Projects in Nagpur', 'Dhuni Constructions Pvt. Ltd.'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Nelphim.className} tracking-wider antialiased box-content`}>
        <Header/>
        <Whatsapp/>
        {children}
        <Contact/>
        <Analytics />
        <SpeedInsights />
    <Footer/>
      </body>
    </html>
  );
}
