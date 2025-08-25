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
    <footer className="bg-black text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Shree Nilkanth</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Leading manufacturer of high-quality pipes for agriculture, construction, and infrastructure projects.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61579443522554" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/shree_nilkanth_enterprises/" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/products/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5" />
                <span>+91 81099 09680</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5" />
                <span>akshaysisodiya286@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>Industrial Area, Maxi Road, Ujjain (M.P.) 456001</span>
              </li>
            </ul>
          </div>

         
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">© 2025 Shree Nilkanth Enterprises. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
