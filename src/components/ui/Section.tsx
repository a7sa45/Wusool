import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'dark' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'section' | 'div' | 'main' | 'article';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'lg',
    containerSize = 'lg',
    as: Component = 'section',
    children, 
    ...props 
  }, ref) => {
    const variants = {
      default: 'bg-primary-dark',
      dark: 'bg-gray-900/30',
      accent: 'bg-gradient-to-br from-primary-dark via-primary-dark to-gray-900',
    };

    const paddings = {
      none: '',
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16',
      lg: 'py-12 sm:py-16 md:py-20 lg:py-24',
      xl: 'py-16 sm:py-20 md:py-24 lg:py-32',
    };

    return (
      <Component
        className={cn(
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref as any}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </Component>
    );
  }
);

Section.displayName = 'Section';