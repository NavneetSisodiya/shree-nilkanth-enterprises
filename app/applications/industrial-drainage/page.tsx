import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function IndustrialApplicationPage() {
  const cards = [
    {
      title: "Chemical Processing",
      image: "/chemical.png",
      description:
        "Pipes designed to withstand harsh chemicals and extreme operating conditions.",
    },
    {
      title: "Manufacturing Plants",
      image: "/manufacturing.png",
      description:
        "High-performance piping systems for process water, compressed air, and material handling.",
    },
    {
      title: "Cooling & Heating Systems",
      image: "/coolingheating.png",
      description:
        "Durable solutions for industrial-scale cooling towers, HVAC, and thermal plants.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-gray-200 font-bold mb-4">
            Industrial Applications
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From manufacturing to processing, our piping systems deliver unmatched
            durability, chemical resistance, and performance for industrial operations.
          </p>
        </div>
      </section>

      {/* Application Cards */}
      <section className="py-20 bg-white px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Where Our Products Are Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-50 border border-gray-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-52 hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}