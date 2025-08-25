import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function SprinklerPipesPage() {
 
  const specifications = [
    { size: "50 mm", pressure: "2.5 – 4 kg/cm²", length: "6m" },
    { size: "63 mm", pressure: "2.5 – 4 kg/cm²", length: "6m" },
    { size: "75 mm", pressure: "2.5 – 4 kg/cm²", length: "6m" },
    { size: "90 mm", pressure: "2.5 – 4 kg/cm²", length: "6m" },
    { size: "110 mm", pressure: "2.5 – 4 kg/cm²", length: "6m" },
  ];

  const features = [
    "High impact strength",
    "UV stabilized for long life",
    "Corrosion & rust resistant",
    "Leak-proof joints",
    "Lightweight & easy to handle",
    "Uniform water distribution",
    "Withstands high pressure",
    "Cost-effective irrigation solution",
  ];

  const applications = [
    "Agricultural irrigation",
    "Dust suppression in mining",
    "Sports grounds & lawns",
    "Tea & coffee plantations",
    "Vegetable farms",
    "Nurseries & orchards",
    "Paddy fields",
    "Industrial landscaping",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sprinkler Pipes</h1>
          <p className="text-lg text-green-100">
            Durable and efficient pipes for uniform water distribution in agriculture and landscaping.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Premium Sprinkler Pipes</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our sprinkler pipes are manufactured using high-quality HDPE/PVC materials,  
              ensuring durability, strength, and consistent performance under varying pressures.  
              Designed for easy installation and portability, they offer an ideal irrigation solution for farms and landscapes.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              With UV stabilization, high-pressure endurance, and leak-proof joints,  
              these pipes are perfect for delivering water evenly over large areas, ensuring better crop yields.
            </p>
            <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Garden-Pipes-Brochure.pdf"
             className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/sprinkler1.png", "/sprinkler2.png", "/sprinkler3.png", "/homeimage.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Sprinkler Pipe ${i + 1}`}
                className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Key Features & Benefits</h2>
          <p className="text-gray-600 mb-10">
            Designed for high performance & long-lasting irrigation solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
          <p className="text-gray-600 mb-10">
            Available in multiple diameters to suit different irrigation setups
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-green-700 text-white font-semibold grid grid-cols-3 py-4 px-6">
              <div>Size (OD)</div>
              <div>Pressure Rating</div>
              <div>Standard Length</div>
            </div>
            {specifications.map((spec, i) => (
              <div key={i} className="grid grid-cols-3 py-4 px-6 border-t text-gray-700 hover:bg-gray-50 transition">
                <div>{spec.size}</div>
                <div>{spec.pressure}</div>
                <div>{spec.length}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Applications</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Efficient water delivery for farms, plantations, and landscapes
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Sprinkler Pipes for Your Project?</h2>
          <p className="text-lg mb-8">
            Get high-performance sprinkler pipes for efficient and reliable irrigation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold rounded-lg transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
