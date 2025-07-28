import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Calendar, Tag, ArrowRight, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Best Practices for HDPE Pipe Installation",
      excerpt:
        "Learn the essential techniques and tips for proper HDPE pipe installation to ensure longevity and optimal performance in your projects.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 15, 2024",
      author: "Technical Team",
      tags: ["Pipe Tips", "Installation", "HDPE"],
      readTime: "5 min read",
      slug: "hdpe-pipe-installation",
    },
    {
      title: "Modern Irrigation Systems for Agriculture",
      excerpt:
        "Discover how modern irrigation pipe systems are revolutionizing agricultural practices and improving crop yields across different farming methods.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 10, 2024",
      author: "Agriculture Expert",
      tags: ["Agriculture", "Irrigation", "Farming"],
      readTime: "7 min read",
      slug: "modern-irrigation-systems",
    },
    {
      title: "Choosing the Right Pipe for Your Project",
      excerpt:
        "A comprehensive guide to selecting the appropriate pipe type based on your specific project requirements, conditions, and budget considerations.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 5, 2024",
      author: "Engineering Team",
      tags: ["Pipe Tips", "Guide", "Selection"],
      readTime: "6 min read",
      slug: "choosing-right-pipe",
    },
    {
      title: "Water Conservation with Efficient Piping",
      excerpt:
        "Explore how efficient piping systems contribute to water conservation efforts and sustainable infrastructure development.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 28, 2024",
      author: "Sustainability Team",
      tags: ["Water Conservation", "Sustainability", "Efficiency"],
      readTime: "4 min read",
      slug: "water-conservation-piping",
    },
    {
      title: "Quality Control in Pipe Manufacturing",
      excerpt:
        "Understanding the rigorous quality control processes that ensure every pipe meets international standards and customer expectations.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 20, 2024",
      author: "Quality Team",
      tags: ["Quality Control", "Manufacturing", "Standards"],
      readTime: "8 min read",
      slug: "quality-control-manufacturing",
    },
    {
      title: "Future of Pipe Technology",
      excerpt:
        "Exploring emerging technologies and innovations in pipe manufacturing that will shape the future of infrastructure development.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 15, 2024",
      author: "R&D Team",
      tags: ["Innovation", "Technology", "Future"],
      readTime: "6 min read",
      slug: "future-pipe-technology",
    },
  ]

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Pipe Tips", count: 3 },
    { name: "Agriculture", count: 2 },
    { name: "Installation", count: 2 },
    { name: "Technology", count: 1 },
    { name: "Quality Control", count: 1 },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs & Insights</h1>
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
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h4>
                  <p className="text-gray-600 text-sm mb-4">Subscribe to get the latest updates and insights.</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
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

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
