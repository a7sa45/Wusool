'use client';

import React from 'react';
import { Section, Heading2, BodyText, Card, CardContent } from '@/components/ui';
import { useLayout } from '@/components/Layout';

export function TrustSection() {
  const { t, locale } = useLayout();

  const trustStats = [
    {
      icon: '🚘',
      text: t.trust.stats.trips,
    },
    {
      icon: '⭐',
      text: t.trust.stats.rating,
    },
    {
      icon: '💎',
      text: t.trust.stats.vehicles,
    },
  ];

  return (
    <Section variant="default" padding="lg" containerSize="md">
      <div className="text-center mb-8 sm:mb-12">
        <Heading2 
          locale={locale} 
          align="center" 
          className="mb-6 sm:mb-8"
        >
          {t.trust.title}
        </Heading2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {trustStats.map((stat, index) => (
          <Card key={index} variant="elevated" padding="md" className="text-center">
            <CardContent>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                {stat.icon}
              </div>
              <BodyText 
                locale={locale} 
                color="muted" 
                align="center"
                className="leading-relaxed"
              >
                {stat.text}
              </BodyText>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <BodyText 
          locale={locale} 
          color="accent" 
          weight="semibold" 
          align="center"
          className="text-lg sm:text-xl px-2"
        >
          {locale === 'ar' ? 'وصول — التجربة التي تستحقها في كل رحلة' : 'Wusool — The experience you deserve, every time'}
        </BodyText>
      </div>
    </Section>
  );
}