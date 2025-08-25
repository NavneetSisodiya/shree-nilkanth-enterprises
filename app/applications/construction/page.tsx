import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ConstructionApplicationPage() {
  const cards = [
    {
      title: "Plumbing Installations",
      image: "/plumbing.png",
      description:
        "Reliable piping systems for residential, commercial, and industrial plumbing.",
    },
    {
      title: "Drainage & Wastewater",
      image: "/wastewater.png",
      description:
        "High-strength pipes for effective drainage and sewage management.",
    },
    {
      title: "Concrete Reinforcement",
      image: "/concrete.png",
      description:
        "Specialized piping for protection and reinforcement in construction projects.",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-gradient-to-br from-yellow-800 to-yellow-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-yellow-200 font-bold mb-4">
            Construction Applications
          </h1>
          <p className="text-lg text-yellow-100">
            Trusted piping solutions for safe, durable, and efficient construction projects.
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