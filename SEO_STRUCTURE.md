# هيكل SEO المتكامل لموقع Wusool

## نظرة عامة
تم بناء هيكل SEO شامل يتضمن صفحات مخصصة لكل خدمة ومدينة ومسار، مع محتوى غني بالكلمات المفتاحية المستهدفة.

## الصفحات المنشأة

### 1. صفحات الخدمات حسب المدينة
**النمط:** `/{locale}/{city}/{service}`

#### المدن المغطاة:
- الرياض (riyadh)
- جدة (jeddah)
- مكة المكرمة (makkah)
- المدينة المنورة (madinah)
- الطائف (taif)
- أبها (abha)
- الدمام (dammam)

#### الخدمات المتاحة:
- توصيل المطار (airport-transfer)
- سائق خاص (private-driver)
- جولات سياحية (tour-chauffeur) - *ما عدا مكة*
- النقل بين المدن (intercity-transfer)

#### أمثلة على الروابط:
- `/ar/riyadh/airport-transfer` - توصيل مطار الرياض
- `/ar/jeddah/private-driver` - سائق خاص جدة
- `/ar/abha/tour-chauffeur` - جولات سياحية أبها
- `/en/riyadh/airport-transfer` - Riyadh Airport Transfer

**إجمالي الصفحات:** 7 مدن × 4 خدمات × 2 لغة = **56 صفحة** (مع استثناء مكة)

### 2. صفحات المسارات بين المدن
**النمط:** `/{locale}/routes/{route}`

#### المسارات المتاحة:
**من الرياض:**
- `/ar/routes/riyadh-to-dammam` - الرياض إلى الدمام (400 كم)
- `/ar/routes/riyadh-to-abha` - الرياض إلى أبها (950 كم)

**من جدة:**
- `/ar/routes/jeddah-to-makkah` - جدة إلى مكة (80 كم) ⭐ محتوى مخصص
- `/ar/routes/jeddah-to-taif` - جدة إلى الطائف (170 كم)
- `/ar/routes/jeddah-to-madinah` - جدة إلى المدينة (420 كم)

**من مكة:**
- `/ar/routes/makkah-to-jeddah` - مكة إلى جدة
- `/ar/routes/makkah-to-taif` - مكة إلى الطائف (90 كم)
- `/ar/routes/makkah-to-madinah` - مكة إلى المدينة (450 كم)

**من الطائف:**
- `/ar/routes/taif-to-jeddah` - الطائف إلى جدة
- `/ar/routes/taif-to-makkah` - الطائف إلى مكة

**من أبها:**
- `/ar/routes/abha-to-riyadh` - أبها إلى الرياض

**إجمالي الصفحات:** 11 مسار × 2 لغة = **22 صفحة**

### 3. صفحات المركبات
**النمط:** `/{locale}/vehicles/{vehicle}`

#### أنواع المركبات:
- `/ar/vehicles/luxury-sedan` - سيدان فاخرة (1-3 ركاب)
- `/ar/vehicles/family-van` - فان عائلي (4-7 ركاب)
- `/ar/vehicles/limousine-vip` - ليموزين VIP (1-4 ركاب)

**إجمالي الصفحات:** 3 مركبات × 2 لغة = **6 صفحات**

## إجمالي الصفحات
- صفحات الخدمات: **56 صفحة**
- صفحات المسارات: **22 صفحة**
- صفحات المركبات: **6 صفحات**
- **المجموع الكلي: 84 صفحة** (بالإضافة للصفحة الرئيسية)

## الكلمات المفتاحية المستهدفة

### كلمات عامة:
- سائق خاص
- توصيل مطار
- حجز سيارة مع سائق
- نقل بين المدن
- جولات سياحية

### كلمات خاصة بالمدن:
- توصيل مطار الرياض
- سائق خاص جدة
- جولات سياحية أبها
- سواق خاص الطائف

### كلمات خاصة بالمسارات:
- توصيل جدة مكة
- سعر مشوار جدة مكة
- نقل من الرياض للدمام
- توصيل الطائف مكة

### كلمات دينية:
- توصيل للحرم
- نقل المعتمرين
- سيارة للعمرة
- خدمة ضيوف الرحمن

## ميزات SEO المطبقة

