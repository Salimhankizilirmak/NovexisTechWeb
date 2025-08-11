import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

export const metadata = {
  title: "İletişim | Hitit Yalıtım",
  description: "Bize ulaşın: adres, telefon, e-posta ve teklif formu.",
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Section>
        <h1 className="text-3xl font-bold text-slate-900">İletişim</h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="space-y-2 text-slate-700 text-sm">
              <div><span className="font-medium">Adres:</span> İOSB Atatürk O.S.B., 34490 Başakşehir / İstanbul</div>
              <div><span className="font-medium">Telefon:</span> <a href="tel:+902122223344" className="text-red-700">+90 212 222 33 44</a></div>
              <div><span className="font-medium">E-posta:</span> <a href="mailto:info@hitityalitim.com" className="text-red-700">info@hitityalitim.com</a></div>
            </div>
            <div className="mt-6 aspect-[16/9] w-full rounded-2xl overflow-hidden border border-black/5">
              <iframe
                title="Harita"
                src="https://maps.google.com/maps?q=İstanbul&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <h2 id="form" className="text-xl font-semibold text-slate-900">Teklif Formu</h2>
            <p className="mt-2 text-sm text-slate-600">İhtiyacınızı kısaca paylaşın, size en uygun çözümü birlikte planlayalım.</p>
            <div className="mt-4">
              <ContactForm includeCompany includeKVKK />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}