import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  className?: string;
}

export default function CardGrid({ children, className = '' }: CardGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {children}
    </div>
  );
}