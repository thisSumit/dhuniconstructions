import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Apartments & Flats for Sale in Nagpur | Our Projects | Dhuni Constructions",
  description: "Explore our premium apartment projects in Nagpur. 1 BHK, 2 BHK, 3 BHK & 4 BHK flats for sale with modern amenities. Ready to move and under construction apartments in prime locations.",
  keywords: [
    "apartment projects nagpur",
    "flat projects nagpur", 
    "residential projects nagpur",
    "luxury apartments nagpur",
    "ready to move flats nagpur",
    "under construction flats nagpur",
    "dhuni constructions projects",
    "best apartment projects",
    "premium flats nagpur"
  ],
  openGraph: {
    title: "Premium Apartment Projects in Nagpur | Dhuni Constructions",
    description: "Discover our luxury apartment projects in Nagpur with world-class amenities and prime locations.",
    images: ['/hero.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
