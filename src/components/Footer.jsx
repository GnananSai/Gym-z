import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 p-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start ">
        
        {/* Left Section: Newsletter */}
        <div className="md:w-2/3 mb-8 md:mb-0 ml-5">
          <h2 className="text-5xl font-bold">Have a Good GYM Day</h2>
          <p className="mt-10 text-gray-400">
            Sign up for our newsletter and get the latest workout plans, tips, <br></br> and updates straight to your inbox.
          </p>
          <div className="mt-10 flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-1/3 rounded-l-full py-3 border-2 border-white bg-black text-white focus:outline-none text-center"
            />
            <button className="py-4 px-20 bg-white text-black rounded-r hover:bg-gray-300 font-bold w-fit">
              Submit
            </button>
          </div>
        </div>

        <div className='flex gap-20'>
            {/* Middle Section: Quick Links */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <h5 className="text-xl font-bold">Quick Links</h5>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-green-500">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-500">Free Workout Plans</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-500">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-500">Contact Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-green-500">Blog</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Us */}
        <div className="md:w-2/3 text-center md:text-left">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <p className="mt-4 text-gray-400">
            Have questions or need support? Reach out to our team.
          </p>
          <p className="mt-2 text-gray-400">Email: <a href="mailto:support@gym-z.com" className="hover:text-green-500">support@gym-z.com</a></p>
          <p className="mt-2 text-gray-400">Phone: <a href="tel:+18001234567" className="hover:text-green-500">+1 (800) 123-4567</a></p>
        </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
        
        {/* Social Media Icons */}
        <div className='ml-4 flex gap-5'>
          <h1 className='text-gray-400 font-bold'>FOLLOW US</h1>
          <div className='flex gap-7'>
          <Link href="/" >
            <img src="/icons8-facebook-24.png" href="/" ></img>
          </Link>
          <Link href="/">
            <img src="/icons8-instagram-24.png" href="/"></img>
          </Link>
          <Link href="/">
            <img src="/icons8-youtube-24.png" href="/"></img>
          </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <p>© 2024 GYM-Z. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
