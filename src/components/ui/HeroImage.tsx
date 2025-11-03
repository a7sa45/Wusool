'use client';

import React from 'react';

export function HeroImage() {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block opacity-20 hover:opacity-30 transition-opacity duration-300">
      {/* Car silhouette */}
      <svg width="300" height="200" viewBox="0 0 300 200" className="text-primary-gold">
        {/* Car body */}
        <path 
          d="M50 120 L80 100 L120 95 L180 95 L220 100 L250 120 L250 140 L230 140 L230 150 L210 150 L210 140 L90 140 L90 150 L70 150 L70 140 L50 140 Z" 
          fill="currentColor" 
          opacity="0.6"
        />
        
        {/* Car windows */}
        <path 
          d="M85 100 L115 96 L175 96 L205 100 L200 115 L100 115 Z" 
          fill="currentColor" 
          opacity="0.3"
        />
        
        {/* Car wheels */}
        <circle cx="90" cy="140" r="12" fill="currentColor" opacity="0.8" />
        <circle cx="210" cy="140" r="12" fill="currentColor" opacity="0.8" />
        
        {/* Wheel details */}
        <circle cx="90" cy="140" r="6" fill="#0C0C0C" />
        <circle cx="210" cy="140" r="6" fill="#0C0C0C" />
        
        {/* Car lights */}
        <circle cx="245" cy="110" r="3" fill="currentColor" opacity="0.9" />
        <circle cx="55" cy="110" r="3" fill="currentColor" opacity="0.9" />
      </svg>
      
      {/* Driver silhouette */}
      <div className="absolute top-8 left-20 opacity-40">
        <svg width="60" height="80" viewBox="0 0 60 80" className="text-primary-gold">
          {/* Head */}
          <circle cx="30" cy="20" r="12" fill="currentColor" />
          
          {/* Body */}
          <rect x="20" y="30" width="20" height="35" rx="10" fill="currentColor" />
          
          {/* Arms */}
          <rect x="10" y="35" width="8" height="20" rx="4" fill="currentColor" />
          <rect x="42" y="35" width="8" height="20" rx="4" fill="currentColor" />
          
          {/* Steering wheel indication */}
          <circle cx="35" cy="45" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-2 h-2 bg-primary-gold rounded-full animate-pulse" />
      <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-primary-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -left-8 w-1 h-1 bg-primary-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}