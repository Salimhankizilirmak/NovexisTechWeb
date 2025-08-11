export default function Map() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-900/50">
          <iframe
            title="Harita"
            src="https://maps.google.com/maps?q=İstanbul&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}


