"use client"
import React from 'react'
import Link from 'next/link';
import { Pacifico } from 'next/font/google';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400' 
});
 interface Type{
    bg:string
 }


const Navbar = (props:Type) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
        <div className={`${props.bg} h w-full h-20 bg-slate-800 flex justify-between items-center px-3 md:px-10`}>
            <h1 className={`${pacifico.className} text-2xl text-white `}>BlogNest</h1>
            <div className=' hidden md:flex gap-2 md:gap-5 text-xl font-bold text-white '>
            <Link href="/" className='hover:text-gray-500 duration-500'>Home</Link>
            <Link href="/blogs" className='hover:text-gray-500 duration-500'>Blogs</Link>
            </div>
            <div>
            <button className=' hidden  md:flex  py-1 px-2 md:py-2 md:px-5 bg-white rounded-md text-black font-semibold hover:text-gray-400 duration-500 '>Create Account</button>
            <button
            className="text-2xl text-white md:hidden"
            onClick={toggleMenu}>
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
          </div>
          {menuOpen && (
            <div className="md:hidden absolute top-16 z-10 right-0 flex w-screen justify-center items-center">
            <div className={`flex flex-col justify-center items-center w-[300px] h-[270] gap-7  bg-black bg-opacity-50 shadow-lg space-y-4 p-4`}>
              <Link href="/" className='hover:text-gray-500 duration-500 text-white'>Home</Link>
              <Link href="/blogs" className='hover:text-gray-500 duration-500 text-white'>Blogs</Link>
              <button className='  md:flex  py-1 px-2 md:py-2 md:px-5 bg-white rounded-md text-black font-semibold hover:text-gray-400 duration-500 '>Create Account</button>
            </div>
            </div>)}

        </div>
    </div>
  )
}

export default Navbar