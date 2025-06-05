"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="p-4 bg-foreground text-background shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo-africa-bite.webp" alt="AFRICA BITE" width={150} height={50} />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-background/70 transition-colors">Accueil</Link>
          <Link href="/menu" className="hover:text-background/70 transition-colors">Menu</Link>
          <Link href="/make-your-own-salad" className="hover:text-background/70 transition-colors">Créez votre plat</Link>
          <Link href="/our-recipes" className="hover:text-background/70 transition-colors">Recettes</Link>
          <Link href="/horaire" className="hover:text-background/70 transition-colors">Horaires</Link>
        </nav>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-foreground text-background p-4 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-background/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
            <Link href="/menu" className="hover:text-background/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
            <Link href="/make-your-own-salad" className="hover:text-background/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Créez votre plat</Link>
            <Link href="/our-recipes" className="hover:text-background/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Recettes</Link>
            <Link href="/horaire" className="hover:text-background/70 transition-colors" onClick={() => setMobileMenuOpen(false)}>Horaires</Link>
          </nav>
        </div>
      )}
    </header>
  );
}