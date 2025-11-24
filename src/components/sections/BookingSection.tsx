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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
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

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType !== '';
      case 2:
        return formData.city !== '';
      case 3:
        return formData.date !== null;
      case 4:
        return formData.time !== '';
      case 5:
        return validateSaudiPhone(formData.phone);
      default:
        return true;
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

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index + 1 <= currentStep ? 'bg-primary-gold' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
          <p className={`text-center text-sm text-text-light/60 ${
            locale === 'ar' ? 'font-arabic' : 'font-inter'
          }`}>
            {locale === 'ar' ? `الخطوة ${currentStep} من ${totalSteps}` : `Step ${currentStep} of ${totalSteps}`}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="min-h-[300px]">
          {/* Step 1: Service Type */}
          {currentStep === 1 && (
            <div className="animate-fade-in-up">
              <Select
                label={t.booking.serviceType}
                value={formData.serviceType}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                options={[
                  { value: '', label: locale === 'ar' ? 'اختر الخدمة' : 'Select Service' },
                  ...SERVICES.map((service) => ({
                    value: service.id,
                    label: locale === 'ar' ? service.nameAr : service.nameEn
                  }))
                ]}
                placeholder={locale === 'ar' ? 'اختر الخدمة' : 'Select Service'}
                locale={locale}
                required
              />
            </div>
          )}

          {/* Step 2: City */}
          {currentStep === 2 && (
            <div className="animate-fade-in-up">
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
            </div>
          )}

          {/* Step 3: Date */}
          {currentStep === 3 && (
            <div className="animate-fade-in-up">
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
          )}

          {/* Step 4: Time */}
          {currentStep === 4 && (
            <div className="animate-fade-in-up">
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
          )}

          {/* Step 5: Phone */}
          {currentStep === 5 && (
            <div className="animate-fade-in-up">
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
            </div>
          )}

          {/* Step 6: Passengers & Notes */}
          {currentStep === 6 && (
            <div className="animate-fade-in-up space-y-4">
              <Select
                label={t.booking.passengers}
                value={formData.passengers}
                onChange={(e) => handleInputChange('passengers', e.target.value)}
                options={[
                  { value: '', label: locale === 'ar' ? 'اختر عدد الركاب (اختياري)' : 'Select passengers (optional)' },
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

              <Textarea
                label={t.booking.notes}
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                rows={3}
                placeholder={locale === 'ar' ? 'ملاحظات إضافية...' : 'Additional notes...'}
                locale={locale}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={prevStep}
                className="flex-1"
              >
                {locale === 'ar' ? 'السابق' : 'Previous'}
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                size="lg"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`${currentStep === 1 ? 'w-full' : 'flex-1'}`}
              >
                {locale === 'ar' ? 'التالي' : 'Next'}
              </Button>
            ) : (
              <Button
                type="submit"
                size="lg"
                className="flex-1"
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
            )}
          </div>

          {errors.general && (
            <BodyText color="error" align="center" className="text-sm mt-4">
              {errors.general}
            </BodyText>
          )}
        </form>
    </Section>
  );
}