"use client"
import Image from 'next/image'
import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import example from "../public/blob-haikei.svg"
import { useState } from 'react'
import "./globals.css"
import Img1 from "../public/Beluga.jpg"
import pexels from "../public/RealEstate.jpg"
import RealEstate from "./../public/pexels-the-lazy-artist-gallery-1642125.jpg"
import RealEstat1 from "./../public/realEState1.jpeg"
import RealEstat2 from "../public/realEstate2.jpeg"
import RealEstat3 from "../public/realEstate3.jpeg"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';





export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
   
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
        <div className=' absolute grid grid-flow-col gap-10 lg:flex-row mx-14 bottom-0'>
          <IoIosArrowBack color='white' size={50} className='mt-24 cursor-pointery' />
          <div className='basis-1/3 flex-1 mt-6'>
            <Image src={RealEstat1}  className='rounded-lg object-cover aspect-4/3 '></Image>
          </div>
          <div className='basis-1/3 flex-1 mt-6'>
          <Image src={RealEstat2}  className='rounded-lg object-cover aspect-4/3'></Image>
          </div>
          <div className='basis-1/3 flex-1 mt-6'>
          <Image src={RealEstat3}  className='rounded-lg object-cover aspect-4/3'></Image>
          </div>
          <IoIosArrowForward  color='white' size={50} className='mt-24 cursor-pointer'  />
        </div>
        </div>
       </section>
      </main>
    </div>
  )
}
