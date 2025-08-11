"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";

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
              active === c ? "bg-red-600 text-white border-red-600" : "bg-red-50 dark:bg-red-900 text-red-900 dark:text-red-100 border-red-200/50 dark:border-red-900/50 hover:bg-red-100 dark:hover:bg-red-800"
            }`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}


