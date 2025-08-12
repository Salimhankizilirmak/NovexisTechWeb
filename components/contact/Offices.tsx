export default function Offices() {
  const offices = [
    {
      city: "Çorum Merkez",
      address: "Organize Sanayi Bölgesi 4. Cad No:6, Merkez Çorum",
      phone: "+90 364 222 33 44",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900">Ofislerimiz</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((o, idx) => (
            <div key={idx} className="rounded-2xl border border-red-200/60 dark:border-red-300/60 bg-white dark:bg-red-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-hover">
              <div className="text-gray-900 dark:text-red-900 font-semibold">{o.city}</div>
              <div className="mt-1 text-sm text-gray-700 dark:text-red-800">{o.address}</div>
              <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="mt-2 inline-flex text-sm font-medium text-red-700 hover:text-red-800 dark:text-red-700 dark:hover:text-red-800 transition-colors">{o.phone}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


