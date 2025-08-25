import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function InstallationBestPracticesBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">

          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Installation Best Practices for Long-Lasting Pipe Systems
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                August 21, 2025
              </div>
              <span>•</span>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                Editorial Team
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10">
            <Image
              src="/blog4.png"
              alt="Installation Best Practices for Pipe Systems"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Proper installation of pipe systems is critical for longevity and performance. Following
              <strong> best practices</strong> ensures minimal maintenance, prevents leaks, and maximizes efficiency.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Key Installation Guidelines
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Site Preparation</strong> – Ensure a stable and level base for laying pipes.</li>
              <li><strong>Proper Jointing</strong> – Use recommended connectors and techniques for leak-proof joints.</li>
              <li><strong>Testing</strong> – Conduct pressure and leakage tests before full-scale use.</li>
              <li><strong>Maintenance Access</strong> – Provide easy access points for inspection and repair.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Benefits of Proper Installation
            </h2>
            <p>
              Correct installation reduces downtime, prevents wastage, and ensures that the pipe system
              performs efficiently for years.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Ensure Long-Lasting Pipe Systems!
            </h3>
            <p className="text-gray-700 mb-6">
              Contact our experts to learn the best installation practices and maximize your pipe system’s lifespan.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Get Expert Guidance
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
