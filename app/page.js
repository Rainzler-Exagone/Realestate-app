"use client"
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import example from "../public/blob-haikei.svg"
import { useState } from 'react'
import "./globals.css"
import Img1 from "../public/Beluga.jpg"
import pexels from "../public/RealEstate.jpg"
import RealEstate from "./../public/pexels-the-lazy-artist-gallery-1642125.jpg"
import RealEstat1 from "./../public/realestate1.jpeg"
import RealEstat2 from "../public/realestate2.jpeg"
import RealEstat3 from "../public/realestate3.jpeg"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {data} from "./MockData"





export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
   
   const slideLeft = () =>{
    var slider = document.getElementById('Slider')
    slider.scrollLeft= slider.scrollLeft - 500
   }

   const slideRight = () =>{
    var slider = document.getElementById('Slider')
    slider.scrollLeft= slider.scrollLeft + 500;
   }
  return (
    <div className='relative bg-[url("../public/pexels-the-lazy-artist-gallery-1642125.jpg")]'>
      <main className='overscroll-contain ' id='r' >
        {/* Navbar */}
       <nav className='bg-gray-100 sticky' id='nav'>
        <div className=' ml-10 mx-auto px-6 py-5 flex justify-between'>
        <div className=' flex text-5xl font-bold text-black ' id='logo'>
          <p className='text-orange-400 ' id='Oasis'>Oasis</p>
          <p className='text-green-400' id='Homes'>Homes</p>
        </div>
        <div>
            <ul className='flex absolute right-24 text-black text-s py-auto pt-2.5 '>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='mt-1 mr-12  hover:text-yellow-500 delay-200 cursor-pointer ' id='M'/></li>
              <li className='my-0 mx-5   cursor-pointer font-Cabin ' id='A'>About</li>
              <li className='my-0 mx-5   cursor-pointer font-Cabin' id='P'>Projects</li>
              <li className='my-0 mx-5  cursor-pointer font-Cabin' id='C'>Contacts</li>
            </ul>
          </div>
        </div>
       </nav>

       {/* content */}
       <section className=" relative bg-[url('/public/pexels-the-lazy-artist-gallery-1642125.jpg')] " >
        <div className='flex content-center justify-center h-screen' id='w' >
         
        <div id='RealEstate' className='w-full h-auto  sticky filter brightness-50 ' >
        <Image src={RealEstate}id='Image' className='  m-30 relative w-full ' ></Image> 
        </div> 
        <div className='mt-40 text-7xl font-Lilita absolute text-white indent-8 text-center' id='Welcome'>Welcome to the Best Rental Agencie around
        </div> 
        <div className=' absolute flex items-center lg:flex-row mx-14 bottom-0'>


          <IoIosArrowBack color='white' size={50} className=' cursor-pointer' onClick={slideLeft} />
          <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' id='Slider'>
          {data.map((item)=>
          (
            <img 
              className="w-[220px] aspect-4/3 rounded-2xl object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300" 
              src={item.img} 
              alt='/' 
            />
          ))}
          </div>
          <IoIosArrowForward  color='white' size={40} className=' cursor-pointer' onClick={slideRight} />
          
          {/* 
          <div className='basis-1/3 flex-1 mt-6'>
            <Image src={RealEstat1}  className='rounded-lg object-cover aspect-4/3 '></Image>
          </div>
          <div className='basis-1/3 flex-1 mt-6'>
          <Image src={RealEstat2}  className='rounded-lg object-cover aspect-4/3'></Image>
          </div>
          <div className='basis-1/3 flex-1 mt-6'>
          <Image src={RealEstat3}  className='rounded-lg object-cover aspect-4/3'></Image>
          </div>
          <div className='basis-1/3 flex-1 mt-6 ' id='H'>
          <Image src={RealEstat3}  className='rounded-lg object-cover aspect-4/3  cursor-pointer'></Image>
          </div>
          
           */}
        </div>
        </div>
       </section>
      </main>
    </div>
  )
}
