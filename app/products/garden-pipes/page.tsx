import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function GardenPipesPage() {

  const specifications = [
    { size: "1/2 Inch (12 mm)", pressure: "2.5 kg/cm²", length: "30m" },
    { size: "3/4 Inch (19 mm)", pressure: "2.5 kg/cm²", length: "30m" },
    { size: "1 Inch (25 mm)", pressure: "2.5 kg/cm²", length: "30m" },
    { size: "1-1/4 Inch (32 mm)", pressure: "2.0 kg/cm²", length: "30m" },
  ];

  const features = [
    "Made from premium virgin PVC material",
    "Lightweight & easy to handle",
    "Weatherproof & UV stabilized",
    "Flexible yet strong against kinking",
    "Non-toxic & safe for water use",
    "Bright colors for better visibility",
    "Leakproof technology for zero wastage",
    "Long service life with low maintenance",
  ];

  const applications = [
    "Home & garden watering",
    "Car washing",
    "Agricultural irrigation",
    "Filling water tanks",
    "Small-scale industrial use",
    "Construction site water supply",
    "Temporary water lines",
    "Cleaning and sanitation purposes",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Garden Pipes</h1>
          <p className="text-lg text-green-100">
            Strong, flexible & weatherproof — perfect for all your home and garden water needs.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Premium Garden Pipes</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our premium garden pipes are designed for durability, flexibility, and ease of use.  
              Made from **high-quality virgin PVC**, they are resistant to cracks, kinks, and weather damage,  
              making them ideal for both residential and light commercial use.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Available in vibrant colors and multiple sizes, these pipes are UV stabilized, non-toxic, and  
              suitable for all seasons.
            </p>
           <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Garden-Pipes-Brochure.pdf"
  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
>
  <Download className="w-5 h-5 mr-2" />
  Download Brochure
</a>

          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/garden5.png", "/garden2.png", "/garden3.png", "/garden4.png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Garden Pipe ${i + 1}`}
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
            Designed for maximum performance & durability in all conditions
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
            Available in multiple sizes for various applications
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-green-600 text-white font-semibold grid grid-cols-3 py-4 px-6">
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
            Suitable for both domestic and light commercial usage
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
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Garden Pipes for Your Project?</h2>
          <p className="text-lg mb-8">
            Get high-quality, flexible, and durable garden pipes at competitive prices
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-lg transition"
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
