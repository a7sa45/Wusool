// Detailed SEO Content for Landing Pages

export interface PageContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: {
    title: string;
    content: string;
    list?: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
}

// محتوى صفحة جدة - مكة
export const jeddahToMakkahContent = {
  ar: {
    title: 'توصيل من جدة إلى مكة (خدمة المعتمرين) - حجز سيارة مع سائق | وصول',
    description: 'خدمة توصيل من جدة إلى مكة موثوقة ومريحة. احجز سيارة مع سائق محترف لرحلة العمرة والزيارة. أسعار شفافة وخدمة متميزة.',
    h1: 'خدمة التوصيل المباشر والآمن من جدة إلى مكة المكرمة (للعمرة والزيارة)',
    intro: 'مرحباً بكم في خدمة "وصول" لنقل ضيوف الرحمن! هل تبحث عن خدمة توصيل من جدة إلى مكة موثوقة ومريحة؟ نحن نتفهم أهمية رحلة العمرة أو الزيارة، ولذلك نوفر لك خدمة حجز سيارة مع سائق محترف ومطلع على جميع تفاصيل المسار والأنظمة. ابتعد عن عناء البحث عن سعر مشوار جدة مكة المفاجئ واستمتع برحلة هادئة في مركباتنا الحديثة.',
    sections: [
      {
        title: 'مزايا خدمة الشوفير الخاص لرحلات الحرمين',
        content: 'نوفر لك تجربة نقل متميزة تراعي خصوصية رحلتك الدينية:',
        list: [
          'الأمان والخبرة الدينية: سائقون على دراية بأحكام الميقات وتفاصيل الدخول لمكة، مع توقف آمن للصلاة والإحرام',
          'تجهيز السيارة العائلية (الفان): نوفر سيارات عائلية واسعة (7-9 ركاب) لتأمين راحة العائلة وتخزين جميع الأمتعة',
          'الراحة والخصوصية: لا انتظار ولا بحث عن مواقف. السائق يوصلك مباشرة إلى الفندق الأقرب للحرم',
          'تتبع الرحلات: نتابع مواعيد وصولك إلى مطار جدة (JED) لضمان تواجد السائق في الموعد المحدد دون رسوم إضافية'
        ]
      },
      {
        title: 'كيف يتم تحديد سعر التوصيل من جدة إلى مكة؟',
        content: 'نعتمد في "وصول" على نظام تسعير شفاف وثابت يتم تحديده بناءً على: المسافة (حوالي 80 كم)، نوع المركبة المطلوبة (سيارة سيدان أو فان عائلي)، وعدد الركاب. احصل على عرض سعر نهائي قبل الحجز دون أي رسوم خفية.'
      },
      {
        title: 'لماذا تختار وصول لرحلتك إلى مكة؟',
        content: 'نحن متخصصون في خدمة ضيوف الرحمن ونفهم احتياجاتكم الخاصة:',
        list: [
          'سائقون محترفون: جميع سائقينا مدربون على التعامل مع المعتمرين والزوار',
          'مركبات حديثة ونظيفة: أسطول متنوع من السيارات الفاخرة والعائلية',
          'خدمة 24/7: متاحون في أي وقت لخدمتكم',
          'أسعار تنافسية: أفضل الأسعار مع أعلى جودة خدمة'
        ]
      }
    ],
    faq: [
      {
        question: 'هل السعر يشمل رسوم الطريق والوقود؟',
        answer: 'نعم، جميع الأسعار نهائية وتشمل رسوم الطريق والوقود دون أي تكاليف إضافية.'
      },
      {
        question: 'ما هو وقت الاستجابة لحجز اللحظة الأخيرة؟',
        answer: 'يمكننا توفير سيارة خلال ساعة واحدة كحد أقصى داخل جدة للحجوزات العاجلة.'
      },
      {
        question: 'هل نوفر مقاعد للأطفال؟',
        answer: 'نعم، يمكن طلب مقاعد أطفال مجانية مسبقاً عند الحجز.'
      },
      {
        question: 'هل يمكن التوقف في الميقات للإحرام؟',
        answer: 'بالتأكيد، سائقنا سيتوقف في الميقات المناسب حسب طلبكم.'
      },
      {
        question: 'كم تستغرق الرحلة من جدة إلى مكة؟',
        answer: 'تستغرق الرحلة حوالي ساعة واحدة حسب حركة المرور.'
      }
    ],
    keywords: [
      'توصيل جدة مكة',
      'سعر مشوار جدة مكة',
      'حجز سيارة مكة',
      'سائق خاص جدة مكة',
      'توصيل مطار جدة مكة',
      'نقل من جدة للحرم',
      'سيارة مع سائق للعمرة'
    ]
  },
  en: {
    title: 'Jeddah to Makkah Transfer (Umrah Service) - Book Car with Driver | Wusool',
    description: 'Reliable and comfortable transfer service from Jeddah to Makkah. Book a car with professional driver for Umrah and visits. Transparent pricing and premium service.',
    h1: 'Direct and Safe Transfer Service from Jeddah to Makkah (For Umrah and Visits)',
    intro: 'Welcome to Wusool\'s service for pilgrims! Looking for a reliable and comfortable transfer from Jeddah to Makkah? We understand the importance of your Umrah or visit journey, which is why we provide you with a professional driver familiar with all route details and regulations. Avoid the hassle of searching for unexpected prices and enjoy a peaceful journey in our modern vehicles.',
    sections: [
      {
        title: 'Benefits of Private Chauffeur Service for Holy Cities',
        content: 'We provide you with a premium transfer experience that respects your religious journey:',
        list: [
          'Safety and Religious Knowledge: Drivers familiar with Miqat rules and Makkah entry details, with safe stops for prayer and Ihram',
          'Family Van Setup: We provide spacious family vehicles (7-9 passengers) to ensure family comfort and store all luggage',
          'Comfort and Privacy: No waiting or parking search. Driver takes you directly to the hotel nearest to the Haram',
          'Flight Tracking: We monitor your arrival times at Jeddah Airport (JED) to ensure driver presence at the scheduled time without extra fees'
        ]
      },
      {
        title: 'How is the Transfer Price from Jeddah to Makkah Determined?',
        content: 'At Wusool, we rely on a transparent and fixed pricing system determined based on: distance (approximately 80 km), required vehicle type (sedan or family van), and number of passengers. Get a final price quote before booking without any hidden fees.'
      }
    ],
    faq: [
      {
        question: 'Does the price include road fees and fuel?',
        answer: 'Yes, all prices are final and include road fees and fuel without any additional costs.'
      },
      {
        question: 'What is the response time for last-minute bookings?',
        answer: 'We can provide a vehicle within one hour maximum inside Jeddah for urgent bookings.'
      },
      {
        question: 'Do you provide child seats?',
        answer: 'Yes, child seats can be requested free of charge in advance when booking.'
      }
    ],
    keywords: [
      'jeddah to makkah transfer',
      'jeddah makkah car service',
      'umrah transportation',
      'private driver jeddah makkah',
      'airport transfer to makkah'
    ]
  }
};

