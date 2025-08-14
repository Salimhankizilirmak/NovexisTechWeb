export default function MissionVision() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 20%, transparent)" }}>
          <h2 className="text-xl font-bold text-neutral-900">Misyonumuz</h2>
          <p className="mt-3 text-neutral-700">
            Enerji verimliliğini artıran, güvenli ve konforlu yaşam alanları sağlayan yenilikçi ürünleri erişilebilir kılmak.
          </p>
        </div>
        <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: "color-mix(in srgb, var(--btn-red) 20%, transparent)" }}>
          <h2 className="text-xl font-bold text-neutral-900">Vizyonumuz</h2>
          <p className="mt-3 text-neutral-700">
            Sürdürülebilir üretim ve teknik mükemmeliyet ile anılan, global ölçekte tercih edilen bir marka olmak.
          </p>
        </div>
      </div>
    </section>
  );
}


