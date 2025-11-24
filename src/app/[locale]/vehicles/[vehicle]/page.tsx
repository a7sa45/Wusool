import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VEHICLE_TYPES } from '@/lib/seo-content';
import { VehicleLandingPage } from '@/components/pages/VehicleLandingPage';

interface PageProps {
  params: {
    locale: string;
    vehicle: string;
  };
}

// Generate static paths for all vehicles
export async function generateStaticParams() {
  const paths: { locale: string; vehicle: string }[] = [];
  
  const locales = ['ar', 'en'];
  
  locales.forEach(locale => {
    VEHICLE_TYPES.forEach(vehicle => {
      paths.push({
        locale,
        vehicle: vehicle.slug
      });
    });
  });
  
  return paths;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, vehicle } = params;
  
  const vehicleData = VEHICLE_TYPES.find(v => v.slug === vehicle);
  
  if (!vehicleData) {
    return {
      title: 'Page Not Found | Wusool'
    };
  }
  
  const isArabic = locale === 'ar';
  const vehicleName = isArabic ? vehicleData.nameAr : vehicleData.nameEn;
  
  const title = isArabic
    ? `${vehicleName} مع سائق - خدمة فاخرة ومريحة | وصول`
    : `${vehicleName} with Driver - Luxury and Comfortable Service | Wusool`;
    
  const description = isArabic
    ? `احجز ${vehicleName} مع سائق محترف. سعة ${vehicleData.capacity} ركاب. خدمة متميزة وأسعار تنافسية في جميع مدن المملكة.`
    : `Book ${vehicleName} with professional driver. Capacity ${vehicleData.capacity} passengers. Premium service and competitive prices in all Saudi cities.`;
  
  return {
    title,
    description,
    keywords: [
      vehicleName,
      isArabic ? 'سيارة مع سائق' : 'car with driver',
      isArabic ? 'حجز سيارة فاخرة' : 'luxury car booking',
      isArabic ? 'سائق خاص' : 'private driver'
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isArabic ? 'ar_SA' : 'en_US',
      url: `https://trywusool.com/${locale}/vehicles/${vehicle}`,
      siteName: 'Wusool'
    },
    alternates: {
      canonical: `https://trywusool.com/${locale}/vehicles/${vehicle}`,
      languages: {
        'ar': `/ar/vehicles/${vehicle}`,
        'en': `/en/vehicles/${vehicle}`
      }
    }
  };
}

export default function VehiclePage({ params }: PageProps) {
  const { locale, vehicle } = params;
  
  const vehicleData = VEHICLE_TYPES.find(v => v.slug === vehicle);
  
  if (!vehicleData) {
    notFound();
  }
  
  return (
    <VehicleLandingPage
      vehicle={vehicleData}
      locale={locale as 'ar' | 'en'}
    />
  );
}
