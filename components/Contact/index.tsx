'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import localFont from "next/font/local";
import { portfolioItems } from '@/data';
import '../Hero/imp.scss'
import { sendGTMEvent } from '@next/third-parties/google';
import { trackPhoneCall } from "@/lib/gtm";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    const response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", property: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus("idle"), 4000);
  }
};


  // Background submission function
  const submitToGoogleSheets = async (data: any, scriptUrl: string) => {
    try {
      // Method 1: Try fetch with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: data.name,
          email: data.email,
          phone: data.phone,
          property: data.property,
          message: data.message
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Mark as submitted in localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('pendingSubmissions') || '[]');
      const updatedSubmissions = existingSubmissions.map((sub: any) => 
        sub.timestamp === data.timestamp ? { ...sub, submitted: true } : sub
      );
      localStorage.setItem('pendingSubmissions', JSON.stringify(updatedSubmissions));
      
    } catch (error) {
      console.warn('Primary submission failed, trying fallback:', error);
      // Fallback method using form submission
      submitViaForm(data);
    }
  };

  // Fallback submission method using hidden iframe
  const submitViaForm = (data = formData) => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hiddenFrame';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycbyp-EWyBzcmmWLiSoMXZnFKp_d8-3XFYpnKr5oO2QI7XxHXFZYb1xxHkkQxOa9-hVPb/exec';
    form.target = 'hiddenFrame';

    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'timestamp' && key !== 'submitted') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 1000);
  };

  return (
    <div id='contact' className="text-black py-[100px] p-3 md:px-[200px]">
      <div>
        <p className='text-lg font-thin'>Get in Touch</p>
        <h2 className={`${numFont.className} uppercase tracking-widest md:text-8xl text-6xl`}>Contact Us</h2>
      </div>

      <div className="grid gap-12 my-2 lg:grid-cols-2">
        <div>
          <div className="space-y-6">
            <a 
              href='tel:8830256985' 
              className="flex items-center gap-4 hover:cursor-pointer"
              onClick={() => {
                trackPhoneCall('contact_section');
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream hover:bg-black">
                <Phone className="h-6 w-6 text-blue" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-gray-600">+91-8830256985</p>
              </div>
            </a>
            <a href='mailto:dhuniconstructionspvtltd@gmail.com' className="flex items-center gap-4 hover:cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream hover:bg-black">
                <Mail className="h-6 w-6 text-blue " />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email Us</p>
                <p className="text-gray-600">dhuniconstructionspvtltd@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <form method='post' onSubmit={handleSubmit} className="text-black space-y-6">
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
                className="mt-1 w-full p-2 border-b-2 bg-transparent border-black focus:outline-none"
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
                className="mt-1 w-full p-2 border-b-2 bg-transparent border-black focus:outline-none"
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
                onChange={e => {
                  const val = e.target.value.replace(/[^+0-9]/g, '');
                  setFormData({ ...formData, phone: val })}}
                className="mt-1 w-full p-2 border-b-2 bg-transparent border-black focus:outline-none"
                required
                pattern="[0-9]{10}"
            maxLength={14}
            inputMode="numeric"
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
                className="mt-1 w-full p-2 border-b-2 bg-transparent border-black focus:outline-none"
                required
              >
                <option className='text-black' value="">Select a property</option>
                {Array.isArray(portfolioItems) && portfolioItems.slice(0, 4).map((item) => (
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
              className="mt-1 w-full p-2 border-b-2 bg-transparent border-black focus:outline-none"
              required
            />
          </div>
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              ❌ There was an error sending your message. Please try again or call us directly.
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-contact flex gap-3 text-xl items-center transition-all duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            onClick={()=>{
              if (!isSubmitting) {
                sendGTMEvent({event: 'contact_form_submit', category: 'contact', action: 'submit', label: 'contact_form_submit'})
              }
            }}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="arrow rotate-45 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
