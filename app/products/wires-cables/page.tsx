import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function WiresAndCablesPage() {
 
  const specifications = [
    { type: "Single Core Copper Wire", size: "1.5 sq.mm", rating: "1100V", length: "90m" },
    { type: "Single Core Copper Wire", size: "2.5 sq.mm", rating: "1100V", length: "90m" },
    { type: "Multi-Core Copper Cable", size: "3 Core x 1.5 sq.mm", rating: "1100V", length: "100m" },
    { type: "Multi-Core Copper Cable", size: "3 Core x 2.5 sq.mm", rating: "1100V", length: "100m" },
    { type: "Flexible Cable", size: "0.75 sq.mm", rating: "1100V", length: "90m" },
    { type: "Flexible Cable", size: "1 sq.mm", rating: "1100V", length: "90m" },
  ];

  const features = [
    "High conductivity copper",
    "PVC/XLPE insulation for safety",
    "Heat & fire resistant",
    "Flexible & easy to install",
    "Long service life",
    "Low power loss",
    "Available in multiple colors",
    "IS/IEC standard compliant",
  ];

  const applications = [
    "Residential wiring",
    "Commercial buildings",
    "Industrial machinery",
    "Lighting circuits",
    "Power supply systems",
    "Control panels",
    "Agricultural motors",
    "Appliances and equipment",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Wires & Cables</h1>
          <p className="text-lg text-orange-100">
            Reliable, safe, and high-performance wires and cables for homes, industries, and infrastructure.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Premium Quality Wires & Cables</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our wires and cables are manufactured using high-conductivity copper  
              and premium-grade insulation to ensure safety, durability, and optimal performance.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Designed to meet IS/IEC standards, they are suitable for residential, commercial, and industrial applications.
            </p>
            <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Garden-Pipes-Brochure.pdf"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/cable2.png", "/cable3.png", "/cable1.png", "/cable4.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Wire ${i + 1}`}
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
            Safety, performance, and reliability in every meter
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
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
            Compliant with IS 694 / IEC standards for electrical safety
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-orange-600 text-white font-semibold grid grid-cols-4 py-4 px-6">
              <div>Type</div>
              <div>Size</div>
              <div>Voltage Rating</div>
              <div>Standard Length</div>
            </div>
            {specifications.map((spec, i) => (
              <div
                key={i}
                className="grid grid-cols-4 py-4 px-6 border-t text-gray-700 hover:bg-gray-50 transition"
              >
                <div>{spec.type}</div>
                <div>{spec.size}</div>
                <div>{spec.rating}</div>
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
            Suitable for a wide range of residential, industrial, and commercial applications
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need High-Quality Wires & Cables?</h2>
          <p className="text-lg mb-8">
            Contact us today for safe and durable electrical wiring solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-lg transition"
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
