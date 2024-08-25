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
      <section className="flex flex-col ml-20 mt-10 items-start justify- h-fit bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
        <div className='bg-gradient-to-r from-white via-white  to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
          <h1 className="text-7xl md:text-9xl font-extrabold text-gradient">STAY FIT THE</h1>
          
        </div>
        <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
        <h1 className="text-5xl md:text-9xl font-extrabold text-gradient mt-7">GEN-Z WAY</h1>
          
        </div>
        
        <div className="mt-9">
            <p className=" text-gray-400 px-6 py-3 text-xl ">A huge selection of health and fitness content, healthy recipes and<br></br>
            transformation stories to help you get fit and stay fit!</p>
          <Link href="/join-now">
            <p className=" text-black px-6 py-4 rounded-lg text-2xl bg-[#69BB4C] font-bold w-fit mt-7 ml-4 hover:bg-green-300">Get Your Free Plan Now</p>
          </Link>
        </div>


        <div className='mt-28 ml-4'>
          <h1 className='text-gray-400 font-bold'>CONNECT WITH US TODAY</h1>
          <div className='flex gap-7 mt-3'>
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
      </section>

      {/* What is GYM-Z Section */}
      <section className="py-16 my-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What is GYM-Z?</h2>
          <div className="relative w-7/12 h-96 mx-auto mt-14">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/zvx_R7wqWeQ?si=jnnhC1OPzW8-aX4Q"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Break the sweat section*/}
      <section className='py-16 mb-20'>
        <div className='container mx-auto text-center flex justify-center items-center'>
          <h2 className="text-5xl mb-8 text-gray-400">Break the</h2>
          <h2 className="text-5xl font-bold mb-8 text-white ml-2">SWEAT</h2>
        </div>
        <div className='container mx-auto text-center flex justify-center items-center'>
          <h2 className="text-5xl mb-8 text-gray-400">in</h2>
          <h2 className="text-5xl font-bold mb-8 text-white ml-2">GEN-Z way</h2>
        </div>
        <div className='flex w-full mt-8'>
          <div className='border-2 border-gray-600 p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Plan</h1>
            <p>Map out your fitness journey with purpose
            — set goals and achieve them</p>
          </div>
          <div className='border-2 border-gray-600 p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Diet</h1>
            <p>Fuel your body right, because nutrition is
            the foundation of progress</p>
          </div>
          <div className='border-2 border-gray-600 p-20 w-1/3 text-center'>
            <h1 className='text-5xl font-bold mb-5'>Act</h1>
            <p>Take action today, every workout brings you close to your best self</p>
          </div>
        </div>
       </section>

      {/* Transformation Section */}
      <section className="py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text">
      People who transformed
    </h2>
    <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white via-white to-gray-700 text-transparent bg-clip-text">
      themselves with us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Replace with dynamic content if needed */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <Image src="/transformation.jpeg" alt="Transformation" width={300} height={300} className="rounded-lg" />
          <p className="mt-2">Person {i + 1}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Free Workout Plan Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Get a FREE Workout Plan for yourself</h2>
            <Link href="/get-free-plan">
              <p className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl">Get Free Plan</p>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="/path-to-image.jpg" alt="Workout" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Popular Exercises Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Popular Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with dynamic content if needed */}
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Image src="/path-to-exercise-image.jpg" alt="Exercise" width={300} height={200} className="rounded-lg" />
                <p className="mt-2">Exercise {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with dynamic content if needed */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-8 bg-gray-800 rounded-lg">
                <p>"Client testimonial here. They love our service!"</p>
                <p className="mt-4 text-right">- Client {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <p>Have a Good GYM-Z Day</p>
          <p>&copy; 2024 GYM-Z</p>
        </div>
      </footer>
    </div>
  );
}
