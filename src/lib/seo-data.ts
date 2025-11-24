export interface ServicePageData {
  city: string;
  cityAr: string;
  cityEn: string;
  serviceType: 'airport-transfer' | 'private-driver' | 'tour-chauffeur';
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  keywords: string[];
  h1: string;
  h1En: string;
  intro: string;
  introEn: string;
  features: Array<{
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
  }>;
  faqs: Array<{
    question: string;
    questionEn: string;
    answer: string;
    answerEn: string;
  }>;
  relatedPages: Array<{
    title: string;
    titleEn: string;
    url: string;
  }>;
}

export const abhaPages: ServicePageData[] = [
  {
    city: 'abha',
    cityAr: 'أبها',
    cityEn: 'Abha',
    serviceType: 'airport-transfer',
    slug: 'abha/airport-transfer',
    title: 'توصيل مطار أبها - خدمة نقل آمنة ومريحة من وإلى مطار أبها الإقليمي | وصول',
    titleEn: 'Abha Airport Transfer - Safe and Comfortable Transport to/from Abha Regional Airport | Wusool',
    description: 'احجز خدمة توصيل مطار أبها مع سائق محترف. نقل مريح وآمن من وإلى مطار أبها الإقليمي بأسعار ثابتة وشفافة. متابعة رحلات الطيران وخدمة 24/7.',
    descriptionEn: 'Book Abha airport transfer with professional driver. Comfortable and safe transport to/from Abha Regional Airport with fixed transparent prices. Flight tracking and 24/7 service.',
    keywords: [
      'توصيل مطار أبها',
      'نقل من مطار أبها',
      'سائق مطار أبها',
      'حجز سيارة مطار أبها',
      'توصيلة مطار أبها الإقليمي',
      'سعر توصيل مطار أبها',
      'Abha airport transfer',
      'Abha airport taxi'
    ],
    h1: 'خدمة توصيل مطار أبها الإقليمي - نقل آمن ومريح على مدار الساعة',
    h1En: 'Abha Regional Airport Transfer Service - Safe and Comfortable 24/7 Transport',
    intro: 'مرحباً بكم في خدمة "وصول" لتوصيل مطار أبها! هل تبحث عن خدمة نقل موثوقة من وإلى مطار أبها الإقليمي؟ نحن نوفر لك سائقاً محترفاً ينتظرك عند الوصول أو يوصلك في الوقت المحدد للمغادرة. مع خدمة متابعة رحلات الطيران المجانية، لن تقلق بشأن التأخير أو الانتظار. استمتع برحلة مريحة في سياراتنا الحديثة المكيفة مع سائقين يعرفون جميع طرق أبها وعسير.',
    introEn: 'Welcome to Wusool Abha Airport Transfer Service! Looking for reliable transport to/from Abha Regional Airport? We provide professional drivers waiting for your arrival or ensuring timely departure. With free flight tracking service, you won\'t worry about delays or waiting. Enjoy a comfortable ride in our modern air-conditioned vehicles with drivers who know all Abha and Asir routes.',
    features: [
      {
        title: 'متابعة رحلات الطيران',
        titleEn: 'Flight Tracking',
        description: 'نتابع موعد وصول رحلتك تلقائياً ونضمن تواجد السائق في الوقت المناسب دون رسوم انتظار إضافية.',
        descriptionEn: 'We automatically track your flight arrival time and ensure the driver is there at the right time without additional waiting fees.'
      },
      {
        title: 'سائقون محليون خبراء',
        titleEn: 'Expert Local Drivers',
        description: 'سائقونا من أبناء المنطقة ويعرفون جميع الطرق والفنادق والمعالم السياحية في أبها وعسير.',
        descriptionEn: 'Our drivers are locals who know all routes, hotels, and tourist attractions in Abha and Asir.'
      },
      {
        title: 'أسعار ثابتة وشفافة',
        titleEn: 'Fixed Transparent Prices',
        description: 'لا مفاجآت! السعر المعلن هو السعر النهائي شاملاً الوقود ورسوم الطريق.',
        descriptionEn: 'No surprises! The quoted price is the final price including fuel and road fees.'
      },
      {
        title: 'خدمة 24/7',
        titleEn: '24/7 Service',
        description: 'نعمل على مدار الساعة لخدمة جميع رحلات الطيران الصباحية والمسائية والليلية.',
        descriptionEn: 'We operate 24/7 to serve all morning, evening, and night flights.'
      }
    ],
    faqs: [
      {
        question: 'كم يستغرق الوصول من مطار أبها إلى وسط المدينة؟',
        questionEn: 'How long does it take from Abha Airport to city center?',
        answer: 'المسافة حوالي 25 كم وتستغرق من 20-30 دقيقة حسب حركة المرور.',
        answerEn: 'The distance is about 25 km and takes 20-30 minutes depending on traffic.'
      },
      {
        question: 'هل السعر يشمل رسوم الانتظار في المطار؟',
        questionEn: 'Does the price include airport waiting fees?',
        answer: 'نعم، ننتظر حتى 60 دقيقة مجاناً بعد هبوط الطائرة. أي وقت إضافي يُحسب بسعر رمزي.',
        answerEn: 'Yes, we wait up to 60 minutes free after landing. Any additional time is charged at a nominal rate.'
      },
      {
        question: 'هل توفرون مقاعد أطفال؟',
        questionEn: 'Do you provide child seats?',
        answer: 'نعم، نوفر مقاعد أطفال مجانية عند الطلب المسبق أثناء الحجز.',
        answerEn: 'Yes, we provide free child seats upon advance request during booking.'
      },
      {
        question: 'ماذا لو تأخرت رحلتي؟',
        questionEn: 'What if my flight is delayed?',
        answer: 'نتابع رحلتك تلقائياً ونعدل موعد الاستقبال دون أي رسوم إضافية.',
        answerEn: 'We automatically track your flight and adjust pickup time without any additional fees.'
      }
    ],
    relatedPages: [
      { title: 'سائق خاص في أبها', titleEn: 'Private Driver in Abha', url: '/abha/private-driver' },
      { title: 'جولات سياحية في أبها', titleEn: 'Abha Tour Chauffeur', url: '/abha/tour-chauffeur' },
      { title: 'توصيل مطار الطائف', titleEn: 'Taif Airport Transfer', url: '/taif/airport-transfer' }
    ]
  },
  {
    city: 'abha',
    cityAr: 'أبها',
    cityEn: 'Abha',
    serviceType: 'private-driver',
    slug: 'abha/private-driver',
    title: 'سائق خاص في أبها - استئجار سيارة مع سائق محترف بالساعة أو اليوم | وصول',
    titleEn: 'Private Driver in Abha - Rent Car with Professional Driver by Hour or Day | Wusool',
    description: 'احجز سائق خاص في أبها لرحلاتك اليومية. خدمة مرنة بالساعة أو اليوم الكامل مع سائقين محليين خبراء بطرق عسير. أسعار تنافسية وسيارات حديثة.',
    descriptionEn: 'Book a private driver in Abha for your daily trips. Flexible service by hour or full day with local expert drivers who know Asir routes. Competitive prices and modern vehicles.',
    keywords: [
      'سائق خاص أبها',
      'سواق خاص أبها',
      'استئجار سيارة مع سائق أبها',
      'سائق يومي أبها',
      'سائق بالساعة أبها',
      'private driver Abha',
      'chauffeur Abha'
    ],
    h1: 'خدمة السائق الخاص في أبها - مرونة كاملة لرحلاتك اليومية',
    h1En: 'Private Driver Service in Abha - Complete Flexibility for Your Daily Trips',
    intro: 'هل تحتاج سائق خاص في أبها لرحلات العمل أو التسوق أو زيارة الأقارب؟ "وصول" توفر لك خدمة سائق محترف يكون تحت تصرفك طوال المدة المحجوزة. سواء كنت تحتاج سائق لبضع ساعات أو ليوم كامل، سيارتنا وسائقنا جاهزون لخدمتك. سائقونا من أبناء المنطقة ويعرفون جميع الطرق والمعالم في أبها وخميس مشيط والنماص، مما يوفر عليك الوقت والجهد.',
    introEn: 'Need a private driver in Abha for business trips, shopping, or visiting relatives? Wusool provides a professional driver at your disposal for the entire booked period. Whether you need a driver for a few hours or a full day, our car and driver are ready to serve you. Our drivers are locals who know all routes and landmarks in Abha, Khamis Mushait, and Al-Namas, saving you time and effort.',
    features: [
      {
        title: 'مرونة كاملة في الحجز',
        titleEn: 'Complete Booking Flexibility',
        description: 'احجز بالساعة (4 ساعات كحد أدنى) أو بالي وم الكامل (8-12 ساعة). يمكنك تمديد الحجز أثناء الرحلة.',
        descriptionEn: 'Book by hour (4 hours minimum) or full day (8-12 hours). You can extend booking during the trip.'
      },
      {
        title: 'سائق محلي خبير',
        titleEn: 'Expert Local Driver',
        description: 'سائقونا يعرفون أفضل المطاعم والأسواق والمعالم السياحية في أبها وعسير، ويمكنهم تقديم توصيات قيمة.',
        descriptionEn: 'Our drivers know the best restaurants, markets, and tourist attractions in Abha and Asir, and can provide valuable recommendations.'
      },
      {
        title: 'سيارات حديثة ونظيفة',
        titleEn: 'Modern Clean Vehicles',
        description: 'جميع سياراتنا حديثة (موديلات 2020 وأحدث) ومجهزة بتكييف قوي مناسب لطقس أبها.',
        descriptionEn: 'All our vehicles are modern (2020 models and newer) equipped with strong AC suitable for Abha weather.'
      },
      {
        title: 'خيارات متعددة للمركبات',
        titleEn: 'Multiple Vehicle Options',
        description: 'سيارات سيدان للأفراد والأزواج، أو سيارات عائلية (فان) للعوائل والمجموعات حتى 7 ركاب.',
        descriptionEn: 'Sedan cars for individuals and couples, or family vans for families and groups up to 7 passengers.'
      }
    ],
    faqs: [
      {
        question: 'ما هو الحد الأدنى لحجز السائق الخاص؟',
        questionEn: 'What is the minimum booking for private driver?',
        answer: 'الحد الأدنى 4 ساعات، ويمكنك الحجز بالساعة أو اليوم الكامل (8 ساعات).',
        answerEn: 'Minimum is 4 hours, and you can book by hour or full day (8 hours).'
      },
      {
        question: 'هل يمكن تمديد فترة الحجز؟',
        questionEn: 'Can I extend the booking period?',
        answer: 'نعم، يمكنك تمديد الحجز أثناء الرحلة بالتنسيق مع السائق وسيتم احتساب الساعات الإضافية.',
        answerEn: 'Yes, you can extend booking during the trip by coordinating with the driver and additional hours will be calculated.'
      },
      {
        question: 'هل السائق يعرف الطرق الجبلية في عسير؟',
        questionEn: 'Does the driver know mountain roads in Asir?',
        answer: 'نعم، جميع سائقينا من أبناء المنطقة ولديهم خبرة في القيادة على الطرق الجبلية والعقبات.',
        answerEn: 'Yes, all our drivers are locals with experience driving on mountain roads and slopes.'
      },
      {
        question: 'ما هي المناطق التي يغطيها السائق الخاص؟',
        questionEn: 'What areas does the private driver cover?',
        answer: 'نغطي أبها، خميس مشيط، النماص، السودة، رجال ألمع، وجميع المناطق السياحية في عسير.',
        answerEn: 'We cover Abha, Khamis Mushait, Al-Namas, Al-Soudah, Rijal Almaa, and all tourist areas in Asir.'
      }
    ],
    relatedPages: [
      { title: 'جولات سياحية في أبها', titleEn: 'Abha Tour Chauffeur', url: '/abha/tour-chauffeur' },
      { title: 'توصيل مطار أبها', titleEn: 'Abha Airport Transfer', url: '/abha/airport-transfer' },
      { title: 'سائق خاص في الطائف', titleEn: 'Private Driver in Taif', url: '/taif/private-driver' }
    ]
  },
  {
    city: 'abha',
    cityAr: 'أبها',
    cityEn: 'Abha',
    serviceType: 'tour-chauffeur',
    slug: 'abha/tour-chauffeur',
    title: 'جولات سياحية في أبها مع سائق خاص - اكتشف السودة ورجال ألمع | وصول',
    titleEn: 'Abha Tourist Tours with Private Driver - Discover Al-Soudah and Rijal Almaa | Wusool',
    description: 'احجز جولة سياحية في أبها مع سائق محلي خبير. برامج جاهزة لزيارة السودة، رجال ألمع، الحبلة، والمعالم السياحية في عسير. سيارات عائلية مريحة.',
    descriptionEn: 'Book a tourist tour in Abha with expert local driver. Ready programs to visit Al-Soudah, Rijal Almaa, Al-Habala, and tourist attractions in Asir. Comfortable family vehicles.',
    keywords: [
      'جولات سياحية أبها',
      'سائق سياحي أبها',
      'رحلات أبها السياحية',
      'جولة السودة',
      'زيارة رجال ألمع',
      'سائق خاص للجولات أبها',
      'Abha tours',
      'Abha sightseeing'
    ],
    h1: 'جولات سياحية مخصصة في أبها وعسير مع سائق محلي خبير',
    h1En: 'Customized Tourist Tours in Abha and Asir with Expert Local Driver',
    intro: 'اكتشف جمال أبها "عروس الجنوب" مع خدمة الجولات السياحية من "وصول"! نوفر لك سائقاً محلياً متخصصاً في المسارات السياحية لضمان تجربة لا تُنسى في السودة ورجال ألمع والحبلة. سواء كنت تبحث عن جولة طبيعية في القمم الباردة أو رحلة تراثية في القرى التاريخية، سيصمم لك سائقنا البرنامج المثالي. جميع سائقينا من أبناء عسير ولديهم معرفة عميقة بالمنطقة وأسرارها السياحية.',
    introEn: 'Discover the beauty of Abha "Bride of the South" with Wusool tourist tours! We provide a local driver specialized in tourist routes to ensure an unforgettable experience in Al-Soudah, Rijal Almaa, and Al-Habala. Whether you\'re looking for a nature tour in the cold peaks or a heritage trip in historical villages, our driver will design the perfect program for you. All our drivers are from Asir with deep knowledge of the region and its tourist secrets.',
    features: [
      {
        title: 'برامج جولات جاهزة',
        titleEn: 'Ready Tour Programs',
        description: 'المسار 1: القمم الباردة (السودة + منتزه الأمير سلطان + الواديين) - 6 ساعات. المسار 2: التراث والتاريخ (رجال ألمع + الحبلة + التلفريك) - 8 ساعات. المسار 3: التسوق والترفيه (الأسواق الشعبية + خميس مشيط) - 4 ساعات.',
        descriptionEn: 'Route 1: Cold Peaks (Al-Soudah + Prince Sultan Park + Al-Wadyain) - 6 hours. Route 2: Heritage & History (Rijal Almaa + Al-Habala + Cable Car) - 8 hours. Route 3: Shopping & Entertainment (Traditional Markets + Khamis Mushait) - 4 hours.'
      },
      {
        title: 'تصميم برنامج خاص',
        titleEn: 'Custom Program Design',
        description: 'يمكنك تصميم برنامجك الخاص وسيساعدك السائق في اختيار أفضل الأوقات والمواقع حسب اهتماماتك.',
        descriptionEn: 'You can design your own program and the driver will help you choose the best times and locations based on your interests.'
      },
      {
        title: 'معرفة محلية عميقة',
        titleEn: 'Deep Local Knowledge',
        description: 'سائقونا يعرفون أفضل أوقات الزيارة، المطاعم المحلية الأصيلة، ونقاط التصوير المميزة.',
        descriptionEn: 'Our drivers know the best visiting times, authentic local restaurants, and distinctive photography spots.'
      },
      {
        title: 'سيارات عائلية مريحة',
        titleEn: 'Comfortable Family Vehicles',
        description: 'نوفر سيارات فان عائلية واسعة (7 ركاب) مثالية للجولات الطويلة مع العائلة.',
        descriptionEn: 'We provide spacious family vans (7 passengers) ideal for long tours with family.'
      }
    ],
    faqs: [
      {
        question: 'ما هي أفضل الأوقات لزيارة السودة؟',
        questionEn: 'What are the best times to visit Al-Soudah?',
        answer: 'أفضل الأوقات من مايو إلى سبتمبر للطقس البارد، ومن ديسمبر إلى فبراير لمشاهدة الثلوج.',
        answerEn: 'Best times are May to September for cold weather, and December to February to see snow.'
      },
      {
        question: 'هل يمكن التوقف للصلاة والطعام؟',
        questionEn: 'Can we stop for prayer and food?',
        answer: 'بالتأكيد! السائق سيوقف في أي وقت تحتاجه للصلاة أو تناول الطعام أو التصوير.',
        answerEn: 'Absolutely! The driver will stop anytime you need for prayer, food, or photography.'
      },
      {
        question: 'كم تكلفة الجولة السياحية ليوم كامل؟',
        questionEn: 'How much does a full-day tour cost?',
        answer: 'تبدأ الأسعار من 500 ريال لـ 8 ساعات، وتختلف حسب نوع السيارة والمسافات المقطوعة.',
        answerEn: 'Prices start from 500 SAR for 8 hours, varying by vehicle type and distances covered.'
      },
      {
        question: 'هل السائق يتحدث الإنجليزية؟',
        questionEn: 'Does the driver speak English?',
        answer: 'نعم، يمكننا توفير سائقين يتحدثون الإنجليزية عند الطلب المسبق.',
        answerEn: 'Yes, we can provide English-speaking drivers upon advance request.'
      }
    ],
    relatedPages: [
      { title: 'سائق خاص في أبها', titleEn: 'Private Driver in Abha', url: '/abha/private-driver' },
      { title: 'توصيل مطار أبها', titleEn: 'Abha Airport Transfer', url: '/abha/airport-transfer' },
      { title: 'جولات سياحية في الطائف', titleEn: 'Taif Tour Chauffeur', url: '/taif/tour-chauffeur' }
    ]
  }
];
