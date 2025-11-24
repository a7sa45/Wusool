'use client';

import React from 'react';
import { Section, Heading1, Heading2, Heading3, BodyText, Button, Container } from '@/components/ui';
import { LayoutProvider } from '@/components/Layout';
import { BookingSection } from '@/components/sections/BookingSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { scrollToElement } from '@/lib/utils';
import { trackBookingClick } from '@/lib/analytics';

interface VehicleType {
  id: string;
  nameAr: string;
  nameEn: string;
  slug: string;
  capacity: string;
  icon: string;
  features: {
    ar: string[];
    en: string[];
  };
}

interface VehicleLandingPageProps {
  vehicle: VehicleType;
  locale: 'ar' | 'en';
}

export function VehicleLandingPage({ vehicle, locale }: VehicleLandingPageProps) {
  const isArabic = locale === 'ar';
  const vehicleName = isArabic ? vehicle.nameAr : vehicle.nameEn;
  const features = isArabic ? vehicle.features.ar : vehicle.features.en;
  
  const handleBookNow = () => {
    trackBookingClick(`vehicle_${vehicle.id}`);
    scrollToElement('booking-section');
  };
  
  return (
    <LayoutProvider initialLocale={locale}>
      <div className="min-h-screen bg-primary-dark">
        {/* Hero Section */}
        <Section variant="dark" padding="xl">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">{vehicle.icon}</div>
              
              <Heading1 locale={locale} align="center" className="mb-6">
                {vehicleName}
              </Heading1>
              
              <BodyText locale={locale} color="muted" align="center" className="mb-6 text-lg">
                {isArabic
                  ? `احجز ${vehicleName} مع سائق محترف. سعة ${vehicle.capacity} ركاب. خدمة متميزة في جميع مدن المملكة.`
                  : `Book ${vehicleName} with professional driver. Capacity ${vehicle.capacity} passengers. Premium service in all Saudi cities.`}
              </BodyText>
              
              <div className="bg-gray-800/50 px-8 py-4 rounded-lg border border-gray-700 inline-block mb-8">
                <BodyText locale={locale} weight="semibold" className="text-lg">
                  {isArabic ? 'سعة:' : 'Capacity:'} {vehicle.capacity} {isArabic ? 'ركاب' : 'passengers'}
                </BodyText>
              </div>
              
              <div>
                <Button size="lg" onClick={handleBookNow} className="text-lg px-12 py-4">
                  {isArabic ? 'احجز الآن' : 'Book Now'}
                </Button>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Features Section */}
        <Section variant="default" padding="lg">
          <Container size="lg">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'مميزات المركبة' : 'Vehicle Features'}
            </Heading2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-gold transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl text-primary-gold">✓</div>
                    <BodyText locale={locale} className="flex-1">
                      {feature}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* Use Cases Section */}
        <Section variant="dark" padding="lg">
          <Container size="lg">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'الاستخدامات المثالية' : 'Ideal Use Cases'}
            </Heading2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {getUseCases(vehicle.id, isArabic).map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <Heading3 locale={locale} className="mb-3">
                    {useCase.title}
                  </Heading3>
                  <BodyText locale={locale} color="muted">
                    {useCase.description}
                  </BodyText>
                </div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* Available Services */}
        <Section variant="default" padding="lg">
          <Container size="lg">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'الخدمات المتاحة' : 'Available Services'}
            </Heading2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '✈️',
                  title: isArabic ? 'توصيل المطار' : 'Airport Transfer',
                  desc: isArabic ? 'نقل من وإلى جميع المطارات' : 'Transfer to/from all airports'
                },
                {
                  icon: '🚗',
                  title: isArabic ? 'سائق خاص' : 'Private Driver',
                  desc: isArabic ? 'بالساعة أو اليوم' : 'By hour or day'
                },
                {
                  icon: '🛣️',
                  title: isArabic ? 'النقل بين المدن' : 'Intercity Transfer',
                  desc: isArabic ? 'رحلات آمنة بين المدن' : 'Safe trips between cities'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-gold transition-colors text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <Heading3 locale={locale} align="center" className="mb-3">
                    {service.title}
                  </Heading3>
                  <BodyText locale={locale} color="muted" align="center">
                    {service.desc}
                  </BodyText>
                </div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* Booking Section */}
        <BookingSection />
        
        {/* Floating WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </LayoutProvider>
  );
}

function getUseCases(vehicleId: string, isArabic: boolean) {
  if (vehicleId === 'family-van') {
    return isArabic ? [
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'رحلات العائلة',
        description: 'مثالية للعائلات الكبيرة والمجموعات مع مساحة واسعة للأمتعة'
      },
      {
        icon: '🕋',
        title: 'رحلات العمرة',
        description: 'مريحة لنقل العائلات إلى الحرمين الشريفين'
      },
      {
        icon: '🗺️',
        title: 'الجولات السياحية',
        description: 'راحة قصوى للجولات الطويلة مع العائلة'
      },
      {
        icon: '✈️',
        title: 'نقل المطار',
        description: 'مساحة كافية لجميع الأمتعة والركاب'
      }
    ] : [
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Family Trips',
        description: 'Ideal for large families and groups with ample luggage space'
      },
      {
        icon: '🕋',
        title: 'Umrah Trips',
        description: 'Comfortable for transporting families to the Holy Mosques'
      },
      {
        icon: '🗺️',
        title: 'Tourist Tours',
        description: 'Maximum comfort for long tours with family'
      },
      {
        icon: '✈️',
        title: 'Airport Transfer',
        description: 'Enough space for all luggage and passengers'
      }
    ];
  }
  
  if (vehicleId === 'limousine-vip') {
    return isArabic ? [
      {
        icon: '💼',
        title: 'رحلات الأعمال',
        description: 'انطباع احترافي لاجتماعاتك المهمة'
      },
      {
        icon: '💍',
        title: 'المناسبات الخاصة',
        description: 'أضف لمسة من الفخامة لمناسباتك'
      },
      {
        icon: '🌟',
        title: 'استقبال VIP',
        description: 'استقبال راقي للضيوف المميزين'
      },
      {
        icon: '🎭',
        title: 'الفعاليات الرسمية',
        description: 'مثالية للحفلات والمؤتمرات'
      }
    ] : [
      {
        icon: '💼',
        title: 'Business Trips',
        description: 'Professional impression for your important meetings'
      },
      {
        icon: '💍',
        title: 'Special Occasions',
        description: 'Add a touch of luxury to your occasions'
      },
      {
        icon: '🌟',
        title: 'VIP Reception',
        description: 'Elegant reception for distinguished guests'
      },
      {
        icon: '🎭',
        title: 'Official Events',
        description: 'Perfect for parties and conferences'
      }
    ];
  }
  
  // Sedan
  return isArabic ? [
    {
      icon: '💼',
      title: 'رحلات العمل',
      description: 'مريحة وأنيقة لرحلات الأعمال اليومية'
    },
    {
      icon: '✈️',
      title: 'نقل المطار',
      description: 'مثالية للمسافرين الأفراد والأزواج'
    },
    {
      icon: '🏨',
      title: 'التنقلات اليومية',
      description: 'حل مثالي للتنقل داخل المدينة'
    },
    {
      icon: '🛣️',
      title: 'الرحلات القصيرة',
      description: 'مناسبة للرحلات بين المدن القريبة'
    }
  ] : [
    {
      icon: '💼',
      title: 'Business Trips',
      description: 'Comfortable and elegant for daily business trips'
    },
    {
      icon: '✈️',
      title: 'Airport Transfer',
      description: 'Ideal for individual travelers and couples'
    },
    {
      icon: '🏨',
      title: 'Daily Commutes',
      description: 'Perfect solution for city transportation'
    },
    {
      icon: '🛣️',
      title: 'Short Trips',
      description: 'Suitable for trips between nearby cities'
    }
  ];
}
