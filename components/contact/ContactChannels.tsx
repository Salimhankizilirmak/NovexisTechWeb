export default function ContactChannels() {
  const items = [
    { title: "Satış", desc: "Teklif ve ürün danışmanlığı", link: "mailto:satis@hitityalitim.com", linkText: "satis@hitityalitim.com" },
    { title: "Teknik Destek", desc: "Uygulama ve teknik detaylar", link: "mailto:teknik@hitityalitim.com", linkText: "teknik@hitityalitim.com" },
    { title: "İş Ortaklığı", desc: "Bayi ve proje ortaklıkları", link: "mailto:isortaklari@hitityalitim.com", linkText: "isortaklari@hitityalitim.com" },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((c, idx) => (
          <div key={idx} className="rounded-2xl border border-blue-200/60 dark:border-blue-900/50 bg-white dark:bg-blue-900 p-6 shadow-sm">
            <h3 className="font-semibold text-blue-950 dark:text-blue-50">{c.title}</h3>
            <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">{c.desc}</p>
            <a href={c.link} className="mt-3 inline-flex text-sm font-medium text-blue-700 hover:text-blue-800">{c.linkText} →</a>
          </div>
        ))}
      </div>
    </section>
  );
}


