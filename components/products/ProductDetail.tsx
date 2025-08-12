"use client";
import Image from "next/image";
import { useState } from "react";

export type ProductDetailProps = {
  title: string;
  summary: string;
  specs: { width: string; height: string; lambda: string; usage: string };
  images: string[];
  pdfDownloadUrl?: string;
};

export default function ProductDetail({ title, summary, specs, images, pdfDownloadUrl }: ProductDetailProps) {
  const gallery = images?.length ? images : ["/images/product-generic.svg"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeImage = gallery[Math.min(activeIndex, gallery.length - 1)];

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {/* Sol: Galeri */}
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-red-200/60 dark:border-red-900/60 bg-white dark:bg-red-900/30 shadow-sm">
          <Image src={activeImage} alt={`${title} ürün görseli`} fill className="object-cover" />
        </div>
        {gallery.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {gallery.map((src, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Galeri ${idx + 1}`}
                aria-current={activeIndex === idx}
                className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 ${
                  activeIndex === idx
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-red-200/60 dark:border-red-900/60 hover:border-red-400 dark:hover:border-red-700"
                }`}
              >
                <Image src={src} alt={`${title} galeri ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sağ: Başlık, özet, teknik özellikler ve CTA */}
      <div className="lg:sticky lg:top-28 self-start">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-3 text-gray-900 font-semibold text-lg leading-relaxed">{summary}</p>

        <div className="my-6 h-px bg-red-200/70 dark:bg-red-900/50" />

        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-800 mb-3">Teknik Özellikler</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-red-200/70 dark:border-red-900/60 bg-red-50/60 dark:bg-red-900/40 p-4">
              <div className="text-sm text-gray-800 font-medium">Genişlik</div>
              <div className="mt-1 text-gray-900 font-semibold text-lg">{specs.width}</div>
            </div>
            <div className="rounded-2xl border border-red-200/70 dark:border-red-900/60 bg-red-50/60 dark:bg-red-900/40 p-4">
              <div className="text-sm text-gray-800 font-medium">Kalınlık</div>
              <div className="mt-1 text-gray-900 font-semibold text-lg">{specs.height}</div>
            </div>
            <div className="rounded-2xl border border-red-200/70 dark:border-red-900/60 bg-red-50/60 dark:bg-red-900/40 p-4">
              <div className="text-sm text-gray-800 font-medium">Isı İletkenlik (λ)</div>
              <div className="mt-1 text-gray-900 font-semibold text-lg">{specs.lambda}</div>
            </div>
            <div className="rounded-2xl border border-red-200/70 dark:border-red-900/60 bg-red-50/60 dark:bg-red-900/40 p-4 sm:col-span-2">
              <div className="text-sm text-gray-800 font-medium">Kullanım Alanları</div>
              <div className="mt-1 text-gray-900 font-semibold">{specs.usage}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={pdfDownloadUrl || "#"}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Teknik Föy (PDF)
          </a>
          <a href="/iletisim#form" className="text-sm font-semibold text-red-700 hover:text-red-800">Teklif İste →</a>
        </div>
      </div>
    </div>
  );
}


