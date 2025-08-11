import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import { PRODUCTS } from "@/data/products";
import Section from "@/components/Section";
import WaveDivider from "@/components/WaveDivider";

export const metadata = {
  title: "Hitit Yalıtım | Isı, Ses ve Yangın Yalıtım Çözümleri",
  description:
    "Modern üretim ve teknik uzmanlıkla ısı, ses ve yangın yalıtımı ürünleri. Projenize özel çözümler ve hızlı teklif.",
};

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <main className="pt-16">
      <Hero />

      <Section>
        <h2 className="text-2xl font-bold text-slate-900">Öne Çıkan Ürünler</h2>
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

      <Section>
        <Testimonials />
      </Section>

      <Section id="hizli-iletisim" className="bg-slate-50 rounded-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Hızlı İletişim</h2>
            <p className="mt-2 text-sm text-slate-600">Uzman ekibimiz sorularınızı yanıtlasın. Projenize en uygun çözümleri birlikte oluşturalım.</p>
          </div>
          <div>
            <ContactForm compact id="hizli-iletisim-form" />
          </div>
        </div>
      </Section>
    </main>
  );
}
