import React from 'react';
import Link from 'next/link';
import { Container, Section, Heading1, BodyText, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <Section variant="dark" padding="xl" className="min-h-screen flex items-center">
      <Container size="sm" className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-4xl sm:text-5xl font-bold text-primary-gold mb-4">
            وصول
          </div>
        </div>

        {/* 404 Error */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-primary-gold/20 mb-4">
            404
          </div>
          
          <Heading1 
            locale="ar" 
            align="center" 
            className="mb-4"
          >
            الصفحة غير موجودة
          </Heading1>
          
          <BodyText 
            locale="ar" 
            color="muted" 
            align="center"
            className="mb-2"
          >
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها.
          </BodyText>
          
          <BodyText 
            locale="ar" 
            color="muted" 
            align="center"
            className="mb-8"
          >
            ربما تم نقلها أو حذفها، أو أنك كتبت الرابط بشكل خاطئ.
          </BodyText>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center sm:items-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              العودة للصفحة الرئيسية
            </Button>
          </Link>
          
          <Link href="https://wa.me/966598330936?text=مرحبًا، أحتاج مساعدة في الموقع">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              تواصل معنا عبر واتساب
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <BodyText 
            locale="ar" 
            color="muted" 
            align="center"
            className="text-sm"
          >
            هل تحتاج مساعدة؟ تواصل معنا على رقم{' '}
            <a 
              href="tel:+966598330936" 
              className="text-primary-gold hover:text-primary-gold/80 transition-colors"
            >
              0598330936
            </a>
          </BodyText>
        </div>

        {/* English Version */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <BodyText 
            locale="en" 
            color="muted" 
            align="center"
            className="text-sm mb-2"
          >
            <strong>Page Not Found</strong>
          </BodyText>
          
          <BodyText 
            locale="en" 
            color="muted" 
            align="center"
            className="text-sm"
          >
            Sorry, we couldn't find the page you're looking for.{' '}
            <Link href="/" className="text-primary-gold hover:text-primary-gold/80 transition-colors">
              Go back home
            </Link>{' '}
            or{' '}
            <a 
              href="https://wa.me/966598330936?text=Hello, I need help with the website"
              className="text-primary-gold hover:text-primary-gold/80 transition-colors"
            >
              contact us on WhatsApp
            </a>.
          </BodyText>
        </div>
      </Container>
    </Section>
  );
}