"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Package, Wrench, Droplet, ShieldCheck, Bolt, Leaf, Building2, ChevronDown, Menu, X } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const productCategories = [
    "HDPE Pipes",
    "Garden Pipes",
    "Sprinkler Pipes",
    "Suction Pipes",
    "LDPE Pipes",
    "PVC Pipes",
    "Wires & Cables",
  ].map((name) => ({
    name,
    href: `/products/${name.toLowerCase().replace(/ & | /g, "-")}`,
  }));

  const applications = [
    "Agriculture",
    "Irrigation",
    "Infrastructure",
    "Water Supply",
    "Industrial Drainage",
    "Construction",
    "Horticulture",
    "Electrical",
  ].map((name) => ({
    name,
    href: `/applications/${name.toLowerCase().replace(/ /g, "-")}`,
  }));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx(
      "sticky top-0 z-50 bg-black/10 backdrop-blur-md h-20 flex items-center",
      isScrolled ? "py-2 shadow-sm" : "py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <div className="w-30 h-20 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300">
    <img
      src="/logo41.png"  
      alt="Shree Nilkanth Logo"
      className="w-full h-full object-cover"
    />
  </div>
  <span className="text-gray-800 font-semibold text-lg hidden sm:inline"></span>
</Link>


       <nav className="hidden md:flex space-x-10 items-center">
  <Link href="/" className="text-black hover:bg-appleblue/10 hover:text-appleblue
 transition">Home</Link>
  <Link href="/about" className="text-black hover:bg-appleblue/10 hover:text-appleblue
 transition">About</Link>


  <div
    className="relative group"
    onMouseEnter={() => setIsProductsOpen(true)}
    onMouseLeave={() => setIsProductsOpen(false)}
  >
    <button className="text-white hover:bg-appleblue/10 hover:text-appleblue flex items-center transition font-medium">
      Products <ChevronDown className="ml-1 h-4 w-4" />
    </button>
    {isProductsOpen && (
      <div className="absolute top-full left-0 mt-3 bg-white text-gray-800 shadow-xl rounded-lg p-6 w-[500px] grid grid-cols-2 gap-4 z-50 animate-fade-in-down">
        {productCategories.map((cat, i) => (
          <Link
            key={i}
            href={cat.href}
            className="flex items-center space-x-2 text-gray-700 hover:bg-appleblue/10 hover:text-appleblue
 font-medium transition"
          >
            <Package className="h-4 w-4 text-green-500" />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    )}
  </div>


  <div
    className="relative group"
    onMouseEnter={() => setIsAppsOpen(true)}
    onMouseLeave={() => setIsAppsOpen(false)}
  >
    <button className="text-white hover:bg-appleblue/10 hover:text-appleblue flex items-center transition font-medium">
      Applications <ChevronDown className="ml-1 h-4 w-4" />
    </button>
    {isAppsOpen && (
      <div className="absolute top-full left-0 mt-3 bg-white text-gray-800 shadow-xl rounded-lg p-6 w-[500px] grid grid-cols-2 gap-4 z-50 animate-fade-in-down">
        {applications.map((app, i) => (
          <Link
            key={i}
            href={app.href}
            className="flex items-center space-x-2 text-gray-700 hover:bg-appleblue/10 hover:text-appleblue
 font-medium transition"
          >
           
            <Droplet className="h-4 w-4 text-blue-500" />
            <span>{app.name}</span>
          </Link>
        ))}
      </div>
    )}
  </div>

  <Link href="/blog" className="text-black hover:bg-appleblue/10 hover:text-appleblue
 transition">Blogs / Insights</Link>
  <Link href="/contact" className="text-black hover:bg-appleblue/10 hover:text-appleblue
 transition">Contact</Link>
</nav>
        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918109909680"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white bg-black px-4 py-2 rounded hover:opacity-90 transition"
          >
            WhatsApp
          </a>
        </div>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t px-4 py-6 space-y-3 text-sm shadow-lg z-50">
    <Link href="/" className="block text-gray-700 hover:text-black">Home</Link>
    <Link href="/about" className="block text-gray-700 hover:text-black">About</Link>

    <details>
      <summary className="cursor-pointer text-gray-700 font-medium">Products</summary>
      <div className="ml-4 mt-2 space-y-1">
        {productCategories.map((cat, i) => (
          <Link key={i} href={cat.href} className="block text-gray-600 hover:text-black">{cat.name}</Link>
        ))}
      </div>
    </details>

    <details>
      <summary className="cursor-pointer text-gray-700 font-medium">Applications</summary>
      <div className="ml-4 mt-2 space-y-1">
        {applications.map((app, i) => (
          <Link key={i} href={app.href} className="block text-gray-600 hover:text-black">{app.name}</Link>
        ))}
      </div>
    </details>

    <Link href="/blog" className="block text-gray-700 hover:text-black">Blog</Link>
    <Link href="/contact" className="block text-gray-700 hover:text-black">Contact</Link>

    <a
      href="https://wa.me/918109909680"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-4 text-center bg-black text-white py-2 rounded hover:opacity-90"
    >
      Chat on WhatsApp
    </a>
  </div>
)}

    </header>
  );
};

export default Header;
