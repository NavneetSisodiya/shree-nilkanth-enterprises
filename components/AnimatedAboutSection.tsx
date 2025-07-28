"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Award, Users, Factory } from "lucide-react"

const AnimatedAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">About Shree Nilkanth Enterprises</h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over two decades of excellence in pipe manufacturing, Shree Nilkanth Enterprises has established
              itself as a trusted name in the industry. We specialize in producing high-quality HDPE, garden, and
              agricultural pipes that meet international standards.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us the preferred choice for
              distributors, builders, and commercial clients across the region.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">ISO Certified</p>
              </div>

              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">500+ Clients</p>
              </div>

              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">20+ Years</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Read More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="relative">
              <img
                src="home image.jpg"
                alt="Manufacturing Facility"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-green-600 text-white p-8 rounded-lg shadow-2xl animate-bounce">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg animate-pulse">
              <Factory className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedAboutSection
