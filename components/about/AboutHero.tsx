import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundSlideshow images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"]} durationMs={5000} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow" style={{ backgroundColor: "var(--btn-red)", color: "#fff" }}>2008'den Beri</div>
        <div className="relative inline-block mt-4">
          <div
            className="absolute -inset-4 md:-inset-5 -z-10 rounded-2xl"
            style={{ background: "rgba(202,167,214,0.32)", boxShadow: "0 35px 90px rgba(202,167,214,0.6)", border: "1px solid rgba(202,167,214,0.55)" }}
          />
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl" style={{ textShadow: "0 3px 16px rgba(202,167,214,0.7)" }}>
            Yalıtımda Güvenilir Yerli Üretim, Global Standartlar
          </h1>
          <p className="mt-4 text-lg font-semibold text-white max-w-2xl" style={{ textShadow: "0 3px 12px rgba(202,167,214,0.55)" }}>
            Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/urunler" className="btn btn-primary">Ürünleri İncele</a>
          <a href="/iletisim#teklif-ara" className="btn btn-secondary">Hızlı Teklif</a>
        </div>
      </div>
    </section>
  );
}


