import Counter from "@/components/Counter";
import Image from "next/image";

export const metadata = {
  title: "Hakkımızda | Yalıtım Fabrikası",
  description:
    "Yalıtım Fabrikası: Isı, ses ve yangın yalıtımında yerli üretim, modern tesisler ve yüksek kalite standartları.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Fabrika Hikayemiz</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          2008 yılında temellerini attığımız Yalıtım Fabrikası, modern üretim teknolojileri ve
          AR-GE odaklı yaklaşımıyla ısı, ses ve yangın yalıtımı alanlarında katma değerli ürünler
          geliştirir. Üretim hatlarımızda sürdürülebilirlik ilkelerini benimser, uluslararası
          standartlara uygun, sahada performansı kanıtlanmış çözümler sunarız.
        </p>
      </section>

      <section className="mt-16 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Misyonumuz</h2>
            <p className="mt-3 text-slate-700">
              Enerji verimliliğini artıran, güvenli ve konforlu yaşam alanları sağlayan yenilikçi
              yalıtım ürünleri geliştirmek ve erişilebilir kılmak.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Vizyonumuz</h2>
            <p className="mt-3 text-slate-700">
              Sektörde sürdürülebilir üretim ve teknik mükemmeliyet ile anılan, global ölçekte
              tercih edilen bir marka olmak.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Kalite Belgeleri</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/5 bg-white">
              <Image src="/images/certificate.svg" alt={`Kalite belgesi ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="rounded-xl border border-black/5 p-6 bg-slate-50">
            <div className="text-2xl font-bold text-sky-700"><Counter to={15000} suffix="m²/ay" /></div>
            <div className="mt-2 text-sm text-slate-600">Üretim Kapasitesi</div>
          </div>
          <div className="rounded-xl border border-black/5 p-6 bg-slate-50">
            <div className="text-2xl font-bold text-sky-700"><Counter to={250} suffix="+" /></div>
            <div className="mt-2 text-sm text-slate-600">Aktif Müşteri</div>
          </div>
          <div className="rounded-xl border border-black/5 p-6 bg-slate-50">
            <div className="text-2xl font-bold text-sky-700"><Counter to={45} suffix=" Ülke" /></div>
            <div className="mt-2 text-sm text-slate-600">İhracat Ağı</div>
          </div>
          <div className="rounded-xl border border-black/5 p-6 bg-slate-50">
            <div className="text-2xl font-bold text-sky-700"><Counter to={120} suffix=" Kişi" /></div>
            <div className="mt-2 text-sm text-slate-600">Uzman Ekip</div>
          </div>
        </div>
      </section>
    </main>
  );
}