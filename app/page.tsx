import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/img/img/chicken-caesar-salad.jpeg"
              alt="Image de garde"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Découvrez nos salades fraîches et gourmandes</h1>
            <p className="text-lg">
              Chez Eat Healthy, nous préparons des salades fraîches avec des
              ingrédients de qualité pour vous offrir une expérience gustative
              exceptionnelle.
            </p>
            <Link 
              href="/menu" 
              className="inline-block rounded-full bg-foreground text-background px-8 py-4 text-lg font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Découvrir notre menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}