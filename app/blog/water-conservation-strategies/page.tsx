import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function WaterConservationBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">

          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Water Conservation Strategies for Commercial Agriculture
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
              src="/blog5.png" 
              alt="Water Conservation in Agriculture"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Water conservation is essential for commercial agriculture. Implementing effective strategies not only 
              conserves water but also reduces operational costs and increases crop productivity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Key Water-Saving Strategies
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Drip Irrigation:</strong> Direct water to plant roots to minimize evaporation.</li>
              <li><strong>Sprinkler Systems:</strong> Efficiently water large areas with controlled application.</li>
              <li><strong>Rainwater Harvesting:</strong> Collect and use natural rainfall for irrigation.</li>
              <li><strong>Soil Moisture Monitoring:</strong> Prevent overwatering and optimize schedules.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Benefits for Farmers
            </h2>
            <p>
              Effective water management ensures sustainable agriculture, increases yield, and promotes environmental 
              responsibility.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Optimize Your Farm’s Water Usage!
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us to learn about our advanced irrigation solutions and water-saving strategies.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Get Expert Advice
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
