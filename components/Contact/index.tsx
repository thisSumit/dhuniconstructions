'use client';
import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyp-EWyBzcmmWLiSoMXZnFKp_d8-3XFYpnKr5oO2QI7XxHXFZYb1xxHkkQxOa9-hVPb/exec'; // Replace with your Apps Script URL
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData)
    });
  
    if (response.ok) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', property: '', message: '' }); // Clear form data
    } else {
      console.error('Error submitting form:', response.statusText);
    }
  };

  return (
    <div id='contact' className="bg-blue text-black py-[100px] p-3 md:p-24">
      <div>
        <p className='text-lg font-thin'>Get in Touch</p>
        <h2 className="text-8xl">Contact Us</h2>
      </div>

        <div className="grid gap-12 my-2 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Call Us</p>
                  <p className="text-gray-600">+91 8830256985</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email Us</p>
                  <p className="text-gray-600">dhuniconstructions@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form method='post' onSubmit={handleSubmit} className="text-white space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full p-2 border-b-2 bg-transparent border-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full p-2 border-b-2 bg-transparent border-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full p-2 border-b-2 bg-transparent border-white focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="property" className="block text-sm font-medium text-gray-700">
                  Preferred Property
                </label>
                <select
                  id="property"
                  value={formData.property}
                  onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                  className="mt-1 w-full p-2 border-b-2 bg-transparent border-white focus:outline-none"
                  required
                >
                  <option className='text-black' value="">Select a property</option>
                  <option className='text-black' value="grand-residence">The Grand Residence</option>
                  <option className='text-black' value="sky-view">Sky View Penthouse</option>
                  <option className='text-black' value="riverside">Riverside Haven</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="mt-1 w-full p-2 border-b-2 bg-transparent border-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-orange-500 px-6 py-3 text-white transition-all duration-300 hover:bg-orange-600"
            >
              Get in Touch with Our Sales Team
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
  );
}