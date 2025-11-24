import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES, CITY_ROUTES } from '@/lib/seo-content';
import { RouteLandingPage } from '@/components/pages/RouteLandingPage';

interface PageProps {
  params: {
    locale: string;
    route: string;
  };
}

// Generate static paths for all routes
export async function generateStaticParams() {
  const paths: { locale: string; route: string }[] = [];
  
  const locales = ['ar', 'en'];
  
  locales.forEach(locale => {
    CITY_ROUTES.forEach(route => {
      paths.push({
        locale,
        route: route.slug
      });
    });
  });
  
  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, route } = params;
  
  const routeData = CITY_ROUTES.find(r => r.slug === route);
  
  if (!routeData) {
    return {
      title: 'Page Not Found | Wusool'
    };
  }
  
  const fromCity = CITIES.find(c => c.id === routeData.from);
  const toCity = CITIES.find(c => c.id === routeData.to);
  
  if (!fromCity || !toCity) {
    return {
      title: 'Page Not Found | Wusool'
    };
  }
  
  const isArabic = locale === 'ar';
  const fromName = isArabic ? fromCity.nameAr : fromCity.nameEn;
  const toName = isArabic ? toCity.nameAr : toCity.nameEn;
  
  const title = isArabic
    ? `توصيل من ${fromName} إلى ${toName} - خدمة نقل مريحة وآمنة | وصول`
    : `Transfer from ${fromName} to ${toName} - Comfortable and Safe Transport | Wusool`;
    
  const description = isArabic
    ? `خدمة توصيل من ${fromName} إلى ${toName} مع سائق محترف. المسافة ${routeData.distance} والمدة ${routeData.duration}. احجز الآن بأفضل الأسعار!`
    : `Transfer service from ${fromName} to ${toName} with professional driver. Distance ${routeData.distance}, duration ${routeData.duration}. Book now at best prices!`;
  
  return {
    title,
    description,
    keywords: [
      isArabic ? `توصيل ${fromName} ${toName}` : `${fromName} to ${toName} transfer`,
      isArabic ? `سعر مشوار ${fromName} ${toName}` : `${fromName} ${toName} price`,
      isArabic ? `حجز سيارة ${fromName} ${toName}` : `book car ${fromName} ${toName}`,
      isArabic ? 'نقل بين المدن' : 'intercity transfer'
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      url: `https://trywusool.com/${locale}/routes/${route}`,
      siteName: 'Wusool'
    },
    alternates: {
      canonical: `https://trywusool.com/${locale}/routes/${route}`,
      languages: {
        'ar': `/ar/routes/${route}`,
        'en': `/en/routes/${route}`
      }
    }
  };
}

export default function RoutePage({ params }: PageProps) {
  const { locale, route } = params;
  
  const routeData = CITY_ROUTES.find(r => r.slug === route);
  
  if (!routeData) {
    notFound();
  }
  
  const fromCity = CITIES.find(c => c.id === routeData.from);
  const toCity = CITIES.find(c => c.id === routeData.to);
  
  if (!fromCity || !toCity) {
    notFound();
  }
  
  return (
    <RouteLandingPage
      route={routeData}
      fromCity={fromCity}
      toCity={toCity}
      locale={locale as 'ar' | 'en'}
    />
  );
}
