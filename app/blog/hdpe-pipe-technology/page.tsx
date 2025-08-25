import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User } from "lucide-react";
import Image from "next/image";

export default function HDPEPipeBlog() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <article className="prose lg:prose-lg max-w-none">
          
          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Revolutionary HDPE Pipe Technology for Modern Agriculture
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                March 14, 2024
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
              src="/blog1.png"
              alt="HDPE Pipes in Agriculture"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>

          {/* Blog Content */}
          <section className="space-y-8 text-gray-700 text-lg leading-relaxed">
            
            <p>
              The agricultural sector is undergoing a transformation, and at the heart of it is{" "}
              <strong>HDPE (High-Density Polyethylene) pipe technology</strong>. With its unmatched durability, flexibility, and resistance to environmental stress, HDPE piping is becoming the preferred choice for modern irrigation systems.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Why HDPE Pipes Are Game-Changers in Agriculture
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Long-lasting durability</strong> – Resistant to corrosion, chemicals, and extreme weather.</li>
              <li><strong>Leak-proof design</strong> – Reduces water wastage and boosts efficiency.</li>
              <li><strong>Flexibility</strong> – Easily adaptable to different terrains and layouts.</li>
              <li><strong>Low maintenance</strong> – Fewer repairs mean reduced operational costs for farmers.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Water Efficiency & Sustainability
            </h2>
            <p>
              As water scarcity becomes a pressing concern globally, HDPE pipes play a vital role in
              promoting sustainable farming. Their compatibility with{" "}
              <strong>drip irrigation</strong> and <strong>sprinkler systems</strong> ensures optimal water delivery directly to plant roots, reducing evaporation and waste.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900">
              Real-World Benefits for Farmers
            </h2>
            <p>
              Studies show that farms switching to HDPE irrigation systems can increase yields by{" "}
              <strong>up to 40%</strong> while cutting water usage by nearly <strong>30%</strong>. These savings not only help the environment but also improve farmers' profitability.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 bg-green-100 p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Ready to Upgrade Your Irrigation System?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us today to learn more about our HDPE piping solutions for agriculture and start
              saving water while boosting crop yields.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Get a Free Consultation
            </a>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}