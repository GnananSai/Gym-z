import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between text-white p-7 bg-black font-bold mx-14'>
        <div className='font-serif'>GYM-Z</div>
        <div className='flex gap-5 justify-center items-center'>
          <div className='rounded-full border-2 border-white py-1 px-7'>
            <Link href="/">Sign in</Link>
          </div>
          <div className='rounded-full border-2 border-white bg-white py-1 px-7 text-black'>
            <Link href="/">Contact</Link>
          </div>  
          <div className='rounded-full border-2 border-[#69BB4C] bg-[#69BB4C] py-1 px-7 text-black'>
            <Link href="/">Take a quiz</Link>
          </div> 
        </div>
    </nav>
    </div>
  )
}

export default Navbar