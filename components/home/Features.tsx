"use client";
import { motion } from "framer-motion";

export default function Features() {
  const items = [
    { title: "Düşük Isı İletkenliği", desc: "λ=0.035 W/mK değerine kadar inen ürün portföyü ile enerji verimliliği.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 8h-8l4-8zm0 20c-4.4 0-8-3.6-8-8h16c0 4.4-3.6 8-8 8z"/></svg>) },
    { title: "Akustik Konfor", desc: "Yüksek ses yutma katsayısı ile ofis ve yaşam alanlarında sessizlik.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10h4l5-5v14l-5-5H3zM16 7a5 5 0 0 1 0 10V7z"/></svg>) },
    { title: "Yangın Direnci", desc: "A1 yanmazlık sınıfı seçeneklerle güvenli yapılar.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s5 3 5 8-5 7-5 10c0-3-5-5-5-10s5-8 5-8z"/></svg>) },
  ];

  return (
    <section className="py-20 bg-green-50 dark:bg-green-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-green-950 dark:text-green-50">Neden Hitit Yalıtım?</h2>
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
        >
          {items.map((f, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-green-200/50 dark:border-green-900/50 bg-white dark:bg-green-900 p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-green-600 to-green-700 text-white">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-green-950 dark:text-green-50">{f.title}</h3>
              <p className="mt-1 text-sm text-green-800 dark:text-green-200">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


