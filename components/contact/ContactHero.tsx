export default function ContactHero() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-600 text-white px-3 py-1 text-xs font-semibold shadow">İletişim</div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-red-900 max-w-3xl mx-auto">
          Projeniz İçin En Uygun Çözümü Birlikte Bulalım
        </h1>
        <p className="mt-3 text-gray-700 dark:text-red-800 max-w-2xl mx-auto">
          Enjeksiyon kalıp üretimi ve CNC özel kesim kabiliyetimizle, her türlü modelde üretim yapıyoruz.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="tel:+903642549550" className="btn btn-secondary">Hemen Ara</a>
        </div>
      </div>
    </section>
  );
}


