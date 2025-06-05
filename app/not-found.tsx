import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page non trouvée</h2>
      <p className="mb-8 max-w-md">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
      
      <Link 
        href="/" 
        className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}