import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, CheckCircle, ArrowRight } from "lucide-react";

export default function HDPEPipesPage() {
  const specifications = [
    { size: "20mm", pressure: "PN 6", length: "50m / 100m" },
    { size: "25mm", pressure: "PN 6", length: "50m / 100m" },
    { size: "32mm", pressure: "PN 6 / PN 8", length: "50m / 100m" },
    { size: "40mm", pressure: "PN 6 / PN 8 / PN 10", length: "50m" },
    { size: "50mm", pressure: "PN 6 / PN 8 / PN 10", length: "50m" },
    { size: "63mm", pressure: "PN 6 / PN 8 / PN 10 / PN 12.5", length: "50m" },
    { size: "75mm", pressure: "PN 6 / PN 8 / PN 10 / PN 12.5", length: "50m" },
    { size: "90mm", pressure: "PN 6 / PN 8 / PN 10 / PN 12.5", length: "50m" },
    { size: "110mm", pressure: "PN 6 / PN 8 / PN 10 / PN 12.5", length: "12m" },
    { size: "160mm", pressure: "PN 6 / PN 8 / PN 10 / PN 12.5", length: "12m" },
  ];

  const features = [
    "High corrosion and chemical resistance",
    "Excellent flexibility & lightweight design",
    "Leak-proof jointing system",
    "Long service life (50+ years)",
    "UV stabilized for outdoor use",
    "Smooth inner surface for low friction losses",
    "Impact and crack resistance",
    "Recyclable and eco-friendly material",
  ];

  const applications = [
    "Water supply and distribution",
    "Agricultural irrigation",
    "Sewage and drainage systems",
    "Industrial fluid handling",
    "Gas distribution networks",
    "Mining and slurry transportation",
    "Marine and underwater pipelines",
    "Firefighting systems",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 via-sky-800 to-cyan-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">HDPE Pipes</h1>
          <p className="text-lg text-gray-200">
            Durable, flexible, and long-lasting piping solutions for water, gas, and industrial applications.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">High-Performance HDPE Pipes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Our HDPE pipes are manufactured from premium-grade polyethylene, ensuring superior strength, flexibility, 
              and resistance to environmental stress. 
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Ideal for long-term use in both underground and above-ground applications, they offer unmatched performance 
              in water supply, gas distribution, and industrial projects.
            </p>
             <a 
  href="/Brochure/Shree_Nilkanth_Enterprises_Brochure.pdf" 
   download="Shree_Nilkanth_Enterprises_Brochure.pdf"
            className="inline-flex items-center bg-gradient-to-r from-blue-700 to-cyan-800 hover:from-blue-800 hover:to-cyan-900 text-white px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            
           </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/HDPE(1).png", "/HDP.png", "/HDPE-Pipe.png", "/HDPE(2).png"].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`HDPE Pipe ${i + 1}`}
                className="rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Key Features & Benefits</h2>
          <p className="text-gray-600 mb-10">
            Designed for maximum efficiency, safety, and longevity in diverse applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Technical Specifications</h2>
          <p className="text-gray-600 mb-10">
            Available in various pressure ratings and lengths for customized solutions.
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-blue-700 text-white font-semibold grid grid-cols-3 py-4 px-6">
              <div>Size (OD)</div>
              <div>Pressure Rating</div>
              <div>Standard Length</div>
            </div>
            {specifications.map((spec, i) => (
              <div key={i} className="grid grid-cols-3 py-4 px-6 border-t text-gray-700 hover:bg-blue-50 transition">
                <div>{spec.size}</div>
                <div>{spec.pressure}</div>
                <div>{spec.length}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Applications</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Trusted choice for infrastructure, industrial, and agricultural projects worldwide.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition">
                <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-800 font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-cyan-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need HDPE Pipes for Your Project?</h2>
          <p className="text-lg mb-8">
            Contact us today for technical assistance and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:+918109909680"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition"
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
