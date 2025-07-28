import { Tractor, Building, Droplets, Factory, Wrench, Home } from "lucide-react"

const IndustriesSection = () => {
  const industries = [
    {
      icon: Tractor,
      title: "Agriculture",
      description: "Irrigation systems, drip irrigation, and farm water management solutions.",
    },
    {
      icon: Droplets,
      title: "Irrigation",
      description: "Efficient water distribution systems for crops and landscaping projects.",
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Large-scale construction projects, highways, and urban development.",
    },
    {
      icon: Home,
      title: "Water Supply",
      description: "Residential and commercial water distribution networks.",
    },
    {
      icon: Factory,
      title: "Industrial Drainage",
      description: "Industrial waste management and drainage solutions.",
    },
    {
      icon: Wrench,
      title: "Construction",
      description: "Building construction, plumbing, and electrical conduit applications.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our pipes serve diverse industries with specialized solutions tailored to meet specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">{industry.title}</h3>

                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
