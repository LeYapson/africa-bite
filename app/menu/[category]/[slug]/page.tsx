import Image from "next/image";
import Link from "next/link";
import { getMenuItemBySlug } from "../../../utils/getMenuItems";
import { notFound } from "next/navigation";
import Showdown from 'showdown';

export default async function MenuItem({ params }: { params: { category: string; slug: string } }) {
  // Utiliser await sur params
  const { slug, category } = await params;
  const item = getMenuItemBySlug(slug);
  
  if (!item) {
    notFound();
  }

  // Convertir la description markdown en HTML
  const converter = new Showdown.Converter();
  const contentHTML = converter.makeHtml(item.description);
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href={`/menu/${category}`} className="text-blue-500 hover:underline flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour aux {category === "salads" ? "salades" : "plats chauds"}
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={`/img/img/${item.imageSrc}`}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <p className="text-sm bg-foreground text-background px-3 py-1 rounded-full inline-block mb-4">
            {item.calories} calories
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">Ingrédients</h2>
          <ul className="space-y-1 mb-6">
            {item.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {ingredient}
              </li>
            ))}
          </ul>
          
          <div className="prose mt-6" dangerouslySetInnerHTML={{ __html: contentHTML }} />
          
          <button className="mt-8 bg-foreground text-background px-6 py-3 rounded-full hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}