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
    <div id='contact' className="bg-blue text-black py-[30px] p-3">
      </div>
  );
}