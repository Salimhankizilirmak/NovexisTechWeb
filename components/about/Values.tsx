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
        <h2 className="text-2xl font-bold text-neutral-900">Değerlerimiz</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((v, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition border" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 18%, transparent)" }}>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: "color-mix(in srgb, var(--btn-red) 20%, transparent)", color: "#3b1e46" }}>
                {idx + 1}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{v.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


