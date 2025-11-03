# إعداد وتشغيل مشروع وصول

## المشكلة الحالية
المشروع يتطلب Node.js إصدار 20.9.0 أو أحدث، والإصدار الحالي هو 18.16.1

## الحلول المقترحة

### الحل الأول: تحديث Node.js (الأفضل)
1. قم بتحميل Node.js الإصدار الأحدث من: https://nodejs.org
2. اختر LTS (Long Term Support) version
3. قم بتثبيته واعد تشغيل الكمبيوتر
4. تحقق من الإصدار: `node --version`
5. شغل المشروع: `npm run dev`

### الحل الثاني: استخدام NVM (Node Version Manager)
```bash
# تثبيت nvm (Windows)
# قم بتحميل nvm-windows من: https://github.com/coreybutler/nvm-windows

# تثبيت Node.js 20
nvm install 20
nvm use 20

# تشغيل المشروع
npm run dev
```

### الحل الثالث: استخدام Docker (للمطورين المتقدمين)
```dockerfile
# إنشاء Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

## التحقق من صحة الإعداد

### 1. فحص الأخطاء
```bash
# فحص TypeScript
npx tsc --noEmit

# فحص ESLint
npm run lint
```

### 2. بناء المشروع
```bash
npm run build
```

### 3. تشغيل المشروع
```bash
npm run dev
```

## الميزات المكتملة ✅

- ✅ إعداد Next.js 14 مع TypeScript
- ✅ Tailwind CSS مع ألوان وصول
- ✅ نظام الترجمة (عربي/إنجليزي)
- ✅ تكامل Google Analytics
- ✅ جميع المكونات الأساسية:
  - Hero Section
  - Services Section  
  - Booking Form
  - Trust Section
  - Footer
  - Floating WhatsApp Button
- ✅ تكامل WhatsApp مع تنسيق الرسائل
- ✅ تتبع الأحداث والتحليلات
- ✅ تصميم متجاوب
- ✅ دعم إمكانية الوصول

## الخطوات بعد التشغيل

1. **إعداد Google Analytics**:
   - أنشئ ملف `.env.local`
   - أضف: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

2. **اختبار الميزات**:
   - تبديل اللغة
   - ملء نموذج الحجز
   - اختبار أزرار WhatsApp
   - اختبار على الجوال

3. **التخصيص**:
   - تحديث المحتوى في `src/lib/i18n.ts`
   - تعديل الألوان في `tailwind.config.ts`
   - إضافة صور في مجلد `public`

## روابط مفيدة
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React DatePicker](https://reactdatepicker.com/)
- [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)