/**
 * MENU DATA — Categories & Products
 * All data is pure frontend mock data for now. In the future
 * this will come from the Restaurant Management System API.
 */

export interface MenuModifierOption {
  id: string;
  name: string;
  nameAr: string;
  price: number;
}

export interface MenuModifier {
  id: string;
  name: string;
  nameAr: string;
  required: boolean;
  multiple: boolean;
  options: MenuModifierOption[];
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  available: boolean;
  ingredients: string[];
  ingredientsAr: string[];
  modifiers: MenuModifier[];
}

export interface MenuCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  products: Product[];
}

export const menu: MenuCategory[] = [
  {
    id: 'signature',
    name: 'Signature',
    nameAr: 'التوقيع',
    icon: 'star',
    products: [
      {
        id: 'signature-burger',
        name: 'Signature Burger',
        nameAr: 'برجر التوقيع',
        description:
          'Premium beef patty, special sauce, fresh vegetables, artisan bun.',
        descriptionAr:
          'قطعة لحم بقري ممتازة، صوص خاص، خضروات طازجة، خبز حرفي.',
        price: 42,
image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
        category: 'signature',
        featured: true,
        available: true,
        ingredients: ['Premium beef', 'Special sauce', 'Fresh vegetables', 'Artisan bun'],
        ingredientsAr: ['لحم بقري ممتاز', 'صوص خاص', 'خضروات طازجة', 'خبز حرفي'],
        modifiers: [
          {
            id: 'doneness',
            name: 'Doneness',
            nameAr: 'درجة النضج',
            required: true,
            multiple: false,
            options: [
              { id: 'med', name: 'Medium', nameAr: 'وسط', price: 0 },
              { id: 'well', name: 'Well done', nameAr: 'مطهو جيداً', price: 0 },
            ],
          },
          {
            id: 'extra',
            name: 'Extras',
            nameAr: 'إضافات',
            required: false,
            multiple: true,
            options: [
              { id: 'cheese', name: 'Extra cheese', nameAr: 'جبنة إضافية', price: 5 },
              { id: 'bacon', name: 'Bacon', nameAr: 'بيكون', price: 8 },
            ],
          },
        ],
      },
      {
        id: 'gourmet-steak',
        name: 'Gourmet Steak',
        nameAr: 'ستيك فاخر',
        description:
          'Premium cut steak, herb butter, roasted vegetables, house sauce.',
        descriptionAr:
          'ستيك ممتاز، زبدة أعشاب، خضروات محمصة، صوص المنزل.',
        price: 58,
image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
        category: 'signature',
        featured: true,
        available: true,
        ingredients: ['Premium steak', 'Herb butter', 'Roasted vegetables', 'House sauce'],
        ingredientsAr: ['ستيك ممتاز', 'زبدة أعشاب', 'خضروات محمصة', 'صوص المنزل'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'starters',
    name: 'Starters',
    nameAr: 'المقبلات',
    icon: 'leaf',
    products: [
      {
        id: 'burrata-salad',
        name: 'Burrata Salad',
        nameAr: 'سلطة بوراتا',
        description:
          'Creamy burrata, heirloom tomatoes, basil, aged balsamic.',
        descriptionAr:
          'بوراتا كريمية، طماطم تراثية، ريحان، وبلسميك معتق.',
        price: 28,
image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&h=400&fit=crop',
        category: 'starters',
        featured: false,
        available: true,
        ingredients: ['Burrata', 'Tomatoes', 'Basil', 'Balsamic'],
        ingredientsAr: ['بوراتا', 'طماطم', 'ريحان', 'بلسميك'],
        modifiers: [],
      },
      {
        id: 'tuna-tartare',
        name: 'Tuna Tartare',
        nameAr: 'تارتار التونة',
        description:
          'Yellowfin tuna, avocado, sesame, yuzu dressing.',
        descriptionAr:
          'تونة صفراء، أفوكادو، سمسم، وصوص يوزو.',
        price: 46,
image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&h=400&fit=crop',
        category: 'starters',
        featured: false,
        available: true,
        ingredients: ['Tuna', 'Avocado', 'Sesame', 'Yuzu'],
        ingredientsAr: ['تونة', 'أفوكادو', 'سمسم', 'يوزو'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    nameAr: 'الأطباق الرئيسية',
    icon: 'utensils',
    products: [
      {
        id: 'lamb-rack',
        name: 'Lamb Rack',
        nameAr: 'ريش الضأن',
        description:
          'Herb-crusted lamb rack, roasted garlic purée, red wine jus.',
        descriptionAr:
          'ريش ضأن مغطى بالأعشاب، مهروس ثوم محمص، وصوص النبيذ الأحمر.',
        price: 78,
image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&h=400&fit=crop',
        category: 'mains',
        featured: true,
        available: true,
        ingredients: ['Lamb', 'Garlic purée', 'Red wine jus'],
        ingredientsAr: ['ضأن', 'مهروس ثوم', 'صوص نبيذ'],
        modifiers: [],
      },
      {
        id: 'salmon-fillet',
        name: 'Salmon Fillet',
        nameAr: 'فيليه السلمون',
        description:
          'Pan-seared salmon, citrus beurre blanc, asparagus.',
        descriptionAr:
          'سلمون مشوي بالمقلاة، صوص الزبدة بالحامض، وهليون.',
        price: 62,
image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop',
        category: 'mains',
        featured: false,
        available: true,
        ingredients: ['Salmon', 'Beurre blanc', 'Asparagus'],
        ingredientsAr: ['سلمون', 'صوص زبدة', 'هليون'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    nameAr: 'البرجر',
    icon: 'burger',
    products: [
      {
        id: 'classic-burger',
        name: 'Classic Burger',
        nameAr: 'برجر كلاسيك',
        description:
          'Beef patty, cheddar, lettuce, tomato, house sauce.',
        descriptionAr:
          'قطعة لحم بقري، جبنة شيدر، خس، طماطم، وصوص المنزل.',
        price: 34,
image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
        category: 'burgers',
        featured: false,
        available: true,
        ingredients: ['Beef', 'Cheddar', 'Lettuce', 'Tomato'],
        ingredientsAr: ['لحم بقري', 'شيدر', 'خس', 'طماطم'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    nameAr: 'بيتزا',
    icon: 'pizza',
    products: [
      {
        id: 'truffle-pizza',
        name: 'Truffle Mushroom Pizza',
        nameAr: 'بيتزا الفطر بالترافل',
        description:
          'Wood-fired, mushroom, truffle cream, arugula.',
        descriptionAr:
          'مخبوزة على الحطب، فطر، كريمة ترافل، وجرجير.',
        price: 48,
image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
        category: 'pizza',
        featured: false,
        available: true,
        ingredients: ['Mushroom', 'Truffle cream', 'Arugula'],
        ingredientsAr: ['فطر', 'كريمة ترافل', 'جرجير'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameAr: 'الحلويات',
    icon: 'cake',
    products: [
      {
        id: 'molten-cake',
        name: 'Molten Chocolate Cake',
        nameAr: 'كيك الشوكولاتة السائلة',
        description:
          'Warm chocolate lava cake, vanilla bean ice cream.',
        descriptionAr:
          'كيك شوكولاتة دافئ بقلب سائل، وآيس كريم الفانيليا.',
        price: 26,
image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop',
        category: 'desserts',
        featured: false,
        available: true,
        ingredients: ['Chocolate', 'Vanilla ice cream'],
        ingredientsAr: ['شوكولاتة', 'آيس كريم فانيليا'],
        modifiers: [],
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    nameAr: 'المشروبات',
    icon: 'cup',
    products: [
      {
        id: 'signature-cocktail',
        name: 'Signature Mocktail',
        nameAr: 'مشروب التوقيع',
        description:
          'House-made blend of fresh fruit, herbs, and sparkling water.',
        descriptionAr:
          'مزيج فواكه طازجة وأعشاب وماء فوار من إعداد المنزل.',
        price: 18,
image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop',
        category: 'drinks',
        featured: false,
        available: true,
        ingredients: ['Fresh fruit', 'Herbs', 'Sparkling water'],
        ingredientsAr: ['فواكه طازجة', 'أعشاب', 'ماء فوار'],
        modifiers: [],
      },
    ],
  },
];

export default menu;
