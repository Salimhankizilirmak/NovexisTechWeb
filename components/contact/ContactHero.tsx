export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-semibold shadow">İletişim</div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-blue-900 dark:text-blue-50 max-w-3xl">
          Uzman ekibimizle hemen iletişime geçin
        </h1>
        <p className="mt-3 text-blue-800 dark:text-blue-200 max-w-2xl">
          Projeniz için doğru yalıtım çözümünü birlikte planlayalım. Telefon, e‑posta veya form ile bize ulaşabilirsiniz.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#form" className="btn rounded-full bg-blue-600 text-white hover:bg-blue-700">Teklif Formu</a>
          <a href="tel:+902122223344" className="btn rounded-full bg-white text-blue-700 hover:bg-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800">Hemen Ara</a>
        </div>
      </div>
    </section>
  );
}


