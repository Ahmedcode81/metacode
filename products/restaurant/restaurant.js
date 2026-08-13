/* ============================================================
   Restaurant Platform Product Page - Bilingual (EN/AR) Language Switching
   ============================================================ */
(function () {
  // Supported languages
  const LANGS = ['en', 'ar'];
  const STORAGE_KEY = 'restaurant_platform_lang';

  // Translation dictionary
  const translations = {
    en: {
      // Navigation
      navFeatures: 'Features',
      navDemo: 'Demo',
      navContact: 'Contact',
      tryDemo: 'Try Demo',
      // Hero
      heroBadge: 'Premium Restaurant Website Platform',
      heroTitle1: 'Complete Restaurant',
      heroTitle2: 'Website Solution',
      heroDesc: 'A premium, multilingual restaurant website platform with online ordering, reservations, menu management, and multi-branch support. Built with React, TypeScript, and modern web technologies.',
      tryDemoBtn: 'Try Demo',
      backToMetacode: 'Back to METACODE',
      // Features
      featuresTitle: 'Key Features',
      featuresDesc: 'Everything you need to run a modern restaurant website.',
      feature1: 'Multilingual Support',
      feature1Desc: 'Full English and Arabic support with RTL layout.',
      feature2: 'Online Ordering',
      feature2Desc: 'Complete ordering system with cart management.',
      feature3: 'Reservation System',
      feature3Desc: 'Multi-step booking experience with date/time selection.',
      feature4: 'Menu Management',
      feature4Desc: 'Dynamic menu with categories, modifiers, and pricing.',
      feature5: 'Multi-Branch Support',
      feature5Desc: 'Manage multiple locations with map integration.',
      feature6: 'Responsive Design',
      feature6Desc: 'Beautiful design that works on all devices.',
      feature7: 'Special Offers',
      feature7Desc: 'Promotional offers with discount codes.',
      feature8: 'Contact Integration',
      feature8Desc: 'Phone, WhatsApp, email, and social media integration.',
      // Demo
      demoTitle: 'Try the Demo',
      demoDesc: 'Experience the full restaurant platform with realistic demo data.',
      demoCardTitle: 'Interactive Demo',
      demoCardDesc: 'Explore the complete restaurant platform with menu browsing, online ordering, reservations, and more.',
      demoFeature1: 'No registration required',
      demoFeature2: 'Full system access',
      demoFeature3: 'Realistic demo data',
      startDemo: 'Start Demo',
      // Contact
      contactTitle: 'Contact METACODE',
      contactDesc: 'Get in touch to discuss your restaurant platform requirements.',
      contactEmail: 'Email',
      contactWhatsapp: 'WhatsApp',
      ctaTitle: 'Ready to Build Your Restaurant Website?',
      ctaDesc: 'Let METACODE create a premium restaurant platform for your business.',
      // Footer
      footerTag: 'Software Solutions Built for Business',
      footerHome: 'Home',
      footerFeatures: 'Features',
      footerDemo: 'Demo',
      footerContact: 'Contact',
      footerCopy: '© 2025 METACODE · Developer: AHMED ELHASSAN',
      langLabel: 'العربية',
    },
    ar: {
      // Navigation
      navFeatures: 'المميزات',
      navDemo: 'تجريبي',
      navContact: 'اتصل بنا',
      tryDemo: 'جرب التجريبي',
      // Hero
      heroBadge: 'منصة موقع مطعم ممتازة',
      heroTitle1: 'حل موقع مطعم',
      heroTitle2: 'كامل',
      heroDesc: 'منصة موقع مطعم ممتازة متعددة اللغات مع الطلب عبر الإنترنت والحجوزات وإدارة القائمة ودعم الفروع المتعددة. مبنية باستخدام React وTypeScript وتقنيات الويب الحديثة.',
      tryDemoBtn: 'جرب التجريبي',
      backToMetacode: 'العودة لـ METACODE',
      // Features
      featuresTitle: 'المميزات الرئيسية',
      featuresDesc: 'كل ما تحتاجه لإدارة موقع مطعم حديث.',
      feature1: 'دعم متعدد اللغات',
      feature1Desc: 'دعم كامل للإنجليزية والعربية مع تخطيط RTL.',
      feature2: 'الطلب عبر الإنترنت',
      feature2Desc: 'نظام طلب كامل مع إدارة السلة.',
      feature3: 'نظام الحجز',
      feature3Desc: 'تجربة حجز متعددة الخطوات مع اختيار التاريخ والوقت.',
      feature4: 'إدارة القائمة',
      feature4Desc: 'قائمة ديناميكية مع فئات ومعدلات وأسعار.',
      feature5: 'دعم الفروع المتعددة',
      feature5Desc: 'إدارة مواقع متعددة مع تكامل الخرائط.',
      feature6: 'تصميم متجاوب',
      feature6Desc: 'تصميم جميل يعمل على جميع الأجهزة.',
      feature7: 'عروض خاصة',
      feature7Desc: 'عروض ترويجية مع أكواد الخصم.',
      feature8: 'تكامل الاتصال',
      feature8Desc: 'تكامل الهاتف وواتساب والإيميل ووسائل التواصل الاجتماعي.',
      // Demo
      demoTitle: 'جرب التجريبي',
      demoDesc: 'جرب منصة المطعم الكاملة مع بيانات تجريبية واقعية.',
      demoCardTitle: 'تجريبي تفاعلي',
      demoCardDesc: 'استكشف منصة المطعم الكاملة مع تصفح القائمة والطلب عبر الإنترنت والحجوزات والمزيد.',
      demoFeature1: 'لا حاجة للتسجيل',
      demoFeature2: 'وصول كامل للنظام',
      demoFeature3: 'بيانات تجريبية واقعية',
      startDemo: 'ابدأ التجريبي',
      // Contact
      contactTitle: 'اتصل بـ METACODE',
      contactDesc: 'تواصل معنا لمناقشة متطلبات منصة المطعم.',
      contactEmail: 'البريد الإلكتروني',
      contactWhatsapp: 'واتساب',
      ctaTitle: 'جاهز لبناء موقع مطعمك؟',
      ctaDesc: 'دع METACODE ينشئ منصة مطعم ممتازة لعملك.',
      // Footer
      footerTag: 'حلول برمجية مبنية للأعمال',
      footerHome: 'الرئيسية',
      footerFeatures: 'المميزات',
      footerDemo: 'تجريبي',
      footerContact: 'اتصل بنا',
      footerCopy: '© 2025 METACODE · المطور: أحمد الحسن',
      langLabel: 'English',
    },
  };

  // Current language state
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  // Apply language to the page
  function applyLang(lang) {
    const html = document.documentElement;
    const body = document.body;
    
    // Set direction and language
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    body.classList.remove('ltr', 'rtl');
    body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update language toggle button
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = translations[lang].langLabel;
    }

    // Save preference
    localStorage.setItem(STORAGE_KEY, lang);
    currentLang = lang;
  }

  // Toggle language function
  window.toggleLang = function () {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    applyLang(newLang);
  };

  // Navigation functions
  window.openDemo = function () {
    window.open('../../restaurant_demo/index.html', '_blank');
  };

  window.goBack = function () {
    // Go back to main METACODE website
    window.location.href = '../../index.html';
  };

  // Smooth scroll to section
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Apply on load
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);
  });

  // Expose for debugging
  window.RestaurantPlatform = { applyLang, currentLang: () => currentLang };
})();
