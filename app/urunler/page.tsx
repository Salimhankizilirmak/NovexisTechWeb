import { PRODUCTS, getAllCategories } from "@/data/products";
import ProductsClient from "@/components/products/ProductsClient";

export const metadata = {
  title: "Ürünler - Hitit Yalıtım",
  description: "Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.",
};

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <main className="pt-16 bg-white text-gray-900 dark:bg-red-50 dark:text-red-900">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-800 dark:text-red-900 mb-4">
              Ürün Portföyümüz
            </h1>
            <p className="text-lg text-red-900 dark:text-red-800 max-w-2xl mx-auto font-medium">
              Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, strafor koruyuculardan ısıtma panellerine kadar her türlü modelde üretim yapıyoruz.
            </p>
          </div>
          <ProductsClient products={PRODUCTS} categories={categories} />
        </div>
      </section>
    </main>
  );
}
