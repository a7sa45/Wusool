'use client';

import React from 'react';

export function RoadBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15 animate-pulse">
      {/* Main roads - horizontal */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-primary-gold/30 transform -rotate-2" />
      <div className="absolute top-2/4 left-0 w-full h-0.5 bg-primary-gold/20 transform rotate-1" />
      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-primary-gold/25 transform -rotate-1" />
      
      {/* Secondary roads - diagonal */}
      <div className="absolute top-1/3 left-1/4 w-96 h-0.5 bg-primary-gold/15 transform rotate-45 origin-left" />
      <div className="absolute top-2/3 right-1/4 w-80 h-0.5 bg-primary-gold/20 transform -rotate-45 origin-right" />
      <div className="absolute top-1/2 left-1/3 w-64 h-0.5 bg-primary-gold/10 transform rotate-30 origin-left" />
      
      {/* Vertical connectors */}
      <div className="absolute left-1/4 top-0 w-0.5 h-full bg-primary-gold/15 transform rotate-12" />
      <div className="absolute right-1/3 top-0 w-0.5 h-full bg-primary-gold/10 transform -rotate-6" />
      <div className="absolute left-2/3 top-0 w-0.5 h-full bg-primary-gold/20 transform rotate-8" />
      
      {/* Curved roads using pseudo-elements */}
      <div className="absolute top-1/6 left-1/2 w-32 h-32 border border-primary-gold/15 rounded-full transform -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary-gold/10 rounded-full" />
      <div className="absolute top-1/3 left-1/6 w-20 h-20 border border-primary-gold/20 rounded-full" />
      
      {/* City points - representing Abha, Taif, Baha */}
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary-gold/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
           title="أبها - Abha" />
      <div className="absolute top-1/5 right-1/4 w-2.5 h-2.5 bg-primary-gold/35 rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse" 
           title="الطائف - Taif" />
      <div className="absolute bottom-1/4 left-1/2 w-2.5 h-2.5 bg-primary-gold/30 rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse" 
           title="الباحة - Baha" />
      
      {/* Intersection points */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-primary-gold/25 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-2/4 right-1/3 w-1 h-1 bg-primary-gold/20 rounded-full transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary-gold/25 rounded-full transform -translate-x-1/2 translate-y-1/2" />
      
      {/* Additional road segments for complexity */}
      <div className="absolute top-1/5 right-1/5 w-40 h-0.5 bg-primary-gold/12 transform rotate-75" />
      <div className="absolute bottom-1/5 left-1/5 w-48 h-0.5 bg-primary-gold/18 transform -rotate-30" />
      <div className="absolute top-1/2 right-1/2 w-36 h-0.5 bg-primary-gold/15 transform rotate-60" />
      
      {/* Highway markers */}
      <div className="absolute top-1/3 left-1/2 w-1 h-4 bg-primary-gold/25 transform -translate-x-1/2 rotate-45" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-4 bg-primary-gold/20 transform translate-x-1/2 -rotate-30" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}