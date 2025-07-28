import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AgricultureApplicationPage() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-green-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Agriculture & Irrigation Applications</h1>
        <p className="text-gray-700 max-w-3xl mx-auto px-4">
          Our pipes and fittings are essential in modern agriculture, providing solutions for irrigation,
          water management, and farm efficiency.
        </p>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10">Where Our Products Are Used</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Drip Irrigation Systems",
              image: "/images/drip.jpg",
              description: "Perfect for targeted watering and saving water in crop fields.",
            },
            {
              title: "Sprinkler Irrigation",
              image: "/images/sprinkler.jpg",
              description: "Covers large areas with uniform water distribution.",
            },
            {
              title: "Greenhouse Connections",
              image: "/images/greenhouse.jpg",
              description: "Flexible pipe systems for controlled environments.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
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
