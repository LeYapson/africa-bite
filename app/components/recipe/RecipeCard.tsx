import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "../../utils/getMenuItems";

interface RecipeCardProps {
  recipe: MenuItem;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={`/img/img/${recipe.imageSrc}`}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 right-0 bg-background bg-opacity-80 px-3 py-1 m-2 rounded-full flex items-center space-x-1">
          <span className="text-sm">{10 + index * 5} min</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-sm px-3 py-1 bg-[#f0f0f0] dark:bg-[#333] rounded-full">
            {index === 0 ? "Facile" : index === 1 ? "Intermédiaire" : "Facile"}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        
        <h3 className="text-md font-medium mt-3 mb-2">Ingrédients principaux:</h3>
        <ul className="mb-4 pl-5 list-disc">
          {recipe.ingredients.slice(0, 3).map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        
        <Link href={`/menu/${recipe.category}/${recipe.slug}`} className="text-blue-500 hover:underline inline-flex items-center">
          Voir la recette complète
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}