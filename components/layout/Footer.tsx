import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/Novexis (2) (1).png" alt="Novexis Tech Logo" width={48} height={48} />
              <span className="font-semibold text-xl">Novexis Tech</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Yazılım destek, mobil projeler, donanım tamiri, yedek parça ve reklam siteleri çözümleri ile dijital dünyada güvenilir ortağınız.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="tel:+905374064175" className="font-medium text-blue-400">
                📞 +90 537 406 41 75
              </a>
              <a href="tel:+905394893663" className="font-medium text-blue-400">
                📞 +90 539 489 36 63
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" className="text-slate-300 hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="text-slate-300 hover:text-blue-400 transition-colors">Hizmetler</Link></li>
              <li><Link href="/projeler" className="text-slate-300 hover:text-blue-400 transition-colors">Projeler</Link></li>
              <li><Link href="/neyesek" className="text-slate-300 hover:text-blue-400 transition-colors">Ne Yesek</Link></li>
              <li><Link href="/iletisim" className="text-slate-300 hover:text-blue-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-100 mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📍 Ulukavak, Çiftlik Çayırı 2. Cd. No:3/A, 19100 Çorum Merkez/Çorum</li>
              <li>
                <a href="tel:+905374064175" className="hover:text-blue-400 transition-colors">📞 +90 537 406 41 75</a>
              </li>
              <li>
                <a href="tel:+905394893663" className="hover:text-blue-400 transition-colors">📞 +90 539 489 36 63</a>
              </li>
              <li>
                <a href="http://www.novexistech.com" target="_blank" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                  <Image src="/images/Novexis (2) (1).png" alt="Site Logosu" width={18} height={18} />
                  <span>Novexis Tech</span>
                </a>
              </li>
              <li>
                <a href="mailto:novexistech@gmail.com" className="hover:text-blue-400 transition-colors">📧 novexistech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2024 Novexis Tech. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/gizlilik" className="text-slate-400 hover:text-blue-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="text-slate-400 hover:text-blue-400 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


