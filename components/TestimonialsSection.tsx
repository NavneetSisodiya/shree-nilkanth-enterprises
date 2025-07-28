"use client"

import { useState } from "react"
import { Star, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState(null)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction Ltd.",
      text: "Shree Nilkanth Enterprises has been our trusted partner for over 5 years. Their HDPE pipes are of exceptional quality and have never failed us in any project.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Farms",
      text: "The irrigation pipes from Shree Nilkanth have transformed our farming operations. The quality is outstanding and the customer service is excellent.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Amit Patel",
      company: "Metro Infrastructure",
      text: "We have used their pipes in multiple government projects. The durability and reliability of their products make them our preferred supplier.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const videoTestimonials = [
    {
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Construction Project Success Story",
      quote: "The pipes delivered exceptional performance in our 50-acre residential project.",
      client: "Suresh Builders",
    },
    {
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Agricultural Transformation",
      quote: "Our crop yield increased by 40% after installing their irrigation system.",
      client: "Modern Farms Ltd.",
    },
    {
      thumbnail: "/placeholder.svg?height=200&width=300",
      title: "Government Project Excellence",
      quote: "Delivered on time with superior quality for our municipal water project.",
      client: "City Municipal Corporation",
    },
  ]

  const partners = [
    "Partner Logo 1",
    "Partner Logo 2",
    "Partner Logo 3",
    "Partner Logo 4",
    "Partner Logo 5",
    "Partner Logo 6",
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our products and
            services.
          </p>
        </div>

        {/* Written Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 relative">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="text-center flex-1">
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-6 italic max-w-2xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              <div className="flex justify-center">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Client Video Reviews</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">{video.title}</h4>
                  <p className="text-gray-600 mb-3 italic">"{video.quote}"</p>
                  <p className="text-sm text-blue-600 font-medium">- {video.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Trusted by Leading Companies</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center mx-auto">
                  <span className="text-xs text-gray-500">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
