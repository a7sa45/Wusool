import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  locale?: 'ar' | 'en';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, locale = 'ar', ...props }, ref) => {
    const baseClasses = 'w-full px-3 sm:px-4 py-3 rounded-lg border transition-colors outline-none focus:ring-1 text-sm sm:text-base bg-gray-800 border-gray-700 text-text-light focus:border-primary-gold focus:ring-primary-gold resize-none';
    
    const errorClasses = error 
      ? 'border-error-red focus:border-error-red focus:ring-error-red' 
      : '';

    return (
      <div className="space-y-2">
        {label && (
          <label className={`block text-sm sm:text-base font-medium text-text-light ${
            locale === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {label}
          </label>
        )}
        <textarea
          className={cn(
            baseClasses,
            errorClasses,
            locale === 'ar' ? 'font-arabic' : 'font-inter',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className={`text-error-red text-sm ${
            locale === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className={`text-text-light/60 text-sm ${
            locale === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';