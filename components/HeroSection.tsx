import Link from "next/link"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
        }}
      ></div>

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Leading Manufacturer of <span className="text-red-400">Durable & Efficient</span> Pipes for Every Industry
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Delivering quality pipe solutions for agriculture, construction, and infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors group"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600"></div>
    </section>
  )
}

export default HeroSection
