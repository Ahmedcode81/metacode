/**
 * TRANSLATIONS — English / Arabic
 * Full multilingual support for the restaurant platform.
 */

export type Lang = 'en' | 'ar';

export interface Dictionary {
  [key: string]: string;
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    // Navigation
    navHome: 'Home',
    navMenu: 'Menu',
    navStory: 'Our Story',
    navReservation: 'Reservations',
    navBranches: 'Branches',
    navOffers: 'Offers',
    navContact: 'Contact',
    orderNow: 'Order Now',
    langLabel: 'العربية',
    langLabelShort: 'AR',

    // Hero
    scrollToExplore: 'Scroll to explore',

    // Buttons / common
    exploreMenu: 'Explore Menu',
    reserveTable: 'Reserve a Table',
    viewAll: 'View All',
    addToOrder: 'Add to Order',
    addedToOrder: 'Added to your order',
    viewOrder: 'View Order',
    yourOrder: 'Your Order',
    total: 'Total',
    checkout: 'Checkout',
    emptyCart: 'Your order is empty',
    emptyCartDesc: 'Browse the menu and add something delicious.',
    currency: 'USD',
    quantity: 'Quantity',
    ingredients: 'Ingredients',
    close: 'Close',
    cartEmpty: 'Your order is empty',
    clearOrder: 'Clear order',
    reserve: 'Reserve',
    continue: 'Continue',
    selectBranch: 'Select a branch',
    name: 'Name',
    submitting: 'Submitting…',
    confirmReservation: 'Confirm Reservation',
    reservationReference: 'Reference',
    confirmDetails: 'Confirm your reservation',
    date: 'Date',
    time: 'Time',
    guests: 'Guests',
    viewOnMap: 'View on map',
    chat: 'Chat with us',
    menu: 'Menu',
    footerNav: 'Explore',
    follow: 'Follow us',

    // Menu
    signature: 'Signature',
    starters: 'Starters',
    mainCourses: 'Main Courses',
    burgers: 'Burgers',
    pizza: 'Pizza',
    desserts: 'Desserts',
    drinks: 'Drinks',
    menuTitle: 'Our Menu',
    menuSubtitle: 'A curated selection of dishes crafted to delight.',
    featured: 'Featured',
    unavailable: 'Unavailable',

    // Story
    storyTitle: 'Our Story',
    since: 'Serving since',

    // Reservation
    reservationTitle: 'Reserve a Table',
    reservationSubtitle:
      'Book your table for an unforgettable dining experience.',
    stepDate: 'Date',
    stepTime: 'Time',
    stepGuests: 'Guests',
    stepDetails: 'Details',
    stepConfirm: 'Confirm',
    next: 'Continue',
    back: 'Back',
    confirm: 'Confirm Reservation',
    selectDate: 'Select a date',
    selectTime: 'Select a time',
    selectGuests: 'Number of guests',
    yourName: 'Your name',
    yourPhone: 'Your phone number',
    yourEmail: 'Email (optional)',
    branch: 'Branch',
    notes: 'Special requests (optional)',
    reservationConfirmed: 'Reservation Confirmed',
    reservationRef: 'Reference',
    reservationDesc:
      'We look forward to welcoming you. A confirmation has been sent to your phone.',
    newReservation: 'Make another reservation',

    // Branches
    branchesTitle: 'Find Us',
    branchesSubtitle: 'Visit us at a location near you.',
    getDirections: 'Get Directions',
    call: 'Call',
    openingHours: 'Opening Hours',

    // Offers
    offersTitle: 'Special Offers',
    offersSubtitle: 'Exclusive promotions crafted for you.',
    validUntil: 'Valid until',
    useCode: 'Use code',
    off: 'OFF',

    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We would love to hear from you.',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    address: 'Address',
    getInTouch: 'Get in touch',
    followUs: 'Follow us',

    // Footer
    footerTagline: 'Fine dining, perfected.',
    footerRights: 'All rights reserved.',
    poweredBy: 'Powered by',
    footerQuickLinks: 'Quick Links',
    footerContact: 'Contact',
    footerHours: 'Opening Hours',
    footerHoursValue: 'Daily · 12:00 PM – 12:00 AM',
    footerHoursArValue: 'يومياً · 12:00 ظهراً – 12:00 منتصف الليل',

    // Cart
    remove: 'Remove',
    subtotal: 'Subtotal',
    deliveryNote: 'Delivery & taxes calculated at checkout.',
    cartTitle: 'Your Order',

