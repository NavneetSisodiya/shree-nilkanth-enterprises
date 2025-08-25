"use client";
import React from "react";


const products = [
  {
    title: "HDPE Pipes",
    description: "Durable and flexible pipes for all agricultural and industrial needs.",
    image: "/images/products/hdpe.jpg",
  },
  {
    title: "Garden Pipes",
    description: "Lightweight pipes perfect for gardening and residential applications.",
    image: "/images/products/garden.jpg",
  },
  {
    title: "Sprinkler Pipes",
    description: "Efficient water distribution system for farming and lawns.",
    image: "/images/products/sprinkler.jpg",
  },
  {
    title: "Suction Pipes",
    description: "Strong suction pipes suitable for dewatering and irrigation systems.",
    image: "/images/products/suction.jpg",
  },
  {
    title: "LDPE Pipes",
    description: "Flexible, lightweight solution for drip irrigation and micro-irrigation.",
    image: "/images/products/ldpe.jpg",
  },
  {
    title: "PVC Pipes",
    description: "High-strength pipes used for drainage and construction applications.",
    image: "/images/products/pvc.jpg",
  },
  {
    title: "Wires & Cables",
    description: "Reliable electrical wires and cables for residential and industrial use.",
    image: "/images/products/wires.jpg",
  },
];

const ProductsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm transition transform hover:scale-105 bg-gray-50"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
