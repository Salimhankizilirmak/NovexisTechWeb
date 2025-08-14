import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Hitit Yalıtım Logo" width={48} height={48} />
              <span className="font-semibold text-xl">Hitit Yalıtım | Hitpor</span>
            </div>
            <p className="text-neutral-800 text-sm leading-relaxed max-w-md">
              Isı yalıtım ürünlerinin yanı sıra, enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle strafor koruyucular ve ısıtma panellerinde güvenilir ortağınız.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="tel:+903642549550" className="font-medium" style={{ color: "#3b1e46" }}>
                📞 +90 364 254 95 50
              </a>
              <a href="mailto:info@hitityalitim.com.tr" className="font-medium" style={{ color: "#3b1e46" }}>
                ✉️ info@hitityalitim.com.tr
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral-800 hover:[color:var(--btn-red)] transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-neutral-800 hover:[color:var(--btn-red)] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="text-neutral-800 hover:[color:var(--btn-red)] transition-colors">Ürünler</Link></li>
              <li><Link href="/iletisim" className="text-neutral-800 hover:[color:var(--btn-red)] transition-colors">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-neutral-900 mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-neutral-800">
              <li>📍 ORGANİZE SAN.BÖL.4.CD.NO:6 MERKEZ/ÇORUM</li>
              <li>
                <a href="tel:+903642549550" className="hover:[color:var(--btn-red)] transition-colors">📞 +90 364 254 95 50</a>
              </li>
              <li>📠 0364 254 95 57</li>
              <li>
                <a href="http://www.hitityalitim.com.tr" target="_blank" className="hover:[color:var(--btn-red)] transition-colors inline-flex items-center gap-2">
                  <Image src="/images/logo.png" alt="Site Logosu" width={18} height={18} />
                  <span>Hitit Yalıtım | Hitpor</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@hitityalitim.com.tr" className="hover:[color:var(--btn-red)] transition-colors">📧 info@hitityalitim.com.tr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid color-mix(in srgb, var(--btn-red) 25%, transparent)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-700">
              © 2024 Hitit Yalıtım. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gizlilik" className="text-neutral-700 hover:[color:var(--btn-red)] transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-neutral-700 hover:[color:var(--btn-red)] transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


