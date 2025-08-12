"use client";
import Section from "@/components/ui/Section";

export default function Features() {
  const items = [
    {
      title: "Kalıp Baskı ve Üretim",
      desc: "Özel kalıp ve CNC ile her ölçü ve formda, her türlü ürünü üretiyoruz.",
      icon: "📦",
    },
    {
      title: "CNC Özel Kesim",
      desc: "Her türlü modelde, hassas toleranslarla hızlı ve tekrarlanabilir üretim.",
      icon: "♨️",
    },
    {
      title: "Proje Bazlı Üretim",
      desc: "İhtiyacınıza uygun malzeme ve formda yüksek performanslı çözümler.",
      icon: "🛡️",
    },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((f, idx) => (
          <div key={idx} className="rounded-2xl border border-red-200/60 dark:border-red-300/40 bg-white dark:bg-red-100 p-6 shadow-sm">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-red-900">{f.title}</h3>
            <p className="mt-1 text-sm text-gray-700 dark:text-red-800">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


