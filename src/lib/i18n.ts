export type Locale = 'ar' | 'en';

export const defaultLocale: Locale = 'ar';

export const locales: Locale[] = ['ar', 'en'];

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    description: string;
    fullDay: {
      name: string;
      description: string;
      price: string;
    };
    airport: {
      name: string;
      description: string;
      price: string;
    };
    city: {
      name: string;
      description: string;
      price: string;
    };
    bookNow: string;
  };
  booking: {
    title: string;
    description: string;
    serviceType: string;
    city: string;
    date: string;
    time: string;
    passengers: string;
    phone: string;
    notes: string;
    submit: string;
    errors: {
      phoneRequired: string;
      phoneInvalid: string;
      dateInvalid: string;
    };
  };
  whatsapp: {
    template: string;
  };
  trust: {
    title: string;
    stats: {
      trips: string;
      rating: string;
      vehicles: string;
    };
  };
  footer: {
    contact: string;
    followUs: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ar: {
    hero: {
      title: 'وصول — راحتك تبدأ من الطريق',
      subtitle: 'احجز سائقًا خاصًا بكل سهولة، وتمتع بتجربة نقل فاخرة وآمنة في أبها والمناطق السياحية. كل ما عليك فعله هو اختيار الخدمة، تحديد الوقت، وسنكون في طريقك.',
      cta: 'احجز الآن عبر واتساب',
    },
    services: {
      title: 'خدماتنا',
      description: 'اختر الخدمة التي تناسب رحلتك، وسيهتم فريق وصول بكل التفاصيل.',
      fullDay: {
        name: 'سائق خاص ليوم كامل',
        description: 'سيارة عائلية وسائق محترف لمدة 8 ساعات داخل المدينة أو خارجها.',
        price: 'ابتداءً من 500 ﷼',
      },
      airport: {
        name: 'توصيلة المطار',
        description: 'نقل مريح من وإلى مطار أبها بسيارة حديثة وسائق ملتزم بالمواعيد.',
        price: 'ابتداءً من 150 ﷼',
      },
      city: {
        name: 'تنقل داخل المدينة',
        description: 'جولة قصيرة داخل المدينة لزيارة الأماكن السياحية والمطاعم المميزة.',
        price: 'ابتداءً من 300 ﷼',
      },
      bookNow: 'احجز الآن',
    },
    booking: {
      title: 'احجز رحلتك الآن',
      description: 'أدخل تفاصيل رحلتك وسنقوم بتأكيد الحجز فورًا عبر واتساب.',
      serviceType: 'نوع الخدمة',
      city: 'المدينة',
      date: 'التاريخ',
      time: 'الوقت',
      passengers: 'عدد الركاب',
      phone: 'رقم الجوال',
      notes: 'ملاحظات إضافية',
      submit: 'تأكيد الحجز عبر واتساب',
      errors: {
        phoneRequired: 'يرجى إدخال رقم الجوال قبل الإرسال',
        phoneInvalid: 'رقم الجوال غير صحيح',
        dateInvalid: 'يرجى اختيار تاريخ صحيح',
      },
    },
    whatsapp: {
      template: 'مرحبًا، أود حجز خدمة {serviceType}\n📍 المدينة: {city}\n📅 التاريخ: {date}\n⏰ الوقت: {time}\n👥 عدد الركاب: {passengers}\n📞 رقم التواصل: {phone}\nملاحظات: {notes}',
    },
    trust: {
      title: 'لماذا وصول؟',
      stats: {
        trips: '+30 رحلة ناجحة هذا الشهر 🚘',
        rating: 'تقييم 4.9 من عملائنا في أبها ⭐',
        vehicles: 'سيارات حديثة وسائقين محترفين 💎',
      },
    },
    footer: {
      contact: 'هل لديك استفسار؟ تواصل معنا مباشرة: 📞 0598330936',
      followUs: 'تابعنا على:',
      copyright: '© 2025 وصول. جميع الحقوق محفوظة.',
    },
  },
  en: {
    hero: {
      title: 'Wusool — Your comfort begins on the road',
      subtitle: 'Book your private driver effortlessly and enjoy a safe, premium travel experience across Abha and nearby destinations. Simply choose your service, select your time, and we\'ll take care of the rest.',
      cta: 'Book Now on WhatsApp',
    },
    services: {
      title: 'Our Services',
      description: 'Choose the service that fits your journey — the Wusool team will handle the rest.',
      fullDay: {
        name: 'Full-Day Private Driver',
        description: 'Family vehicle and professional driver for 8 hours within or around the city.',
        price: 'From 500 SAR',
      },
      airport: {
        name: 'Airport Transfer',
        description: 'Comfortable rides to and from Abha Airport with punctual drivers.',
        price: 'From 150 SAR',
      },
      city: {
        name: 'City Ride',
        description: '3–6 hours of private travel to explore local attractions and restaurants.',
        price: 'From 300 SAR',
      },
      bookNow: 'Book Now',
    },
    booking: {
      title: 'Book Your Ride Now',
      description: 'Enter your trip details, and we\'ll confirm your booking instantly via WhatsApp.',
      serviceType: 'Service Type',
      city: 'City',
      date: 'Date',
      time: 'Time',
      passengers: 'Number of Passengers',
      phone: 'Phone Number',
      notes: 'Notes',
      submit: 'Confirm Booking on WhatsApp',
      errors: {
        phoneRequired: 'Please enter your phone number before submitting',
        phoneInvalid: 'Invalid phone number format',
        dateInvalid: 'Please select a valid date',
      },
    },
    whatsapp: {
      template: 'Hello, I\'d like to book the {serviceType} service.\n📍 City: {city}\n📅 Date: {date}\n⏰ Time: {time}\n👥 Passengers: {passengers}\n📞 Phone: {phone}\n📝 Notes: {notes}',
    },
    trust: {
      title: 'Why Wusool?',
      stats: {
        trips: '+30 successful trips this month 🚘',
        rating: '4.9 rating from our clients in Abha ⭐',
        vehicles: 'Modern vehicles and professional drivers 💎',
      },
    },
    footer: {
      contact: 'Have a question? Contact us directly: 📞 +966 598 330 936',
      followUs: 'Follow us:',
      copyright: '© 2025 Wusool. All rights reserved.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}