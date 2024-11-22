'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../ui/MyFont.ttf', weight: '400' });

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="w-screen top-0 left-0 flex flex-col fixed justify-between items-center z-30">
            {/* Header Bar */}
            <div className="py-4 px-4 md:px-6 text-black bg-[#04293A] w-full flex justify-between items-center">
                <Link href="/" className="flex items-end capitalize gap-2">
                    <img src="logo w-org.svg" alt="Company Logo" className="w-[38px]" />
                    <p className="text-sm leading-4">
                        <span className={`${myFont.className} flex flex-col text-4xl`}>DHUNI</span>
                        CONSTRUCTIONS PVT. LTD.
                    </p>
                </Link>
                <p onClick={toggleMenu} className="transition p-3 cursor-pointer">Menu</p>
            </div>

            {/* Menu Overlay */}
            {isMenuOpen && (
                <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-between items-center py-4 px-4 md:px-6">
                    <div className="w-full flex justify-between items-center">
                        <Link href="/" className="menu-logo flex items-end capitalize gap-2 mb-4">
                            <img src="logo org.svg" alt="Company Logo" className="w-[38px]" />
                            <p className="text-sm text-black leading-4">
                                <span className={`${myFont.className} flex text-black flex-col text-4xl`}>DHUNI</span>
                                CONSTRUCTIONS PVT. LTD.
                            </p>
                        </Link>
                        <p onClick={toggleMenu} className="transition text-black p-3 cursor-pointer">Close</p>
                    </div>

                    <div className="menu-links group flex flex-col gap-4">
                        {/* Define 'navItems' with actual menu items */}
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/about', label: 'About' },
                            { path: '/project', label: 'Projects' },
                            { path: '/testimonials', label: 'Testimonials' },
                            { path: '/contact', label: 'Contact' }
                        ].map((link, index) => (
                            <Link href={link.path} className={`menu-link text-black hover:text-gray-500 transition tracking-tight font-bold md:text-10xl text-[46px] leading-[85%] uppercase`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-2 border-t border-gray-300 mt-7 pt-4">
                        <div className="flex flex-col gap-2">
                            <a href="mailto:dhuniconstructions@gmail.com" className="text-black hover:text-gray-500 transition">Email: dhuniconstructions@gmail.com</a>
                            <a href="tel:+918830256985" className="text-black hover:text-gray-500 transition">Mobile: +91 8830256985</a>
                            <a href="https://maps.app.goo.gl/XMfXePajmJRkgzCb9" className="text-black hover:text-gray-500 transition">Address: Mukund Nagar, Nagpur, Maharashtra</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
