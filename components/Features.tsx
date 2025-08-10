export default function Features() {
  const items = [
    { title: "Düşük Isı İletkenliği", desc: "λ=0.035 W/mK değerine kadar inen ürün portföyü ile enerji verimliliği.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 8h-8l4-8zm0 20c-4.4 0-8-3.6-8-8h16c0 4.4-3.6 8-8 8z"/></svg>
    ) },
    { title: "Akustik Konfor", desc: "Yüksek ses yutma katsayısı ile ofis ve yaşam alanlarında sessizlik.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 10h4l5-5v14l-5-5H3zM16 7a5 5 0 0 1 0 10V7z"/></svg>
    ) },
    { title: "Yangın Direnci", desc: "A1 yanmazlık sınıfı seçeneklerle güvenli yapılar.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s5 3 5 8-5 7-5 10c0-3-5-5-5-10s5-8 5-8z"/></svg>
    ) },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">Neden Yalıtım Fabrikası?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="text-sky-600">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}