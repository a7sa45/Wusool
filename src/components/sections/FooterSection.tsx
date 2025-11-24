'use client';

import React from 'react';
import Link from 'next/link';
import { Section, Container, Heading3, BodyText } from '@/components/ui';
import { useLayout } from '@/components/Layout';
import { CITIES, SERVICE_TYPES, CITY_ROUTES, VEHICLE_TYPES } from '@/lib/seo-content';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { trackWhatsAppOpen } from '@/lib/analytics';

export function FooterSection() {
  const { t, locale } = useLayout();
  const isArabic = locale === 'ar';

  const handleWhatsAppClick = () => {
    trackWhatsAppOpen('footer');
    const message = encodeURIComponent(isArabic ? 'مرحبًا، أود الاستفسار عن خدمات وصول' : 'Hello, I would like to inquire about Wusool services');
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get main cities for quick links
  const mainCities = CITIES.filter(city => 
    ['riyadh', 'jeddah', 'makkah', 'abha', 'taif'].includes(city.id)
  );

  // Get popular routes
  const popularRoutes = CITY_ROUTES.filter(route =>
    ['jeddah-to-makkah', 'makkah-to-jeddah', 'riyadh-to-dammam'].includes(route.slug)
  );

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <Section variant="dark" padding="lg">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold text-primary-gold mb-4">
                وصول
              </div>
              <BodyText locale={locale} color="muted" className="mb-4">
                {isArabic
                  ? 'خدمة نقل موثوقة ومريحة في جميع أنحاء المملكة العربية السعودية'
                  : 'Reliable and comfortable transportation service throughout Saudi Arabia'}
              </BodyText>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                <span className={isArabic ? 'font-arabic' : 'font-inter'}>
                  {WHATSAPP_NUMBER}
                </span>
              </button>
            </div>

            {/* Services by City */}
            <div>
              <Heading3 locale={locale} className="mb-4 text-text-light">
                {isArabic ? 'خدماتنا' : 'Our Services'}
              </Heading3>
              <ul className="space-y-2">
                {SERVICE_TYPES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/${locale}/riyadh/${service.slug}`}
                      className="text-text-light/70 hover:text-primary-gold transition-colors text-sm"
                    >
                      {isArabic ? service.nameAr : service.nameEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Cities */}
            <div>
              <Heading3 locale={locale} className="mb-4 text-text-light">
                {isArabic ? 'المدن الرئيسية' : 'Main Cities'}
              </Heading3>
              <ul className="space-y-2">
                {mainCities.map((city) => (
                  <li key={city.id}>
                    <Link
                      href={`/${locale}/${city.slug}/airport-transfer`}
                      className="text-text-light/70 hover:text-primary-gold transition-colors text-sm"
                    >
                      {isArabic ? city.nameAr : city.nameEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Routes */}
            <div>
              <Heading3 locale={locale} className="mb-4 text-text-light">
                {isArabic ? 'مسارات شائعة' : 'Popular Routes'}
              </Heading3>
              <ul className="space-y-2">
                {popularRoutes.map((route) => {
                  const fromCity = CITIES.find(c => c.id === route.from);
                  const toCity = CITIES.find(c => c.id === route.to);
                  if (!fromCity || !toCity) return null;
                  
                  return (
                    <li key={route.slug}>
                      <Link
                        href={`/${locale}/routes/${route.slug}`}
                        className="text-text-light/70 hover:text-primary-gold transition-colors text-sm"
                      >
                        {isArabic
                          ? `${fromCity.nameAr} - ${toCity.nameAr}`
                          : `${fromCity.nameEn} - ${toCity.nameEn}`}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={`/${locale}/vehicles/family-van`}
                    className="text-text-light/70 hover:text-primary-gold transition-colors text-sm"
                  >
                    {isArabic ? 'أنواع المركبات' : 'Vehicle Types'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Detailed Sitemap */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <Heading3 locale={locale} align="center" className="mb-8 text-text-light">
              {isArabic ? 'جميع خدماتنا' : 'All Our Services'}
            </Heading3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CITIES.map((city) => (
                <div key={city.id} className="bg-gray-800/30 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{city.icon}</span>
                    <Heading3 locale={locale} className="text-text-light">
                      {isArabic ? city.nameAr : city.nameEn}
                    </Heading3>
                  </div>
                  <ul className="space-y-1.5">
                    {SERVICE_TYPES.map((service) => {
                      // Skip tour-chauffeur for Makkah
                      if (city.id === 'makkah' && service.id === 'tour-chauffeur') {
                        return null;
                      }
                      
                      return (
                        <li key={service.id}>
                          <Link
                            href={`/${locale}/${city.slug}/${service.slug}`}
                            className="text-text-light/60 hover:text-primary-gold transition-colors text-sm flex items-center gap-2"
                          >
                            <span>{service.icon}</span>
                            <span>{isArabic ? service.nameAr : service.nameEn}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* All Routes */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <Heading3 locale={locale} align="center" className="mb-6 text-text-light">
              {isArabic ? 'جميع المسارات' : 'All Routes'}
            </Heading3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {CITY_ROUTES.map((route) => {
                const fromCity = CITIES.find(c => c.id === route.from);
                const toCity = CITIES.find(c => c.id === route.to);
                if (!fromCity || !toCity) return null;
                
                return (
                  <Link
                    key={route.slug}
                    href={`/${locale}/routes/${route.slug}`}
                    className="text-text-light/60 hover:text-primary-gold transition-colors text-sm bg-gray-800/20 p-3 rounded-lg hover:bg-gray-800/40"
                  >
                    <div className="flex items-center gap-2">
                      <span>🛣️</span>
                      <span>
                        {isArabic
                          ? `${fromCity.nameAr} → ${toCity.nameAr}`
                          : `${fromCity.nameEn} → ${toCity.nameEn}`}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Vehicle Types */}
          <div className="border-t border-gray-800 pt-8">
            <Heading3 locale={locale} align="center" className="mb-6 text-text-light">
              {isArabic ? 'أنواع المركبات' : 'Vehicle Types'}
            </Heading3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {VEHICLE_TYPES.map((vehicle) => (
                <Link
                  key={vehicle.id}
                  href={`/${locale}/vehicles/${vehicle.slug}`}
                  className="bg-gray-800/30 p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{vehicle.icon}</span>
                    <div>
                      <div className="text-text-light font-semibold">
                        {isArabic ? vehicle.nameAr : vehicle.nameEn}
                      </div>
                      <div className="text-text-light/60 text-sm">
                        {isArabic ? 'سعة:' : 'Capacity:'} {vehicle.capacity} {isArabic ? 'ركاب' : 'passengers'}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <Container size="xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <BodyText locale={locale} color="muted" className="text-sm text-center md:text-right">
              {isArabic
                ? `© ${new Date().getFullYear()} وصول. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Wusool. All rights reserved.`}
            </BodyText>
            
            <div className="flex items-center gap-6">
              <Link
                href={`/${locale}`}
                className="text-text-light/60 hover:text-primary-gold transition-colors text-sm"
              >
                {isArabic ? 'الرئيسية' : 'Home'}
              </Link>
              <Link
                href="/sitemap.xml"
                target="_blank"
                className="text-text-light/60 hover:text-primary-gold transition-colors text-sm"
              >
                {isArabic ? 'خريطة الموقع' : 'Sitemap'}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
