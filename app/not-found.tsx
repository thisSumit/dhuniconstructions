'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Lenis } from "lenis/react";

export default function NotFound() {
  const router = useRouter();

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
