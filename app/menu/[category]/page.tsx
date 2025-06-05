import Link from "next/link";
import Image from "next/image";
import { getMenuItemsByCategory } from "../../utils/getMenuItems";
import { notFound } from "next/navigation";

export default function CategoryMenu({ params }: { params: { category: string } }) {
  const { category } = params;
  const menuItems = getMenuItemsByCategory(category);
  
  if (menuItems.length === 0) {
    notFound();
  }
  
  const categoryLabel = category === 'salads' ? 'Salades' : 'Plats chauds';
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Link href="/menu" className="text-blue-500 hover:underline flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour au menu
      </Link>
      
      <h1 className="text-3xl font-bold mb-6">{categoryLabel}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Link href={`/menu/${category}/${item.slug}`} key={item.slug} className="group">
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
                <p className="text-sm opacity-70">{item.calories} calories</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}