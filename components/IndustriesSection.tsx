import { Tractor, Building, Droplets, Factory, Wrench, Home } from "lucide-react";

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
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">Industries We Serve</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our pipes serve diverse industries with specialized solutions tailored to meet specific requirements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
