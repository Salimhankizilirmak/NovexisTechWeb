"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Hitit Yalıtım'ın ürünleri projemizde mükemmel performans gösterdi. Teknik destek ekibi de çok profesyonel.",
      name: "Ahmet Yılmaz",
      company: "ABC İnşaat Ltd. Şti.",
    },
    {
      quote: "Kaliteli ürünler ve zamanında teslimat. Yalıtım konusunda güvenilir partnerimiz.",
      name: "Fatma Demir",
      company: "XYZ Proje Yönetimi",
    },
    {
      quote: "AR-GE odaklı yaklaşımları ve yenilikçi çözümleri ile sektörde fark yaratıyorlar.",
      name: "Mehmet Kaya",
      company: "DEF Mühendislik",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">Müşteri Referansları</h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-red-200/50 dark:border-red-300/50 bg-white dark:bg-red-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover"
            >
              <p className="text-gray-900 dark:text-red-900">"{t.quote}"</p>
              <div className="mt-4 text-sm font-medium text-gray-900 dark:text-red-900">{t.name}</div>
              <div className="text-xs text-gray-700 dark:text-red-800">{t.company}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


