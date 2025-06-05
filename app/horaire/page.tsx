// ou app/horaire/page.tsx selon votre choix
import Image from "next/image";

export default function OpeningTime() {
  const today = new Date().getDay(); // 0 pour dimanche, 1 pour lundi, etc.
  
  // Jours d'ouverture avec mise en évidence du jour actuel
  const openingHours = [
    { day: "Dimanche", time: "fermé", isClosed: true },
    { day: "Lundi", time: "fermé", isClosed: true },
    { day: "Mardi", time: "10h00 à 15h00", isClosed: false },
    { day: "Mercredi", time: "10h00 à 15h00 - 19h00 à 22h00", isClosed: false },
    { day: "Jeudi", time: "10h00 à 15h00", isClosed: false },
    { day: "Vendredi", time: "10h00 à 15h00", isClosed: false },
    { day: "Samedi", time: "10h00 à 15h00 - 19h00 à 22h00", isClosed: false }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Horaires et Accès</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nos horaires</h2>
          <div className="space-y-4">
            {openingHours.map((item, index) => (
              <div 
                key={item.day}
                className={`flex justify-between pb-2 border-b ${
                  item.isClosed 
                    ? 'text-gray-400' 
                    : index === today 
                      ? 'font-bold text-green-600' 
                      : ''
                }`}
              >
                <span>{item.day}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <div className="space-y-2">
            <p>Téléphone : 01 23 45 67 89</p>
            <p>Email : contact@restaurant.fr</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nous trouver</h2>
          <p className="mb-4">123 Avenue des Restaurants, 75000 Paris</p>
          
          <div className="relative h-[300px] rounded-lg overflow-hidden border">
            <Image
              src="/globe.svg"
              alt="Plan d'accès"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">Transports</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Métro : Ligne 1, station Château d'Eau</li>
            <li>Bus : Lignes 20, 32, 38, arrêt République</li>
          </ul>
        </div>
      </div>
    </div>
  );
}