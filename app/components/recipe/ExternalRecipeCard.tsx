
import Image from "next/image";

interface ExternalRecipeCardProps {
  recipe: {
    id: string;
    name: string;
    image: string;
    cookTimeMinutes?: string | number;
    tags?: string[];
    description?: string;
    difficulty?: string;
    caloriesPerServing?: string | number;
  };
}

export default function ExternalRecipeCard({ recipe }: ExternalRecipeCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 right-0 bg-background bg-opacity-80 px-3 py-1 m-2 rounded-full flex items-center space-x-1">
          <span className="text-sm">{recipe.cookTimeMinutes || "20"} min</span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
        
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {recipe.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="text-xs px-2 py-1 bg-[#f0f0f0] dark:bg-[#333] rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
        
        <div className="text-sm text-gray-500">
          {recipe.difficulty || "Facile"} · {recipe.caloriesPerServing || "300"} calories
        </div>
      </div>
    </div>
  );
}