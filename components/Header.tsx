"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false)

  const productCategories = [
    { name: "HDPE Pipes", href: "/products/hdpe-pipes" },
    { name: "Garden Pipes", href: "/products/garden-pipes" },
    { name: "Sprinkler Pipes", href: "/products/sprinkler-pipes" },
    { name: "Suction Pipes", href: "/products/suction-pipes" },
    { name: "LDPE Pipes", href: "/products/ldpe-pipes" },
    { name: "PVC Pipes", href: "/products/pvc-pipes" },
    { name: "Wires & Cables", href: "/products/wires-&-cables" },
  ]

  const applications = [
    { name: "Agriculture", href: "/applications/agriculture" },
    { name: "Irrigation", href: "/applications/irrigation" },
    { name: "Infrastructure", href: "/applications/infrastructure" },
    { name: "Water Supply", href: "/applications/water-supply" },
    { name: "Industrial Drainage", href: "/applications/industrial-drainage" },
    { name: "Construction", href: "/applications/construction" },
    { name: "Horticulture", href: "/applications/horticulture" },
    { name: "Electrical", href: "/applications/electrical" },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">SN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Shree Nilkanth</h1>
                <p className="text-sm text-gray-600">Enterprises</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border">
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Applications Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsApplicationsOpen(true)}
              onMouseLeave={() => setIsApplicationsOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Applications <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isApplicationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border">
                  {applications.map((application, index) => (
                    <Link
                      key={index}
                      href={application.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {application.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">
              Blogs / Insights
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                About
              </Link>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">Products</span>
                <div className="ml-4 mt-2 space-y-1">
                  {productCategories.map((category, index) => (
                    <Link key={index} href={category.href} className="block py-1 text-gray-600 hover:text-green-600">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">Applications</span>
                <div className="ml-4 mt-2 space-y-1">
                  {applications.map((application, index) => (
                    <Link key={index} href={application.href} className="block py-1 text-gray-600 hover:text-green-600">
                      {application.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Blogs / Insights
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