// محتوى صفحة جولات أبها
export const abhaTourContent = {
  ar: {
    title: 'جولات سياحية أبها مع سائق خاص - اكتشف السودة ورجال ألمع | وصول',
    description: 'استكشف جمال أبها مع سائق خاص محلي. جولات سياحية مخصصة في السودة، رجال ألمع، والمعالم السياحية. احجز الآن!',
    h1: 'خدمة الشوفير الخاص للجولات السياحية في أبها وعسير (رحلة ليوم كامل)',
    intro: 'اكتشف جمال أبها "عروس الجنوب" معنا! نوفر لك خدمة سائق خاص في أبها متخصص في المسارات السياحية لضمان تجربة لا تُنسى في السودة ورجال ألمع. سواء كنت تبحث عن سيارة عائلية مريحة أو سيارة فاخرة، سيوفر لك "وصول" سائقاً محلياً خبيراً بالطرق الجبلية وأسرار المنطقة.',
    sections: [
      {
        title: '3 مسارات مقترحة للجولات اليومية في أبها',
        content: 'يمكنك الاختيار من بين برامج الجولات الجاهزة التي وضعها خبراء السفر لدينا أو تصميم برنامجك الخاص:',
        list: [
          'المسار 1: القمم الباردة (طبيعة) - يشمل جبل السودة، ومنتزه الأمير سلطان، والواديين (المدة: 6 ساعات)',
          'المسار 2: التراث والتاريخ - يشمل قرية رجال ألمع التاريخية والتحليق بالتلفريك (المدة: 5 ساعات)',
          'المسار 3: التسوق والترفيه - جولة مسائية في الأسواق الشعبية ومراكز التسوق في خميس مشيط (المدة: 4 ساعات)'
        ]
      },
      {
        title: 'ميزات خدمة السائق الخاص اليومي في أبها',
        content: 'نقدم لك خدمة متكاملة تضمن راحتك وأمانك:',
        list: [
          'سواق خاص أبها (محلي): سائقونا على دراية تامة بعقبة ضلع وطرق المنطقة، مما يضمن أمانك ووصولك في الوقت المحدد',
          'مركبة تحت الطلب: السيارة والسائق تحت تصرفك طوال فترة الحجز (بالساعة أو اليوم)',
          'راحة العائلة: نوفر خيار السيارة العائلية (الفان) للجولات الطويلة المريحة للعوائل',
          'مرونة كاملة: يمكنك تغيير المسار أو إضافة محطات جديدة حسب رغبتك'
        ]
      },
      {
        title: 'أفضل الأوقات لزيارة أبها',
        content: 'أبها جميلة على مدار العام، لكن أفضل الأوقات للزيارة هي من مارس إلى أكتوبر حيث يكون الطقس معتدلاً ومثالياً للجولات السياحية. في فصل الصيف، تكون أبها وجهة مثالية للهروب من حرارة المدن الأخرى.'
      }
    ],
    faq: [
      {
        question: 'كم تكلفة استئجار سائق خاص ليوم كامل في أبها؟',
        answer: 'تبدأ أسعارنا من 400 ريال لليوم الكامل (8 ساعات) حسب نوع السيارة والمسار المطلوب.'
      },
      {
        question: 'هل السائق يعرف المعالم السياحية في أبها؟',
        answer: 'نعم، جميع سائقينا محليون ولديهم معرفة واسعة بجميع المعالم السياحية والطرق الجبلية.'
      },
      {
        question: 'هل يمكن تخصيص المسار السياحي؟',
        answer: 'بالتأكيد! يمكنك اختيار المعالم التي تريد زيارتها وسنقوم بتصميم مسار خاص لك.'
      },
      {
        question: 'هل تشمل الخدمة دخول المعالم السياحية؟',
        answer: 'الخدمة تشمل النقل والسائق فقط. رسوم دخول المعالم السياحية تكون على حساب الزائر.'
      }
    ],
    keywords: [
      'جولات سياحية أبها',
      'سائق خاص أبها',
      'سواق خاص أبها',
      'استئجار سيارة أبها',
      'جولات السودة',
      'رحلات رجال ألمع',
      'سياحة عسير'
    ]
  },
  en: {
    title: 'Abha Tours with Private Driver - Discover Al-Soudah and Rijal Almaa | Wusool',
    description: 'Explore the beauty of Abha with a local private driver. Customized tours in Al-Soudah, Rijal Almaa, and tourist attractions. Book now!',
    h1: 'Private Chauffeur Service for Tourist Tours in Abha and Asir (Full Day Trip)',
    intro: 'Discover the beauty of Abha, "Bride of the South," with us! We provide you with a private driver service in Abha specialized in tourist routes to ensure an unforgettable experience in Al-Soudah and Rijal Almaa. Whether you\'re looking for a comfortable family vehicle or a luxury car, Wusool will provide you with a local driver expert in mountain roads and regional secrets.',
    sections: [
      {
        title: '3 Suggested Routes for Daily Tours in Abha',
        content: 'You can choose from ready-made tour programs designed by our travel experts or design your own program:',
        list: [
          'Route 1: Cold Peaks (Nature) - Includes Jabal Al-Soudah, Prince Sultan Park, and Al-Wadyain (Duration: 6 hours)',
          'Route 2: Heritage and History - Includes Rijal Almaa Historical Village and cable car ride (Duration: 5 hours)',
          'Route 3: Shopping and Entertainment - Evening tour in traditional markets and shopping centers in Khamis Mushait (Duration: 4 hours)'
        ]
      }
    ],
    faq: [
      {
        question: 'How much does it cost to rent a private driver for a full day in Abha?',
        answer: 'Our prices start from 400 SAR for a full day (8 hours) depending on the vehicle type and required route.'
      },
      {
        question: 'Does the driver know the tourist attractions in Abha?',
        answer: 'Yes, all our drivers are local and have extensive knowledge of all tourist attractions and mountain roads.'
      }
    ],
    keywords: [
      'abha tours',
      'private driver abha',
      'abha car rental',
      'al-soudah tours',
      'rijal almaa trips',
      'asir tourism'
    ]
  }
};

