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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Hitit Yalıtım Logo" width={48} height={48} priority />
            <span className="font-semibold text-base sm:text-xl text-neutral-900 dark:text-neutral-200">Hitit Yalıtım | Hitpor</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors dark:text-neutral-300 dark:hover:text-white font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/iletisim#teklif-ara"
              className="btn btn-primary"
            >
              Teklif Al
            </Link>
          </nav>
          
          <button
            className="md:hidden p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-800 hover:text-neutral-900 transition-colors dark:text-neutral-200 dark:hover:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/iletisim#teklif-ara"
                className="btn btn-primary w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Teklif Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


