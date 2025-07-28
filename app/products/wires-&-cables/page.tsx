import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Download, CheckCircle, ArrowRight } from "lucide-react"

export default function HDPEPipesPage() {
  const specifications = [
    { size: "20mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "25mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "32mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "40mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "50mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "63mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "75mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "90mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "110mm", pressure: "6 kg/cm²", length: "6m" },
    { size: "160mm", pressure: "6 kg/cm²", length: "6m" },
  ]

  const features = [
    "Corrosion resistant",
    "Lightweight and flexible",
    "Long service life (50+ years)",
    "Chemical resistance",
    "UV stabilized",
    "Easy installation",
    "Cost-effective",
    "Recyclable material",
  ]

  const applications = [
    "Water supply systems",
    "Sewage and drainage",
    "Industrial piping",
    "Agricultural irrigation",
    "Gas distribution",
    "Mining applications",
    "Marine applications",
    "Chemical processing",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HDPE Pipes</h1>
            <p className="text-xl text-gray-200">
              High-Density Polyethylene pipes for superior performance in water supply and drainage systems.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Premium HDPE Pipes</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our HDPE pipes are manufactured using high-grade polyethylene material, ensuring exceptional durability
                and performance. These pipes are ideal for water supply, drainage, and industrial applications where
                reliability is paramount.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With superior chemical resistance, flexibility, and a service life of over 50 years, our HDPE pipes
                offer the perfect solution for modern infrastructure needs.
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="/placeholder.svg?height=250&width=300" alt="HDPE Pipes" className="rounded-lg shadow-lg" />
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="HDPE Installation"
                className="rounded-lg shadow-lg"
              />
              <img src="/placeholder.svg?height=250&width=300" alt="HDPE Fittings" className="rounded-lg shadow-lg" />
              <img src="/placeholder.svg?height=250&width=300" alt="Quality Testing" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features & Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our HDPE pipes offer numerous advantages that make them the preferred choice for various applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Available in various sizes to meet your specific project requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <div className="grid grid-cols-3 gap-4 font-semibold">
                  <div>Size (OD)</div>
                  <div>Pressure Rating</div>
                  <div>Standard Length</div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {specifications.map((spec, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-gray-800">{spec.size}</div>
                      <div className="text-gray-600">{spec.pressure}</div>
                      <div className="text-gray-600">{spec.length}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our HDPE pipes are suitable for a wide range of applications across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-800 font-medium">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need HDPE Pipes for Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a customized quote and expert consultation on your piping requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Quote
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
