import Hero from "@/components/home/Hero";
import ProductCard from "@/components/products/ProductCard";
import Testimonials from "@/components/home/Testimonials";
import Features from "@/components/home/Features";
import ContactForm from "@/components/forms/ContactForm";
import { PRODUCTS } from "@/data/products";
import Section from "@/components/ui/Section";
import WaveDivider from "@/components/ui/WaveDivider";

export const metadata = {
  title: "Hitit Yalıtım | Isı, Ses ve Yangın Yalıtım Çözümleri",
  description:
    "Modern üretim ve teknik uzmanlıkla ısı, ses ve yangın yalıtımı ürünleri. Projenize özel çözümler ve hızlı teklif.",
};

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <main className="pt-16 bg-green-50 dark:bg-green-950 text-green-950 dark:text-green-50">
      <Hero />

      <Section>
        <h2 className="text-2xl font-bold text-green-950 dark:text-green-50">Öne Çıkan Ürünler</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} {...p} variant="green" />
          ))}
        </div>
      </Section>

      <WaveDivider variant="green" />
      <Section gradient variant="green">
        <Features />
      </Section>
      <WaveDivider flip variant="green" />

      <Section>
        <Testimonials />
      </Section>

      <Section id="hizli-iletisim" className="bg-green-50 dark:bg-green-950 rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-950 dark:text-green-50">Hızlı İletişim</h2>
            <p className="mt-2 text-sm text-green-800 dark:text-green-200">Uzman ekibimiz sorularınızı yanıtlasın. Projenize en uygun çözümleri birlikte oluşturalım.</p>
          </div>
          <div>
            <ContactForm compact id="hizli-iletisim-form" variant="green" />
          </div>
        </div>
      </Section>
    </main>
  );
}
