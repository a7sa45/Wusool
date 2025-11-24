import { MetadataRoute } from 'next';
import { CITIES, SERVICE_TYPES, CITY_ROUTES, VEHICLE_TYPES } from '@/lib/seo-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trywusool.com';
  const lastModified = new Date();
  
  const sitemap: MetadataRoute.Sitemap = [
    // Home pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/ar`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
  
  // City + Service pages
  const locales = ['ar', 'en'];
  
  locales.forEach(locale => {
    CITIES.forEach(city => {
      SERVICE_TYPES.forEach(service => {
        // Skip tour-chauffeur for Makkah
        if (city.id === 'makkah' && service.id === 'tour-chauffeur') {
          return;
        }
        
        sitemap.push({
          url: `${baseUrl}/${locale}/${city.slug}/${service.slug}`,
          lastModified,
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    });
    
    // Route pages
    CITY_ROUTES.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}/routes/${route.slug}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
    
    // Vehicle pages
    VEHICLE_TYPES.forEach(vehicle => {
      sitemap.push({
        url: `${baseUrl}/${locale}/vehicles/${vehicle.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });
  
  return sitemap;
}