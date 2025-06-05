import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">{children}</h1>
  );
}