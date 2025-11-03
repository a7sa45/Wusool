'use client';

import React from 'react';
import { Button, Container, Heading1, BodyText } from '@/components/ui';
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
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}