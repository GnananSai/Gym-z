import React from 'react'
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="flex flex-col ml-20 mt-10 items-start h-fit bg-cover bg-center z-0">
        <div className='flex'>
          <div className="flex-grow">
            <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
              <h1 className="text-7xl md:text-9xl font-extrabold">STAY FIT THE</h1>
            </div>
            <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
              <h1 className="text-5xl md:text-9xl font-extrabold mt-7">GEN-Z WAY</h1>
            </div>
            <div className="mt-10">
                <p className=" text-gray-400 px-6 py-3 text-xl ">A huge selection of health and fitness content, healthy recipes and<br></br>
                transformation stories to help you get fit and stay fit!</p>
                <Link href="/join-now">
                    <p className=" text-black px-6 py-4 rounded-lg text-2xl bg-[#FFFFFFFF] font-bold w-fit mt-7 ml-4 hover:bg-green-300">Get Your Free Plan Now</p>
                </Link>
            </div>
          </div>
          <div className='w-1/4 md:w-1/3 h-auto flex-shrink-0 top-20 right-1/3'>
            <img src="/her0.png"></img>
          </div>
        </div>
      </section>
  )
}
