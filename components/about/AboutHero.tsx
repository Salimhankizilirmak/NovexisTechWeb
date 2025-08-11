import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.svg" alt="Hitit Yalıtım" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/40 dark:from-red-950/95 dark:via-red-950/80 dark:to-red-950/40" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-3 py-1 text-xs font-semibold shadow">2008'den Beri</div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-red-900 dark:text-red-50 max-w-3xl">
          Yalıtımda Güvenilir Yerli Üretim, Global Standartlar
        </h1>
        <p className="mt-4 text-red-800 dark:text-red-200 max-w-2xl">
          Isı, ses ve yangın yalıtımında AR-GE odaklı yaklaşımla sürdürülebilir, yüksek performanslı çözümler üretiyoruz.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/urunler" className="btn btn-primary">Ürünleri İncele</a>
          <a href="/iletisim#form" className="btn rounded-full bg-white text-red-700 hover:bg-red-50 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800">Hızlı Teklif</a>
        </div>
      </div>
    </section>
  );
}


