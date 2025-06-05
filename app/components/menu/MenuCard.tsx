import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "../../utils/getMenuItems";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <Link href={`/menu/${item.category}/${item.slug}`} className="group">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={`/img/img/${item.imageSrc}`}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm opacity-70">
            {item.category === "salads" ? "Salade" : "Plat chaud"} · {item.calories} calories
          </p>
        </div>
      </div>
    </Link>
  );
}