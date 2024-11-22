'use client';
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './menu.css';
import Link from 'next/link';
import { navItems } from '@/data';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
// import { Saira } from 'next/font/google';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import localFont from 'next/font/local';

export const myFont = localFont({ src: '../ui/MyFont.ttf', weight: '400' });

const Header = () => {
    const container = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef<GSAPTimeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
    }, { scope: container });

    useEffect(() => {
        if (tl.current) {
            isMenuOpen ? tl.current.play() : tl.current.reverse();
        }
    }, [isMenuOpen]);

    const logo = useRef(null);
    const logoImg = useRef(null);
    const [logoSrc, setLogoSrc] = useState("logo w-org.svg");
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(logo.current, { color: "white" });
        gsap.to(logo.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: innerHeight,
                onLeave: () => {
                    gsap.to(logo.current, { color: "black", background: "#04293A", duration: 0.25, boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" });
                },
                onEnterBack: () => {
                    gsap.to(logo.current, { color: "#FAF8F2", background: "transparent", duration: 0.25, boxShadow: "0 0 10px rgba(0, 0, 0, 0)" });
                },
            },
        });

        // Play with color change
        ScrollTrigger.create({
            trigger: document.documentElement, // Scrolling based on the whole document
            start: "top top", // At the start of the page
            end: innerHeight, // When scrolling reaches 100vh
            onLeave: () => {
                setLogoSrc("logo w-org.svg"); // Swap to black logo when leaving 100vh
            },
            onEnterBack: () => {
                setLogoSrc("logo w-org.svg"); // Swap back to white logo when entering back
            },
        });

    });

    return (
        <div className='w-screen top-0 left-0 flex flex-col fixed justify-between items-center z-30 bg-gray-800' ref={container}>
            <div ref={logo} className='py-4 px-4 md:px-6 text-black w-full flex justify-between items-center'>
                <Link href="/" className="flex tracking-wider items-end capitalize gap-2">
                    <img ref={logoImg} src={logoSrc} alt="Company Logo" className='w-[32px]' />
                    <p className='md:text-4xl flex flex-col md:flex-row md:gap-1 leading-4'>
                        <span className={`${myFont.className}`}>DHUNI</span>
                        CONSTRUCTIONS PVT. LTD.
                    </p>
                </Link>
                <p onClick={toggleMenu} className="transition p-3 cursor-pointer">Menu</p>
            </div>

            <div className={`menu-overlay fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-between items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className='py-4 px-4 md:px-6 text-black w-full flex justify-between items-center'>
                <Link href="/" className="flex tracking-wider items-end capitalize gap-2">
                    <img src='logo org.svg' alt="Company Logo" className='w-[32px]' />
                    <p className='md:text-4xl flex flex-col text-black md:flex-row md:gap-1 leading-4'>
                        <span className={`${myFont.className} text-black`}>DHUNI</span>
                        CONSTRUCTIONS PVT. LTD.
                    </p>
                </Link>
                <p onClick={toggleMenu} className="transition p-3 text-black cursor-pointer">Close</p>
            </div>

                <div className="menu-copy p-8 flex h-full w-full flex-col">
                    <div className="menu-links group flex flex-col gap-4">
                        {navItems.map((link, index) => (
                            <div className="menu-links-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className={`menu-link text-black hover:text-gray-500 transition tracking-tight font-bold md:text-10xl text-[46px] leading-[85%] uppercase`}>
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="flex gap-2 border-t border-gray-300 mt-7 pt-4">
                    <div className="flex flex-col tracking-wider leading-4 border-r border-gray-300 gap-2 pr-2 flex-1 justify-start">
                            <a href="mailto:dhuniconstructions@gmail.com" className="text-black mt-2 flex gap-1 hover:text-gray-500 transition"><p>Email: dhuniconstructions@gmail.com</p></a>
                            <a href="tel:+918830256985" className="text-black mt-2 flex gap-1 hover:text-gray-500 transition"><p>Mobile No: +91 8830256985</p></a>
                            <a href='https://maps.app.goo.gl/XMfXePajmJRkgzCb9' className='text-black mt-2 flex gap-1 hover:text-gray-500 transition'><p>Address: Flat no. 202, Ganraj Sankul, Road, Mukund Nagar, Pratap Nagar, Nagpur, Maharashtra 440022</p></a>
                        </div>
                        <div className="menu-info-col flex flex-col flex-1 justify-end">
                            {['Instagram', 'Facebook', 'Youtube', 'X', 'LinkedIn'].map((platform) => (
                                <a href="#" key={platform} className="text-black hover:text-gray-500 transition text-nowrap">{platform} &#8599;</a>
                            ))}
                        </div>
                    </div> */}
                </div>
                {/* <div className="menu-preview flex justify-end"></div> */}
            </div>
        </div>
    );
};

export default Header;


