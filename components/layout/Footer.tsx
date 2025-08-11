import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-red-200/50 dark:border-red-950/20 bg-red-50 dark:bg-red-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-red-600" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
              <span className="font-semibold text-red-800 dark:text-red-200">Hitit Yalıtım</span>
            </div>
            <p className="mt-3 text-sm text-red-700 dark:text-red-300">Endüstriyel ve konut projeleri için ileri seviye yalıtım çözümleri.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Hızlı Menü</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:text-red-600 dark:hover:text-red-400 text-red-700 dark:text-red-300" href="/">Ana Sayfa</Link></li>
              <li><Link className="hover:text-red-600 dark:hover:text-red-400 text-red-700 dark:text-red-300" href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link className="hover:text-red-600 dark:hover:text-red-400 text-red-700 dark:text-red-300" href="/urunler">Ürünler</Link></li>
              <li><Link className="hover:text-red-600 dark:hover:text-red-400 text-red-700 dark:text-red-300" href="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">İletişim</h3>
            <ul className="mt-3 space-y-2 text-sm text-red-700 dark:text-red-300">
              <li>Tel: <a className="hover:text-red-600 dark:hover:text-red-400" href="tel:+902122223344">+90 212 222 33 44</a></li>
              <li>E-posta: <a className="hover:text-red-600 dark:hover:text-red-400" href="mailto:info@hitityalitim.com">info@hitityalitim.com</a></li>
              <li>Adres: İOSB Atatürk O.S.B., Başakşehir / İstanbul</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">Bizi Takip Edin</h3>
            <div className="mt-3 flex items-center gap-4 text-red-700 dark:text-red-300">
              <a href="#" aria-label="LinkedIn" className="hover:text-red-600 dark:hover:text-red-400"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2 3h4v12H4V9zm6 0h3.6v1.7h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10V9z" /></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-red-600 dark:hover:text-red-400"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" /></svg></a>
              <a href="#" aria-label="X" className="hover:text-red-600 dark:hover:text-red-400"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3H21l-7.5 8.5L21.5 21H18l-5.5-6.5L7 21H3.5l7.7-8.8L3 3h3.6l5 5.9L17.5 3z" /></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-red-600 dark:text-red-400">© {new Date().getFullYear()} Hitit Yalıtım. Tüm hakları saklıdır.</div>
      </div>
    </footer>
  );
}


