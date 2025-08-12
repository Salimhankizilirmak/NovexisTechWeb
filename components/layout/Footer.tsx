import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.svg" alt="Hitit Yalıtım Logo" width={32} height={32} />
              <span className="font-semibold text-lg">Hitit Yalıtım</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Isı yalıtım ürünlerinin yanı sıra, enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle strafor koruyucular ve ısıtma panellerinde güvenilir ortağınız.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="tel:+903642549550" className="text-red-400 hover:text-red-300 transition-colors">
                📞 +90 364 254 95 50
              </a>
              <a href="mailto:info@hitityalitim.com.tr" className="text-red-400 hover:text-red-300 transition-colors">
                ✉️ info@hitityalitim.com.tr
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-300 hover:text-red-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="text-gray-300 hover:text-red-400 transition-colors">Ürünler</Link></li>
              <li><Link href="/iletisim" className="text-gray-300 hover:text-red-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 ORGANİZE SAN.BÖL.4.CD.NO:6 MERKEZ/ÇORUM</li>
              <li>
                <a href="tel:+903642549550" className="hover:text-red-400 transition-colors">📞 +90 364 254 95 50</a>
              </li>
              <li>📠 0364 254 95 57</li>
              <li>
                <a href="http://www.hitityalitim.com.tr" target="_blank" className="hover:text-red-400 transition-colors">🌐 www.hitityalitim.com.tr</a>
              </li>
              <li>
                <a href="mailto:info@hitityalitim.com.tr" className="hover:text-red-400 transition-colors">📧 info@hitityalitim.com.tr</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Hitit Yalıtım. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/gizlilik" className="text-gray-400 hover:text-red-400 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-red-400 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


