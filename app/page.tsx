import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/forms/ContactForm";
import ProductCard from "@/components/products/ProductCard";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import { PRODUCTS } from "@/data/products";
import Partners from "@/components/home/Partners";

export const metadata = {
  title: "Hitit Yalıtım | Enjeksiyon ve CNC Özel Üretim",
  description:
    "Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.",
};

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <main className="pt-16 bg-white text-gray-900 dark:bg-red-50 dark:text-red-900">
      <Hero />

      <Section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">Öne Çıkan Ürünler</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </Section>

      <WaveDivider />
      <Section gradient>
        <Features />
      </Section>
      <WaveDivider flip />

      <Partners />

      <Section id="hizli-iletisim" className="bg-red-50 dark:bg-red-100 rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">Hızlı İletişim</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-red-800">Enjeksiyon kalıp ve CNC özel kesim çözümleri için uzman ekibimiz yanınızda.</p>
          </div>
          <div>
            <a href="tel:+903642549550" className="btn btn-primary inline-flex items-center justify-center">
              📞 +90 364 254 95 50'yi Ara
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
