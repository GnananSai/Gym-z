'use client';
import { Hero } from '@/components/Hero';
import Link from 'next/link';
import AuthCard from '@/components/AuthCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAuthCardVisible, setIsAuthCardVisible] = useState(false);
  const [authCardType, setAuthCardType] = useState('signup'); // To track whether it's signup or login
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleAuthCard = (type) => {
    setAuthCardType(type);
    setIsAuthCardVisible(true);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  return (
    <div className="bg-black text-white mt-20">

      {/* Hero Section */}
      <Hero/>

      {/* What is GYM-Z Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto text-center">
          <h2 
            className="bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold text-4xl md:text-5xl cursor-pointer"
            onClick={() => isMobile && toggleContentVisibility()} // Toggle only on mobile
          >
            What is GYM-Z?
            <span className="ml-2 md:hidden">
              {isContentVisible ? '▲' : '▼'}
            </span>
          </h2>
          {/* Show content based on visibility and screen size */}
          <div 
            className={`flex flex-col md:flex-row gap-8 mt-8 md:gap-16 transition-all duration-300 ${isContentVisible || !isMobile ? 'flex-col md:flex-row' : 'hidden'}`}
          >
            <div className='bg-gradient-to-b from-[#363636] to-black p-6 md:p-10 rounded-xl w-full md:w-1/3 text-start'>
              <h1 className='text-xl md:text-2xl font-bold mb-4 text-[#05FF00]'>Our Mission</h1>
              <p>
                At GYM-Z, our mission is to make fitness accessible to everyone. We understand the unique energy and challenges of Gen Z, and we’re here to support your journey to a healthier, stronger you.
              </p>
            </div>
            <div className='bg-gradient-to-b from-[#363636] to-black p-6 md:p-10 rounded-xl w-full md:w-1/3 text-start'>
              <h1 className='text-xl md:text-2xl font-bold mb-4 text-[#05FF00]'>What We Offer</h1>
              <p>
                We provide free workout plans tailored to your needs, personalized diet advice, and a wealth of fitness-related information. Whether you’re a beginner or looking to take your fitness to the next level, GYM-Z has the resources to help you succeed.
              </p>
            </div>
            <div className='bg-gradient-to-b from-[#363636] to-black p-6 md:p-10 rounded-xl w-full md:w-1/3 text-start'>
              <h1 className='text-xl md:text-2xl font-bold mb-4 text-[#05FF00]'>Join Our Community</h1>
              <p>
                Join the GYM-Z community today and start your fitness journey with us. We’re committed to guiding and inspiring you every step of the way—completely free of cost. Your path to confidence and health starts here!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Break the sweat section */}
      <section className='py-16 mb-10 px-4 md:px-0'>
        <div className='container mx-auto text-center'>
          <h2 className="text-4xl md:text-5xl mb-2 text-[#5F5F5F] md:inline md:mr-3">Break the</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white inline">SWEAT</h2>
          <h2 className="text-4xl md:text-5xl mb-2 text-[#5F5F5F]">in</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">GEN-Z way</h2>
          <div className='flex flex-col md:flex-row gap-6 md:gap-0'>
            <div className='border-2 border-gray-600 md:border-l-black p-6 md:p-10 w-full md:w-1/3 text-center'>
              <h1 className='text-3xl md:text-5xl font-bold mb-4'>Plan📆</h1>
              <p>Map out your fitness journey with purpose—set goals and achieve them</p>
            </div>
            <div className='border-2 border-gray-600 p-6 md:p-10 w-full md:w-1/3 text-center'>
              <h1 className='text-3xl md:text-5xl font-bold mb-4'>Diet🥗</h1>
              <p>Fuel your body right, because nutrition is the foundation of progress</p>
            </div>
            <div className='border-2 border-gray-600 md:border-r-black p-6 md:p-10 w-full md:w-1/3 text-center'>
              <h1 className='text-3xl md:text-5xl font-bold mb-4'>Act👟</h1>
              <p>Take action today, every workout brings you close to your best self</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Workout Plan Section */}
      <section className='mx-4 md:mx-20 mb-5 flex flex-col md:flex-row items-center justify-center'>
        <div className="h-fit w-full rounded-md bg-gradient-to-r from-[#575757] to-black p-1">
          <section className='h-full w-full bg-black p-6 md:p-20 pb-5'>
            <div className='flex flex-col md:flex-row gap-14 w-fit'>
              <div className='flex flex-col gap-6 md:gap-10 w-fit'>
                <h1 className='text-3xl md:text-5xl text-white w-fit'>
                  Get a <span className='font-bold'>FREE</span><br /><span className='font-bold'>Workout Plan</span> <br />for yourself
                </h1>
                <p className='text-[#9B9A97] text-base md:text-xl w-full md:w-4/6'>
                  We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!
                </p>
                <Link href="/quiz" className='p-2 bg-[#24FF00] w-fit flex gap-2 md:gap-4 text-black font-bold text-xl md:text-2xl rounded-md'>
                  Take Quiz
                  <img src='/Back Arrow.png' alt="Back Arrow" className='hidden md:block w-8 h-8'/>
                </Link>
              </div>
              <div className='w-full hidden md:block'>
                <img src="/offer.png" alt="Offer Image" className='w-auto h-fit'/>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Banner 2 Section */}
      <section className='h-full w-full bg-black p-6 md:p-20'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-16'>
          <div className='w-full md:w-1/2'>
            <img src="/banner2.png" alt="Banner 2" className='w-full h-auto'/>
          </div>
          <div className='flex flex-col gap-6 md:gap-10 justify-center w-full md:w-1/2'>
            <h1 className='text-3xl md:text-5xl text-white'>
              Get more with low-cost training programs and advanced features.
            </h1>
            <p className='text-[#9B9A97] text-base md:text-xl'>
              We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!
            </p>
            <Link href="/" className='p-2 w-fit flex gap-2 md:gap-4 text-[#05FF00] font-bold text-xl md:text-2xl'>
              See More
              <img src='/Arrow2.png' alt="Arrow" className='hidden md:block'/>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="container mx-auto text-center">
          <h2 className="bg-gradient-to-r from-white via-white to-[#666666] inline-block text-transparent bg-clip-text font-bold text-3xl md:text-4xl mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-4 bg-[#111111] rounded-tl-3xl rounded-tr-3xl">
                <div className='flex items-center gap-4 mb-4'>
                  <img src='/Profile.png' className='rounded-full aspect-square object-cover h-12 w-12 md:h-16 md:w-16' alt="Profile" />
                  <h1 className='text-white text-lg md:text-xl'>Wade Warren</h1>
                </div>
                <div className='text-start'>
                  <p className='font-bold mb-2'>Lorem Ipsum</p>
                  <p>Lorem ipsum dolor sit amet consectetur. Amet enim tincidunt curabitur placerat. Eget eget ipsum pulvinar arcu nisi sed orci maecenas. Ridiculus venenatis interdum vitae.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We help the best section */}
      <section className="py-5 mb-16 px-6 md:px-10">
        <div className="container mx-auto text-center">
          <h2 className="bg-gradient-to-r from-gray-700 via-white to-white inline-block text-transparent bg-clip-text font-bold text-3xl md:text-5xl mb-10">
            WE HELP THE BEST TO REMAIN THE BEST
          </h2>
          <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center'>
            <div className='h-32 md:h-56 w-full md:w-1/4 bg-[#D9D9D9] rounded-lg'></div>
            <div className='h-32 md:h-56 w-full md:w-1/4 bg-[#D9D9D9] rounded-lg'></div>
            <div className='h-32 md:h-56 w-full md:w-1/4 bg-[#D9D9D9] rounded-lg'></div>
          </div>
        </div>
      </section>
    </div>
  );
}
