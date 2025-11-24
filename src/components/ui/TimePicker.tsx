'use client';

import React from 'react';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
  locale: 'ar' | 'en';
}

export function TimePicker({ value, onChange, locale }: TimePickerProps) {
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00'
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
      {timeSlots.map((time) => (
        <button
          key={time}
          type="button"
          onClick={() => onChange(time)}
          className={`
            px-3 py-3 sm:px-4 sm:py-4 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base font-medium
            ${value === time
              ? 'border-primary-gold bg-primary-gold/10 text-primary-gold shadow-md'
              : 'border-gray-700 bg-gray-800/50 text-text-light hover:border-primary-gold/50 hover:bg-gray-800'
            }
            ${locale === 'ar' ? 'font-arabic' : 'font-inter'}
          `}
        >
          {time}
        </button>
      ))}
    </div>
  );
}