    // Newsletter
    newsletter: 'Stay in the loop',
    newsletterDesc: 'Subscribe for exclusive offers and updates.',
    subscribe: 'Subscribe',
    emailPlaceholder: 'Your email address',
  },
  ar: {
    // Navigation
    navHome: 'الرئيسية',
    navMenu: 'القائمة',
    navStory: 'قصتنا',
    navReservation: 'الحجوزات',
    navBranches: 'الفروع',
    navOffers: 'العروض',
    navContact: 'اتصل بنا',
    orderNow: 'اطلب الآن',
    langLabel: 'English',
    langLabelShort: 'EN',

    // Hero
    scrollToExplore: 'مرّر للاستكشاف',

    // Buttons / common
    exploreMenu: 'استكشف القائمة',
    reserveTable: 'احجز طاولة',
    viewAll: 'عرض الكل',
    addToOrder: 'أضف للطلب',
    addedToOrder: 'تمت الإضافة لطلبك',
    viewOrder: 'عرض الطلب',
    yourOrder: 'طلبك',
    total: 'الإجمالي',
    checkout: 'إتمام الطلب',
    emptyCart: 'طلبك فارغ',
    emptyCartDesc: 'تصفح القائمة وأضف شيئاً لذيذاً.',
    currency: '$',
    quantity: 'الكمية',
    ingredients: 'المكونات',
    close: 'إغلاق',
    cartEmpty: 'طلبك فارغ',
    clearOrder: 'مسح الطلب',
    reserve: 'احجز',
    continue: 'متابعة',
    selectBranch: 'اختر الفرع',
    name: 'الاسم',
    submitting: 'جارٍ الإرسال…',
    confirmReservation: 'تأكيد الحجز',
    reservationReference: 'المرجع',
    confirmDetails: 'تأكيد الحجز',
    date: 'التاريخ',
    time: 'الوقت',
    guests: 'الضيوف',
    viewOnMap: 'عرض على الخريطة',
    chat: 'تواصل معنا',
    menu: 'القائمة',
    footerNav: 'استكشف',
    follow: 'تابعنا',

    // Menu
    signature: 'التوقيع',
    starters: 'المقبلات',
    mainCourses: 'الأطباق الرئيسية',
    burgers: 'البرجر',
    pizza: 'بيتزا',
    desserts: 'الحلويات',
    drinks: 'المشروبات',
    menuTitle: 'قائمتنا',
    menuSubtitle: 'تشكيلة مختارة بعناية من الأطباق.',
    featured: 'مميز',
    unavailable: 'غير متوفر',

    // Story
    storyTitle: 'قصتنا',
    since: 'نخدمكم منذ',

    // Reservation
    reservationTitle: 'احجز طاولة',
    reservationSubtitle: 'احجز طاولتك لتجربة طعام لا تُنسى.',
    stepDate: 'التاريخ',
    stepTime: 'الوقت',
    stepGuests: 'الضيوف',
    stepDetails: 'التفاصيل',
    stepConfirm: 'التأكيد',
    next: 'متابعة',
    back: 'رجوع',
    confirm: 'تأكيد الحجز',
    selectDate: 'اختر التاريخ',
    selectTime: 'اختر الوقت',
    selectGuests: 'عدد الضيوف',
    yourName: 'اسمك',
    yourPhone: 'رقم هاتفك',
    yourEmail: 'البريد الإلكتروني (اختياري)',
    branch: 'الفرع',
    notes: 'طلبات خاصة (اختياري)',
    reservationConfirmed: 'تم تأكيد الحجز',
    reservationRef: 'المرجع',
    reservationDesc:
      'نتطلع لاستقبالكم. تم إرسال رسالة تأكيد إلى هاتفك.',
    newReservation: 'إجراء حجز آخر',

    // Branches
    branchesTitle: 'موقعنا',
    branchesSubtitle: 'قم بزيارتنا في أقرب فرع لك.',
    getDirections: 'الاتجاهات',
    call: 'اتصل',
    openingHours: 'ساعات العمل',

    // Offers
    offersTitle: 'العروض الخاصة',
    offersSubtitle: 'عروض حصرية صُممت لك.',
    validUntil: 'صالح حتى',
    useCode: 'استخدم الكود',
    off: 'خصم',

    // Contact
    contactTitle: 'اتصل بنا',
    contactSubtitle: 'يسعدنا سماع رأيك.',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    getInTouch: 'تواصل معنا',
    followUs: 'تابعنا',

    // Footer
    footerTagline: 'فن الطهي، بإتقان.',
    footerRights: 'جميع الحقوق محفوظة.',
    poweredBy: 'مدعوم بواسطة',
    footerQuickLinks: 'روابط سريعة',
    footerContact: 'اتصل بنا',
    footerHours: 'ساعات العمل',
    footerHoursValue: 'اليوم',
    footerHoursArValue: 'يومياً · 12:00 ظهراً – 12:00 منتصف الليل',

    // Cart
    remove: 'إزالة',
    subtotal: 'المجموع الفرعي',
    deliveryNote: 'يتم حساب التوصيل والضرائب عند إتمام الطلب.',
    cartTitle: 'طلبك',

    // Newsletter
    newsletter: 'ابق على اطلاع',
    newsletterDesc: 'اشترك لتصلك العروض الحصرية والتحديثات.',
    subscribe: 'اشترك',
    emailPlaceholder: 'بريدك الإلكتروني',
  },
};

export default translations;
