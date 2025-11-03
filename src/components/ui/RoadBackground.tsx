'use client';

import React from 'react';

export function RoadBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Main highways - blue like Google Maps */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-blue-500/40 transform -rotate-2 shadow-sm" />
      <div className="absolute top-2/4 left-0 w-full h-1 bg-blue-500/35 transform rotate-1 shadow-sm" />
      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-blue-400/30 transform -rotate-1" />
      
      {/* Secondary roads - lighter blue */}
      <div className="absolute top-1/3 left-1/4 w-96 h-0.5 bg-blue-400/25 transform rotate-45 origin-left" />
      <div className="absolute top-2/3 right-1/4 w-80 h-0.5 bg-blue-400/30 transform -rotate-45 origin-right" />
      <div className="absolute top-1/2 left-1/3 w-64 h-0.5 bg-blue-300/20 transform rotate-30 origin-left" />
      
      {/* Vertical connectors - blue roads */}
      <div className="absolute left-1/4 top-0 w-0.5 h-full bg-blue-400/25 transform rotate-12" />
      <div className="absolute right-1/3 top-0 w-0.5 h-full bg-blue-300/20 transform -rotate-6" />
      <div className="absolute left-2/3 top-0 w-0.5 h-full bg-blue-400/30 transform rotate-8" />
      
      {/* Curved roads - roundabouts like Google Maps */}
      <div className="absolute top-1/6 left-1/2 w-32 h-32 border-2 border-blue-400/25 rounded-full transform -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-300/20 rounded-full" />
      <div className="absolute top-1/3 left-1/6 w-20 h-20 border border-blue-400/30 rounded-full" />
      
      {/* Navigation arrows - blue like Google Maps */}
      <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-blue-500/50 transform rotate-45" />
      <div className="absolute top-2/4 right-1/3 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-blue-500/40 transform -rotate-45" />
      <div className="absolute bottom-1/3 left-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-6 border-b-blue-400/45 transform rotate-90" />
      
      {/* City points - red like Google Maps markers */}
      <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-red-500/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-lg" 
           title="أبها - Abha">
        <div className="absolute inset-1 bg-red-600/80 rounded-full"></div>
      </div>
      <div className="absolute top-1/5 right-1/4 w-3.5 h-3.5 bg-red-500/55 rounded-full transform translate-x-1/2 -translate-y-1/2 animate-pulse shadow-lg" 
           title="الطائف - Taif">
        <div className="absolute inset-0.5 bg-red-600/80 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 w-3.5 h-3.5 bg-red-500/50 rounded-full transform -translate-x-1/2 translate-y-1/2 animate-pulse shadow-lg" 
           title="الباحة - Baha">
        <div className="absolute inset-0.5 bg-red-600/80 rounded-full"></div>
      </div>
      
      {/* Road intersections - white circles like Google Maps */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-blue-400/20" />
      <div className="absolute top-2/4 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full transform translate-x-1/2 -translate-y-1/2 border border-blue-300/20" />
      <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-white/30 rounded-full transform -translate-x-1/2 translate-y-1/2 border border-blue-400/25" />
      
      {/* Additional road segments - blue paths */}
      <div className="absolute top-1/5 right-1/5 w-40 h-0.5 bg-blue-400/20 transform rotate-75" />
      <div className="absolute bottom-1/5 left-1/5 w-48 h-0.5 bg-blue-500/25 transform -rotate-30" />
      <div className="absolute top-1/2 right-1/2 w-36 h-0.5 bg-blue-400/22 transform rotate-60" />
      
      {/* Route paths - dashed lines like Google Maps */}
      <div className="absolute top-1/3 left-1/2 w-32 h-0.5 bg-blue-600/40 transform -translate-x-1/2 rotate-45" 
           style={{
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(37, 99, 235, 0.4) 4px, rgba(37, 99, 235, 0.4) 8px)'
           }} />
      <div className="absolute bottom-1/3 right-1/4 w-28 h-0.5 bg-blue-600/35 transform translate-x-1/2 -rotate-30"
           style={{
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(37, 99, 235, 0.35) 4px, rgba(37, 99, 235, 0.35) 8px)'
           }} />
      
      {/* Map grid pattern - like Google Maps background */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle area highlights - like Google Maps neighborhoods */}
      <div className="absolute top-1/6 left-1/4 w-24 h-16 bg-green-400/5 rounded-lg transform rotate-12" />
      <div className="absolute bottom-1/4 right-1/3 w-20 h-12 bg-yellow-400/5 rounded-lg transform -rotate-6" />
      <div className="absolute top-2/3 left-1/6 w-18 h-14 bg-purple-400/5 rounded-lg transform rotate-8" />
    </div>
  );
}