import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className=" md:ml-6 flex flex-col items-start h-fit bg-cover bg-center z-0 p-4 md:p-10 ">
      <div className='flex flex-col md:flex-row'>
        <div className="flex-grow text-left">
          <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
            <h1 className="text-6xl md:text-8.5xl font-extrabold leading-tight ">
              STAY FIT THE
            </h1>
          </div>
          <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold mt-1 md:mt-1'>
            <h1 className="text-6xl md:text-8.5xl font-extrabold leading-tight">
              GEN-Z WAY
            </h1>
          </div>
          <div className="mt-6 md:mt-10">
            <p className="text-gray-400 text-xl md:text-2xl  md:px-6">
              A huge selection of health and fitness content, healthy recipes and<br />
              transformation stories to help you get fit and stay fit!
            </p>
            <Link href="/quiz">
              <span className="block text-center  bg-[#FFFFFFFF] text-black px-6 py-4 rounded-lg text-xl md:text-2xl font-bold mt-10 hover:bg-green-300 cursor-pointer  md:max-w-md">
                Get Your Free Plan Now
              </span>
            </Link>
          </div>
        </div>
        <div className='hidden md:block w-1/4 md:w-1/3 h-auto flex-shrink-0'>
          <img src="/hero0.png" alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};
