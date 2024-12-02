'use client';
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const index = () => {
    const handleClick = () => {
        window.location.href = "https://wa.link/9zmn5e";
      };
    
      return (
        <div
          className="bg-green-600 w-min z-50 p-2 rounded-full fixed 
                     bottom-5 right-4 cursor-pointer md:right-8"
          onClick={handleClick}
        >
          <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
        </div>
      );
    }
export default index