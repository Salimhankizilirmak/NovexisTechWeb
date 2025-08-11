export default function Offices() {
  const items = [
    { city: "İstanbul", address: "İOSB Atatürk O.S.B., Başakşehir / İstanbul", phone: "+90 212 222 33 44" },
    { city: "Ankara", address: "Organize Sanayi Bölgesi, Sincan / Ankara", phone: "+90 312 111 22 33" },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-blue-950 dark:text-blue-50">Ofislerimiz</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((o, idx) => (
            <div key={idx} className="rounded-2xl border border-blue-200/60 dark:border-blue-900/50 bg-white dark:bg-blue-900 p-6 shadow-sm">
              <div className="text-blue-900 dark:text-blue-100 font-semibold">{o.city}</div>
              <div className="mt-1 text-sm text-blue-800 dark:text-blue-200">{o.address}</div>
              <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex text-sm font-medium text-blue-700 hover:text-blue-800">{o.phone}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


