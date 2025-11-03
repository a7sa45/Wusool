import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padding = 'md', children, ...props }, ref) => {
    const sizes = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    const paddings = {
      none: '',
      sm: 'px-3 sm:px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-6 sm:px-8',
    };

    return (
      <div
        className={cn(
          'mx-auto w-full',
          sizes[size],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';