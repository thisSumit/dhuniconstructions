"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dhuniLogo from "../../public/logo.png";
import dhuniLogoB from "../../public/logob.png";
import { navItems } from "@/data";
import localFont from "next/font/local";
import { gsap } from "gsap";

export const myFont = localFont({
  src: "../../app/fonts/mainFont.otf",
  weight: "400",
});

const Header = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledPastHalf, setIsScrolledPastHalf] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.clientHeight || 0;
      const scrollPosition = window.scrollY;
      const halfViewport = window.innerHeight / 10;

      setIsBlurred(scrollPosition > heroHeight);
      setIsScrolledPastHalf(scrollPosition > halfViewport);

      if (scrollPosition > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 50, opacity: 0 });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menuOverlayRef.current, {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: -0.5,
      });

    return () => {
      tl.current?.kill();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (tl.current) {
      isMenuOpen ? tl.current.reverse() : tl.current.play();
    }
  };

  return (
    <div
      className="w-screen top-0 left-0 flex flex-col fixed justify-between items-center z-30 bg-gray-800"
      ref={container}
    >
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-200%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-screen top-0 left-0 flex flex-col fixed justify-between items-center z-30 ${
          isScrolledPastHalf ? "backdrop-blur-lg bg-white/60 border-white-200 border-b-[1px]" : "bg-transparent"
        }`}
      >
        <div className="py-4 px-4 md:px-6 flex justify-between items-end w-full">
          <Link href="/" className="flex sm:items-baseline capitalize gap-2">
            <Image
              src={isMenuOpen || isScrolledPastHalf ? dhuniLogoB : dhuniLogo}
              alt="Dhuni Constructions Pvt. Ltd."
              className="object-contain"
              width={30}
              height={30}
            />
            <p
              className={`${
                isMenuOpen || isScrolledPastHalf ? "text-black" : "text-white"
              } text-sm sm:text-xl leading-4`}
            >
              <span className={`${myFont.className} text-1xl`}>
                DHUNI{" "}
              </span>
              <br className="sm:hidden" />
              CONSTRUCTIONS PVT. LTD.
            </p>
          </Link>

          <div className="hidden md:flex flex-row uppercase justify-between gap-10 px-5 cursor-pointer">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`hover:text-gold transition duration-300 ${
                  isScrolledPastHalf ? "text-black" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`transition text-sm sm:text-md px-3 cursor-pointer font-normal md:hidden ${
              isMenuOpen || isScrolledPastHalf ? "text-black" : "text-white"
            }`}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </p>
        </div>
      </motion.nav>

      <div
        ref={menuOverlayRef}
        className="menu-overlay fixed top-0 left-0 w-[100vw] h-full bg-white flex items-center z-20"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div
          ref={menuItemsRef}
          className="menu-links group flex flex-col items-baseline gap-4 px-10"
        >
          {navItems.map((link, index) => (
            <div
              key={index}
              className="menu-link-item-holder"
              onClick={toggleMenu}
            >
              <Link
                href={link.path}
                className="menu-link text-black hover:text-gold transition tracking-tight font-semibold md:text-10xl text-[46px] leading-[85%]"
              >
                <p>{link.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
