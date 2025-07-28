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
      image: "/placeholder.svg?height=250&width=400&text=HDPE+Technology",
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
      image: "/placeholder.svg?height=250&width=400&text=Smart+Garden",
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
      image: "/placeholder.svg?height=250&width=400&text=Sustainable+Farming",
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
      image: "/placeholder.svg?height=250&width=400&text=Installation+Guide",
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
      image: "/placeholder.svg?height=250&width=400&text=Water+Conservation",
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
      image: "/placeholder.svg?height=250&width=400&text=Quality+Control",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Latest Insights & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest industry trends, expert insights, and innovative solutions in pipe technology and
            agricultural irrigation.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Newsletter</h3>
          <p className="text-green-100 mb-6">
            Get the latest insights, tips, and industry updates delivered to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {isSubscribed && (
            <p className="text-green-100 mt-4 animate-fade-in-up">
              ✓ Successfully subscribed! Check your email for confirmation.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium text-gray-700">
                  <Clock className="inline h-3 w-3 mr-1" />
                  {blog.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {blog.author}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                  <Link href={blog.link}>{blog.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{blog.preview}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full hover:bg-green-200 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={blog.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-bold group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 group shadow-lg"
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
