import React from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  locale?: 'ar' | 'en';
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, placeholder, locale = 'ar', ...props }, ref) => {
    const baseClasses = 'w-full px-3 sm:px-4 py-3 rounded-lg border transition-colors outline-none focus:ring-1 text-sm sm:text-base bg-gray-800 border-gray-700 text-text-light focus:border-primary-gold focus:ring-primary-gold';
    
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
        <select
          className={cn(
            baseClasses,
            errorClasses,
            locale === 'ar' ? 'font-arabic' : 'font-inter',
            className
          )}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select';