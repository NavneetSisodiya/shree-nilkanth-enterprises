import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function LDPEPipesPage() {

  const specifications = [
    { size: "12 mm (1/2 Inch)", pressure: "2.5 kg/cm²", length: "50m / 100m" },
    { size: "16 mm", pressure: "2.5 kg/cm²", length: "50m / 100m" },
    { size: "20 mm (3/4 Inch)", pressure: "2.5 kg/cm²", length: "50m / 100m" },
    { size: "25 mm (1 Inch)", pressure: "2.5 kg/cm²", length: "50m" },
  ];

  const features = [
    "Flexible & lightweight",
    "UV stabilized for long life",
    "Corrosion & chemical resistant",
    "Easy to install & handle",
    "Cost-effective for irrigation",
    "Non-toxic and safe for water use",
    "Weatherproof & durable",
    "Leakproof performance",
  ];

  const applications = [
    "Drip irrigation systems",
    "Greenhouse & nursery watering",
    "Agricultural farms",
    "Horticulture & landscaping",
    "Water conveyance in fields",
    "Temporary water supply lines",
    "Garden & lawn irrigation",
    "Small-scale industrial water use",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-700 to-yellow-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">LDPE Pipes</h1>
          <p className="text-lg text-yellow-100">
            Lightweight, flexible & efficient pipes ideal for agricultural irrigation and water distribution.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Premium LDPE Pipes</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our LDPE (Low-Density Polyethylene) pipes are engineered for flexibility, durability, and cost-effectiveness.  
              They are widely used in drip irrigation and water conveyance applications due to their lightweight nature and long service life.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              These pipes are UV stabilized, resistant to chemicals, and can withstand harsh outdoor conditions,  
              making them the perfect choice for agriculture and horticulture.
            </p>
            <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Garden-Pipes-Brochure.pdf"
             className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/ldpe2.png", "/ldpe4.png", "/ldpe5.png", "/ldpe.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`LDPE Pipe ${i + 1}`}
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
            Designed for efficient water management & long-term use
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
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
            Available in multiple diameters & lengths for agricultural needs
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-yellow-600 text-white font-semibold grid grid-cols-3 py-4 px-6">
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
            Perfect for agriculture, horticulture, and irrigation systems
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need LDPE Pipes for Your Project?</h2>
          <p className="text-lg mb-8">
            Get reliable, flexible, and cost-effective LDPE pipes for your agricultural and irrigation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-semibold rounded-lg transition"
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
