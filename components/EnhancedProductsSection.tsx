import Link from "next/link"
import { ArrowRight } from "lucide-react"

const EnhancedProductsSection = () => {
  const products = [
    {
      title: "HDPE Pipes",
      description: "High-density polyethylene pipes for water supply and drainage systems.",
      image: "HDPE(1).png",
      link: "/products/hdpe-pipes",
    },
    {
      title: "Garden Pipes",
      description: "Premium quality garden pipes for residential and commercial landscaping needs.",
      image: "garden2.png",
      link: "/products/garden-pipes",
    },
    {
      title: "Suction Pipes",
      description: "Durable suction pipes ideal for industrial and agricultural applications.",
      image: "SuctionPipe(1).png",
      link: "/products/suction-pipes",
    },
    {
      title: "LDPE Pipes",
      description: "Flexible and lightweight LDPE pipes suitable for drip and sprinkler irrigation.",
      image: "Ldpe5.png",
      link: "/products/ldpe-pipes",
    },
    {
      title: "PVC Pipes",
      description: "Versatile PVC pipes for plumbing, drainage, and other construction needs.",
      image: "PvcPipe(1).png",
      link: "/products/pvc-pipes",
    },
    {
      title: "Wires & Cables",
      description: "High-quality wires and cables for residential, commercial, and industrial use.",
      image: "Wire(1).png",
      link: "/products/wires-cables",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Product Range</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality pipes and electrical solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg transition hover:shadow-2xl group">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={product.link} className="inline-flex items-center font-semibold text-primary hover:underline">
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-primary text-black rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
          >
            View All Products <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EnhancedProductsSection
