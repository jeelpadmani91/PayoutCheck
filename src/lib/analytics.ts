// Types for all tracked events
export type AnalyticsEvent =
  | 'page_view'
  | 'whatsapp_clicked'
  | 'calendar_clicked'
  | 'calculator_started'
  | 'calculator_completed'
  | 'language_switched'
  | 'faq_opened'
  | 'sample_report_viewed'
  | 'scroll_50'
  | 'scroll_90';

export interface EventParams {
  locale?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  device_category?: string;
  [key: string]: string | number | boolean | undefined;
}

// Ensure dataLayer exists
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
};

export const getDeviceCategory = (): 'mobile' | 'tablet' | 'desktop' | undefined => {
  if (typeof window === 'undefined') return undefined;
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

export const trackEvent = (event: AnalyticsEvent | (string & {}), params?: EventParams) => {
  if (typeof window === 'undefined') return;

  const defaultParams = {
    referrer: document.referrer || undefined,
    device_category: getDeviceCategory(),
    ...getUTMParams(),
  };

  const eventData = {
    event,
    ...defaultParams,
    ...params,
  };

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Track] ${event}`, eventData);
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
};

export const initScrollTracking = (callback: (depth: 'scroll_50' | 'scroll_90') => void) => {
  if (typeof window === 'undefined') return () => {};

  let scrolled50 = false;
  let scrolled90 = false;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollHeight <= 0) return;

    const scrollPercentage = (window.scrollY / scrollHeight) * 100;

    if (scrollPercentage >= 50 && !scrolled50) {
      scrolled50 = true;
      callback('scroll_50');
    }

    if (scrollPercentage >= 90 && !scrolled90) {
      scrolled90 = true;
      callback('scroll_90');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
