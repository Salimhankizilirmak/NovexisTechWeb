"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Ürünleriniz hangi standartlara uygun?",
      a: "CE",
    },
    {
      q: "Minimum sipariş miktarı var mı?",
      a: "Proje büyüklüğüne göre esnek sipariş miktarları sunuyoruz. Küçük projeler için de hizmet veriyoruz.",
    },
    {
      q: "Teslimat süreleri ne kadar?",
      a: "Stoktan 1-3 iş günü, özel üretim için 7-15 iş günü içinde teslimat yapıyoruz.",
    },
    {
      q: "Teknik destek hizmeti veriyor musunuz?",
      a: "Evet, uygulama öncesi ve sırasında ücretsiz teknik destek hizmeti sunuyoruz.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">Sık Sorulan Sorular</h2>
        <div className="mt-6 divide-y divide-red-200/60 dark:divide-red-300/60 rounded-2xl border border-red-200/60 dark:border-red-300/60 bg-white dark:bg-red-100 overflow-hidden shadow-lg">
          {faqs.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between text-gray-900 dark:text-red-900 hover:bg-red-50 dark:hover:bg-red-200/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-red-600 dark:text-red-700">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-sm text-gray-700 dark:text-red-800">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


