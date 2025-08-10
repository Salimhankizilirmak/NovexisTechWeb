"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  images: string[];
  category?: string;
};

export default function ProductsClient({
  products,
  categories,
}: {
  products: Array<Product>;
  categories: string[];
}) {
  const [active, setActive] = useState<string>(categories[0]);

  const filtered = useMemo(() => {
    if (active === "Tümü") return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  return (
    <div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              active === c ? "bg-sky-600 text-white border-sky-600" : "bg-white text-slate-700 border-black/10 hover:bg-slate-50"
            }`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}