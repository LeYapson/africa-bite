interface OrderSummaryProps {
  base: string;
  protein: string;
  toppings: string[];
  sauce: string;
  totalPrice: string;
}

export default function OrderSummary({ 
  base, 
  protein, 
  toppings, 
  sauce,
  totalPrice
}: OrderSummaryProps) {
  return (
    <div className="bg-[#69503a] border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Récapitulatif de votre commande</h2>
      
      <div className="space-y-4">
        <div>
          <p className="font-medium">Base:</p>
          <p>{base || "Aucune base sélectionnée"}</p>
        </div>
        
        <div>
          <p className="font-medium">Protéine:</p>
          <p>{protein || "Aucune protéine sélectionnée"}</p>
        </div>
        
        <div>
          <p className="font-medium">Garnitures ({toppings.length}):</p>
          {toppings.length > 0 ? (
            <ul className="list-disc pl-5">
              {toppings.map(topping => (
                <li key={topping}>{topping}</li>
              ))}
            </ul>
          ) : (
            <p>Aucune garniture sélectionnée</p>
          )}
        </div>
        
        <div>
          <p className="font-medium">Sauce:</p>
          <p>{sauce || "Aucune sauce sélectionnée"}</p>
        </div>
        
        <div className="pt-4 border-t">
          <p className="font-semibold text-lg">Total: {totalPrice} €</p>
        </div>
      </div>
    </div>
  );
}