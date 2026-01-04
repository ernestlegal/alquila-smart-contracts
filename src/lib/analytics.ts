// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_TRACKING_ID = 'G-M7SG9R7ZL4';

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// E-commerce: Track when user views a product
export const trackViewItem = (item: {
  id: string;
  name: string;
  price: number;
  category?: string;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_item', {
      currency: 'PEN',
      value: item.price,
      items: [
        {
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          item_category: item.category || 'Contratos',
          quantity: 1,
        },
      ],
    });
  }
};

// E-commerce: Track when user starts checkout
export const trackBeginCheckout = (item: {
  id: string;
  name: string;
  price: number;
  category?: string;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'begin_checkout', {
      currency: 'PEN',
      value: item.price,
      items: [
        {
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          item_category: item.category || 'Contratos',
          quantity: 1,
        },
      ],
    });
  }
};

// E-commerce: Track successful purchase
export const trackPurchase = (transaction: {
  transactionId: string;
  value: number;
  items: Array<{
    id: string;
    name: string;
    price: number;
    category?: string;
  }>;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'purchase', {
      transaction_id: transaction.transactionId,
      currency: 'PEN',
      value: transaction.value,
      items: transaction.items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        item_category: item.category || 'Contratos',
        quantity: 1,
      })),
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent({
    action: 'click',
    category: 'Button',
    label: `${buttonName} - ${location}`,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'Form',
    label: formName,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  trackEvent({
    action: 'whatsapp_click',
    category: 'Contact',
    label: location,
  });
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
};
