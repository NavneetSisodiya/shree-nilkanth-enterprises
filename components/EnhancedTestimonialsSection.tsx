"use client"

import { useState, useEffect } from "react"
import { Star, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const EnhancedTestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Construction Ltd.",
    text: "Shree Nilkanth Enterprises has been our trusted partner for over 5 years. Their HDPE pipes are of exceptional quality and have never failed us in any project. The customer service is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "Mumbai, Maharashtra",
  },
  {
    name: "Priya Sharma",
    company: "Green Valley Farms",
    text: "The irrigation pipes from Shree Nilkanth have transformed our farming operations. The quality is outstanding and the customer service is excellent. Our crop yield increased by 40%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "Pune, Maharashtra",
  },
 {
  name: "Amit Mehra",
  company: "Metro Infrastructure",
  text: "We have used their pipes in multiple government projects. The durability and reliability of their products make them our preferred supplier. Highly recommended for large-scale projects.",
  rating: 5,
  image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D", // Amit Patel updated
  location: "Ahmedabad, Gujarat",
},
  {
    name: "Ananya Verma",
    company: "Modern Builders",
    text: "Excellent quality pipes with timely delivery. Their technical support team is very knowledgeable and helpful. We've completed over 20 projects using their products.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "Surat, Gujarat",
  },
  {
    name: "Vikram Singh",
    company: "Agricultural Solutions",
    text: "Best irrigation pipes in the market. The garden pipes are particularly impressive - durable, flexible, and cost-effective. Our clients are extremely satisfied.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "Jaipur, Rajasthan",
  },
  {
    name: "Nisha Kapoor",
    company: "City Water Works",
    text: "Professional service and top-quality products. Their HDPE pipes have been performing excellently in our municipal water supply projects for over 3 years now.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "Nashik, Maharashtra",
  },
];

const videoTestimonials = [ 
  {
    thumbnail: "https://img.youtube.com/vi/nTZBx3lQUWQ/hqdefault.jpg",
    title: "HDPE Sprinkler System for Agriculture",
    quote: "This sprinkler irrigation system has provided highly efficient and uniform water distribution in our field, improving crop health significantly.",
    client: "Suresh Builders",
    videoUrl: "https://www.youtube.com/embed/nTZBx3lQUWQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/a1DpRbYfNaU/hqdefault.jpg",
    title: "HDPE Pipes Installation in the Field",
    quote: "The HDPE pipes were delivered and installed efficiently, making setup in the field quick and hassle-free. The system is ready for effective irrigation.",
    client: "Modern Farms Ltd.",
    videoUrl: "https://www.youtube.com/embed/a1DpRbYfNaU",
  },
  {
    thumbnail: "https://img.youtube.com/vi/mZXetb1TPEg/hqdefault.jpg",
    title: "Cinematic Farming Success Story",
    quote: "This cinematic footage showcases a thriving farm benefiting from efficient irrigation and modern HDPE piping solutions, leading to remarkable crop growth.",
    client: "Golden Fields Agriculture",
    videoUrl: "https://www.youtube.com/embed/mZXetb1TPEg",
  },
  {
    thumbnail: "https://img.youtube.com/vi/AOpUtlEtA_4/hqdefault.jpg",
    title: "Field Irrigation with LDPE Pipes",
    quote: "Efficient water distribution through LDPE pipes has transformed this village field, ensuring crops receive consistent and adequate irrigation.",
    client: "Riverbank Farms",
    videoUrl: "https://www.youtube.com/embed/AOpUtlEtA_4",
  },
];



  const partners = [
    { name: "Tata Group", logo: "bajaj.jpeg" },
    
    { name: "Godrej Properties", logo: "tata.png" },
    { name: "Mahindra Group", logo: "Finolex.jpeg" },
    { name: "Reliance Industries", logo: "ashirvad.jpeg" },
   
    { name: "Bajaj Group", logo: "adani.jpeg" },
    { name: "Birla Group", logo: "birla.jpeg" },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our products and
            services.
          </p>
        </div>

        {/* Written Testimonials Carousel */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 to-gray-800"></div>

          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-black hover:bg-appleblue transition-colors transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-100" />
            </button>

            <div className="text-center flex-1 px-8">
              <Quote className="h-16 w-16 text-appleblue mx-auto mb-6" />
              <p className="text-xl text-gray-700 mb-8 italic max-w-3xl mx-auto leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mr-6 border-4 border-gray-200"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-appleblue font-semibold">{testimonials[currentTestimonial].company}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-black hover:bg-appleblue transition-colors transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-100" />
            </button>
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-gray-600 scale-125" : "bg-gray-300 hover:bg-green-300"
                }`}
              />
            ))}
          </div>
        </div>

       {/* Video Testimonials */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Client Video Reviews</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedVideo(index)}
            >
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800">{video.title}</h4>
                <p className="text-sm italic text-gray-600 mt-1 mb-1">"{video.quote}"</p>
                <p className="text-sm text-green-600 font-semibold">- {video.client}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Video Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold">{videoTestimonials[selectedVideo].title}</h3>
                <button onClick={() => setSelectedVideo(null)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={videoTestimonials[selectedVideo].videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Trusted By Logos - Scrolling Animation */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-12">Trusted by Leading Companies</h3>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                 <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow w-48 h-28 flex items-center justify-center">
  <img
    src={partner.logo || "/placeholder.svg"}
    alt={partner.name}
    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedTestimonialsSection
