"use client";

export default function Features() {
  const items = [
    {
      title: "Kalıp Baskı ve Üretim",
      desc: "Özel kalıp ve CNC ile her ölçü ve formda, her türlü ürünü üretiyoruz.",
      icon: "📦",
    },
    {
      title: "CNC Özel Kesim",
      desc: "Her türlü modelde, hassas toleranslarla hızlı ve tekrarlanabilir üretim.",
      icon: "♨️",
    },
    {
      title: "Proje Bazlı Üretim",
      desc: "İhtiyacınıza uygun malzeme ve formda yüksek performanslı çözümler.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((f, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition card-hover border"
          style={{ borderColor: "color-mix(in srgb, var(--btn-red) 18%, transparent)" }}
        >
          <div className="text-2xl mb-3" style={{ color: "#3b1e46" }}>{f.icon}</div>
          <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
          <p className="mt-1 text-sm text-neutral-700 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}


