import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function InfrastructureApplicationPage() {
  const cards = [
    {
      title: "Water Supply Networks",
      image: "/Watersupplynet.png",
      description:
        "Reliable and leakproof piping systems for municipal and industrial water distribution.",
    },
    {
      title: "Drainage & Sewer Systems",
      image: "/dsewer.png",
      description:
        "Durable, corrosion-resistant pipes for effective waste and stormwater management.",
    },
    {
      title: "Underground Cabling",
      image: "/ugcabling.png",
      description:
        "Protective conduit systems for power and communication cables in urban and rural projects.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-gray-200 font-bold mb-4">
            Infrastructure Applications
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Delivering strong, reliable, and sustainable piping solutions that power
            cities, connect communities, and shape the future of infrastructure.
          </p>
        </div>
      </section>

      {/* Application Cards */}
      <section className="py-20 bg-white px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
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
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
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
