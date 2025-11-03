'use client';

import React from 'react';
import { Button, Container, Heading1, BodyText, RoadBackground, HeroImage } from '@/components/ui';
import { LanguageSwitcher, useLayout } from '@/components/Layout';
import { scrollToElement } from '@/lib/utils';
import { trackBookingClick } from '@/lib/analytics';

export function HeroSection() {
  const { t, locale } = useLayout();

  const handleBookNowClick = () => {
    trackBookingClick('hero_cta');
    scrollToElement('booking-section');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-dark to-gray-900">
      {/* Road background pattern */}
      <RoadBackground />
      
      {/* Hero image - car and driver */}
      <HeroImage />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Header with logo and language switcher */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-gold">
          وصول
        </div>
        <LanguageSwitcher />
      </header>

      {/* Hero content */}
      <Container size="md" className="relative z-10 text-center">
        <Heading1 
          locale={locale} 
          align="center" 
          className="mb-4 sm:mb-6"
        >
          {t.hero.title}
        </Heading1>
        
        <BodyText 
          locale={locale} 
          color="muted" 
          align="center" 
          className="mb-6 sm:mb-8 max-w-2xl mx-auto px-2 text-sm sm:text-base md:text-lg"
        >
          {t.hero.subtitle}
        </BodyText>
        
        <Button
          size="lg"
          onClick={handleBookNowClick}
          className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto max-w-sm mx-auto"
        >
          {t.hero.cta}
        </Button>
      </Container>

      {/* Moving car indicator - blue like Google Maps navigation */}
      <div className="absolute bottom-1/4 left-0 w-full overflow-hidden pointer-events-none">
        <div className="relative">
          {/* Car icon */}
          <div className="w-3 h-6 bg-blue-600/80 rounded-full transform translate-x-0 animate-[moveRight_12s_ease-in-out_infinite] shadow-lg">
            <div className="absolute inset-0.5 bg-blue-700/90 rounded-full"></div>
            {/* Direction indicator */}
            <div className="absolute -top-1 left-1/2 w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-3 border-b-blue-600/80 transform -translate-x-1/2"></div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}