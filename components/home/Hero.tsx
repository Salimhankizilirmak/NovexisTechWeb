"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.svg" alt="Hitit Yalıtım üretim hattı" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-red-900/80 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-red-800">
            Yalıtımda Üstün Performans, Güvenilir Çözümler
          </h1>
          <p className="mt-4 text-base sm:text-lg text-red-900 font-medium">
            Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link
              href="#hizli-iletisim"
              className="btn btn-primary"
            >
              Teklif Al
            </Link>
            <Link
              href="/urunler"
              className="btn btn-secondary"
            >
              Ürünleri Keşfet
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


