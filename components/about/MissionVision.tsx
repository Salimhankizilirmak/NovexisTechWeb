export default function MissionVision() {
  return (
    <section className="py-16 bg-white dark:bg-red-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border border-red-200/60 dark:border-red-900/50 p-6 bg-red-50/70 dark:bg-red-900/40">
          <h2 className="text-xl font-bold text-gray-900 dark:text-red-50">Misyonumuz</h2>
          <p className="mt-3 text-gray-700 dark:text-red-200">
            Enerji verimliliğini artıran, güvenli ve konforlu yaşam alanları sağlayan yenilikçi yalıtım ürünleri geliştirmek ve erişilebilir kılmak.
          </p>
        </div>
        <div className="rounded-2xl border border-red-200/60 dark:border-red-900/50 p-6 bg-red-50/70 dark:bg-red-900/40">
          <h2 className="text-xl font-bold text-gray-900 dark:text-red-50">Vizyonumuz</h2>
          <p className="mt-3 text-gray-700 dark:text-red-200">
            Sektörde sürdürülebilir üretim ve teknik mükemmeliyet ile anılan, global ölçekte tercih edilen bir marka olmak.
          </p>
        </div>
      </div>
    </section>
  );
}


