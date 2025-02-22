import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main>
      <div className='flex justify-around my-16 items-center' >
        <div className=' h-[2px]  w-56 bg-slate-300 px-6'></div>
        <div><h2 className="text-2xl font-bold text-gray-700">Sell Your Car on PakWheels and Get the Best Price</h2></div>
        <div className=' h-[2px] w-56  bg-slate-300 px-6'></div>
      </div>
<div className='flex justify-around'>
 <div className='flex space-x-2 '>
  <div><ul className='text-green-600'>
  <br />
  <li></li>
  <br />
  <br />
  <li>✔</li>
  <br />
  <li>✔</li>
  <br />
  <li>✔</li>
  <br />
</ul>
  </div>
  
  <div>
    <br />
    <h3 className="text-xl font-bold text-sky-800">Post your Ad on PakWheels</h3>
    <br />
  <ul className=' text-gray-600'>Post your Ad for Free in 3 Easy Steps</ul>
  <br />
   <ul className=' text-gray-600'>Get Genuine offers from Verified Buyers</ul>
   <br />
   <ul className=' text-gray-600'>Sell your car Fast at the Best Price</ul>
   <button className=' bg-red-600 w-36 py-2 px-1 rounded-md  my-5 text-white hover:bg-red-950'>Post Your Ad</button>
  </div>
</div>










<div className='w-[2px] bg-slate-300 my-6'></div>














 <div className='flex space-x-2 '>
  <div><ul className='text-green-600'>
  <br />
  <li></li>
  <br />
  <br />
  <li>✔</li>
  <br />
  <li>✔</li>
  <br />
  <li>✔</li>
  <br />
</ul>
  </div>
  <div>
    <br />
    <h3 className="text-xl font-bold text-sky-800">Try PakWheels Sell It For Me</h3>
    <br />
  <ul className=' text-gray-600'>Dedicated Sales Expert to Sell your Car</ul>
  <br />
   <ul className=' text-gray-600'>We Bargain for you and share the Best Offer</ul>
   <br />
   <ul className=' text-gray-600'>We ensure Safe & Secure Transaction</ul>
   <br />
   <button className='bg-blue-600 w-36 py-2 px-1 rounded-md text-white hover:bg-blue-950'>Register Your Car</button>
  </div>
</div>
</div>


<div className='bg-gray-100'>
<br />
<h3 className="text-xl font-bold text-gray-500 px-20">Featured New Cars</h3>
    <br />

<div className='mx-20'>
<ul className='flex text-slate-800 space-x-8'>
<li className='font-bold'>Popular</li>
<li>Upcoming</li>
<li>Newly Launched</li>
</ul>
<div className='h-[3px]  w-9 bg-cyan-600 px-7'></div>
</div>


<div className='flex space-x-9 justify-center my-7  py-6'>

<div>
<div className='text-center bg-white rounded-md py-2 h-60 hover:scale-105 transition-transform      '>
<Link href="/corolla"><Image src={"/Corolla.webp"} alt="corolla" width={230} height={230} className="h-40 w-60 rounded-md  " /></Link>
 <Link href="/corolla"> <p className='font-extrabold text-blue-900 hover:text-gray-400'>Toyota Corolla</p></Link>
 <p className='text-green-600'>PKR 56.2-60.3 lac</p>
</div>
</div>

<div className='text-center bg-white rounded-md  py-2 h-60 hover:scale-105 transition-transform      '>
<Link href="/alto"><Image src={"/Alto.png"} alt="alto" width={230} height={230} className="h-40 w-60 rounded-md  " /></Link>
 <Link href="/alto"><p className='font-extrabold text-blue-900 hover:text-gray-400'>Suzuki Alto</p></Link>
 <p className='text-green-600'>PKR 23.2-32.1 lac</p>
</div>

<div className='text-center bg-white rounded-md  py-2 h-60 hover:scale-105 transition-transform      '>
<Link href="/swift" ><Image src={"/Swift.jpg"} alt="swift" width={230} height={230} className="h-40 w-60 rounded-md  " /></Link>
<Link href="/swift" ><p className='font-extrabold text-blue-900 hover:text-gray-400'>Suzuki Swift</p></Link>
 <p className='text-green-600'>PKR 35.2-42.3 lac</p>
</div>

<div className='text-center bg-white rounded-md  py-2 h-60 hover:scale-105 transition-transform     '>
<Link href="civic"><Image src={"/Civic.jpg"} alt="civic" width={230} height={230} className="h-40 w-60 rounded-md  " /></Link>
 <Link href="civic"><p className='font-extrabold text-blue-900 hover:text-gray-400'>Honda Civic</p></Link>
 <p className='text-green-600'>PKR 80.2-90.4 lac</p>
</div>


</div>
    </div>







    </main>

    )
}

export default page
