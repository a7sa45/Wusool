import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary-gold text-primary-dark hover:bg-primary-gold/90',
    secondary: 'bg-text-light text-primary-dark hover:bg-text-light/90',
    outline: 'border border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-primary-dark',
  };
  
  const sizes = {
    sm: 'h-10 px-4 text-sm min-h-[40px]',
    md: 'h-12 px-6 sm:px-8 text-sm sm:text-base min-h-[48px]', // Ensuring 48px minimum for touch accessibility
    lg: 'h-14 px-8 sm:px-10 text-base sm:text-lg min-h-[56px]',
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};