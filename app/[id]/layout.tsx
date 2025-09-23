import { Metadata } from 'next';
import React from 'react'
import { portfolioItems } from '@/data';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioItems.find(item => item.id === resolvedParams.id);
  
  if (!project) {
    return {
      title: 'Dhuni Constructions Pvt. Ltd.',
      description: 'Best Apartments, Flats for Sale in Affordable Rate in Nagpur',
    };
  }

  return {
    title: `${project.title} | Dhuni Constructions | Apartment, Flats for Sale in Nagpur`,
    description: project.description,
    keywords: [
      project.title.toLowerCase(),
      `${project.bed} apartments nagpur`,
      `flats in ${project.location}`,
      "dhuni constructions nagpur",
      "luxury apartments nagpur",
      "real estate nagpur",
      "Luxury real estate project",
      "Affordable apartments and flats of sale",
      "Nagpur best constructions company",
      project.location.toLowerCase()
    ],
    openGraph: {
      title: `${project.title} | Premium Apartments for Sale in Nagpur by Dhuni Constructions Pvt. Ltd.`,
      description: `${project.description.substring(0, 160)}...`,
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Dhuni Constructions`,
      description: `${project.description.substring(0, 160)}...`,
      images: [project.img],
    },
  };
}

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      {children}
    </div>
  );
}