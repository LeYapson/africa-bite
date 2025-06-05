import { getMenuItems } from "../utils/getMenuItems";
import PageTitle from "../components/common/PageTitle";
import RecipeCard from "../components/recipe/RecipeCard";
import ExternalRecipeCard from "../components/recipe/ExternalRecipeCard";
import SectionHeading from "../components/common/SectionHeading";
import CardGrid from "../components/common/CardGrid";

// Cette fonction est automatiquement appelée lors du build
async function getDummyRecipes() {
  try {
    const res = await fetch('https://dummyjson.com/recipes?limit=6', { 
      next: { revalidate: 3600 } // Revalider les données toutes les heures
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch recipes');
    }
    
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export default async function OurRecipes() {
  // Récupérer nos salades internes
  const allItems = getMenuItems();
  const saladItems = allItems.filter(item => item.category === 'salads');
  const featuredItems = saladItems.slice(0, 3); // Prendre les 3 premières salades
  
  // Récupérer des recettes externes pour inspiration
  const externalRecipes = await getDummyRecipes();
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <PageTitle>Nos Recettes</PageTitle>
      <p className="mb-8 text-lg">Découvrez nos suggestions pour réaliser des salades savoureuses à la maison.</p>
      
      <SectionHeading>Nos Créations</SectionHeading>
      <CardGrid className="mb-12">
        {featuredItems.map((recipe, index) => (
          <RecipeCard key={recipe.slug} recipe={recipe} index={index} />
        ))}
      </CardGrid>
      
      {externalRecipes && externalRecipes.length > 0 && (
        <>
          <SectionHeading>Inspiration</SectionHeading>
          <CardGrid>
            {externalRecipes?.map((recipe: any) => (
              <ExternalRecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </CardGrid>
        </>
      )}
    </div>
  );
}