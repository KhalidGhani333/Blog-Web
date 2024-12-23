import Link from 'next/link'
import React from 'react'
import Blog from './blogs/page';

import { Pacifico } from '@next/font/google';


const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400' 
});

const Home = () => {
  return (
    <>
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/background.avif')" }}>
      
      <h1 className='text-center text-white pt-32'>Welcome</h1>
      <h1 className={`${pacifico.className} text-white text-7xl text-center opacity-30 pt-10`}>Ink Your Thoughts Online.</h1>
      <h2 className='text-4xl text-white text-center pt-10 font-mono font-light opacity-80'>Start Your Blogging Journey Today</h2>
      <div className='flex justify-center items-center gap-5 pt-10'>
        <Link href="/blogs"><button className='py-3 px-7 bg-cyan-700 text-white font-light font-sans rounded-lg hover:bg-cyan-800'>Read Blogs</button></Link>
        <button className=' py-3 px-7 bg-cyan-700 text-white font-light font-sans rounded-lg hover:bg-cyan-800'>Write Your Blog</button>
      </div>
    </div>
    <Blog/>
   
    </>
  )
}

export default Home