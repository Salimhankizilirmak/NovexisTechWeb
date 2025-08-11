import ProductsClient from "@/components/ProductsClient";
import { PRODUCTS, getAllCategories } from "@/data/products";
import Section from "@/components/Section";

export const metadata = {
  title: "Ürünler | Hitit Yalıtım",
  description: "Isı, ses ve yangın yalıtımı için yüksek performanslı ürün yelpazemizi keşfedin.",
};

export default function ProductsPage() {
  const categories = getAllCategories();
  return (
    <main className="pt-24">
      <Section>
        <h1 className="text-3xl font-bold text-slate-900">Ürünler</h1>
        <ProductsClient products={PRODUCTS} categories={categories} />
      </Section>
    </main>
  );
}