'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import localFont from "next/font/local";
import { portfolioItems } from '@/data';
import '../Hero/imp.scss'

const numFont = localFont({
  src: "../../app/fonts/wasted.ttf",
  weight: "400",
  style: "normal",
});
const headingFont2 = localFont({
  src: "../../app/fonts/new.ttf",
  weight: "400",
  style: "normal",
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    message: '',
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component is only rendered on the client
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent rendering on the server until after mount

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
    <div id='contact' className="bg-blue text-white py-[100px] p-3 md:px-[200px]">
      <div>
        <p className='text-lg font-thin'>Get in Touch</p>
        <h2 className={`${headingFont2.className} text-8xl`}>Contact Us</h2>
      </div>

      <div className="grid gap-12 my-2 lg:grid-cols-2">
        <div>
          <div className="space-y-6">
            <a href='tel:8830256985' className="flex items-center gap-4 hover:cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream hover:bg-white">
                <Phone className="h-6 w-6 text-blue" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-gray-600">+91-8830256985</p>
              </div>
            </a>
            <a href='mailto:dhuniconstructionspvtltd@gmail.com' className="flex items-center gap-4 hover:cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream hover:bg-white">
                <Mail className="h-6 w-6 text-blue " />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email Us</p>
                <p className="text-gray-600">dhuniconstructionspvtltd@gmail.com</p>
              </div>
            </a>
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
                {Array.isArray(portfolioItems) && portfolioItems.map((item) => (
                  <option key={item.id} className='text-black' value={item.url}>{item.title}</option>
                ))}
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
            className="btn-contact flex gap-3 text-xl items-center"
          >
            Send Message
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
