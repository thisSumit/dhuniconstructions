import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"], weight: ["300", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["500"],
});
const myFont = localFont({ src: "./fonts/MyFont.ttf" });

export const metadata: Metadata = {
  title: "Dhuni Constructions Pvt. Ltd.",
  description: "Dhuni Constructions Pvt. Ltd. is a construction company based in Nagpur, India. Dhuni Constructions Pvt. Ltd. has Main Focus on Luxurious Residential and Commercial Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} tracking-wider antialiased box-content`}>
        <Header/>
        {children}
        <Contact/>
    <Footer/>
      </body>
    </html>
  );
}
