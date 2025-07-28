import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const productCategories = [
    "HDPE Pipes",
    "Garden Pipes",
    "Sprinkler Pipes",
    "Suction Pipes",
    "LDPE Pipes",
    "PVC Pipes",
    "Wires & Cables",
  ]

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Applications", href: "/applications" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">SN</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shree Nilkanth</h3>
                <p className="text-gray-400">Enterprises</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer of high-quality pipes for agriculture, construction, and infrastructure projects.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>

            <div className="mb-6">
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-600"
                />
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 81099 09680</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                <span>akshaysisodiya286@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <span>Industrial Area, Maxi Road, Ujjain (M.P.) 456001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Shree Nilkanth Enterprises. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