// محتوى صفحة توصيل مطار الرياض
export const riyadhAirportContent = {
  ar: {
    title: 'توصيل مطار الرياض - خدمة نقل من وإلى مطار الملك خالد | وصول',
    description: 'خدمة توصيل مطار الرياض الموثوقة. نقل آمن ومريح من وإلى مطار الملك خالد الدولي مع سائق محترف. احجز الآن!',
    h1: 'خدمة التوصيل من وإلى مطار الملك خالد الدولي بالرياض',
    intro: 'هل تبحث عن خدمة توصيل مطار الرياض موثوقة؟ نوفر لك في "وصول" خدمة نقل احترافية من وإلى مطار الملك خالد الدولي (RUH) على مدار الساعة. سواء كنت مسافراً للعمل أو السياحة، نضمن لك وصولاً آمناً ومريحاً في الوقت المحدد.',
    sections: [
      {
        title: 'لماذا تختار وصول لتوصيل مطار الرياض؟',
        content: 'نقدم خدمة متميزة تلبي احتياجات جميع المسافرين:',
        list: [
          'تتبع الرحلات: نتابع مواعيد رحلتك تلقائياً ونعدل موعد الاستقبال حسب أي تأخير',
          'سائقون محترفون: جميع سائقينا مدربون ويحملون تصاريح العمل في المطار',
          'خدمة الاستقبال: سائقك سينتظرك في صالة الوصول مع لوحة تحمل اسمك',
          'أسعار ثابتة: لا رسوم إضافية على الانتظار أو تأخير الرحلات',
          'مركبات فاخرة: أسطول حديث من السيارات الفاخرة والعائلية'
        ]
      },
      {
        title: 'خدمات إضافية لرجال الأعمال',
        content: 'نوفر خدمات خاصة لرجال الأعمال والمسافرين من الدرجة الأولى:',
        list: [
          'خدمة VIP: استقبال من بوابة الطائرة مع مرافق شخصي',
          'واي فاي مجاني: إنترنت عالي السرعة في جميع مركباتنا',
          'شواحن متعددة: شواحن لجميع أنواع الأجهزة',
          'مياه وضيافة: مياه باردة ومناديل معطرة'
        ]
      }
    ],
    faq: [
      {
        question: 'كم تبعد المسافة من مطار الملك خالد إلى وسط الرياض؟',
        answer: 'تبعد المسافة حوالي 35 كم وتستغرق الرحلة من 30-45 دقيقة حسب حركة المرور.'
      },
      {
        question: 'هل يمكن الحجز لاستقبال من المطار في وقت متأخر من الليل؟',
        answer: 'نعم، خدمتنا متاحة 24/7 طوال أيام الأسبوع.'
      },
      {
        question: 'ماذا لو تأخرت رحلتي؟',
        answer: 'نحن نتابع رحلتك تلقائياً ونعدل موعد الاستقبال دون أي رسوم إضافية.'
      },
      {
        question: 'هل يساعد السائق في حمل الأمتعة؟',
        answer: 'بالتأكيد، سائقنا سيساعدك في حمل جميع أمتعتك.'
      }
    ],
    keywords: [
      'توصيل مطار الرياض',
      'نقل من مطار الملك خالد',
      'سيارة مطار الرياض',
      'استقبال مطار الرياض',
      'توصيل من المطار الرياض'
    ]
  },
  en: {
    title: 'Riyadh Airport Transfer - Transport to/from King Khalid Airport | Wusool',
    description: 'Reliable Riyadh airport transfer service. Safe and comfortable transport to/from King Khalid International Airport with professional driver. Book now!',
    h1: 'Transfer Service to/from King Khalid International Airport in Riyadh',
    intro: 'Looking for a reliable Riyadh airport transfer service? At Wusool, we provide professional transport service to/from King Khalid International Airport (RUH) 24/7. Whether you\'re traveling for business or tourism, we guarantee safe and comfortable arrival on time.',
    sections: [
      {
        title: 'Why Choose Wusool for Riyadh Airport Transfer?',
        content: 'We offer premium service that meets all travelers\' needs:',
        list: [
          'Flight Tracking: We automatically monitor your flight schedule and adjust pickup time for any delays',
          'Professional Drivers: All our drivers are trained and hold airport work permits',
          'Meet & Greet: Your driver will wait for you in the arrival hall with a sign bearing your name',
          'Fixed Prices: No extra charges for waiting or flight delays',
          'Luxury Vehicles: Modern fleet of luxury and family cars'
        ]
      }
    ],
    faq: [
      {
        question: 'How far is King Khalid Airport from downtown Riyadh?',
        answer: 'The distance is about 35 km and the journey takes 30-45 minutes depending on traffic.'
      },
      {
        question: 'Can I book for late-night airport pickup?',
        answer: 'Yes, our service is available 24/7 throughout the week.'
      }
    ],
    keywords: [
      'riyadh airport transfer',
      'king khalid airport transport',
      'riyadh airport car',
      'airport pickup riyadh'
    ]
  }
};
