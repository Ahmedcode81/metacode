/**
 * ============================================================
 * RESTAURANT CONFIGURATION — Centralized Branding & Content
 * ============================================================
 * This is the SINGLE source of truth for restaurant-specific
 * data. It is fully reusable across clients. To onboard a new
 * restaurant, replace these values (or source them from the
 * future Management System API).
 *
 * Everything here is consumed through the service layer so the
 * UI components never import restaurant data directly.
 * ============================================================
 */

export interface RestaurantConfig {
  id: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  logo: string;
  favicon: string;
  heroImage: string;
  heroVideo?: string;
  storyImages: string[];

  branding: {
    primary: string;
    primaryHover: string;
    secondary: string;
    accent: string;
  };

  typography: {
    heading: string;
    body: string;
    arabic: string;
  };

  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    addressAr: string;
  };

  social: {
    instagram: string;
    snapchat: string;
    tiktok: string;
    x: string;
  };

  hero: {
    headline: string;
    headlineAr: string;
    subheadline: string;
    subheadlineAr: string;
    ctaPrimary: string;
    ctaPrimaryAr: string;
    ctaSecondary: string;
    ctaSecondaryAr: string;
  };

  story: {
    title: string;
    titleAr: string;
    paragraphs: string[];
    paragraphsAr: string[];
    quote: string;
    quoteAr: string;
  };

  currency: string;
}

export const restaurantConfig: RestaurantConfig = {
  id: 'demo',
  name: 'Demo Restaurant',
  nameAr: 'مطعم تجريبي',
  tagline: 'Demo Version - Restaurant Platform',
  taglineAr: 'نسخة تجريبية - منصة المطاعم',
  description:
    'This is a demo version of the METACODE Restaurant Platform. Replace this content with your own restaurant information.',
  descriptionAr:
    'هذه نسخة تجريبية من منصة مطاعم METACODE. استبدل هذا المحتوى بمعلومات مطعمك الخاصة.',
  logo: '/assets/logo.svg',
  favicon: '/favicon.svg',
heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
  storyImages: [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop'
  ],

  branding: {
    // METACODE palette evolved — still recognizable as METACODE
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    secondary: '#172B4D',
    accent: '#6366F1',
  },

  typography: {
    heading: 'Playfair Display',
    body: 'Inter',
    arabic: 'Cairo',
  },

  contact: {
    phone: '+1 234 567 8900',
    whatsapp: '1234567890',
    email: 'demo@restaurant.com',
    address: '123 Main Street, City, Country',
    addressAr: '١٢٣ الشارع الرئيسي، المدينة، الدولة',
  },

  social: {
    instagram: 'https://instagram.com',
    snapchat: 'https://snapchat.com',
    tiktok: 'https://tiktok.com',
    x: 'https://x.com',
  },

  hero: {
    headline: 'METACODE Restaurant Platform Demo',
    headlineAr: 'عرض تجريبي لمنصة مطاعم METACODE',
    subheadline:
      'A fully-featured restaurant website template. Replace this content with your own restaurant details.',
    subheadlineAr:
      'قالب موقع مطعم متكامل الميزات. استبدل هذا المحتوى بتفاصيل مطعمك الخاصة.',
    ctaPrimary: 'Explore Menu',
    ctaPrimaryAr: 'استكشف القائمة',
    ctaSecondary: 'Reserve a Table',
    ctaSecondaryAr: 'احجز طاولة',
  },

  story: {
    title: 'About This Demo',
    titleAr: 'حول هذا العرض التجريبي',
    paragraphs: [
      'This is a demonstration of the METACODE Restaurant Platform - a premium, multilingual restaurant website template built with React, TypeScript, and modern web technologies.',
      'The platform includes features like online reservations, menu browsing, order management, and responsive design for both English and Arabic users.',
    ],
    paragraphsAr: [
      'هذا عرض توضيحي لمنصة مطاعم METACODE - قالب موقع مطعم ممتاز متعدد اللغات مبني باستخدام React وTypeScript وتقنيات الويب الحديثة.',
      'تشمل المنصة ميزات مثل الحجز عبر الإنترنت، تصفح القائمة، إدارة الطلبات، وتصميم متجاوب للمستخدمين باللغتين الإنجليزية والعربية.',
    ],
    quote: 'Premium restaurant platform for modern dining experiences.',
    quoteAr: 'منصة مطاعم ممتازة لتجارب الطعام الحديثة.',
  },

  currency: 'USD',
};

/** Apply brand colors as CSS variables on the root element. */
export function applyBranding(config: RestaurantConfig): void {
  const root = document.documentElement;
  root.style.setProperty('--brand-primary', config.branding.primary);
  root.style.setProperty('--brand-primary-hover', config.branding.primaryHover);
  root.style.setProperty('--brand-accent', config.branding.accent);
  root.style.setProperty('--secondary', config.branding.secondary);
}

export default restaurantConfig;
