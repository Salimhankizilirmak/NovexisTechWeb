export const PRODUCTS = [
  {
    id: 1,
    slug: "1mt-isitma-paneli",
    title: "1 Metre Isıtma Paneli",
    category: "Isıtma Panelleri",
    summary: "Eviniz ve inşaatlarınız için verimli ısıtma ve yalıtım çözümü.",
    specs: {
      width: "100 cm",
      height: "—",
      lambda: "—",
      usage: "Eviniz ve inşaat projeleri için ısıtma uygulamaları",
    },
    images: ["/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 2,
    slug: "137cm-isitma-paneli",
    title: "137 cm Isıtma Paneli",
    category: "Isıtma Panelleri",
    summary: "Eviniz ve inşaatlarınız için optimize edilmiş, stabil ısıtma performansı.",
    specs: {
      width: "137 cm",
      height: "—",
      lambda: "—",
      usage: "Eviniz ve inşaat projeleri için ısıtma uygulamaları",
    },
    images: ["/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 3,
    slug: "147cm-isitma-paneli",
    title: "147 cm Isıtma Paneli",
    category: "Isıtma Panelleri",
    summary: "Eviniz ve inşaatlarınız için yüksek verimli ısıtma çözümü.",
    specs: {
      width: "147 cm",
      height: "—",
      lambda: "—",
      usage: "Eviniz ve inşaat projeleri için ısıtma uygulamaları",
    },
    images: ["/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 4,
    slug: "silverline-firin-koruyucu",
    title: "Silverline Fırın Koruyucu (Strafor)",
    category: "Strafor",
    summary: "Silverline fırınları için darbe ve ısı kaynaklı deformasyonlara karşı koruyucu strafor.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Sevkiyat ve depolama sırasında fırın koruması",
    },
    images: ["/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 5,
    slug: "vinola-firin-koruyucu",
    title: "Vinola Fırın Koruyucu (Strafor)",
    category: "Strafor",
    summary: "Vinola fırınları için ölçüye özel strafor koruma ürünü.",
    specs: {
      width: "Özel ölçü",
      height: "—",
      lambda: "—",
      usage: "Sevkiyat ve depolama sırasında fırın koruması",
    },
    images: ["/images/product-generic.svg"],
    pdfDownloadUrl: "#",
  },
  {
    id: 6,
    slug: "8x10-kose-straforu",
    title: "8x10 Köşe Straforu",
    category: "Strafor",
    summary: "Köşe darbe emici çözüm; mobilya ve beyaz eşya taşımalarında güvenli koruma.",
    specs: {
      width: "8x10 cm",
      height: "—",
      lambda: "—",
      usage: "Köşe koruma, sevkiyat ve depolama",
    },
    images: ["/images/product-generic.svg"],
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