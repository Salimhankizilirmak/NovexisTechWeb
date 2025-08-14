import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import Offices from "@/components/contact/Offices";
import Map from "@/components/contact/Map";
import FAQ from "@/components/contact/FAQ";

export const metadata = {
  title: "İletişim - Hitit Yalıtım",
  description: "Hitit Yalıtım ile iletişime geçin. Teknik destek, teklif ve satış için uzman ekibimiz hizmetinizde.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactHero />
      <ContactChannels />
      <Offices />
      <Map />
      <FAQ />

      <section id="teklif-ara" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Hızlı Teklif İçin Hemen Arayın</h2>
            <p className="mt-2 text-neutral-800">Mesaj yerine telefonla anında teklif alın.</p>
          </div>
          <div className="h-px" style={{ backgroundColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)" }} />
          <div className="flex justify-center mt-8">
            <a
              href="tel:+903642549550"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-white font-semibold shadow"
              style={{ backgroundColor: "var(--btn-red)" }}
            >
              📞 +90 364 254 95 50'yi Ara
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
