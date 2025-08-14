"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundSlideshow images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]} durationMs={5000} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="relative inline-block">
            <div
              className="absolute -inset-4 md:-inset-5 -z-10 rounded-2xl"
              style={{ background: "rgba(202,167,214,0.32)", boxShadow: "0 35px 90px rgba(202,167,214,0.6)", border: "1px solid rgba(202,167,214,0.55)" }}
            />
            <h1
              className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-white"
              style={{ textShadow: "0 3px 16px rgba(202,167,214,0.7)" }}
            >
              Yalıtımda Üstün Performans, Güvenilir Çözümler
            </h1>
            <p
              className="mt-4 text-base sm:text-lg text-white font-medium"
              style={{ textShadow: "0 3px 12px rgba(202,167,214,0.55)" }}
            >
              Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.
            </p>
          </div>
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


