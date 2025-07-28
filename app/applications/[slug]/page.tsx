// app/applications/[slug]/page.tsx

import { notFound } from "next/navigation";

const appDetails = {
  agriculture: {
    title: "Agriculture",
    content: "This is the Agriculture application page, detailing use in farms, irrigation setups, and agri-based infrastructures.",
  },
  irrigation: {
    title: "Irrigation",
    content: "Explore our irrigation solutions, including sprinklers, drip systems, and water-efficient products.",
  },
  "water-supply": {
    title: "Water Supply",
    content: "Discover our reliable piping and storage solutions for rural and urban water supply.",
  },
  "industrial-drainage": {
    title: "Industrial Drainage",
    content: "Industrial-grade drainage systems designed for durability and flow efficiency.",
  },
  construction: {
    title: "Construction",
    content: "Strong, corrosion-resistant pipes and systems ideal for construction projects.",
  },
};

export default function ApplicationDetailPage({ params }: { params: { slug: string } }) {
  const app = appDetails[params.slug as keyof typeof appDetails];

  if (!app) return notFound();

  return (
    <main className="px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold mb-4">{app.title}</h1>
      <p className="text-gray-700 text-lg">{app.content}</p>
    </main>
  );
}
