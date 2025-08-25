"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Tag, User, Clock } from "lucide-react"

const AnimatedBlogSection = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const blogs = [
    {
      title: "Revolutionary HDPE Pipe Technology for Modern Agriculture",
      preview:
        "Discover how advanced HDPE pipe technology is transforming agricultural irrigation systems and boosting crop yields by up to 40% while conserving water resources.",
      image: "/blog1.png",
      date: "March 15, 2024",
      author: "Dr. Rajesh Kumar",
      tags: ["Technology", "Agriculture", "Innovation"],
      readTime: "5 min read",
      link: "/blog/hdpe-pipe-technology",
      category: "Technology",
    },
    {
      title: "Smart Garden Irrigation: The Future of Home Gardening",
      preview:
        "Learn about intelligent garden irrigation systems that automatically adjust water flow based on soil moisture, weather conditions, and plant requirements.",
      image: "/blog2.png",
      date: "March 12, 2024",
      author: "Priya Sharma",
      tags: ["Garden", "Smart Tech", "Water Conservation"],
      readTime: "7 min read",
      link: "/blog/smart-garden-irrigation",
      category: "Gardening",
    },
    {
      title: "Sustainable Farming with Eco-Friendly Pipe Solutions",
      preview:
        "Explore how environmentally conscious pipe materials and installation techniques are helping farmers reduce their carbon footprint while maintaining productivity.",
      image: "/blog3.png",
      date: "March 10, 2024",
      author: "Amit Patel",
      tags: ["Sustainability", "Farming", "Environment"],
      readTime: "6 min read",
      link: "/blog/sustainable-farming-pipes",
      category: "Sustainability",
    },
    {
      title: "Installation Best Practices for Long-Lasting Pipe Systems",
      preview:
        "Master the art of proper pipe installation with our comprehensive guide covering everything from soil preparation to joint sealing techniques.",
      image: "/blog4.png",
      date: "March 8, 2024",
      author: "Technical Team",
      tags: ["Installation", "Best Practices", "Maintenance"],
      readTime: "8 min read",
      link: "/blog/installation-best-practices",
      category: "Technical",
    },
    {
      title: "Water Conservation Strategies for Commercial Agriculture",
      preview:
        "Implement proven water conservation techniques using advanced piping systems to reduce water usage by 30% while maintaining optimal crop growth.",
      image: "/blog5.png",
      date: "March 5, 2024",
      author: "Sustainability Team",
      tags: ["Water Conservation", "Commercial", "Efficiency"],
      readTime: "6 min read",
      link: "/blog/water-conservation-strategies",
      category: "Conservation",
    },
    {
      title: "Quality Control in Modern Pipe Manufacturing",
      preview:
        "Take a behind-the-scenes look at our rigorous quality control processes that ensure every pipe meets international standards and exceeds customer expectations.",
      image: "/blog6.png",
      date: "March 3, 2024",
      author: "Quality Assurance Team",
      tags: ["Quality", "Manufacturing", "Standards"],
      readTime: "5 min read",
      link: "/blog/quality-control-manufacturing",
      category: "Manufacturing",
    },
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">From the Blog</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover innovations, industry trends, and tips from the world of pipes, sustainability, and water management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Link href={blog.link}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6">
                <div className="text-xs text-gray-500 flex items-center space-x-4 mb-2">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700">
                  <Link href={blog.link}>{blog.title}</Link>
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{blog.preview}</p>
                <div className="flex flex-wrap mt-4 gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-blue-100 text-gray-800 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={blog.link}
                    className="text-sm text-gray-800 font-semibold inline-flex items-center group hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
  <Link
    href="/blog"
    className="inline-flex items-center px-8 py-4 border border-gray-300 bg-blue-100 text-gray-900 hover:bg-blue-200 rounded-xl font-medium shadow-sm transition-all duration-300"

  >
    Explore All Articles
    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
  </Link>
</div>
      </div>
    </section>
  )
}

export default AnimatedBlogSection

