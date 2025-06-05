import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Simulation d'un délai
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  try {
    // Parse the request body
    const body = await request.json();
    const { username, email, ingredientsList } = body;
   
    // Création de la commande fictive
    const newOrder = { 
      id: Date.now(), 
      username, 
      email, 
      ingredientsList,
      status: 'confirmed',
      date: new Date().toISOString()
    };
   
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }
}