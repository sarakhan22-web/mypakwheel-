import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-blue-950 h-36 text-white px-6'>
        <div className='flex justify-between items-center'>
            <div className='mx-20 py-4 flex items-center'>
            
            <Image src={"/phone.png"} alt="phone" width={80} height={80} className="w-7 h-7 m-1" />

           <p className='text-sm'> Download App via SMS</p>
            </div>
            <div className='mr-20 py-4 text-sm'>
            Sign In | Sign Up
            </div>
        </div>
        <div className='h-[1px] bg-slate-400 mx-20'></div>
        <div className='flex  mx-20 my-5 justify-between items-center '>
          <div> 
         <Link href="/"> <Image src={"/logo.png"} alt="logo" width={200} height={200} className="w-40 h-15 " /></Link>
</div>
          <div>
            <button>
              <ul className='flex space-x-4 ml-56' >
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>New Cars</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Used Cars</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Bikes</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Auto Store</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Videos</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Blogs</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>Forums</li>
        <li className='hover:text-gray-400 hover:scale-105 transition-transform '>More</li>
              </ul>
            </button>
          </div>
          <div className='bg-red-700 w-32 py-2 px-5 rounded-md  hover:bg-red-950'><button>Post An Ad</button></div>
        </div>
      
    </nav>
  )
}

export default Header
