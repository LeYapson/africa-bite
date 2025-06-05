import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'default';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "rounded-full font-medium transition-colors flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-foreground text-background hover:bg-opacity-90",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    default: "bg-foreground text-background hover:bg-opacity-90", // Ajouté pour compatibilité
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}