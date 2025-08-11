"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const items = [
    { name: "Ayşe K.", company: "Mühendislik Ofisi", quote: "Tedarik süreleri çok hızlı, ürün performansı projelerimizde hedeflediğimiz enerji verimliliğini sağladı." },
    { name: "Emre T.", company: "Yapı Taahhüt", quote: "Yangın dayanımı ve akustik performans değerleri şantiyede testlerimizi geçti. Teknik ekip oldukça destekçi." },
    { name: "Selin D.", company: "Endüstriyel Tesis", quote: "Fabrikamızın proses hatlarında ısı kayıplarını ciddi oranda azalttık. Montaj kolaydı." },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-green-950 dark:text-green-50">Müşteri Referansları</h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
        >
          {items.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-green-200/50 dark:border-green-900/50 bg-green-50 dark:bg-green-900 p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5"
            >
              <p className="text-green-900 dark:text-green-100">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-green-950 dark:text-green-50">{t.name}</div>
              <div className="text-xs text-green-800 dark:text-green-200">{t.company}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


