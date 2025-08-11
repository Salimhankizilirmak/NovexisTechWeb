import Link from "next/link";
import Image from "next/image";

export type ProductCardProps = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  images: string[];
  category?: string;
};

export default function ProductCard({ slug, title, summary, images, category }: ProductCardProps) {
  const cover = images?.[0] ?? "/images/product-generic.svg";
  return (
    <Link
      href={`/urunler/${slug}`}
      className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition card-hover overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-red-500 to-red-700 blur-[2px] opacity-30" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={cover} alt={`${title} ürün görseli`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-800 line-clamp-1">{title}</h3>
          {category && (
            <span className="text-xs rounded-full bg-red-50 text-red-700 px-2 py-1">{category}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{summary}</p>
        <div className="mt-4 text-sm font-medium text-red-700 group-hover:translate-x-0.5 transition-transform">Detayları Gör →</div>
      </div>
    </Link>
  );
}