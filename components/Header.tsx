"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5 dark:border-white/10">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="Hitit Yalıtım Logo" width={36} height={36} />
              <span className="font-semibold text-base sm:text-lg text-red-700 dark:text-red-300">Hitit Yalıtım</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 hover:text-red-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/iletisim#form"
                className="inline-flex items-center justify-center rounded-full bg-red-600 text-white text-sm px-4 py-2 shadow-sm hover:bg-red-700 transition-colors"
              >
                Teklif Al
              </Link>
          </nav>
          <button
            aria-label="Menüyü aç/kapat"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-black/60">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-red-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim#form"
              className="inline-flex items-center justify-center rounded-md bg-red-600 text-white text-sm px-4 py-2 shadow-sm hover:bg-red-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}