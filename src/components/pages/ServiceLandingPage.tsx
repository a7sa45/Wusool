'use client';

import React from 'react';
import { Section, Heading1, Heading2, Heading3, BodyText, Button, Container } from '@/components/ui';
import { LayoutProvider } from '@/components/Layout';
import { BookingSection } from '@/components/sections/BookingSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { scrollToElement } from '@/lib/utils';
import { trackBookingClick } from '@/lib/analytics';
import type { City, ServiceType } from '@/lib/seo-content';

interface ServiceLandingPageProps {
  city: City;
  service: ServiceType;
  locale: 'ar' | 'en';
}

export function ServiceLandingPage({ city, service, locale }: ServiceLandingPageProps) {
  const isArabic = locale === 'ar';
  const cityName = isArabic ? city.nameAr : city.nameEn;
  const serviceName = isArabic ? service.nameAr : service.nameEn;
  const serviceDesc = isArabic ? service.description.ar : service.description.en;
  
  const handleBookNow = () => {
    trackBookingClick(`${city.id}_${service.id}`);
    scrollToElement('booking-section');
  };
  
  // Generate content based on service type
  const getServiceContent = () => {
    if (service.id === 'airport-transfer' && city.airport) {
      return {
        h1: isArabic
          ? `خدمة التوصيل من وإلى ${city.airport.nameAr}`
          : `Transfer Service to/from ${city.airport.nameEn}`,
        intro: isArabic
          ? `احجز خدمة توصيل موثوقة من وإلى ${city.airport.nameAr} (${city.airport.code}) مع وصول. نوفر لك نقلاً آمناً ومريحاً على مدار الساعة مع سائقين محترفين ومركبات حديثة.`
          : `Book reliable transfer service to/from ${city.airport.nameEn} (${city.airport.code}) with Wusool. We provide safe and comfortable transport 24/7 with professional drivers and modern vehicles.`,
        features: isArabic ? [
          'تتبع الرحلات: نتابع مواعيد رحلتك تلقائياً',
          'خدمة الاستقبال: سائقك سينتظرك في صالة الوصول',
          'أسعار ثابتة: لا رسوم إضافية على الانتظار',
          'مركبات فاخرة: أسطول حديث ونظيف'
        ] : [
          'Flight Tracking: We automatically monitor your flight',
          'Meet & Greet: Your driver will wait in arrival hall',
          'Fixed Prices: No extra charges for waiting',
          'Luxury Vehicles: Modern and clean fleet'
        ]
      };
    }
    
    if (service.id === 'private-driver') {
      return {
        h1: isArabic
          ? `خدمة السائق الخاص في ${cityName}`
          : `Private Driver Service in ${cityName}`,
        intro: isArabic
          ? `هل تحتاج سائق خاص في ${cityName}؟ نوفر لك سائقين محترفين بالساعة أو اليوم لجميع احتياجاتك. سواء للعمل أو التسوق أو الجولات، نحن في خدمتك.`
          : `Need a private driver in ${cityName}? We provide professional drivers by the hour or day for all your needs. Whether for business, shopping, or tours, we're at your service.`,
        features: isArabic ? [
          'مرونة كاملة: السائق والسيارة تحت تصرفك',
          'سائقون محليون: خبرة بجميع طرق المدينة',
          'خدمة بالساعة أو اليوم: اختر ما يناسبك',
          'مركبات متنوعة: من السيدان إلى الفان العائلي'
        ] : [
          'Full Flexibility: Driver and car at your disposal',
          'Local Drivers: Expert in all city routes',
          'Hourly or Daily Service: Choose what suits you',
          'Various Vehicles: From sedan to family van'
        ]
      };
    }
    
    if (service.id === 'tour-chauffeur') {
      return {
        h1: isArabic
          ? `جولات سياحية في ${cityName} مع سائق خاص`
          : `Tourist Tours in ${cityName} with Private Driver`,
        intro: isArabic
          ? `اكتشف جمال ${cityName} مع سائق خاص محلي خبير بالمعالم السياحية. نصمم لك جولات مخصصة تناسب اهتماماتك ووقتك.`
          : `Discover the beauty of ${cityName} with a local private driver expert in tourist attractions. We design customized tours that suit your interests and time.`,
        features: isArabic ? [
          'سائق محلي خبير: معرفة واسعة بالمعالم السياحية',
          'جولات مخصصة: صمم برنامجك الخاص',
          'مرونة كاملة: غير المسار حسب رغبتك',
          'راحة العائلة: سيارات عائلية واسعة'
        ] : [
          'Expert Local Driver: Extensive knowledge of attractions',
          'Customized Tours: Design your own program',
          'Full Flexibility: Change route as you wish',
          'Family Comfort: Spacious family vehicles'
        ]
      };
    }
    
    return {
      h1: `${serviceName} ${cityName}`,
      intro: serviceDesc,
      features: []
    };
  };
  
  const content = getServiceContent();
  
  return (
    <LayoutProvider initialLocale={locale}>
      <div className="min-h-screen bg-primary-dark">
        {/* Hero Section */}
        <Section variant="dark" padding="xl">
          <Container size="lg">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl mb-6">{service.icon}</div>
              
              <Heading1 locale={locale} align="center" className="mb-6">
                {content.h1}
              </Heading1>
              
              <BodyText locale={locale} color="muted" align="center" className="mb-8 text-lg">
                {content.intro}
              </BodyText>
              
              <Button size="lg" onClick={handleBookNow} className="text-lg px-12 py-4">
                {isArabic ? 'احجز الآن' : 'Book Now'}
              </Button>
            </div>
          </Container>
        </Section>
        
        {/* Features Section */}
        {content.features.length > 0 && (
          <Section variant="default" padding="lg">
            <Container size="lg">
              <Heading2 locale={locale} align="center" className="mb-12">
                {isArabic ? 'مزايا خدمتنا' : 'Our Service Features'}
              </Heading2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {content.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary-gold transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">✓</div>
                      <BodyText locale={locale} className="flex-1">
                        {feature}
                      </BodyText>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}
        
        {/* Pricing Section */}
        <Section variant="dark" padding="lg">
          <Container size="md">
            <Heading2 locale={locale} align="center" className="mb-6">
              {isArabic ? 'الأسعار والباقات' : 'Pricing & Packages'}
            </Heading2>
            
            <BodyText locale={locale} align="center" color="muted" className="mb-8">
              {isArabic
                ? 'نقدم أسعاراً شفافة وتنافسية بدون رسوم خفية. احصل على عرض سعر فوري عند الحجز.'
                : 'We offer transparent and competitive prices without hidden fees. Get instant quote when booking.'}
            </BodyText>
            
            <div className="text-center">
              <Button size="lg" onClick={handleBookNow}>
                {isArabic ? 'احصل على عرض سعر' : 'Get Quote'}
              </Button>
            </div>
          </Container>
        </Section>
        
        {/* FAQ Section */}
        <Section variant="default" padding="lg">
          <Container size="md">
            <Heading2 locale={locale} align="center" className="mb-12">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </Heading2>
            
            <div className="space-y-6">
              {getFAQs(service.id, city.id, isArabic).map((faq, index) => (
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
        
        {/* Footer */}
        <FooterSection />
        
        {/* Floating WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </LayoutProvider>
  );
}

// Helper function to get FAQs based on service and city
function getFAQs(serviceId: string, cityId: string, isArabic: boolean) {
  const commonFAQs = isArabic ? [
    {
      question: 'كيف يمكنني الحجز؟',
      answer: 'يمكنك الحجز مباشرة من خلال نموذج الحجز في الأسفل أو عبر الواتساب.'
    },
    {
      question: 'هل الأسعار تشمل الوقود والرسوم؟',
      answer: 'نعم، جميع أسعارنا نهائية وتشمل الوقود ورسوم الطرق.'
    },
    {
      question: 'هل يمكن إلغاء الحجز؟',
      answer: 'نعم، يمكن الإلغاء المجاني قبل 24 ساعة من موعد الرحلة.'
    }
  ] : [
    {
      question: 'How can I book?',
      answer: 'You can book directly through the booking form below or via WhatsApp.'
    },
    {
      question: 'Do prices include fuel and fees?',
      answer: 'Yes, all our prices are final and include fuel and road fees.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, free cancellation is available up to 24 hours before the trip.'
    }
  ];
  
  return commonFAQs;
}
