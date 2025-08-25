import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ElectricalApplicationPage() {
  const cards = [
    {
      title: "Cable Protection",
      image: "/cablepro.png",
      description:
        "Conduits and casing pipes to safeguard electrical wiring from damage.",
    },
    {
      title: "Underground Cabling",
      image: "/ugcable.png",
      description:
        "Heavy-duty pipes for underground electrical and communication cables.",
    },
    {
      title: "Panel & Power Plant Wiring",
      image: "/powerplant.png",
      description:
        "Solutions for industrial and commercial electrical infrastructure.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-blue-200 font-bold mb-4">
            Electrical Applications
          </h1>
          <p className="text-lg text-blue-100">
            High-performance cable protection systems for safety and efficiency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Where Our Products Are Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-gray-50"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-52"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}