import React from 'react'
import Link from 'next/link';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400' 
});
 interface Type{
    bg:string
 }
const Navbar = (props:Type) => {
  return (
    <div>
        <div className={`${props.bg} w-full h-20 bg-slate-800 flex justify-between items-center px-3 md:px-10`}>
            <h1 className={`${pacifico.className} text-2xl text-white `}>BlogNest</h1>
            <div className='flex gap-2 md:gap-5 text-xl font-bold text-white '>
            <Link href="/" className='hover:text-gray-500 duration-500'>Home</Link>
            <Link href="/blogs" className='hover:text-gray-500 duration-500'>Blogs</Link>
            </div>
            <button className='  py-1 px-2 md:py-2 md:px-5 bg-white rounded-md text-black font-semibold hover:text-gray-400 duration-500 '>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar