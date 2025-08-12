"use client";
import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

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
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
              active === c 
                ? "bg-red-600 text-white border-red-600 shadow-lg" 
                : "bg-white dark:bg-red-100 text-red-800 dark:text-red-800 border-red-200/50 dark:border-red-300/50 hover:bg-red-50 dark:hover:bg-red-200/50 hover:border-red-300 dark:hover:border-red-400 font-medium"
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


