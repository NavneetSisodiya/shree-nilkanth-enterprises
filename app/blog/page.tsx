"use client"
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Tag, ArrowRight, User } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Revolutionary HDPE Pipe Technology for Modern Agriculture",
      excerpt:
        "Discover how advanced HDPE pipe technology is transforming agricultural irrigation systems and boosting crop yields by up to 40% while conserving water resources.",
      image: "/blog1.png",
      date: "March 15, 2024",
      author: "Dr. Rajesh Kumar",
      tags: ["Technology", "Agriculture", "Innovation"],
      readTime: "5 min read",
      slug: "hdpe-pipe-technology",
      category: "Technology",
    },
    {
      title: "Smart Garden Irrigation: The Future of Home Gardening",
      excerpt:
        "Learn about intelligent garden irrigation systems that automatically adjust water flow based on soil moisture, weather conditions, and plant requirements.",
      image: "/blog2.png",
      date: "March 12, 2024",
      author: "Priya Sharma",
      tags: ["Garden", "Smart Tech", "Water Conservation"],
      readTime: "7 min read",
      slug: "smart-garden-irrigation",
      category: "Gardening",
    },
    {
      title: "Sustainable Farming with Eco-Friendly Pipe Solutions",
      excerpt:
        "Explore how environmentally conscious pipe materials and installation techniques are helping farmers reduce their carbon footprint while maintaining productivity.",
      image: "/blog3.png",
      date: "March 10, 2024",
      author: "Amit Patel",
      tags: ["Sustainability", "Farming", "Environment"],
      readTime: "6 min read",
      slug: "sustainable-farming-pipes",
      category: "Sustainability",
    },
    {
      title: "Installation Best Practices for Long-Lasting Pipe Systems",
      excerpt:
        "Master the art of proper pipe installation with our comprehensive guide covering everything from soil preparation to joint sealing techniques.",
      image: "/blog4.png",
      date: "March 8, 2024",
      author: "Technical Team",
      tags: ["Installation", "Best Practices", "Maintenance"],
      readTime: "8 min read",
      slug: "installation-best-practices",
      category: "Installation",
    },
    {
      title: "Water Conservation Strategies for Commercial Agriculture",
      excerpt:
        "Implement proven water conservation techniques using advanced piping systems to reduce water usage by 30% while maintaining optimal crop growth.",
      image: "/blog5.png",
      date: "March 5, 2024",
      author: "Sustainability Team",
      tags: ["Water Conservation", "Commercial", "Efficiency"],
      readTime: "6 min read",
      slug: "water-conservation-strategies",
      category: "Water Conservation",
    },
    {
      title: "Quality Control in Modern Pipe Manufacturing",
      excerpt:
        "Take a behind-the-scenes look at our rigorous quality control processes that ensure every pipe meets international standards and exceeds customer expectations.",
      image: "/blog6.png",
      date: "March 3, 2024",
      author: "Quality Assurance Team",
      tags: ["Quality", "Manufacturing", "Standards"],
      readTime: "5 min read",
      slug: "quality-control-manufacturing",
      category: "Quality Control",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Gardening",
    "Sustainability",
    "Installation",
    "Water Conservation",
    "Quality Control",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">Blogs & Insights</h1>
            <p className="text-xl text-gray-200">
              Stay updated with the latest industry trends, installation tips, and product insights from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.tags[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date}
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                        <span className="mx-2">•</span>
                        {post.readTime}
                      </div>

                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(1).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
