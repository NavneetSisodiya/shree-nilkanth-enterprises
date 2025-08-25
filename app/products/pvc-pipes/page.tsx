import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function PVCPipesPage() {
 
  const specifications = [
    { size: "20 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "25 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "32 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "40 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "50 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "63 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "75 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "90 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
    { size: "110 mm", pressure: "4 – 6 kg/cm²", length: "3m / 6m" },
  ];

  const features = [
    "Corrosion & rust resistance",
    "Lightweight yet strong",
    "Smooth inner surface for better flow",
    "Leak-proof joints",
    "Long service life",
    "Non-toxic & safe for drinking water",
    "Easy installation & low maintenance",
    "Cost-effective & recyclable",
  ];

  const applications = [
    "Water supply systems",
    "Agricultural irrigation",
    "Industrial fluid transportation",
    "Drainage & sewage systems",
    "Construction plumbing",
    "Chemical processing",
    "Rainwater harvesting",
    "Cable ducting",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">PVC Pipes</h1>
          <p className="text-lg text-blue-100">
            Strong, lightweight, and durable pipes for water supply, plumbing, and industrial applications.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">High-Quality PVC Pipes</h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Our PVC pipes are manufactured from premium-grade polyvinyl chloride,  
              making them ideal for both residential and industrial applications.  
              They are designed for excellent performance in water supply, irrigation, and plumbing systems.
            </p>
            <p className="mb-6 text-gray-600 leading-relaxed">
              With excellent chemical resistance, UV stabilization, and a smooth bore for enhanced flow,  
              our PVC pipes deliver reliable and long-lasting service.
            </p>
            <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Garden-Pipes-Brochure.pdf"
             className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/PVCPipe(1).png", "/Pvcpipe(2).png", "/pvc.png", "/home.jpg"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`PVC Pipe ${i + 1}`}
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
            Durable, easy-to-install, and perfect for multiple applications
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
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
            Available in multiple sizes for diverse plumbing and industrial needs
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-blue-700 text-white font-semibold grid grid-cols-3 py-4 px-6">
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
            Reliable performance for domestic, agricultural, and industrial uses
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need PVC Pipes for Your Project?</h2>
          <p className="text-lg mb-8">
            Get high-strength, durable PVC pipes for all your water supply and industrial needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold rounded-lg transition"
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
