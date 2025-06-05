import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryType = searchParams.get('type');

  const veggies = [
    "Laitue romaine",
    "Épinards",
    "Mélange de jeunes pousses", 
    "Roquette",
    "Tomates cerises", 
    "Concombres", 
    "Avocat", 
    "Maïs", 
    "Olives", 
    "Oignons rouges", 
    "Poivrons", 
    "Champignons", 
    "Carottes râpées"
  ];

  const proteins = [
    "Poulet grillé",
    "Saumon",
    "Thon",
    "Tofu",
    "Œuf dur",
    "Jambon",
    "Crevettes"
  ];

  const sauces = [
    "Huile d'olive & Citron",
    "Vinaigrette balsamique",
    "César",
    "Yaourt aux herbes",
    "Moutarde & miel"
  ];

  let listIngredients = null;

  switch(queryType) {
    case "proteins":
      listIngredients = proteins;
      break;
    case "veggies":
      listIngredients = veggies;
      break;
    case "sauces":
      listIngredients = sauces;
      break;    
    default:
      listIngredients = { veggies, proteins, sauces };
  }

  return NextResponse.json(listIngredients);
}