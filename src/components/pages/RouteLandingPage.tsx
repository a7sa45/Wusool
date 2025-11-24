'use client';

import React from 'react';
import { Section, Heading1, Heading2, Heading3, BodyText, Button, Container } from '@/components/ui';
import { LayoutProvider } from '@/components/Layout';
import { BookingSection } from '@/components/sections/BookingSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { scrollToElement } from '@/lib/utils';
import { trackBookingClick } from '@/lib/analytics';
import type { City, CityRoute } from '@/lib/seo-content';
import { jeddahToMakkahContent } from '@/lib/page-content';

interface RouteLandingPageProps {
  route: CityRoute;
  fromCity: City;
  toCity: City;
  locale: 'ar' | 'en';
}

export function RouteLandingPage({ route, fromCity, toCity, locale }: RouteLandingPageProps) {
  const isArabic = locale === 'ar';
  const fromName = isArabic ? fromCity.nameAr : fromCity.nameEn;
  const toName = isArabic ? toCity.nameAr : toCity.nameEn;
  
  const handleBookNow = () => {
    trackBookingClick(`route_${route.slug}`);
    scrollToElement('booking-section');
  };
  
  // Get specific content for special routes
  const getRouteContent = () => {
    if (route.slug === 'jeddah-to-makkah') {
      const content = isArabic ? jeddahToMakkahContent.ar : jeddahToMakkahContent.en;
      return content;
    }
    
    // Default content for other routes
    return {
      h1: isArabic
        ? `خدمة التوصيل من ${fromName} إلى ${toName}`
        : `Transfer Service from ${fromName} to ${toName}`,
      intro: isArabic
        ? `احجز خدمة توصيل موثوقة من ${fromName} إلى ${toName} مع وصول. نوفر لك رحلة مريحة وآمنة مع سائق محترف. المسافة ${route.distance} والمدة التقريبية ${route.duration}.`
        : `Book reliable transfer service from ${fromName} to ${toName} with Wusool. We provide comfortable and safe journey with professional driver. Distance ${route.distance}, approximate duration ${route.duration}.`,
      sections: [
        {
          title: isArabic ? 'مزايا خدمة النقل بين المدن' : 'Intercity Transfer Benefits',
          content: isArabic
            ? 'نوفر لك تجربة سفر متميزة بين المدن:'
            : 'We provide you with premium travel experience between cities:',
          list: isArabic ? [
            'سائقون خبراء: معرفة تامة بالطرق والمسارات',
            'مركبات مريحة: سيارات حديثة ونظيفة',
            'رحلة آمنة: التزام بقواعد السلامة والمرور',
            'أسعار ثابتة: لا رسوم إضافية مفاجئة'
          ] : [
            'Expert Drivers: Complete knowledge of roads and routes',
            'Comfortable Vehicles: Modern and clean cars',
            'Safe Journey: Commitment to safety and traffic rules',
            'Fixed Prices: No surprise additional fees'
          ]
        }
      ],
      faq: isArabic ? [
        {
          question: `كم تستغرق الرحلة من ${fromName} إلى ${toName}؟`,
          answer: `تستغرق الرحلة حوالي ${route.duration} حسب حركة المرور والظروف الجوية.`
        },
        {
          question: 'هل يمكن التوقف في الطريق؟',
          answer: 'نعم، يمكنك طلب التوقف في محطات الاستراحة أو أي مكان آخر.'
        },
        {
          question: 'هل السعر يشمل رسوم الطريق؟',
          answer: 'نعم، جميع الأسعار نهائية وتشمل رسوم الطريق والوقود.'
        }
      ] : [
        {
          question: `How long does the trip from ${fromName} to ${toName} take?`,
          answer: `The trip takes approximately ${route.duration} depending on traffic and weather conditions.`
        },
        {
          question: 'Can we stop along the way?',
          answer: 'Yes, you can request stops at rest areas or any other location.'
        },
        {
          question: 'Does the price include road fees?',
          answer: 'Yes, all prices are final and include road fees and fuel.'
        }
      ],
      keywords: []
    };
  };
  
  const content = getRouteContent();
  
  return (
    <LayoutProvider initialLocale={locale}>
      <div className="min-h-screen bg-primary-dark">
        {/* Hero Section */}
        <Section variant="dark" padding="xl">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🛣️</div>
              
              <Heading1 locale={locale} align="center" className="mb-6">
                {content.h1}
              </Heading1>
              
              <BodyText locale={locale} color="muted" align="center" className="mb-6 text-lg">
                {content.intro}
              </BodyText>
              
              {/* Route Info */}
              <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
                <div className="bg-gray-800/50 px-6 py-3 rounded-lg border border-gray-700">
                  <BodyText locale={locale} weight="semibold">
                    {isArabic ? 'المسافة:' : 'Distance:'} {route.distance}
                  </BodyText>
                </div>
                <div className="bg-gray-800/50 px-6 py-3 rounded-lg border border-gray-700">
                  <BodyText locale={locale} weight="semibold">
                    {isArabic ? 'المدة:' : 'Duration:'} {route.duration}
                  </BodyText>
                </div>
              </div>
              
              <Button size="lg" onClick={handleBookNow} className="text-lg px-12 py-4">
                {isArabic ? 'احجز رحلتك الآن' : 'Book Your Trip Now'}
              </Button>
            </div>
          </Container>
        </Section>
        
        {/* Features/Sections */}
        {content.sections && content.sections.map((section, index) => (
          <Section key={index} variant={index % 2 === 0 ? 'default' : 'dark'} padding="lg">
            <Container size="lg">
              <Heading2 locale={locale} align="center" className="mb-8">
                {section.title}
              </Heading2>
              
              {section.content && (
                <BodyText locale={locale} align="center" color="muted" className="mb-8 max-w-3xl mx-auto">
                  {section.content}
                </BodyText>
              )}
              
              {section.list && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {section.list.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-gold transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl text-primary-gold">✓</div>
                        <BodyText locale={locale} className="flex-1">
                          {item}
                        </BodyText>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Container>
          </Section>
        ))}
        
        {/* Vehicle Options */}
        <Section variant="default" padding="lg">
          <Container size="lg">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'اختر المركبة المناسبة' : 'Choose Your Vehicle'}
            </Heading2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🚙',
                  name: isArabic ? 'سيدان فاخرة' : 'Luxury Sedan',
                  capacity: '1-3',
                  desc: isArabic ? 'مثالية للأفراد والأزواج' : 'Ideal for individuals and couples'
                },
                {
                  icon: '🚐',
                  name: isArabic ? 'فان عائلي' : 'Family Van',
                  capacity: '4-7',
                  desc: isArabic ? 'مثالية للعائلات والمجموعات' : 'Ideal for families and groups'
                },
                {
                  icon: '🚗',
                  name: isArabic ? 'ليموزين VIP' : 'VIP Limousine',
                  capacity: '1-4',
                  desc: isArabic ? 'فخامة وراحة قصوى' : 'Ultimate luxury and comfort'
                }
              ].map((vehicle, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-gold transition-colors text-center"
                >
                  <div className="text-5xl mb-4">{vehicle.icon}</div>
                  <Heading3 locale={locale} align="center" className="mb-2">
                    {vehicle.name}
                  </Heading3>
                  <BodyText locale={locale} color="accent" align="center" className="mb-3">
                    {isArabic ? 'سعة:' : 'Capacity:'} {vehicle.capacity} {isArabic ? 'ركاب' : 'passengers'}
                  </BodyText>
                  <BodyText locale={locale} color="muted" align="center">
                    {vehicle.desc}
                  </BodyText>
                </div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* FAQ Section */}
        <Section variant="dark" padding="lg">
          <Container size="md">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </Heading2>
            
            <div className="space-y-6">
              {content.faq.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <Heading3 locale={locale} className="mb-3">
                    {faq.question}
                  </Heading3>
                  <BodyText locale={locale} color="muted">
                    {faq.answer}
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
