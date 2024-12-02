'use client'
import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
import localFont from 'next/font/local';
import { myFont } from '@/components/Header';

const page = () => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for video
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        y: '50%',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full h-full overflow-hidden">
      {/* <div className='w-full h-screen'>
        <img ref={imgRef}
          className="inset-0 h-full w-full object-cover scale-105" src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        </img>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <div className='flex items-baseline md:gap-5 gap-2'>
            <img src="logo org.svg" className='md:w-[80px] w-[40px]' alt="" />
            <p className='md:text-8xl text-4xl flex md:gap-3 gap-1'>
              <span className={`${myFont.className} flex flex-col`}>DHUNI</span>
              CONSTRUCTIONS PVT. LTD.
            </p>
          </div>
        </div>
      </div>
      <div className='relative text-white h-full w-full p-4'>
        <div className='relative '>
          <p className='text-lg font-thin'>Work</p>
          <h2 className="text-8xl text-nowrap">Our Projects</h2>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/construction-silhouette_1127-3246.jpg?t=st=1732214921~exp=1732218521~hmac=585af0a948a554ff2a22d033ab9df184635cc4f53e660305d7d2223fa64ecd4f&w=1060" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem accusamus velit, assumenda in excepturi numquam magnam qui illum consequuntur voluptate labore aperiam est similique sapiente hic temporibus nobis voluptatibus.</p>
        </div>
      </div> */}
    </main>
  )
}

export default page