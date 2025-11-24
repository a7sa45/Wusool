'use client';

import React from 'react';

interface SelectionCardProps {
  icon: string;
  title: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
  locale: 'ar' | 'en';
}

export function SelectionCard({ 
  icon, 
  title, 
  description, 
  isSelected, 
  onClick,
  locale 
}: SelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 text-left
        ${isSelected 
          ? 'border-primary-gold bg-primary-gold/10 shadow-lg shadow-primary-gold/20' 
          : 'border-gray-700 bg-gray-800/50 hover:border-primary-gold/50 hover:bg-gray-800'
        }
        ${locale === 'ar' ? 'text-right' : 'text-left'}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl sm:text-5xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-base sm:text-lg font-semibold text-text-light mb-1 ${
            locale === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {title}
          </h3>
          {description && (
            <p className={`text-xs sm:text-sm text-text-light/70 ${
              locale === 'ar' ? 'font-arabic' : 'font-inter'
            }`}>
              {description}
            </p>
          )}
        </div>
        {isSelected && (
          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full bg-primary-gold flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}