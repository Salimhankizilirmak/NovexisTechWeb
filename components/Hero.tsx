import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.svg" alt="Hitit Yalıtım üretim hattı" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/70 via-red-700/50 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            Yalıtımda Üstün Performans, Güvenilir Çözümler
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">
            Isı, ses ve yangın yalıtımında uluslararası standartlarda üretim. Projenize özel çözümler için uzman ekibimizle yanınızdayız.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link href="#hizli-iletisim" className="rounded-full bg-white text-red-700 px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
              Teklif Al
            </Link>
                         <Link href="/urunler" className="rounded-full bg-red-600 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-red-700 transition">
              Ürünleri Keşfet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}