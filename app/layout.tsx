import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";


export const metadata: Metadata = {
  title: "Dhuni Constructions Pvt. Ltd.",
  description:
    "Dhuni Constructions Pvt. Ltd. is a construction company based in Nagpur, India. Dhuni Constructions Pvt. Ltd. has Main Focus on Luxurious Residential and Commercial Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
