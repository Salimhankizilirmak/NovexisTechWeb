export default function Timeline() {
  const items = [
    { year: "2008", title: "Kuruluş", desc: "İlk üretim hattımızla faaliyete başladık." },
    { year: "2014", title: "AR-GE Genişlemesi", desc: "Yeni test laboratuvarlarımızı devreye aldık." },
    { year: "2018", title: "İhracat", desc: "20+ ülkeye düzenli ihracat kapasitesine ulaştık." },
    { year: "2023", title: "Modernizasyon", desc: "Tam otomasyonlu hatlarla üretimi hızlandırdık." },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50 dark:from-red-950 dark:to-red-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-red-950 dark:text-red-50">Dönüm Noktaları</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-red-200/70 dark:bg-red-900/60 rounded" />
          <div className="space-y-8">
            {items.map((i, idx) => (
              <div key={idx} className={`relative flex ${idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className="w-full sm:w-1/2 px-8">
                  <div className="relative rounded-xl border border-red-200/60 dark:border-red-900/50 bg-white dark:bg-red-900 p-5 shadow-sm">
                    <div className="absolute -left-8 sm:left-auto sm:-right-8 top-5 h-3 w-3 rounded-full bg-red-600 ring-4 ring-red-100 dark:ring-red-950" />
                    <div className="text-sm font-semibold text-red-700 dark:text-red-300">{i.year}</div>
                    <div className="mt-1 text-red-950 dark:text-red-50 font-bold">{i.title}</div>
                    <div className="mt-1 text-sm text-red-800 dark:text-red-200">{i.desc}</div>
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


