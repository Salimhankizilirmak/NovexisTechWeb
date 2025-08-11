import Image from "next/image";

export type ProductDetailProps = {
  title: string;
  summary: string;
  specs: { width: string; height: string; lambda: string; usage: string };
  images: string[];
  pdfDownloadUrl?: string;
};

export default function ProductDetail({ title, summary, specs, images, pdfDownloadUrl }: ProductDetailProps) {
  const gallery = images?.length ? images : ["/images/product-generic.svg"]; 
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/5 dark:border-white/10">
          <Image src={gallery[0]} alt={`${title} ürün görseli`} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {gallery.slice(1).map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
              <Image src={src} alt={`${title} galeri ${idx + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-700">{summary}</p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-[360px] w-full text-sm border border-black/5 dark:border-white/10 rounded-lg overflow-hidden">
            <tbody className="divide-y divide-black/5 dark:divide-white/10">
              <tr className="bg-slate-50/60">
                <td className="px-4 py-3 font-medium text-slate-700">Genişlik</td>
                <td className="px-4 py-3 text-slate-700">{specs.width}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-700">Kalınlık</td>
                <td className="px-4 py-3 text-slate-700">{specs.height}</td>
              </tr>
              <tr className="bg-slate-50/60">
                <td className="px-4 py-3 font-medium text-slate-700">Isı İletkenlik (λ)</td>
                <td className="px-4 py-3 text-slate-700">{specs.lambda}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-700">Kullanım Alanları</td>
                <td className="px-4 py-3 text-slate-700">{specs.usage}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={pdfDownloadUrl || "#"}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-red-700"
          >
            Teknik Föy (PDF)
          </a>
          <a href="/iletisim#form" className="text-sm font-medium text-red-700 hover:text-red-800">Teklif İste →</a>
        </div>
      </div>
    </div>
  );
}