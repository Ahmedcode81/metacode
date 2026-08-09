# METACODE Restaurant Platform - Demo Version

This is a demonstration version of the METACODE Restaurant Platform. It showcases all the features and capabilities of the platform using placeholder content that can be easily replaced with your own restaurant information.

## Features

- **Multilingual Support**: Full English and Arabic (RTL) support
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Interactions**: Smooth animations using GSAP and Motion
- **Menu Management**: Browse categories, view product details, and add to cart
- **Reservation System**: Multi-step booking experience
- **Branch Information**: Multiple location support with maps
- **Special Offers**: Promotional offers and discounts
- **Contact Integration**: Phone, WhatsApp, email, and social media links

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Restaurant Information

Edit `src/config/restaurant.ts` to customize:
- Restaurant name and description
- Contact information
- Social media links
- Branding colors
- Hero section content
- Story/about section

### Menu Items

Edit `src/config/menu.ts` to:
- Add/edit menu categories
- Add/edit products with images, prices, and descriptions
- Configure product modifiers and options
- Set featured items

### Branch Locations

Edit `src/config/branches.ts` to:
- Add/edit branch locations
- Update contact details for each branch
- Configure opening hours
- Set map coordinates

### Offers and Promotions

Edit `src/config/offers.ts` to:
- Create special offers
- Set discount codes
- Configure validity periods

### Images

Replace the placeholder images with your own:
- Restaurant images in `src/config/restaurant.ts`
- Menu item images in `src/config/menu.ts`
- Branch images in `src/config/branches.ts`
- Offer images in `src/config/offers.ts`

## Language Support

The platform includes full translation support in:
- English (EN)
- Arabic (AR) with RTL layout

Add new languages by editing `src/i18n/translations.ts`.

## Architecture

The platform follows a clean architecture pattern:

- **Components**: Reusable UI components in `src/components/`
- **Pages**: Route-level components in `src/pages/`
- **Config**: Centralized data in `src/config/`
- **Services**: Business logic and state management in `src/services/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **i18n**: Internationalization in `src/i18n/`

## API Integration

The platform is designed to work with a future API. Currently, it uses mock data from the config files. To integrate with a real API:

1. Update the functions in `src/services/api.ts` to make real API calls
2. The UI components already consume data through the service layer, so no UI changes are needed

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### Static Hosting
```bash
npm run build
# Deploy the dist folder to any static hosting service
```

## Support

For questions or support, please contact the METACODE team.

## License

This is a demo version. For production use, please obtain a proper license from METACODE.
