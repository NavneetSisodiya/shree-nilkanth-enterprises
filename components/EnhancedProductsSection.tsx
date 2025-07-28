import Link from "next/link"
import { ArrowRight } from "lucide-react"

const EnhancedProductsSection = () => {
  const products = [
    {
      title: "Garden Pipes",
      description: "Premium quality garden pipes for residential and commercial landscaping needs.",
      image: "home image.jpg",
      link: "/products/garden-pipes",
      featured: true,
      size: "large",
    },
    {
      title: "Garden Irrigation Systems",
      description: "Complete irrigation solutions for gardens, lawns, and green spaces.",
      image: "home imagee.jpeg",
      link: "/products/garden-irrigation",
      featured: true,
      size: "large",
    },
    {
      title: "HDPE Pipes",
      description: "High-density polyethylene pipes for water supply and drainage systems.",
      image: "HDPE.jpeg",
      link: "/products/hdpe-pipes",
      featured: false,
      size: "medium",
    },
    {
      title: "Sprinkler Pipes",
      description: "Specialized pipes designed for efficient irrigation and sprinkler systems.",
      image: "Sprinkler.jpeg",
      link: "/products/sprinkler-pipes",
      featured: false,
      size: "medium",
    },
    {
      title: "Agriculture Pipes",
      description: "Comprehensive range of pipes for modern agricultural irrigation needs.",
      image: "Agricultural.jpg",
      link: "/products/agriculture-pipes",
      featured: false,
      size: "medium",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality pipes designed for various industries and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Garden Pipes - Large Cards */}
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <div
                key={index}
                className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>

                  <Link
                    href={product.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-bold text-lg group"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}

          {/* Regular Products - Medium Cards */}
          {products
            .filter((product) => !product.featured)
            .map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <Link
                    href={product.link}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 group shadow-lg"
          >
            View All Products
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EnhancedProductsSection
