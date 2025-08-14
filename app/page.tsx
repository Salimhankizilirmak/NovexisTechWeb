import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/forms/ContactForm";
import ProductCard from "@/components/products/ProductCard";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Hitit Yalıtım | Enjeksiyon ve CNC Özel Üretim",
  description:
    "Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.",
};

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <main className="pt-16">
      <Hero />

      <Section>
        <h2 className="text-2xl font-bold text-neutral-900">Öne Çıkan Ürünler</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </Section>

      <WaveDivider />
      <section className="relative py-16">
        <div className="absolute inset-0 gradient-brand opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(0,0,0,0.05),_transparent_40%),_radial-gradient(circle_at_80%_100%,_rgba(0,0,0,0.04),_transparent_45%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Features />
        </div>
      </section>
      <WaveDivider flip />

      <Section id="hizli-iletisim" className="brand-soft-bg rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Hızlı İletişim</h2>
            <p className="mt-2 text-sm text-neutral-800">Enjeksiyon kalıp ve CNC özel kesim çözümleri için uzman ekibimiz yanınızda.</p>
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
