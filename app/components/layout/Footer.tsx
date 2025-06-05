import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">AFRICA BITE</h3>
          <p>Des saveurs africaines authentiques pour une expérience culinaire exotique et délicieuse.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-background/70 transition-colors">Accueil</Link></li>
            <li><Link href="/menu" className="hover:text-background/70 transition-colors">Menu</Link></li>
            <li><Link href="/make-your-own-salad" className="hover:text-background/70 transition-colors">Créez votre plat</Link></li>
            <li><Link href="/our-recipes" className="hover:text-background/70 transition-colors">Recettes</Link></li>
            <li><Link href="/horaire" className="hover:text-background/70 transition-colors">Horaires</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>123 Avenue des Restaurants, 75000 Paris</p>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : contact@africabite.fr</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-background/20 mt-8 pt-6 text-center">
        <p>© {new Date().getFullYear()} AFRICA BITE. Tous droits réservés.</p>
      </div>
    </footer>
  );
}