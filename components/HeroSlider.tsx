"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx"; 

const slides = [
  {
    image: "/Herofirst.jpg",
    heading: "Playproof Pipes by Shree Nilkanth",
    description: "Engineered for durability. Trusted across India.",
    primaryCta: "/products",
    secondaryCta: "/contact",
  },
  {
    image: "/Wire(2).png",
    heading: "Wires That Power Progress",
    description: "High-performance wires for infrastructure and innovation.",
    primaryCta: "/products",
    secondaryCta: "/about",
  },
  {
    image: "/HomeAgri.png",
    heading: "Efficient Irrigation Starts Here",
    description: "Modern sprinkler and suction pipes built for precision.",
    primaryCta: "/applications",
    secondaryCta: "/contact",
  },
  {
    image: "/GardenPipes.jpg",
    heading: "Flexible Strength for Every Garden",
    description: "Flexible and tough solutions for daily use and farming.",
    primaryCta: "/products/ldpe-pipes",
    secondaryCta: "/contact",
  },
  {
    image: "/HDPE-Pipe.png",
    heading: "Built for Pressure. Trusted in Every Terrain",
    description: "Reliable for water flow, drainage, and efficiency.",
    primaryCta: "/products/pvc-pipes",
    secondaryCta: "/applications",
  },
   {
    image: "/HDPEteen.png",
    heading: "HDPE Pipes for Every Project",
    description: "HDPE Pipes for Seamless Flow & Industrial Strength.",
    primaryCta: "/products/pvc-pipes",
    secondaryCta: "/applications",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-contain bg-no-repeat bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out ">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className={clsx(
              "object-cover transition-opacity duration-1000",
              index === current ? "opacity-100" : "opacity-0"
            )}
            priority={index === 0}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-6 animate-fade-in-up">
          {slides[current].heading}
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-8 animate-fade-in-up">
          {slides[current].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
          <Link
            href={slides[current].primaryCta}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Explore
          </Link>
          <Link
            href={slides[current].secondaryCta}
            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
