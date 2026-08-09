/**
 * OFFERS / PROMOTIONS DATA
 * Managed by the Management System in the future.
 */

export interface Offer {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
  code?: string;
}

export const offers: Offer[] = [
  {
    id: 'welcome-20',
    title: 'Welcome Offer',
    titleAr: 'عرض الترحيب',
    description:
      'Enjoy 20% off your first dine-in order when you visit any of our branches this month.',
    descriptionAr:
      'استمتع بخصم 20% على أول طلب داخل المطعم عند زيارتك لأي من فروعنا هذا الشهر.',
image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=400&fit=crop',
    discount: 20,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    active: true,
    code: 'DEMO20',
  },
  {
    id: 'weekly-special',
    title: 'Weekly Special',
    titleAr: 'عرض أسبوعي',
    description:
      'Every week, enjoy special discounts on selected signature dishes.',
    descriptionAr:
      'كل أسبوع، استمتع بخصومات خاصة على أطباق التوقيع المختارة.',
image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop',
    discount: 15,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    active: true,
    code: 'DEMO15',
  },
  {
    id: 'family-deal',
    title: 'Family Feast',
    titleAr: 'وليمة العائلة',
    description:
      'A complete family meal for four, including starters, mains, and desserts.',
    descriptionAr:
      'وجبة عائلية متكاملة لأربعة أشخاص، تشمل المقبلات والأطباق الرئيسية والحلويات.',
image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop',
    discount: 25,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    active: true,
    code: 'DEMO25',
  },
];

export default offers;
