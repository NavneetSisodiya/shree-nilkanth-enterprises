import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function IrrigationApplicationPage() {
  const cards = [
    {
      title: "Drip Irrigation",
      image: "/DripIrrigation.png",
      description:
        "Efficient water delivery directly to plant roots, minimizing waste.",
    },
    {
      title: "Sprinkler Systems",
      image: "/sprinklerIrrigation.png",
      description:
        "Wide-area coverage for agricultural and garden irrigation.",
    },
    {
      title: "Flood Irrigation",
      image: "/FloodIrrigation.png",
      description:
        "Reliable large-volume water supply for crops and fields.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-br from-cyan-900 to-cyan-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-gray-200 font-bold mb-4">
            Irrigation Applications
          </h1>
          <p className="text-lg text-cyan-100">
            Smart irrigation solutions for sustainable agriculture and landscaping.
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
