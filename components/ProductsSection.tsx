import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ProductsSection = () => {
  const products = [
    {
      title: "HDPE Pipes",
      description: "High-density polyethylene pipes for water supply and drainage systems.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/hdpe-pipes",
    },
    {
      title: "Sprinkler Pipes",
      description: "Specialized pipes designed for efficient irrigation and sprinkler systems.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/sprinkler-pipes",
    },
    {
      title: "Suction Pipes",
      description: "Durable suction pipes for water pumping and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/suction-pipes",
    },
    {
      title: "Agriculture Pipes",
      description: "Comprehensive range of pipes for modern agricultural irrigation needs.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/agriculture-pipes",
    },
    {
      title: "Electrical Conduit Pipes",
      description: "Protective conduit pipes for electrical wiring and cable management.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/products/electrical-conduit-pipes",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality pipes designed for various industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <Link
                  href={product.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
