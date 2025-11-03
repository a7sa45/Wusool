'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Section, Heading2, BodyText, Select, Input, Textarea } from '@/components/ui';
import { useLayout } from '@/components/Layout';
import { SERVICES, CITIES, WHATSAPP_NUMBER } from '@/lib/data';
import { validateSaudiPhone, formatPhoneForWhatsApp } from '@/lib/utils';
import { trackFormSubmit, trackWhatsAppOpen } from '@/lib/analytics';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingFormData {
  serviceType: string;
  city: string;
  date: Date | null;
  time: string;
  passengers: string;
  phone: string;
  notes: string;
}

interface FormErrors {
  phone?: string;
  date?: string;
  time?: string;
  general?: string;
}

export function BookingSection() {
  const { t, locale } = useLayout();
  const [formData, setFormData] = useState<BookingFormData>({
    serviceType: '',
    city: 'abha',
    date: null,
    time: '',
    passengers: '',
    phone: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-select service if coming from service card
  useEffect(() => {
    const selectedService = sessionStorage.getItem('selectedService');
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceType: selectedService }));
      sessionStorage.removeItem('selectedService');
    }
  }, []);

  const handleInputChange = (field: keyof BookingFormData, value: string | Date | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = t.booking.errors.phoneRequired;
    } else if (!validateSaudiPhone(formData.phone)) {
      newErrors.phone = t.booking.errors.phoneInvalid;
    }

    if (!formData.date) {
      newErrors.date = t.booking.errors.dateInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    const service = SERVICES.find(s => s.id === formData.serviceType);
    const city = CITIES.find(c => c.id === formData.city);
    const serviceName = service ? (locale === 'ar' ? service.nameAr : service.nameEn) : formData.serviceType;
    const cityName = city ? (locale === 'ar' ? city.nameAr : city.nameEn) : formData.city;
    
    const template = t.whatsapp.template;
    
    return template
      .replace('{serviceType}', serviceName)
      .replace('{city}', cityName)
      .replace('{date}', formData.date?.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US') || '')
      .replace('{time}', formData.time)
      .replace('{passengers}', formData.passengers || (locale === 'ar' ? 'غير محدد' : 'Not specified'))
      .replace('{phone}', formData.phone)
      .replace('{notes}', formData.notes || (locale === 'ar' ? 'لا توجد ملاحظات' : 'No notes'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Track form submission
      trackFormSubmit(formData.serviceType, formData.city);
      
      const message = generateWhatsAppMessage();
      const whatsappPhone = formatPhoneForWhatsApp(WHATSAPP_NUMBER);
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
      
      // Track WhatsApp opening
      trackWhatsAppOpen('form');
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Reset form after successful submission
      setFormData({
        serviceType: '',
        city: 'abha',
        date: null,
        time: '',
        passengers: '',
        phone: '',
        notes: '',
      });
      
    } catch (error) {
      setErrors({ general: 'حدث خطأ أثناء إرسال الطلب' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="booking-section" variant="dark" padding="lg" containerSize="sm">
      <div className="text-center mb-8 sm:mb-12">
        <Heading2 
          locale={locale} 
          align="center" 
          className="mb-3 sm:mb-4"
        >
          {t.booking.title}
        </Heading2>
        
        <BodyText 
          locale={locale} 
          color="muted" 
          align="center" 
          className="px-2"
        >
          {t.booking.description}
        </BodyText>
      </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Service Type */}
          <Select
            label={t.booking.serviceType}
            value={formData.serviceType}
            onChange={(e) => handleInputChange('serviceType', e.target.value)}
            options={[
              ...SERVICES.map((service) => ({
                value: service.id,
                label: locale === 'ar' ? service.nameAr : service.nameEn
              }))
            ]}
            placeholder={locale === 'ar' ? 'اختر الخدمة' : 'Select Service'}
            locale={locale}
            required
          />

          {/* City */}
          <Select
            label={t.booking.city}
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            options={CITIES.map((city) => ({
              value: city.id,
              label: locale === 'ar' ? city.nameAr : city.nameEn
            }))}
            locale={locale}
            required
          />

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium text-text-light mb-2 ${
                locale === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {t.booking.date}
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => handleInputChange('date', date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-text-light focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-colors"
                placeholderText={locale === 'ar' ? 'اختر التاريخ' : 'Select Date'}
                required
              />
              {errors.date && (
                <p className="text-error-red text-sm mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium text-text-light mb-2 ${
                locale === 'ar' ? 'font-arabic' : 'font-inter'
              }`}>
                {t.booking.time}
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-text-light focus:border-primary-gold focus:ring-1 focus:ring-primary-gold outline-none transition-colors min-h-[48px] text-base"
                style={{ 
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield'
                }}
                required
              />
            </div>
          </div>

          {/* Passengers */}
          <Select
            label={t.booking.passengers}
            value={formData.passengers}
            onChange={(e) => handleInputChange('passengers', e.target.value)}
            options={[
              { value: '', label: locale === 'ar' ? 'اختر عدد الركاب' : 'Select passengers' },
              { value: '1', label: locale === 'ar' ? '1 راكب' : '1 passenger' },
              { value: '2', label: locale === 'ar' ? '2 راكب' : '2 passengers' },
              { value: '3', label: locale === 'ar' ? '3 ركاب' : '3 passengers' },
              { value: '4', label: locale === 'ar' ? '4 ركاب' : '4 passengers' },
              { value: '5', label: locale === 'ar' ? '5 ركاب' : '5 passengers' },
              { value: '6', label: locale === 'ar' ? '6 ركاب' : '6 passengers' },
              { value: '7', label: locale === 'ar' ? '7 ركاب' : '7 passengers' },
            ]}
            placeholder={locale === 'ar' ? 'اختر عدد الركاب' : 'Select number of passengers'}
            locale={locale}
          />

          {/* Phone */}
          <Input
            type="tel"
            label={t.booking.phone}
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder={locale === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'}
            error={errors.phone}
            locale={locale}
            required
          />

          {/* Notes */}
          <Textarea
            label={t.booking.notes}
            value={formData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            rows={3}
            placeholder={locale === 'ar' ? 'ملاحظات إضافية...' : 'Additional notes...'}
            locale={locale}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
              </div>
            ) : (
              t.booking.submit
            )}
          </Button>

          {errors.general && (
            <BodyText color="error" align="center" className="text-sm">
              {errors.general}
            </BodyText>
          )}
        </form>
    </Section>
  );
}