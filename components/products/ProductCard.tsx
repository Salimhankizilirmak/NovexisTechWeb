import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  title: string;
  summary: string;
  images?: string[];
  category?: string;
}

export default function ProductCard({ slug, title, summary, images, category }: ProductCardProps) {
  const cover = images?.[0] ?? "/images/product-generic.svg";
  return (
    <Link
      href={`/urunler/${slug}`}
      className="group relative rounded-2xl bg-white dark:bg-red-100 shadow-sm hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r blur-[2px] opacity-30 from-red-500 to-red-700" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={cover} alt={`${title} ürün görseli`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold line-clamp-1 text-red-800 dark:text-red-900">{title}</h3>
          {category && (
            <span className="text-xs rounded-full px-2 py-1 bg-red-50 text-red-700 dark:bg-red-200 dark:text-red-800">{category}</span>
          )}
        </div>
        <p className="mt-2 text-sm line-clamp-2 text-red-900 dark:text-red-800 font-medium">{summary}</p>
        <div className="mt-4 text-sm font-medium group-hover:translate-x-0.5 transition-transform text-red-700 dark:text-red-700">Detayları Gör →</div>
      </div>
    </Link>
  );
}


