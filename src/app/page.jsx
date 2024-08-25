import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className='sticky top-0'>
      <Navbar/>
      </div>
      {/* Hero Section */}
      <Hero/>

      {/* What is GYM-Z Section */}
      <section className="py-16 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-extrabold text-5xl">What is GYM-Z?</h2>
          <div className="px-52 h-96 mx-auto mt-14 flex gap-16 ">
            <div className='bg-gradient-to-b from-[#363636] to-black p-10 rounded-xl w-1/3 text-start'>
              <h1 className='text-2xl font-bold mb-5'>Our Mission</h1>
              <p>
              At GYM-Z, our mission is to make fitness accessible to everyone. We understand the unique energy and challenges of Gen Z, and we’re here to support your journey to a healthier, stronger you.
              </p>
            </div>
            <div className='bg-gradient-to-b from-[#363636] to-black p-10 rounded-xl w-1/3 text-start'>
              <h1 className='text-2xl font-bold mb-5'>What We Offer</h1>
              <p>
              We provide free workout plans tailored to your needs, personalized diet advice, and a wealth of fitness-related information. Whether you’re a beginner or looking to take your fitness to the next level, GYM-Z has the resources to help you succeed.
              </p>
            </div>
            <div className='bg-gradient-to-b from-[#363636] to-black p-10 rounded-xl w-1/3 text-start'>
              <h1 className='text-2xl font-bold mb-5'>Join Our Community</h1>
              <p>
              Join the GYM-Z community today and start your fitness journey with us. We’re committed to guiding and inspiring you every step of the way—completely free of cost. Your path to confidence and health starts here!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Break the sweat section*/}
      <section className='py-16 mb-10'>
        <div className='container mx-auto text-center flex justify-center items-center'>
          <h2 className="text-5xl mb-8 text-[#5F5F5F]">Break the</h2>
          <h2 className="text-5xl font-bold mb-8 text-white ml-2">SWEAT</h2>
        </div>
        <div className='container mx-auto text-center flex justify-center items-center'>
          <h2 className="text-5xl mb-8 text-[#5F5F5F]">in</h2>
          <h2 className="text-5xl font-bold mb-8 text-white ml-2">GEN-Z way</h2>
        </div>
        <div className='flex w-full mt-8'>
          <div className='border-2 border-gray-600 border-l-black p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Plan</h1>
            <p>Map out your fitness journey with purpose
            — set goals and achieve them</p>
          </div>
          <div className='border-2 border-gray-600 p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Diet</h1>
            <p>Fuel your body right, because nutrition is
            the foundation of progress</p>
          </div>
          <div className='border-2 border-gray-600  border-r-black p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Act</h1>
            <p>Take action today, every workout brings you close to your best self</p>
          </div>
        </div>
       </section>

      {/* Free Workout Plan Section */}
      <section className='mx-20 mb-5 flex items-center justify-center'>
      <div class="h-fit w-full rounded-md bg-gradient-to-r from-[#575757] to-black p-1 ">
      <section className='h-full w-full bg-black p-20 pb-5'>
        <div className='flex'>
          <div className='flex flex-col gap-10'>
              <h1 className='text-white text-7xl'>
                Get a <span className='font-bold'>FREE</span><br/><span className='font-bold'>Workout Plan</span> <br/>for yourself
              </h1>
              <p className='text-[#9B9A97] w-4/6'>
              We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!
              </p>
              <Link href="/" className='p-2 bg-[#24FF00] w-fit flex gap-10 text-black font-bold font-3xl'>
                Take Quiz
                <img src='/Back Arrow.png'></img>
              </Link>
          </div>
          <div className='w-screen'>
            <img src="/offer1.png"></img>
          </div>
        </div>
      </section>
      </div>
      </section>


      {/* Banner 2 Section*/}
      <section className='h-full w-full bg-black p-20 pb-5'>
        <div className='flex gap-48'>
          <div className='w-screen'>
            <img src="/banner2.png"></img>
          </div>
          <div className='flex flex-col gap-10 justify-center'>
              <h1 className='text-white text-5xl'>
              Get more with low-cost training programs and advanced features.
              </h1>
              <p className='text-[#9B9A97] w-5/6'>
              We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!
              </p>
              <Link href="/" className='p-2 w-fit flex gap-5 text-[#05FF00] font-bold font-3xl'>
                See More
                <img src='/Arrow2.png'></img>
              </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-20">
            {/* Replace with dynamic content if needed */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-8 bg-[#111111] rounded-tl-3xl rounded-tr-3xl">
                <p>"Client testimonial here. They love our service!"</p>
                <p className="mt-4 text-right">- Client {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}
