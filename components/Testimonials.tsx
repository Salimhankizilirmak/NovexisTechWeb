export default function Testimonials() {
  const items = [
    {
      name: "Ayşe K.",
      company: "Mühendislik Ofisi",
      quote:
        "Tedarik süreleri çok hızlı, ürün performansı projelerimizde hedeflediğimiz enerji verimliliğini sağladı.",
    },
    {
      name: "Emre T.",
      company: "Yapı Taahhüt",
      quote:
        "Yangın dayanımı ve akustik performans değerleri şantiyede testlerimizi geçti. Teknik ekip oldukça destekçi.",
    },
    {
      name: "Selin D.",
      company: "Endüstriyel Tesis",
      quote:
        "Fabrikamızın proses hatlarında ısı kayıplarını ciddi oranda azalttık. Montaj kolaydı.",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Müşteri Referansları</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm font-medium text-slate-900">{t.name}</div>
              <div className="text-xs text-slate-600">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}