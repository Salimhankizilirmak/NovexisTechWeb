export default function Values() {
  const items = [
    { title: "Güvenilirlik", desc: "Standartlara tam uyum ve şeffaf süreçler." },
    { title: "Sürdürülebilirlik", desc: "Enerji verimliliği ve çevre duyarlılığı." },
    { title: "İnovasyon", desc: "AR-GE ile sürekli gelişen ürün portföyü." },
    { title: "Müşteri Odaklılık", desc: "Projelere özel esnek çözümler." },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-red-950 dark:text-red-50">Değerlerimiz</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((v, idx) => (
            <div key={idx} className="rounded-2xl border border-red-200/60 dark:border-red-900/50 bg-white dark:bg-red-900 p-6 shadow-sm hover:shadow-lg transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-red-700 text-white font-bold">{idx + 1}</div>
              <h3 className="mt-4 font-semibold text-red-950 dark:text-red-50">{v.title}</h3>
              <p className="mt-1 text-sm text-red-800 dark:text-red-200">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


