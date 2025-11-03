import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Phone number validation for Saudi Arabia
export function validateSaudiPhone(phone: string): boolean {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Check if it matches Saudi phone patterns
  // 05XXXXXXXX (10 digits starting with 05)
  // 9665XXXXXXXX (12 digits starting with 9665)
  // +9665XXXXXXXX (with + prefix)
  const saudiPattern = /^(05\d{8}|9665\d{8})$/;
  
  return saudiPattern.test(cleanPhone);
}

// Format phone number for WhatsApp (ensure it starts with 966)
export function formatPhoneForWhatsApp(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.startsWith('05')) {
    return '966' + cleanPhone.substring(1);
  }
  
  if (cleanPhone.startsWith('9665')) {
    return cleanPhone;
  }
  
  return cleanPhone;
}

// Smooth scroll to element
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}