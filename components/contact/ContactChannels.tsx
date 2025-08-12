export default function ContactChannels() {
  const channels = [
    {
      title: "Telefon",
      desc: "Teknik destek ve satış için hemen arayın",
      link: "tel:+902122223344",
      linkText: "+90 212 222 33 44",
    },
    {
      title: "E-posta",
      desc: "Detaylı bilgi ve teklif için yazın",
      link: "mailto:info@hitityalitim.com",
      linkText: "info@hitityalitim.com",
    },
    {
      title: "WhatsApp",
      desc: "Hızlı mesajlaşma ile anında yanıt",
      link: "https://wa.me/905321234567",
      linkText: "WhatsApp'ta Yaz",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">İletişim Kanalları</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((c, idx) => (
            <div key={idx} className="rounded-2xl border border-red-200/60 dark:border-red-300/60 bg-white dark:bg-red-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover">
              <h3 className="font-semibold text-gray-900 dark:text-red-900">{c.title}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-red-800">{c.desc}</p>
              <a href={c.link} className="mt-3 inline-flex text-sm font-medium text-red-700 hover:text-red-800 dark:text-red-700 dark:hover:text-red-800 transition-colors">{c.linkText} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


