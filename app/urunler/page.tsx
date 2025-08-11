import ProductsClient from "@/components/ProductsClient";
import { PRODUCTS, getAllCategories } from "@/data/products";

export const metadata = {
  title: "Ürünler | Hitit Yalıtım",
  description: "Isı, ses ve yangın yalıtımı için yüksek performanslı ürün yelpazemizi keşfedin.",
};

export default function ProductsPage() {
  const categories = getAllCategories();
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Ürünler</h1>
        <ProductsClient products={PRODUCTS} categories={categories} />
      </section>
    </main>
  );
}