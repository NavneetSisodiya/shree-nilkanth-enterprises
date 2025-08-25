import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function QualityControlBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">

          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Quality Control in Modern Pipe Manufacturing
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
              src="/blog6.png" 
              alt="Quality Control in Pipe Manufacturing"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Maintaining high-quality standards in pipe manufacturing is essential to ensure durability, reliability,
              and customer satisfaction. Modern quality control practices help manufacturers detect defects early and 
              enhance overall performance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Modern Quality Control Techniques
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Material Testing:</strong> Ensures all raw materials meet required standards.</li>
              <li><strong>Dimensional Accuracy:</strong> Pipes are manufactured with precise measurements.</li>
              <li><strong>Leak & Pressure Testing:</strong> Confirms pipe reliability under operational conditions.</li>
              <li><strong>Continuous Monitoring:</strong> Automated systems track quality in real-time.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Benefits of Strong Quality Control
            </h2>
            <p>
              Strong quality control reduces failures, increases product longevity, and boosts customer trust in the brand.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Ensure Top-Quality Pipes for Your Projects!
            </h3>
            <p className="text-gray-700 mb-6">
              Get in touch to learn how our quality-controlled pipe solutions can meet your industrial needs.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Contact Our Experts
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
