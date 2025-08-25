import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HorticulturalApplicationPage() {
  const cards = [
    {
      title: "Nursery Irrigation",
      image: "/nursery.png",
      description:
        "Gentle watering systems for plants and saplings in nurseries.",
    },
    {
      title: "Landscape Gardening",
      image: "/landscapegarden.png",
      description:
        "Flexible pipes for fountains, sprinklers, and landscape maintenance.",
    },
    {
      title: "Greenhouse Farming",
      image: "/greenhousefarming.png",
      description:
        "Customized piping for controlled environment agriculture.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-green-200 font-bold mb-4">
            Horticultural Applications
          </h1>
          <p className="text-lg text-green-100">
            Water-efficient and plant-friendly piping solutions for gardens and farms.
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
