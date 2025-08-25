import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function SmartGardenBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">

          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Smart Garden Irrigation: The Future of Home Gardening
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
              src="/blog2.png"  
              alt="Smart Garden Irrigation System"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">

            <p>
              Home gardening is evolving with the adoption of <strong>smart irrigation systems</strong>. These systems
              optimize water usage, reduce maintenance, and ensure plants receive consistent hydration, making gardening
              easier and more sustainable for homeowners.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Benefits of Smart Irrigation Systems
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Automated watering</strong> – Eliminates the guesswork and ensures plants are watered at optimal times.</li>
              <li><strong>Water efficiency</strong> – Reduces wastage through precise delivery to plant roots.</li>
              <li><strong>Remote control</strong> – Operate your garden irrigation via smartphone apps from anywhere.</li>
              <li><strong>Improved plant health</strong> – Proper hydration leads to healthier plants and better yields in home gardens.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Sustainable & Eco-Friendly
            </h2>
            <p>
              By using smart drip or sprinkler systems, homeowners can conserve water while promoting a greener lifestyle.
              Integration with weather sensors ensures watering schedules adapt to rainfall and temperature, minimizing unnecessary
              water consumption.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Easy Setup & Maintenance
            </h2>
            <p>
              Many smart irrigation solutions are designed for easy installation in small gardens or lawns. With
              intuitive controls and automated schedules, gardeners can save time and effort while keeping their gardens thriving.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Upgrade Your Garden Irrigation Today!
            </h3>
            <p className="text-gray-700 mb-6">
              Explore our smart irrigation solutions to maintain a lush, healthy garden while conserving water efficiently.
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
