"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "home.jpg",
      title: "Leading Manufacturer of Durable & Efficient Pipes",
      subtitle: "for Every Industry",
      description: "Delivering quality pipe solutions for agriculture, construction, and infrastructure.",
    },
    {
      image: "home image.jpg",
      title: "Premium HDPE Pipes",
      subtitle: "Built to Last",
      description: "High-quality HDPE pipes designed for superior performance and longevity.",
    },
    {
      image: "homeimage.jpg",
      title: "Garden & Sprinkler Systems",
      subtitle: "Water Efficiently",
      description: "Complete irrigation solutions for gardens, farms, and commercial landscapes.",
    },
    {
      image: "home  image.jpeg",
      title: "Industrial Grade Solutions",
      subtitle: "Trusted by Professionals",
      description: "Robust piping systems for construction and industrial applications.",
    },
    {
      image: "home imagee.jpeg",
      title: "Agricultural Excellence",
      subtitle: "Empowering Farmers",
      description: "Specialized pipes for modern agricultural and farming operations.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[5000ms] hover:scale-105"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">{slides[currentSlide].title}</h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-green-400">{slides[currentSlide].subtitle}</h2>
          </div>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl animate-slide-in-left">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-green-400 scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>

      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 animate-pulse"></div>
    </section>
  )
}

export default HeroSlider
