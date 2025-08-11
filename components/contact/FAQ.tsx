"use client";
import { useState } from "react";

const QA = [
  { q: "Teklif süresi ne kadar?", a: "Standart ürünlerde 24 saat içinde; projeye özel taleplerde 2-3 iş günü içinde dönüş yapıyoruz." },
  { q: "Numune talep edebilir miyim?", a: "Evet, stok durumuna göre numune desteği sağlıyoruz." },
  { q: "Minimum sipariş miktarı nedir?", a: "Ürün grubuna göre değişmekle birlikte, genellikle palet bazlıdır." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-950 dark:text-blue-50">Sık Sorulan Sorular</h2>
        <div className="mt-6 divide-y divide-blue-200/60 dark:divide-blue-900/60 rounded-2xl border border-blue-200/60 dark:border-blue-900/50 bg-white dark:bg-blue-900 overflow-hidden">
          {QA.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between text-blue-900 dark:text-blue-100"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-sm">{open === idx ? "–" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-5 pb-4 text-sm text-blue-800 dark:text-blue-200">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


