import Link from "next/link"
import { ArrowRight, Calendar, Tag } from "lucide-react"

const BlogSection = () => {
  const blogs = [
    {
      title: "Best Practices for HDPE Pipe Installation",
      preview:
        "Learn the essential techniques and tips for proper HDPE pipe installation to ensure longevity and optimal performance.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 15, 2024",
      tags: ["Pipe Tips", "Installation"],
      link: "/blog/hdpe-pipe-installation",
    },
    {
      title: "Modern Irrigation Systems for Agriculture",
      preview:
        "Discover how modern irrigation pipe systems are revolutionizing agricultural practices and improving crop yields.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2024",
      tags: ["Agriculture", "Irrigation"],
      link: "/blog/modern-irrigation-systems",
    },
    {
      title: "Choosing the Right Pipe for Your Project",
      preview:
        "A comprehensive guide to selecting the appropriate pipe type based on your specific project requirements and conditions.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 5, 2024",
      tags: ["Pipe Tips", "Guide"],
      link: "/blog/choosing-right-pipe",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Blogs & Insights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest industry trends, installation tips, and product insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.date}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{blog.preview}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={blog.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
