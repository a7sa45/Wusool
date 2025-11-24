// SEO Content Structure for Wusool

export interface City {
  id: string;
  nameAr: string;
  nameEn: string;
  slug: string;
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  airport?: {
    code: string;
    nameAr: string;
    nameEn: string;
  };
}

export interface ServiceType {
  id: string;
  nameAr: string;
  nameEn: string;
  slug: string;
  icon: string;
  description: {
    ar: string;
    en: string;
  };
}

export interface CityRoute {
  from: string;
  to: string;
  distance: string;
  duration: string;
  slug: string;
}

// المدن الرئيسية
export const CITIES: City[] = [
  {
    id: 'riyadh',
    nameAr: 'الرياض',
    nameEn: 'Riyadh',
    slug: 'riyadh',
    description: {
      ar: 'عاصمة المملكة ومركز الأعمال',
      en: 'Capital of Saudi Arabia and business hub'
    },
    icon: '🏙️',
    airport: {
      code: 'RUH',
      nameAr: 'مطار الملك خالد الدولي',
      nameEn: 'King Khalid International Airport'
    }
  },
  {
    id: 'jeddah',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    slug: 'jeddah',
    description: {
      ar: 'عروس البحر الأحمر وبوابة الحرمين',
      en: 'Bride of the Red Sea and Gateway to the Holy Cities'
    },
    icon: '🌊',
    airport: {
      code: 'JED',
      nameAr: 'مطار الملك عبدالعزيز الدولي',
      nameEn: 'King Abdulaziz International Airport'
    }
  },
  {
    id: 'makkah',
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    slug: 'makkah',
    description: {
      ar: 'أقدس بقاع الأرض وقبلة المسلمين',
      en: 'The Holiest City in Islam'
    },
    icon: '🕋'
  },
  {
    id: 'madinah',
    nameAr: 'المدينة المنورة',
    nameEn: 'Madinah',
    slug: 'madinah',
    description: {
      ar: 'مدينة رسول الله صلى الله عليه وسلم',
      en: 'City of the Prophet Muhammad (PBUH)'
    },
    icon: '🕌',
    airport: {
      code: 'MED',
      nameAr: 'مطار الأمير محمد بن عبدالعزيز',
      nameEn: 'Prince Mohammad Bin Abdulaziz Airport'
    }
  },
  {
    id: 'taif',
    nameAr: 'الطائف',
    nameEn: 'Taif',
    slug: 'taif',
    description: {
      ar: 'مدينة الورود والمصايف',
      en: 'City of Roses and Summer Resorts'
    },
    icon: '🌹',
    airport: {
      code: 'TIF',
      nameAr: 'مطار الطائف الدولي',
      nameEn: 'Taif International Airport'
    }
  },
  {
    id: 'abha',
    nameAr: 'أبها',
    nameEn: 'Abha',
    slug: 'abha',
    description: {
      ar: 'عروس الجنوب وعاصمة السياحة العربية',
      en: 'Bride of the South and Arab Tourism Capital'
    },
    icon: '⛰️',
    airport: {
      code: 'AHB',
      nameAr: 'مطار أبها الإقليمي',
      nameEn: 'Abha Regional Airport'
    }
  },
  {
    id: 'dammam',
    nameAr: 'الدمام',
    nameEn: 'Dammam',
    slug: 'dammam',
    description: {
      ar: 'عاصمة المنطقة الشرقية',
      en: 'Capital of the Eastern Province'
    },
    icon: '🏢',
    airport: {
      code: 'DMM',
      nameAr: 'مطار الملك فهد الدولي',
      nameEn: 'King Fahd International Airport'
    }
  }
];

