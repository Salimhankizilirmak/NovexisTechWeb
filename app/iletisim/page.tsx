import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import Offices from "@/components/contact/Offices";
import FAQ from "@/components/contact/FAQ";
import Map from "@/components/contact/Map";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: "İletişim | Hitit Yalıtım",
  description: "Bize ulaşın: adres, telefon, e-posta ve teklif formu.",
};

export default function ContactPage() {
  return (
    <main className="pt-16 bg-blue-50 dark:bg-blue-950 text-blue-950 dark:text-blue-50">
      <ContactHero />
      <ContactChannels />
      <Offices />
      <FAQ />
      <Map />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-200/60 dark:border-blue-900/50 bg-white dark:bg-blue-900 p-6">
            <h2 id="form" className="text-xl font-semibold text-blue-950 dark:text-blue-50">Teklif Formu</h2>
            <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">İhtiyacınızı kısaca paylaşın, size en uygun çözümü birlikte planlayalım.</p>
            <div className="mt-4">
              <ContactForm includeCompany includeKVKK />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
