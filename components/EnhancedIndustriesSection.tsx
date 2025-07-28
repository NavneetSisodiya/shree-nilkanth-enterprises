import Link from "next/link"
import {
  Tractor,
  Building,
  Droplets,
  Factory,
  Wrench,
  Home,
  Leaf,
  Zap,
} from "lucide-react"

const EnhancedIndustriesSection = () => {
  const industries = [
    {
      icon: Tractor,
      title: "Agriculture",
      href: "/applications/agriculture",
      description:
        "Comprehensive irrigation systems, drip irrigation, and farm water management solutions for modern farming.",
      details:
        "Serving 10,000+ farmers across India with efficient water distribution systems.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Droplets,
      title: "Irrigation",
      href: "/applications/irrigation",
      description:
        "Advanced water distribution systems for crops, landscaping, and precision agriculture projects.",
      details: "Covering 50,000+ acres with smart irrigation solutions.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Building,
      title: "Infrastructure",
      href: "/applications/infrastructure",
      description:
        "Large-scale construction projects, highways, urban development, and smart city initiatives.",
      details: "Partnered with 100+ infrastructure projects nationwide.",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Home,
      title: "Water Supply",
      href: "/applications/water-supply",
      description:
        "Residential and commercial water distribution networks with sustainable solutions.",
      details: "Supplying clean water to 500+ residential complexes.",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Factory,
      title: "Industrial Drainage",
      href: "/applications/industrial-drainage",
      description:
        "Industrial waste management, drainage solutions, and chemical processing applications.",
      details:
        "Serving 200+ industrial facilities with reliable drainage systems.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Wrench,
      title: "Construction",
      href: "/applications/construction",
      description:
        "Building construction, plumbing systems, and electrical conduit applications for modern structures.",
      details:
        "Supporting 1000+ construction projects with quality piping solutions.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Leaf,
      title: "Horticulture",
      href: "/applications/horticulture",
      description:
        "Specialized solutions for nurseries, greenhouses, and commercial horticulture operations.",
      details:
        "Enhancing productivity for 300+ horticultural enterprises.",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Electrical",
      href: "/applications/electrical",
      description:
        "Electrical conduit pipes for power distribution, telecommunications, and data cable management.",
      details:
        "Protecting electrical infrastructure in 500+ installations.",
      color: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pipes serve diverse industries with specialized solutions tailored to meet specific requirements and
            deliver exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group transform hover:scale-105 border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-r ${industry.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <IconComponent className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">{industry.description}</p>

                <div className="bg-green-50 rounded-lg p-3 mt-4">
                  <p className="text-green-700 text-sm font-semibold">{industry.details}</p>
                </div>

                {industry.href && (
                  <div className="mt-6">
                    <Link href={industry.href}>
                      <span className="text-green-600 hover:text-green-700 font-semibold text-sm border-b-2 border-transparent hover:border-green-600 transition-all duration-300 cursor-pointer">
                        Learn More →
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Industry Statistics */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                15,000+
              </div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">8</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                25
              </div>
              <p className="text-gray-600">States Covered</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                99%
              </div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnhancedIndustriesSection
