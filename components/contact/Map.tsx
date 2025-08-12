export default function Map() {
  return (
    <section className="py-16 bg-white dark:bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-red-900 mb-8">Konum</h2>
        <div className="rounded-2xl overflow-hidden border border-red-200/60 dark:border-red-300/60 shadow-lg">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1234567890123!2d34.9534!3d40.5499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzU5LjYiTiAzNMKwNTcnMTIuMiJF!5e0!3m2!1str!2str!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hitit Yalıtım Konum"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6 bg-white dark:bg-red-100">
            <div className="flex items-center gap-3">
              <div className="text-2xl">📍</div>
              <div>
                <p className="text-gray-900 dark:text-red-900 font-semibold">Merkez Ofis</p>
                <p className="text-sm text-gray-700 dark:text-red-800">Organize Sanayi Bölgesi 4. Cad No:6, Merkez Çorum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


