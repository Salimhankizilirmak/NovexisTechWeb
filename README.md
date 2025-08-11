# Hitit Yalıtım — Next.js + TailwindCSS

Modern, hızlı ve SEO dostu bir kurumsal web sitesi. Next.js (App Router) ve TailwindCSS 4 ile geliştirilmiştir. Tüm içerik Türkçe ve mobil uyumludur.

## Özellikler
- App Router (Next.js 13+)
- TailwindCSS 4 ile modern tasarım (mavi tonları)
- Responsive grid ve animasyonlar
- Ürün listesi ve ürün detay sayfaları
- Hızlı iletişim ve teklif formu (dummy handler)
- SEO dostu Metadata API

## Kurulum
```bash
npm install
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Komutlar
- `npm run dev`: Geliştirme modunda çalıştırır (Turbopack).
- `npm run build`: Production derlemesi alır.
- `npm run start`: Production derlemesini çalıştırır.
- `npm run lint`: Kod kalitesini kontrol eder.

## Dağıtım (Deploy)
- Vercel önerilir: Yeni bir proje oluşturup bu depoyu bağlayın.
- Alternatif olarak kendi sunucunuzda `npm run build && npm run start` ile çalıştırabilirsiniz.

## Proje Yapısı
- `app/`: Sayfalar, layout ve global stiller
- `components/`: Header, Footer, Hero, ProductCard, ProductDetail, ContactForm, Testimonials, Features, Counter
- `data/`: Örnek ürün verisi (`products.js`)
- `public/images`: Optimize placeholder SVG görseller

## İçerik ve Özelleştirme
- Başlık ve açıklamalar `app/**/page.tsx` dosyalarındaki `metadata` alanından düzenlenebilir.
- Renk paleti ve global stiller `app/globals.css` içinde yapılandırılmıştır.
- Ürün verilerini `data/products.js` üzerinden güncelleyebilirsiniz.

## Lisans
Bu proje örnek amaçlıdır ve tüm hakları saklıdır.
