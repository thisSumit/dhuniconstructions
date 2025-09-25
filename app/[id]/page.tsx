'use client'; // Add this if you're using Next.js 13+ app directory and need client-side interactivity.

import { useParams, useRouter } from 'next/navigation'; // Updated to use next/navigation
import { portfolioItems } from '@/data'; // Adjust import path as needed
import { Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { ProjectDetails } from '@/components/ProjectDetails';
import { Lenis } from "lenis/react";

export default function ProjectPage() {

  const params = useParams(); // Use useParams to get route parameters
  const router = useRouter(); // Use useRouter from next/navigation
  const { id } = params; // Access the dynamic route parameter

  // Find the project matching the `id`
  const project = portfolioItems.find((item) => item.id === id);

  // Handle case where project is not found
  if (!project) {
    return (
      <Lenis root>
         <div className="bg-blue w-full h-[60px]">
      </div>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-6">
      <Building2 className="h-16 w-16 text-blue-600 mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
      <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
      <div className='flex gap-4'>
        <button
        onClick={() => window.open('tel:8830256985')}
        className="px-6 py-3 bg-blue-600 text-white bg-blue rounded-lg"
      >
        Contact Us
      </button>
      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-blue-600 text-white bg-blue rounded-lg"
      >
        Return to Home
      </button>
      </div>
    </div>
    </Lenis>
    );
  }

  return (
    <div>
          <Lenis root>
      <ProjectDetails project={project} />
      </Lenis>
    </div>
  );
}
