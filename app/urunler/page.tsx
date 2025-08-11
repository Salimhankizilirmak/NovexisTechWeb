import ProductsClient from "@/components/products/ProductsClient";
import { PRODUCTS, getAllCategories } from "@/data/products";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Ürünler | Hitit Yalıtım",
  description: "Isı, ses ve yangın yalıtımı için yüksek performanslı ürün yelpazemizi keşfedin.",
};

export default function ProductsPage() {
  const categories = getAllCategories();
  return (
    <main className="pt-16 bg-red-50 dark:bg-red-950 text-red-950 dark:text-red-50">
      <Section>
        <h1 className="text-3xl font-bold text-red-950 dark:text-red-50">Ürünler</h1>
        <ProductsClient products={PRODUCTS} categories={categories} />
      </Section>
    </main>
  );
}