// أنواع الخدمات
export const SERVICE_TYPES: ServiceType[] = [
  {
    id: 'airport-transfer',
    nameAr: 'توصيل المطار',
    nameEn: 'Airport Transfer',
    slug: 'airport-transfer',
    icon: '✈️',
    description: {
      ar: 'خدمة نقل موثوقة من وإلى المطار مع سائق محترف',
      en: 'Reliable airport transfer service with professional driver'
    }
  },
  {
    id: 'private-driver',
    nameAr: 'سائق خاص',
    nameEn: 'Private Driver',
    slug: 'private-driver',
    icon: '🚗',
    description: {
      ar: 'سائق خاص بالساعة أو اليوم لجميع احتياجاتك',
      en: 'Private driver by the hour or day for all your needs'
    }
  },
  {
    id: 'tour-chauffeur',
    nameAr: 'جولات سياحية',
    nameEn: 'Tour Chauffeur',
    slug: 'tour-chauffeur',
    icon: '🗺️',
    description: {
      ar: 'جولات سياحية مخصصة مع سائق خبير بالمعالم السياحية',
      en: 'Customized tours with expert driver familiar with tourist attractions'
    }
  },
  {
    id: 'intercity-transfer',
    nameAr: 'النقل بين المدن',
    nameEn: 'Intercity Transfer',
    slug: 'intercity-transfer',
    icon: '🛣️',
    description: {
      ar: 'خدمة نقل آمنة ومريحة بين المدن السعودية',
      en: 'Safe and comfortable transfer service between Saudi cities'
    }
  }
];

// المسارات بين المدن
export const CITY_ROUTES: CityRoute[] = [
  // من الرياض
  { from: 'riyadh', to: 'dammam', distance: '400 كم', duration: '4 ساعات', slug: 'riyadh-to-dammam' },
  { from: 'riyadh', to: 'abha', distance: '950 كم', duration: '9 ساعات', slug: 'riyadh-to-abha' },
  
  // من جدة
  { from: 'jeddah', to: 'makkah', distance: '80 كم', duration: '1 ساعة', slug: 'jeddah-to-makkah' },
  { from: 'jeddah', to: 'taif', distance: '170 كم', duration: '2 ساعة', slug: 'jeddah-to-taif' },
  { from: 'jeddah', to: 'madinah', distance: '420 كم', duration: '4 ساعات', slug: 'jeddah-to-madinah' },
  
  // من مكة
  { from: 'makkah', to: 'jeddah', distance: '80 كم', duration: '1 ساعة', slug: 'makkah-to-jeddah' },
  { from: 'makkah', to: 'taif', distance: '90 كم', duration: '1.5 ساعة', slug: 'makkah-to-taif' },
  { from: 'makkah', to: 'madinah', distance: '450 كم', duration: '4.5 ساعات', slug: 'makkah-to-madinah' },
  
  // من الطائف
  { from: 'taif', to: 'jeddah', distance: '170 كم', duration: '2 ساعة', slug: 'taif-to-jeddah' },
  { from: 'taif', to: 'makkah', distance: '90 كم', duration: '1.5 ساعة', slug: 'taif-to-makkah' },
  
  // من أبها
  { from: 'abha', to: 'riyadh', distance: '950 كم', duration: '9 ساعات', slug: 'abha-to-riyadh' },
];

// أنواع المركبات
export const VEHICLE_TYPES = [
  {
    id: 'sedan',
    nameAr: 'سيدان فاخرة',
    nameEn: 'Luxury Sedan',
    slug: 'luxury-sedan',
    capacity: '1-3',
    icon: '🚙',
    features: {
      ar: ['مريحة للأفراد والأزواج', 'مثالية لرحلات العمل', 'سيارات حديثة ونظيفة'],
      en: ['Comfortable for individuals and couples', 'Ideal for business trips', 'Modern and clean vehicles']
    }
  },
  {
    id: 'family-van',
    nameAr: 'فان عائلي',
    nameEn: 'Family Van',
    slug: 'family-van',
    capacity: '4-7',
    icon: '🚐',
    features: {
      ar: ['مساحة واسعة للعائلات', 'مقاعد مريحة لـ 7 ركاب', 'صندوق أمتعة كبير'],
      en: ['Spacious for families', 'Comfortable seating for 7 passengers', 'Large luggage compartment']
    }
  },
  {
    id: 'limousine-vip',
    nameAr: 'ليموزين VIP',
    nameEn: 'VIP Limousine',
    slug: 'limousine-vip',
    capacity: '1-4',
    icon: '🚗',
    features: {
      ar: ['فخامة وراحة قصوى', 'مثالية للمناسبات الخاصة', 'خدمة VIP متميزة'],
      en: ['Ultimate luxury and comfort', 'Perfect for special occasions', 'Premium VIP service']
    }
  }
];
