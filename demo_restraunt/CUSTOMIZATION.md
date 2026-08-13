# Demo Customization Guide

This guide will help you customize the METACODE Restaurant Platform demo for your own restaurant.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:** Navigate to `http://localhost:5173`

## Configuration Files

### 1. Restaurant Information (`src/config/restaurant.ts`)

Update the basic restaurant details:

```typescript
export const restaurantConfig: RestaurantConfig = {
  id: 'your-restaurant-id',
  name: 'Your Restaurant Name',
  nameAr: 'اسم مطعمك بالعربية',
  tagline: 'Your restaurant tagline',
  taglineAr: 'شعار مطعمك بالعربية',
  description: 'Description of your restaurant...',
  descriptionAr: 'وصف مطعمك بالعربية...',
  logo: '/assets/your-logo.png',  // Add your logo to public/assets/
  heroImage: 'path-to-hero-image.jpg',
  currency: 'USD',  // or 'SAR', 'EUR', etc.
  
  contact: {
    phone: '+1 234 567 8900',
    whatsapp: '1234567890',
    email: 'contact@yourrestaurant.com',
    address: 'Your restaurant address',
    addressAr: 'عنوان مطعمك بالعربية',
  },
  
  social: {
    instagram: 'https://instagram.com/yourrestaurant',
    snapchat: 'https://snapchat.com/add/yourrestaurant',
    tiktok: 'https://tiktok.com/@yourrestaurant',
    x: 'https://x.com/yourrestaurant',
  },
  
  branding: {
    primary: '#2563EB',     // Your brand color
    primaryHover: '#1D4ED8',
    secondary: '#172B4D',
    accent: '#6366F1',
  },
};
```

### 2. Menu Items (`src/config/menu.ts`)

Add or modify menu items:

```typescript
{
  id: 'your-dish-id',
  name: 'Dish Name',
  nameAr: 'اسم الطبق',
  description: 'Description of the dish...',
  descriptionAr: 'وصف الطبق...',
  price: 45,
  image: 'https://your-image-url.com/image.jpg',
  category: 'signature',  // or 'starters', 'mains', etc.
  featured: true,  // Show in featured section
  available: true,
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  ingredientsAr: ['مكون 1', 'مكون 2'],
  modifiers: [  // Optional: Add modifiers like doneness, extras
    {
      id: 'cooking-preference',
      name: 'Cooking Preference',
      nameAr: 'تفضيل الطهي',
      required: true,
      multiple: false,
      options: [
        { id: 'rare', name: 'Rare', nameAr: 'نيء', price: 0 },
        { id: 'medium', name: 'Medium', nameAr: 'وسط', price: 0 },
        { id: 'well-done', name: 'Well Done', nameAr: 'مطهو جيداً', price: 0 },
      ],
    },
  ],
}
```

### 3. Branch Locations (`src/config/branches.ts`)

Add your restaurant locations:

```typescript
{
  id: 'location-id',
  name: 'Location Name',
  nameAr: 'اسم الموقع',
  address: 'Full address',
  addressAr: 'العنوان الكامل',
  phone: '+1 234 567 8900',
  openingHours: '10:00 AM – 10:00 PM',
  openingHoursAr: '١٠:٠٠ صباحاً – ١٠:٠٠ مساءً',
  latitude: 40.7128,  // Get from Google Maps
  longitude: -74.0060,  // Get from Google Maps
  googleMapsUrl: 'https://maps.google.com/?q=40.7128,-74.0060',
  image: 'https://your-location-image.jpg',
  featured: true,  // Show as main location
}
```

### 4. Offers (`src/config/offers.ts`)

Create promotional offers:

```typescript
{
  id: 'offer-id',
  title: 'Offer Title',
  titleAr: 'عنوان العرض',
  description: 'Offer description...',
  descriptionAr: 'وصف العرض...',
  image: 'https://offer-image.jpg',
  discount: 20,  // Percentage
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  active: true,
  code: 'PROMO20',  // Discount code
}
```

## Adding Your Logo

1. Create a folder: `public/assets/`
2. Add your logo file: `public/assets/logo.png`
3. Update the logo path in `src/config/restaurant.ts`:
   ```typescript
   logo: '/assets/logo.png'
   ```

## Adding Custom Images

### Option 1: Use Unsplash Images
```typescript
image: 'https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop'
```

### Option 2: Use Your Own Images
1. Create folder: `public/assets/images/`
2. Add your images
3. Reference them:
   ```typescript
   image: '/assets/images/your-image.jpg'
   ```

## Language Customization

### Adding New Languages

1. Edit `src/i18n/translations.ts`
2. Add your language code and translations:

```typescript
export const translations: Record<Lang, Dictionary> = {
  en: { /* existing */ },
  ar: { /* existing */ },
  es: {  // Spanish
    navHome: 'Inicio',
    navMenu: 'Menú',
    // ... add all translations
  },
};
```

3. Update the Lang type:
```typescript
export type Lang = 'en' | 'ar' | 'es';
```

## Colors and Branding

Edit the branding colors in `src/config/restaurant.ts`:

```typescript
branding: {
  primary: '#YOUR_COLOR',      // Main brand color
  primaryHover: '#DARKER_SHADE',
  secondary: '#YOUR_SECONDARY',  // Text/headings color
  accent: '#YOUR_ACCENT',      // Highlights
}
```

The colors will automatically be applied throughout the site.

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### Deploy to Any Static Host
1. Run `npm run build`
2. Upload the `dist` folder contents to your hosting

## Common Customizations

### Change Currency
1. Update in `src/config/restaurant.ts`: `currency: 'EUR'`
2. Update in `src/i18n/translations.ts`: Add currency symbol

### Remove Features
- To remove reservations: Delete Reservation component and route
- To remove branches: Delete Branches component and route
- To remove offers: Delete Offers component and route

### Add Custom Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```

## Support

For questions or issues, refer to the main README.md or contact the METACODE team.
