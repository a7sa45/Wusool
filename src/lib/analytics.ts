// Google Analytics 4 Integration

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined tracking functions for Wusool events
export const trackBookingClick = (serviceType: string) => {
  trackEvent({
    action: 'booking_click',
    category: 'engagement',
    label: serviceType,
    value: 1,
  });
};

export const trackFormSubmit = (serviceType: string, city: string) => {
  trackEvent({
    action: 'form_submit',
    category: 'conversion',
    label: `${serviceType}_${city}`,
    value: 1,
  });
};

export const trackWhatsAppOpen = (source: 'form' | 'floating_button' | 'footer') => {
  trackEvent({
    action: 'whatsapp_open',
    category: 'engagement',
    label: source,
    value: 1,
  });
};

export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent({
    action: 'language_switch',
    category: 'engagement',
    label: `${fromLang}_to_${toLang}`,
    value: 1,
  });
};

export const trackServiceCardClick = (serviceId: string) => {
  trackEvent({
    action: 'service_card_click',
    category: 'engagement',
    label: serviceId,
    value: 1,
  });
};