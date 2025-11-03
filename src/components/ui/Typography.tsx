import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption';
  locale?: 'ar' | 'en';
  color?: 'default' | 'muted' | 'accent' | 'error' | 'success';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ 
    className, 
    variant = 'body', 
    locale = 'ar', 
    color = 'default',
    align = 'left',
    weight = 'normal',
    children, 
    ...props 
  }, ref) => {
    const fontFamily = locale === 'ar' ? 'font-arabic' : 'font-inter';
    
    const variants = {
      h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight',
      h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight',
      h3: 'text-lg sm:text-xl md:text-2xl font-semibold leading-tight',
      h4: 'text-base sm:text-lg md:text-xl font-semibold leading-tight',
      h5: 'text-sm sm:text-base md:text-lg font-medium leading-tight',
      h6: 'text-xs sm:text-sm md:text-base font-medium leading-tight',
      body: 'text-sm sm:text-base leading-relaxed',
      small: 'text-xs sm:text-sm leading-relaxed',
      caption: 'text-xs leading-relaxed',
    };

    const colors = {
      default: 'text-text-light',
      muted: 'text-text-light/80',
      accent: 'text-primary-gold',
      error: 'text-error-red',
      success: 'text-success-green',
    };

    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    const weights = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    };

    const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

    return React.createElement(
      Component,
      {
        className: cn(
          variants[variant],
          colors[color],
          alignments[align],
          weights[weight],
          fontFamily,
          className
        ),
        ref,
        ...props
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const Heading1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
);

export const Heading2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
);

export const Heading3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
);

export const BodyText = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props} />
);

export const SmallText = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="small" {...props} />
);

export const Caption = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="caption" {...props} />
);