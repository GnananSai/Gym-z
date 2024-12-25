import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12  px-4 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:gap-4">
        
        {/* Left Section: Newsletter */}
        <div className="md:w-2/3 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold">Have a Good GYM Day</h2>
          <p className="mt-6 md:mt-10 text-gray-400">
            Sign up for our newsletter and get the latest workout plans, tips, <br /> and updates straight to your inbox.
          </p>
          <div className="mt-8 md:6 flex flex-col md:flex-row mb-5 md:mb-0">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 rounded-xl md:rounded-full md:rounded-r-none md:border-right-0 border-2 border-white bg-black text-white focus:outline-none text-center w-full md:w-2/3"
            />
            <button className="py-3 px-4 md:py-4 md:px-6 bg-white text-black rounded-lg hover:bg-gray-300 font-bold mt-4 md:mt-0 md:rounded-l-none">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:justify-between w-full md:ml-5">
          {/* Middle Section: Quick Links */}
          <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <h5 className="text-xl font-bold">Quick Links</h5>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#22D3FF]">Home</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#22D3FF]">Free Workout Plans</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#22D3FF]">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#22D3FF]">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#22D3FF]">Blog</Link></li>
            </ul>
          </div>

          {/* Right Section: Contact Us */}
          <div className="md:w-2/3 text-center md:text-left">
            <h5 className="text-xl font-bold">Contact Us</h5>
            <p className="mt-4 text-gray-400">
              Have questions or need support? Reach out to our team.
            </p>
            <p className="mt-2 text-gray-400">Email: <Link href="mailto:support@gym-z.com" className="hover:text-[#22D3FF]">support@gym-z.com</Link></p>
            <p className="mt-2 text-gray-400">Phone: <Link href="tel:+18001234567" className="hover:text-[#22D3FF]">+91 6969696969</Link></p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
        
        {/* Social Media Icons */}
        <div className="flex gap-5 md:gap-7 mb-4 md:mb-0">
          <h1 className="text-gray-400 font-bold">FOLLOW US</h1>
          <div className="flex gap-5 md:gap-7">
            <Link href="/">
              <img src="/icons8-facebook-24.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="/">
              <img src="/icons8-instagram-24.png" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
            <Link href="/">
              <img src="/icons8-youtube-24.png" alt="YouTube" className="w-6 h-6 md:w-8 md:h-8" />
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>© 2024 GYM-Z. All Rights Reserved. | <Link href="#" className="hover:text-white">Privacy Policy</Link> | <Link href="#" className="hover:text-white">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
