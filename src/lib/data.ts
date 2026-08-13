export interface Service {
  id: string;
  icon: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  priceFrom: number;
  currency: 'SAR';
}

export const SERVICES: Service[] = [
  {
    id: 'full-day',
    icon: '🚘',
    nameAr: 'سائق خاص ليوم كامل',
    nameEn: 'Full-Day Private Driver',
    descriptionAr: 'سيارة عائلية وسائق محترف لمدة 8 ساعات داخل المدينة أو خارجها',
    descriptionEn: 'Family vehicle and professional driver for 8 hours within or around the city',
    priceFrom: 500,
    currency: 'SAR'
  },
  {
    id: 'airport',
    icon: '🧳',
    nameAr: 'توصيلة المطار',
    nameEn: 'Airport Transfer',
    descriptionAr: 'نقل مريح من وإلى مطار أبها بسيارة حديثة وسائق ملتزم بالمواعيد',
    descriptionEn: 'Comfortable rides to and from Abha Airport with punctual drivers',
    priceFrom: 150,
    currency: 'SAR'
  },
  {
    id: 'city',
    icon: '🌆',
    nameAr: 'تنقل داخل المدينة',
    nameEn: 'City Ride',
    descriptionAr: 'جولة قصيرة داخل المدينة لزيارة الأماكن السياحية والمطاعم المميزة',
    descriptionEn: '3–6 hours of private travel to explore local attractions and restaurants',
    priceFrom: 300,
    currency: 'SAR'
  }
];

export const CITIES = [
  { id: 'abha', nameAr: 'أبها', nameEn: 'Abha' },
  { id: 'taif', nameAr: 'الطائف', nameEn: 'Taif' },
  { id: 'baha', nameAr: 'الباحة', nameEn: 'Baha' }
];

export const WHATSAPP_NUMBER = '966533578337';