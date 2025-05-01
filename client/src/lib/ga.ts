// Google Analytics implementation

// Initialize Google Analytics with GA4
export const initGA = () => {
  if (typeof window !== "undefined") {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GOOGLE_ANALYTICS_ID || 'G-MEASUREMENT_ID'}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){window.dataLayer.push(arguments);}
    window.gtag('js', new Date());
    window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID || 'G-MEASUREMENT_ID');
  }
};

// Track page views
export const trackPageView = (url?: string) => {
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.pathname : '');
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pageUrl,
    });
  }
};

// Track events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Declare global gtag types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
