"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('/home.jpg')`, 
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-6 md:px-12 py-24 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
          Durable Pipes, Built for the Future
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Trusted solutions for agriculture, infrastructure, and industry — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Explore Products
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
