import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
      <main className='bg-slate-100'>
          
    <br />
    <h2 className="text-2xl font-bold text-black text-center underline">Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs</h2>
    
    <Image src={"/Civic.jpg"} alt="civic" width={350} height={350} className="h-200 w-250 mx-auto my-6" />
    <br />
    <h2 className="text-3xl font-bold text-blue-900 text-center">Honda Civic</h2>
    <br />
    
    
    <div className='flex justify-center space-x-6'>
      <button className='text-white border border-black bg-blue-900 hover rounded-md px-4 py-1'>Book A Text Drive</button>
    <button className='text-blue-900 border border-blue-900 rounded-md px-4 py-1 '>Request Bnak Finance</button>
    <button className='text-blue-900 border border-blue-900 rounded-md px-4 py-1'>Visit Place</button>
    <button className='text-blue-900 border border-blue-900 rounded-md px-4 py-1'>Car Inpection</button>
    </div>
    <br />
    <h2 className="text-2xl font-bold  text-black  text-center">Vehicle Description</h2>
    
    <div>
      <br />
    <ul className='flex space-x-6 justify-center'>
    <li className=' text-black '><b>Condition</b> :8.5 / 10</li>
    <li className=' text-black '><b>Driven</b> :95000KM</li>
    <li className=' text-black '><b>Suspension Type</b> :Soft Suspension</li>
    <li className=' text-black '><b>AVG</b> :13 KM per hr</li>
    <li className=' text-black '><b>Transmission</b> :Automatic</li>
    </ul>
    </div>
    <br />
    <div>
      <ul className='flex space-x-6 justify-center '>
    <li className=' text-black '><b>Door of</b> :4</li>
    <li className=' text-black '><b>Engine</b> :1800 CC</li>
    <li className=' text-black '><b>Fuel Type</b> :High Octane</li>
      </ul>
    </div>
    <br />
    <p className='text-center text-green-600 text-2xl'>PKR 70,50,000</p>
    <br />
    
  <Link href="/form"><button className='text-white bg-blue-900 hover rounded-md px-6 py-2 mx-auto block'>Make Payment</button></Link>
    <br />
    <br />
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </main>
  )
}

export default page
