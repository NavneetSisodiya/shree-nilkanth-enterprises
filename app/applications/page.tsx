// app/applications/page.tsx

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const applicationData = [
  {
    title: "Agriculture",
    description:
      "Efficient solutions for modern agricultural needs including irrigation and water distribution.",
    link: "/applications/agriculture",
  },
  {
    title: "Irrigation",
    description:
      "Advanced piping systems supporting drip and sprinkler irrigation methods.",
    link: "/applications/irrigation",
  },
  {
    title: "Water Supply",
    description:
      "Durable and leak-proof pipes for domestic and commercial water supply networks.",
    link: "/applications/water-supply",
  },
  {
    title: "Infrastructure",
    description:
      "Piping and drainage solutions essential for roadways, bridges, and civil infrastructure.",
    link: "/applications/infrastructure",
  },
  {
    title: "Industrial Drainage",
    description:
      "Robust systems for industrial wastewater and drainage management.",
    link: "/applications/industrial-drainage",
  },
  {
    title: "Construction",
    description:
      "Used in plumbing, cable protection, and foundational water control systems.",
    link: "/applications/construction",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <Header />

      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Applications We Serve
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Our products are trusted across multiple sectors for quality,
            durability, and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationData.map((app, idx) => (
              <Link href={app.link} key={idx}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">{app.description}</p>
                  <p className="mt-4 text-blue-600 font-semibold">
                    Learn More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
