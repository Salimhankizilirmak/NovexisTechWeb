import Link from "next/link";
import Image from "next/image";

export type ProductCardProps = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  images: string[];
  category?: string;
  variant?: "red" | "green";
};

export default function ProductCard({ slug, title, summary, images, category, variant = "red" }: ProductCardProps) {
  const cover = images?.[0] ?? "/images/product-generic.svg";
  return (
    <Link
      href={`/urunler/${slug}`}
      className={`group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition card-hover overflow-hidden ${variant === "green" ? "dark:bg-green-900" : "dark:bg-red-900"}`}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r blur-[2px] opacity-30 ${variant === "green" ? "from-green-500 to-green-700" : "from-red-500 to-red-700"}`} />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={cover} alt={`${title} ürün görseli`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className={`text-base font-semibold line-clamp-1 ${variant === "green" ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}`}>{title}</h3>
          {category && (
            <span className={`text-xs rounded-full px-2 py-1 ${variant === "green" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{category}</span>
          )}
        </div>
        <p className={`mt-2 text-sm line-clamp-2 ${variant === "green" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>{summary}</p>
        <div className={`mt-4 text-sm font-medium group-hover:translate-x-0.5 transition-transform ${variant === "green" ? "text-green-700" : "text-red-700"}`}>Detayları Gör →</div>
      </div>
    </Link>
  );
}


