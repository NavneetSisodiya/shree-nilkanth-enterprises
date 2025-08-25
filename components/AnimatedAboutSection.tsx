"use client";

import Link from "next/link";
import Image from "next/image";

const AnimatedAboutSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Shaping the Future of Pipe Manufacturing
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Shree Nilkanth Enterprises is a modern pipe manufacturing company focused on delivering durable and high-quality HDPE, Garden, Sprinkler, and Agricultural pipes.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
            Backed by a team of experts and a commitment to innovation, we aim to provide smart piping solutions that serve agriculture, infrastructure, and irrigation needs across India.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            With a vision to build trust through performance, we combine advanced technology with a strong customer-first approach.
          </p>

          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-black text-white text-base font-medium rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image Content - Always Perfect Circle */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/logo41.png"
              alt="Shree Nilkanth Enterprises Logo"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, 256px"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnimatedAboutSection;
