import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Best Apartments Near Me in Nagpur | Flats for Sale Near Your Location",
  description: "Find the best apartments near me in Nagpur. Premium flats for sale in your neighborhood with modern amenities. 1 BHK, 2 BHK, 3 BHK apartments in prime locations near you.",
  keywords: [
    "best apartments near me",
    "flats near me nagpur",
    "apartments near me nagpur",
    "flat for sale near me",
    "apartment for sale near me",
    "residential property near me",
    "nearby apartments nagpur",
    "local apartments nagpur"
  ],
  openGraph: {
    title: "Best Apartments Near Me in Nagpur | Dhuni Constructions",
    description: "Discover premium apartments near your location in Nagpur with world-class amenities.",
  },
};

export default function ApartmentsNearMe() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best Apartments Near Me in Nagpur
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Find premium <strong>flats near me</strong> with modern amenities and excellent connectivity. 
            Your dream apartment is just around the corner!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918830256985" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +91-8830256985
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Site Visit
            </Link>
          </div>
        </div>
      </div>

      {/* Location-based Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Find Apartments Near Your Location
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We have premium <strong>apartments near me</strong> across prime locations in Nagpur. 
            Choose from ready-to-move and under-construction properties.
          </p>
        </div>

        {/* Prime Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Central Nagpur Areas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Apartments in Pratap Nagar</li>
              <li>• Flats in Laxmi Nagar</li>
              <li>• Properties in Civil Lines</li>
              <li>• Apartments in Sadar</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">East Nagpur Locations</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Flats in Besa</li>
              <li>• Apartments in Manish Nagar</li>
              <li>• Properties in Koradi Road</li>
              <li>• Flats in Wardha Road</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">West Nagpur Areas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Apartments in Jaitala</li>
              <li>• Flats in Khapri</li>
              <li>• Properties in Jamtha</li>
              <li>• Apartments in Shankarpur</li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Choose Apartments Near Me?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Convenience & Connectivity</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Easy commute to work and schools</li>
                <li>• Walking distance to markets and malls</li>
                <li>• Quick access to healthcare facilities</li>
                <li>• Well-connected public transportation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Modern Amenities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 24/7 security and power backup</li>
                <li>• Swimming pool and gymnasium</li>
                <li>• Children's play area and parks</li>
                <li>• Covered parking and maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to Find Your Perfect Apartment?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Our expert team will help you find the <strong>best apartments near me</strong> that match 
            your requirements and budget. Schedule a free site visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/+918830256985?text=I'm looking for apartments near me in Nagpur" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
