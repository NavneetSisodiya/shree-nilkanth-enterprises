"use client";

import Link from "next/link";

const AnimatedAboutSection = () => {
  return (
    <section className="py-24 bg-gray-50 border-t">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Shaping the Future of Pipe Manufacturing
          </h2>

          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Shree Nilkanth Enterprises is a modern pipe manufacturing company focused on delivering durable and high-quality HDPE, Garden, Sprinkler, and Agricultural pipes.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Backed by a team of experts and a commitment to innovation, we aim to provide smart piping solutions that serve agriculture, infrastructure, and irrigation needs across India.
          </p>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With a vision to build trust through performance, we combine advanced technology with a strong customer-first approach.   
          </p>

          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-black text-white text-base font-medium rounded-md hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative  h-[700px] w-[700px]">
          <img
            src="/logo41.png"
            alt="Manufacturing Facility"
            className="rounded-full shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AnimatedAboutSection;
