import React from 'react';

const SEOContent = () => {
  return (
    <div className="seo-content-section bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main SEO Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Best Apartments & Flats for Sale in Nagpur
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Looking for the <strong>best apartment near me</strong> in Nagpur? Dhuni Constructions offers premium 
            <strong> flats for sale in Nagpur</strong> with world-class amenities. Find your dream 
            <strong> apartment for sale</strong> in prime locations across the city.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Premium Apartments in Nagpur</h2>
            <p className="text-gray-600">
              Discover luxury <strong>apartments in Nagpur</strong> with modern designs, spacious layouts, 
              and premium finishes. Our <strong>flats in Nagpur</strong> are designed for contemporary living.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Ready to Move Flats</h2>
            <p className="text-gray-600">
              Find <strong>ready to move flats for sale</strong> in Nagpur. Our completed projects offer 
              immediate possession with all modern amenities and facilities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Best Locations</h2>
            <p className="text-gray-600">
              Located in prime areas of Nagpur, our <strong>apartments for sale</strong> offer excellent 
              connectivity, proximity to schools, hospitals, and shopping centers.
            </p>
          </div>
        </div>

        {/* BHK Options */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Choose Your Perfect Home
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">1 BHK Flats</h3>
              <p className="text-gray-600">Perfect for young professionals and couples looking for compact yet comfortable living spaces.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">2 BHK Flats</h3>
              <p className="text-gray-600">Ideal for small families seeking spacious and well-designed apartments.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">3 BHK Flats</h3>
              <p className="text-gray-600">Spacious homes for growing families with premium amenities and features.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">4 BHK Flats</h3>
              <p className="text-gray-600">Luxury apartments for those who desire extra space and premium living.</p>
            </div>
          </div>
        </div>

        {/* Local SEO Content */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            Why Choose Dhuni Constructions?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Prime Locations in Nagpur</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Flats near me</strong> in well-connected areas</li>
                <li>• Close to schools, hospitals, and shopping centers</li>
                <li>• Easy access to major roads and transportation</li>
                <li>• Peaceful neighborhoods with green surroundings</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Quality Construction</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium quality materials and finishes</li>
                <li>• Modern architecture and design</li>
                <li>• Earthquake-resistant construction</li>
                <li>• Vastu-compliant layouts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Find Your Dream Apartment Today!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Contact us to explore the <strong>best apartments near me</strong> and 
            <strong> flats for sale in Nagpur</strong>. Our expert team will help you find 
            the perfect home that matches your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918830256985" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call Now: +91-8830256985
            </a>
            <a 
              href="/contact" 
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOContent;
