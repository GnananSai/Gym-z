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
      <section className="flex flex-col ml-20 items-start justify- h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
        <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
          <h1 className="text-7xl md:text-9xl font-extrabold text-gradient">STAY FIT THE</h1>
          
        </div>
        <div className='bg-gradient-to-r from-white via-white to-gray-700 inline-block text-transparent bg-clip-text font-bold'>
        <h1 className="text-5xl md:text-9xl font-extrabold text-gradient">GYM-Z WAY</h1>
          
        </div>
        
        <div className="mt-4">
          <Link href="/join-now">
            <p className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl">Join Now</p>
          </Link>
          <Link href="/find-a-trainer">
            <p className="ml-4 bg-green-500 text-white px-6 py-3 rounded-lg text-xl">Find a Trainer</p>
          </Link>
        </div>
      </section>

      {/* What is GYM-Z Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What is GYM-Z?</h2>
          <div className="relative w-full h-64 mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/video-id"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">People who transformed themselves with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with dynamic content if needed */}
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Image src="/path-to-transformation-image.jpg" alt="Transformation" width={300} height={300} className="rounded-lg" />
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
