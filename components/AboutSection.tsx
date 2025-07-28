import Link from "next/link"
import { ArrowRight, Award, Users, Factory } from "lucide-react"

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Shree Nilkanth Enterprises</h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over two decades of excellence in pipe manufacturing, Shree Nilkanth Enterprises has established
              itself as a trusted name in the industry. We specialize in producing high-quality HDPE, sprinkler, and
              agricultural pipes that meet international standards.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction has made us the preferred choice for
              distributors, builders, and commercial clients across the region.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">ISO Certified</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">500+ Clients</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-800">20+ Years</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
            >
              Read More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Manufacturing Facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
