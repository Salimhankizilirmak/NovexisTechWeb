export const PRODUCTS = [
  {
    id: 1,
    slug: "cam-yunu-rulo",
    title: "Cam Yünü Rulo",
    category: "Isı Yalıtımı",
    summary: "Hafif ve elastik yapısı ile çatı ve asma tavanlarda ısı ve akustik yalıtım için ideal. Isı iletkenlik katsayısı λ=0.035 W/mK.",
    specs: {
      width: "1200 mm",
      height: "30-100 mm",
      lambda: "0.035 W/mK",
      usage: "Çatı arası uygulamalar, asma tavanlar, bölme duvarlar",
    },
    images: ["/images/product-roll.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 2,
    slug: "tas-yunu-levha",
    title: "Taş Yünü Levha",
    category: "Yangın Yalıtımı",
    summary: "A1 sınıfı yanmazlık, yüksek basma dayanımı ve akustik performans. Cephe ve şaft uygulamalarında güvenli seçenek.",
    specs: {
      width: "600 mm",
      height: "40-150 mm",
      lambda: "0.036 W/mK",
      usage: "Dış cephe mantolama, asansör ve tesisat şaftları, kazan daireleri",
    },
    images: ["/images/product-board.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 3,
    slug: "xps-levha",
    title: "XPS Isı Yalıtım Levhası",
    category: "Isı Yalıtımı",
    summary: "Düşük su emme oranı ve yüksek basma dayanımı ile temel-perde ve teras çatılarda uzun ömürlü performans.",
    specs: {
      width: "600 mm",
      height: "30-120 mm",
      lambda: "0.034 W/mK",
      usage: "Teras çatı, temel ve perde duvar, döşeme altı",
    },
    images: ["/images/product-xps.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 4,
    slug: "eps-levha",
    title: "EPS Isı Yalıtım Levhası",
    category: "Isı Yalıtımı",
    summary: "Ekonomik ve hafif çözüm. TS EN 13163 standardına uygun, farklı yoğunluk seçenekleri ile.",
    specs: {
      width: "500 mm",
      height: "20-100 mm",
      lambda: "0.038 W/mK",
      usage: "Dış cephe mantolama, çatı arası, döşeme",
    },
    images: ["/images/product-eps.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 5,
    slug: "kaucuk-levha",
    title: "Elastomerik Kauçuk Levha",
    category: "Tesisat Yalıtımı",
    summary: "Kapalı hücre yapısı ile yoğuşma kontrolü ve ısı kaybını azaltma. Bakteri oluşumuna dirençli yüzey.",
    specs: {
      width: "1000 mm",
      height: "6-50 mm",
      lambda: "0.034 W/mK",
      usage: "Soğuk ve sıcak su tesisatı, HVAC kanalları",
    },
    images: ["/images/product-rubber.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 6,
    slug: "preform-boru-yalitim",
    title: "Preform Boru Yalıtımı",
    category: "Tesisat Yalıtımı",
    summary: "Hat çaplarına uygun preform kesitler ile hızlı montaj, düşük ısı kaybı ve sürdürülebilir verim.",
    specs: {
      width: "Çap 15-219 mm",
      height: "Kalınlık 9-50 mm",
      lambda: "0.035 W/mK",
      usage: "Endüstriyel proses hatları, sıcak/soğuk akışkan boru hatları",
    },
    images: ["/images/product-pipe.svg", "/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
];

export function getAllCategories() {
  const set = new Set(PRODUCTS.map((p) => p.category));
  return ["Tümü", ...Array.from(set)];
}

export function findProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}