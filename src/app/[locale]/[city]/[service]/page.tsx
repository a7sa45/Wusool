import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES, SERVICE_TYPES } from '@/lib/seo-content';
import { ServiceLandingPage } from '@/components/pages/ServiceLandingPage';

interface PageProps {
  params: {
    locale: string;
    city: string;
    service: string;
  };
}

// Generate static paths for all city/service combinations
export async function generateStaticParams() {
  const paths: { locale: string; city: string; service: string }[] = [];
  
  const locales = ['ar', 'en'];
  
  locales.forEach(locale => {
    CITIES.forEach(city => {
      SERVICE_TYPES.forEach(service => {
        // Skip tour-chauffeur for Makkah (not applicable)
        if (city.id === 'makkah' && service.id === 'tour-chauffeur') {
          return;
        }
        
        paths.push({
          locale,
          city: city.slug,
          service: service.slug
        });
      });
    });
  });
  
  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, city, service } = params;
  
  const cityData = CITIES.find(c => c.slug === city);
  const serviceData = SERVICE_TYPES.find(s => s.slug === service);
  
  if (!cityData || !serviceData) {
    return {
      title: 'Page Not Found | Wusool'
    };
  }
  
  const isArabic = locale === 'ar';
  const cityName = isArabic ? cityData.nameAr : cityData.nameEn;
  const serviceName = isArabic ? serviceData.nameAr : serviceData.nameEn;
  
  const title = isArabic
    ? `${serviceName} ${cityName} - خدمة موثوقة مع سائق محترف | وصول`
    : `${serviceName} ${cityName} - Reliable Service with Professional Driver | Wusool`;
    
  const description = isArabic
    ? `احجز ${serviceName} في ${cityName} مع وصول. ${serviceData.description.ar}. خدمة متميزة وأسعار تنافسية.`
    : `Book ${serviceName} in ${cityName} with Wusool. ${serviceData.description.en}. Premium service and competitive prices.`;
  
  return {
    title,
    description,
    keywords: [
      `${serviceName} ${cityName}`,
      isArabic ? 'سائق خاص' : 'private driver',
      isArabic ? 'حجز سيارة' : 'car booking',
      cityName,
      serviceName
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      url: `https://trywusool.com/${locale}/${city}/${service}`,
      siteName: 'Wusool'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    alternates: {
      canonical: `https://trywusool.com/${locale}/${city}/${service}`,
      languages: {
        'ar': `/ar/${city}/${service}`,
        'en': `/en/${city}/${service}`
      }
    }
  };
}

export default function CityServicePage({ params }: PageProps) {
  const { locale, city, service } = params;
  
  const cityData = CITIES.find(c => c.slug === city);
  const serviceData = SERVICE_TYPES.find(s => s.slug === service);
  
  if (!cityData || !serviceData) {
    notFound();
  }
  
  // Skip tour-chauffeur for Makkah
  if (cityData.id === 'makkah' && serviceData.id === 'tour-chauffeur') {
    notFound();
  }
  
  return (
    <ServiceLandingPage
      city={cityData}
      service={serviceData}
      locale={locale as 'ar' | 'en'}
    />
  );
}
