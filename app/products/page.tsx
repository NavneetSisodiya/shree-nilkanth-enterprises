import Link from "next/link";

const categories = [
  { name: "HDPE Pipes", slug: "hdpe-pipes", image: "/assets/products/hdpe.jpg" },
  { name: "LDPE Pipes", slug: "ldpe-pipes", image: "/assets/products/ldpe.jpg" },
  { name: "Garden Pipes", slug: "garden-pipes", image: "/assets/products/garden.jpg" },
  { name: "Suction Pipes", slug: "suction-pipes", image: "/assets/products/suction.jpg" },
  { name: "Sprinkler Pipes", slug: "sprinkler-pipes", image: "/assets/products/sprinkler.jpg" },
  { name: "PVC Pipes", slug: "pvc-pipes", image: "/assets/products/flexible.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map(({ name, slug, image }) => (
          <Link key={slug} href={`/products/${slug}`}>
            <div className="rounded-xl shadow-lg hover:scale-105 transition p-4 bg-white">
              <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-center">{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
