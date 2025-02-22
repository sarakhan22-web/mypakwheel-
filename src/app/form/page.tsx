import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-blue-50 h-screen'>
        <div className="flex justify-center items-center">
      <form className='p-8 rounded-lg  w-96'>
        <h2 className="text-3xl font-bold text-center  text-black w-96">ENTER YOUR DETAILS</h2>
        <br />
        <input type="text" placeholder="Enter Your Name" className=" rounded w-96 py-2 px-3 mb-4 border border-blue-400" />
        <input type="email" placeholder="Enter Your Email" className="rounded w-96 py-2 px-3 mb-4 border border-blue-400" />
        <input type="text" placeholder="Card Number" className=" rounded w-96 py-2 px-3 mb-4 border border-blue-400" />
        <input type="text" placeholder="Address" className="rounded w-96 py-2 px-3 mb-4 border border-blue-400 " />
        <Link href="/thanks"><button className="bg-blue-900 hover:bg-blue-500 text-white py-2 px-4 rounded mx-auto block ">Place Your Order</button></Link>
      </form>
    </div>
      
    </div>
  )
}

export default page
