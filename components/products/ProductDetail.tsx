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
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-red-200/50 dark:border-red-900/50">
          <Image src={gallery[0]} alt={`${title} ürün görseli`} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {gallery.slice(1).map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-red-200/50 dark:border-red-900/50">
              <Image src={src} alt={`${title} galeri ${idx + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-red-950 dark:text-red-50">{title}</h1>
        <p className="mt-3 text-red-900 dark:text-red-100">{summary}</p>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-[360px] w-full text-sm border border-red-200/50 dark:border-red-900/50 rounded-lg overflow-hidden">
            <tbody className="divide-y divide-red-200/50 dark:divide-red-900/50">
              <tr className="bg-red-50/60 dark:bg-red-900/60">
                <td className="px-4 py-3 font-medium text-red-900 dark:text-red-100">Genişlik</td>
                <td className="px-4 py-3 text-red-900 dark:text-red-100">{specs.width}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-red-900 dark:text-red-100">Kalınlık</td>
                <td className="px-4 py-3 text-red-900 dark:text-red-100">{specs.height}</td>
              </tr>
              <tr className="bg-red-50/60 dark:bg-red-900/60">
                <td className="px-4 py-3 font-medium text-red-900 dark:text-red-100">Isı İletkenlik (λ)</td>
                <td className="px-4 py-3 text-red-900 dark:text-red-100">{specs.lambda}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-red-900 dark:text-red-100">Kullanım Alanları</td>
                <td className="px-4 py-3 text-red-900 dark:text-red-100">{specs.usage}</td>
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


