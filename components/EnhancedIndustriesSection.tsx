
import Link from "next/link";
import {
  Tractor,
  Building,
  Droplets,
  Factory,
  Wrench,
  Home,
  Leaf,
  Zap,
} from "lucide-react";

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
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our pipes serve diverse industries with specialized solutions tailored to meet specific requirements and
            deliver exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition p-6 group"
              >
                <div
                  className={`bg-gradient-to-r ${industry.color} w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-5`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                <div className="bg-gray-50 text-green-700 text-xs font-semibold p-3 rounded-md">
                  {industry.details}
                </div>
                {industry.href && (
                  <div className="mt-4">
                    <Link
                      href={industry.href}
                      className="text-sm text-green-600 hover:text-green-700 font-medium border-b border-transparent hover:border-green-600"
                    >
                      Learn More →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid md:grid-cols-4 gap-6 text-center bg-gray-50 p-8 rounded-xl shadow">
          <div>
            <p className="text-3xl font-bold text-green-600">15,000+</p>
            <p className="text-gray-700 mt-1 text-sm">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">8</p>
            <p className="text-gray-700 mt-1 text-sm">Industries Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">25</p>
            <p className="text-gray-700 mt-1 text-sm">States Covered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600">99%</p>
            <p className="text-gray-700 mt-1 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedIndustriesSection;
