// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";


const BlogData =[
    { id:"1",
      image:"/Quantum.png", 
      title:"The Rise of Quantum Machine Learning: A Look at the Future of AI",
      content:"One of the most exciting fields emerging today is QML, which is an amalgamation of quantum computing......",
      email:"willimsjack@gmail.com",
      like:"112",
      dislike:"23"
    },
    {  id:"2",
       image:"/cyberSecurity.jpg",
       title:"The Future of Cybersecurity in the Age of AI",
       content:"In order to avert damage, artificial intelligence (AI) in cybersecurity provides a proactive method......",
       email:"mickle@gmail.com",
      like:"92",
      dislike:"01"
    },
    {  id:"3",
        image:"/LCNC.webp", 
        title:"The Future of Software Development: Low-Code/No-Code Revolution",
        content:"The software development landscape is experiencing a seismic shift, fueled by the rise of low-code/no-code......",
        email:"johndoe@gmail.com",
        like:"179",
        dislike:"14"

    },
    {  id:"4",
        image:"/healthcare.webp", 
        title:"Artificial Intelligence in Healthcare: Revolutionizing Patient Care",
        content:"The healthcare industry is undergoing a profound transformation, and artificial intelligence (AI)......",
        email:"james@gmail.com",
        like:"243",
        dislike:"0"

    }
  ]

export default function Blog() {
  return (
    <>
   
    <div className="p-4">
      <h1 className=' text-2xl font-bold pl-5'>Blogs :-</h1>
        {BlogData.map((post) => (
          <div className="flex mt-4 w-full items-start gap-2 md:ga-5 border-2 border-l-rose-700 border-r-rose-700 p-2 md:p-5">
            <div className='flex flex-col justify-between'>
            <Image src={post.image} alt={post.id} width={100} height={100} className='w-[150px] h-[150px] rounded-md ' />
            <div className=' flex flex-col md:hidden pt-2 md:pt-10'>
            <h1 className="">{post.email}</h1>
            <div className="flex items-center gap-2 text-xl">
             <BiSolidLike/>{post.like}
             <BiSolidDislike/>{post.dislike}
             </div>
            </div>
            </div>
            <div>
            <Link href={`/blogs/${post.id}`}>
              <h1 className='pacifico.className} text-xl font-semibold  text-slate-800'>{post.title}</h1>
            <p className=" text-wrap text-[14px] md:text-[17px] text-slate-700">{post.content}</p>
            </Link>
            <div className=' hidden md:flex flex-col pt-2 md:pt-10'>
            <h1 className="">{post.email}</h1>
            <div className="flex items-center gap-2 text-xl">
             <BiSolidLike/>{post.like}
             <BiSolidDislike/>{post.dislike}
             </div>
            </div>

            </div>
          </div>
        ))}
      
    </div>
    </>
  );
}