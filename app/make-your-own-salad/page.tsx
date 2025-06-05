'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom'; // Changement ici
import sendOrder from '../actions/sendOrder';
import IngredientSelector from '../components/salad-maker/IngredientSelector';
import Button from '../components/ui/Button';
import OrderSummary from '../components/salad-maker/OrderSummary';

const bases = ["Laitue romaine", "Épinards", "Mélange de jeunes pousses", "Roquette"];
const proteins = ["Poulet grillé", "Saumon", "Tofu", "Œuf dur", "Jambon"];
const toppings = [
  "Tomates cerises", "Concombres", "Avocat", "Maïs", "Olives", 
  "Oignons rouges", "Poivrons", "Champignons", "Carottes râpées", "Croûtons"
];
const dressings = ["Huile d'olive & Citron", "Vinaigrette balsamique", "César", "Yaourt aux herbes"];

export default function MakeYourOwnSalad() {
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedProtein, setSelectedProtein] = useState("");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedDressing, setSelectedDressing] = useState("");
  
  // État initial pour useFormState
  const initialState = {
    orderStatus: false,
    message: '',
    orderId: null
  };

  // Utiliser useFormState au lieu de useActionState
  const [state, formAction] = useFormState(sendOrder, initialState);
  
  const calculatePrice = () => {
    let price = 5.0; // Prix de base
    if (selectedProtein) price += 2.5;
    price += selectedToppings.length * 0.8;
    return price.toFixed(2);
  };
  
  if (state.orderStatus) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <div className="bg-[#69503a] border border-green-200 p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-2 text-white">Commande confirmée!</h1>
          <p className="mb-4">{state.message}</p>
          <p className="text-xl font-semibold">Numéro de commande: #{state.orderId}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Composez votre salade</h1>
      
      <form action={formAction} className="space-y-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Vos informations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Votre nom"
              required
              className="border p-2 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="border p-2 rounded-lg"
            />
          </div>
        </div>
        
        <IngredientSelector
          title="1. Choisissez votre base"
          options={bases}
          selectedValue={selectedBase}
          onChange={(value) => setSelectedBase(value as string)}
          required={true}
        />
        
        <IngredientSelector
          title="2. Choisissez votre protéine (optionnel)"
          options={proteins}
          selectedValue={selectedProtein}
          onChange={(value) => setSelectedProtein(value as string)}
        />
        
        <IngredientSelector
          title="3. Ajoutez vos garnitures (max 5)"
          options={toppings}
          selectedValue={selectedToppings}
          onChange={(value) => setSelectedToppings(value as string[])}
          multiple={true}
        />
        
        <IngredientSelector
          title="4. Choisissez votre sauce"
          options={dressings}
          selectedValue={selectedDressing}
          onChange={(value) => setSelectedDressing(value as string)}
          required={true}
        />
        
        <OrderSummary
          base={selectedBase}
          protein={selectedProtein}
          toppings={selectedToppings}
          sauce={selectedDressing}
          totalPrice={calculatePrice()}
        />
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-semibold">Total: {calculatePrice()} €</p>
          </div>
          
          <Button 
            type="submit" 
            disabled={!selectedBase || !selectedDressing}
            variant="default"
            size="lg"
          >
            Commander ma salade
          </Button>
        </div>
      </form>
    </div>
  );
}