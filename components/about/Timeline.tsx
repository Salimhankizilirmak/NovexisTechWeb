export default function Timeline() {
  const items = [
    { year: "2008", title: "Kuruluş", desc: "İlk üretim hattımızla faaliyete başladık." },
    { year: "2014", title: "AR-GE Genişlemesi", desc: "Yeni test laboratuvarlarımızı devreye aldık." },
    { year: "2018", title: "İhracat", desc: "20+ ülkeye düzenli ihracat kapasitesine ulaştık." },
    { year: "2023", title: "Modernizasyon", desc: "Tam otomasyonlu hatlarla üretimi hızlandırdık." },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-neutral-900">Dönüm Noktaları</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 rounded" style={{ backgroundColor: "color-mix(in srgb, var(--btn-red) 25%, transparent)" }} />
          <div className="space-y-8">
            {items.map((i, idx) => (
              <div key={idx} className={`relative flex ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className="w-full sm:w-1/2 px-8">
                  <div className="relative rounded-xl border bg-white p-5 shadow-sm" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 20%, transparent)" }}>
                    <div className="absolute -left-8 sm:left-auto sm:-right-8 top-5 h-3 w-3 rounded-full" style={{ backgroundColor: "var(--btn-red)", boxShadow: "0 0 0 6px color-mix(in srgb, var(--btn-red) 30%, transparent)" }} />
                    <div className="text-sm font-semibold" style={{ color: "#3b1e46" }}>{i.year}</div>
                    <div className="mt-1 text-neutral-900 font-bold">{i.title}</div>
                    <div className="mt-1 text-sm text-neutral-700">{i.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


