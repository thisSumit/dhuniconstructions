import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Best Apartment Dealer in Nagpur | Dhuni Constructions",
  description: "Contact Dhuni Constructions for best apartments and flats for sale in Nagpur. Call +91-8830256985 for free consultation. Visit our office in Pratap Nagar, Nagpur.",
  keywords: [
    "contact apartment dealer nagpur",
    "flat dealer contact nagpur",
    "real estate agent nagpur contact",
    "apartment sales nagpur",
    "property dealer nagpur phone",
    "dhuni constructions contact",
    "nagpur flat booking"
  ],
  openGraph: {
    title: "Contact Best Apartment Dealer in Nagpur | Dhuni Constructions",
    description: "Get in touch for premium apartments and flats for sale in Nagpur. Expert consultation and best deals.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