### 1. Meta Tags
- Title tags مخصصة لكل صفحة
- Meta descriptions غنية بالكلمات المفتاحية
- Keywords tags محددة

### 2. Open Graph
- og:title
- og:description
- og:type
- og:url
- og:locale

### 3. Structured Data
- Organization schema
- LocalBusiness schema
- Service schema
- BreadcrumbList schema

### 4. Sitemap
- Sitemap ديناميكي يتضمن جميع الصفحات
- تحديث تلقائي عند إضافة محتوى جديد
- أولويات مختلفة حسب أهمية الصفحة

### 5. Internal Linking
- روابط داخلية بين الصفحات ذات الصلة
- روابط من صفحات الخدمات إلى صفحات المركبات
- روابط من صفحات المسارات إلى صفحات المدن

### 6. Content Structure
- H1 واحد لكل صفحة
- H2 و H3 منظمة
- فقرات غنية بالمحتوى (800+ كلمة)
- أسئلة شائعة (FAQ)
- Call-to-Action واضحة

## المحتوى المخصص

### صفحات ذات محتوى مفصل:
1. **جدة - مكة** (`jeddah-to-makkah`)
   - محتوى خاص بالمعتمرين
   - معلومات عن الميقات
   - نصائح دينية

2. **جولات أبها** (`abha/tour-chauffeur`)
   - 3 مسارات سياحية مقترحة
   - معلومات عن المعالم
   - أفضل أوقات الزيارة

3. **توصيل مطار الرياض** (`riyadh/airport-transfer`)
   - معلومات عن مطار الملك خالد
   - خدمات VIP
   - تتبع الرحلات

## الملفات الرئيسية

### 1. ملفات البيانات:
- `src/lib/seo-content.ts` - بيانات المدن والخدمات والمسارات
- `src/lib/page-content.ts` - المحتوى التفصيلي للصفحات الخاصة

### 2. صفحات Next.js:
- `src/app/[locale]/[city]/[service]/page.tsx` - صفحات الخدمات
- `src/app/[locale]/routes/[route]/page.tsx` - صفحات المسارات
- `src/app/[locale]/vehicles/[vehicle]/page.tsx` - صفحات المركبات

### 3. مكونات الصفحات:
- `src/components/pages/ServiceLandingPage.tsx`
- `src/components/pages/RouteLandingPage.tsx`
- `src/components/pages/VehicleLandingPage.tsx`

### 4. Sitemap:
- `src/app/sitemap.ts` - يولد sitemap.xml تلقائياً

## كيفية إضافة محتوى جديد

### إضافة مدينة جديدة:
1. أضف المدينة في `CITIES` في `seo-content.ts`
2. سيتم إنشاء الصفحات تلقائياً

### إضافة خدمة جديدة:
1. أضف الخدمة في `SERVICE_TYPES` في `seo-content.ts`
2. سيتم إنشاء الصفحات تلقائياً

### إضافة مسار جديد:
1. أضف المسار في `CITY_ROUTES` في `seo-content.ts`
2. (اختياري) أضف محتوى مخصص في `page-content.ts`

### إضافة مركبة جديدة:
1. أضف المركبة في `VEHICLE_TYPES` في `seo-content.ts`
2. سيتم إنشاء الصفحة تلقائياً

## التحسينات المستقبلية

### المرحلة التالية:
1. إضافة مدونة للمحتوى التعليمي
2. إضافة صفحات للمناسبات الخاصة (موسم الحج، رمضان)
3. إضافة تقييمات العملاء
4. إضافة صور حقيقية للمركبات والسائقين
5. إضافة فيديوهات توضيحية

### تحسينات SEO إضافية:
1. Schema markup متقدم
2. AMP pages للصفحات الرئيسية
3. تحسين سرعة التحميل
4. إضافة breadcrumbs
5. تحسين الصور (alt tags, lazy loading)

## الروابط المهمة

- **Sitemap:** https://trywusool.com/sitemap.xml
- **Robots.txt:** https://trywusool.com/robots.txt
- **الصفحة الرئيسية:** https://trywusool.com

## ملاحظات

- جميع الصفحات responsive ومتوافقة مع الجوال
- دعم كامل للغتين العربية والإنجليزية
- تتبع تحليلات Google Analytics لجميع الصفحات
- روابط WhatsApp في كل صفحة
- نموذج حجز موحد في جميع الصفحات
