'use client';

import React from 'react';
import { Button, Card, CardContent, CardFooter, Heading2, Heading3, BodyText, Section } from '@/components/ui';
import { useLayout } from '@/components/Layout';
import { SERVICES } from '@/lib/data';
import { scrollToElement } from '@/lib/utils';
import { trackServiceCardClick } from '@/lib/analytics';

interface ServiceCardProps {
  service: typeof SERVICES[0];
  onBookNow: (serviceId: string) => void;
  locale: 'ar' | 'en';
}

function ServiceCard({ service, onBookNow, locale }: ServiceCardProps) {
  const name = locale === 'ar' ? service.nameAr : service.nameEn;
  const description = locale === 'ar' ? service.descriptionAr : service.descriptionEn;
  const price = locale === 'ar' ? `ابتداءً من ${service.priceFrom} ﷼` : `From ${service.priceFrom} SAR`;

  return (
    <Card variant="default" padding="md" hover>
      <CardContent>
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">
          {service.icon}
        </div>
        
        <Heading3 
          locale={locale} 
          align="center" 
          className="mb-2 sm:mb-3"
        >
          {name}
        </Heading3>
        
        <BodyText 
          locale={locale} 
          color="muted" 
          align="center" 
          className="mb-3 sm:mb-4"
        >
          {description}
        </BodyText>
        
        <BodyText 
          locale={locale} 
          color="accent" 
          weight="semibold" 
          align="center" 
          className="mb-4 sm:mb-6"
        >
          {price}
        </BodyText>
      </CardContent>
      
      <CardFooter>
        <Button
          variant="outline"
          className="w-full text-sm sm:text-base"
          onClick={() => onBookNow(service.id)}
        >
          {locale === 'ar' ? 'احجز الآن' : 'Book Now'}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ServicesSection() {
  const { t, locale } = useLayout();

  const handleBookNow = (serviceId: string) => {
    // Track service card click
    trackServiceCardClick(serviceId);
    
    // Store selected service in sessionStorage for the booking form
    sessionStorage.setItem('selectedService', serviceId);
    scrollToElement('booking-section');
  };

  return (
    <Section variant="default" padding="lg">
      <div className="text-center mb-8 sm:mb-12">
        <Heading2 
          locale={locale} 
          align="center" 
          className="mb-3 sm:mb-4"
        >
          {t.services.title}
        </Heading2>
        
        <BodyText 
          locale={locale} 
          color="muted" 
          align="center" 
          className="max-w-2xl mx-auto px-2"
        >
          {t.services.description}
        </BodyText>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBookNow={handleBookNow}
            locale={locale}
          />
        ))}
      </div>
    </Section>
  );
}