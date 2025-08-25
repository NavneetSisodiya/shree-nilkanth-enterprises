import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function SustainableFarmingBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">

          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Sustainable Farming with Eco-Friendly Pipe Solutions
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
              src="/blog3.png"
              alt="Sustainable Farming with Eco-Friendly Pipes"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>
              Sustainable farming is becoming increasingly important as the world focuses on eco-friendly practices.
              Using <strong>HDPE and eco-friendly pipe solutions</strong> ensures efficient water delivery, reduces
              waste, and supports environmentally responsible agriculture.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Benefits of Eco-Friendly Pipes
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Durability & Longevity</strong> – Resistant to chemicals and weather conditions.</li>
              <li><strong>Eco-friendly Materials</strong> – Made from recyclable and non-toxic materials.</li>
              <li><strong>Water Efficiency</strong> – Perfectly compatible with drip and sprinkler systems.</li>
              <li><strong>Cost-Effective</strong> – Lower maintenance and replacement costs over time.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Real-World Impact
            </h2>
            <p>
              Farms that adopt eco-friendly piping systems notice better water management, improved crop yields,
              and a smaller environmental footprint.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Start Your Sustainable Farming Journey!
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us to explore our eco-friendly pipe solutions and enhance your farm’s sustainability.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Learn More
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
