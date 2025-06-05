import Link from 'next/link';

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="font-medium">Filtrer par:</span>
        <Link 
          href="/menu"
          className="px-4 py-2 rounded-full bg-[var(--color-primary)] text-white"
        >
          Tous
        </Link>
        {categories.map(category => (
          <Link
            key={category}
            href={`/menu/${category}`}
            className="px-4 py-2 rounded-full border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            {category === 'salads' ? 'Salades' : 'Plats chauds'}
          </Link>
        ))}
      </div>
    </div>
  );
}