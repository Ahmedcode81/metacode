# Demo Setup Complete! 🎉

Your METACODE Restaurant Platform demo is ready to use!

## What's Included

✅ **Complete Frontend Application**
- All React components and pages
- Config files with demo content
- Multilingual support (English/Arabic)
- Real food and restaurant images from Unsplash
- Responsive design for all devices

✅ **Configuration Files**
- Restaurant settings with demo information
- Menu items with sample dishes
- Branch locations with demo addresses
- Special offers with promotional content

✅ **Documentation**
- README.md with general information
- CUSTOMIZATION.md with detailed setup guide
- Assets folder with placeholder logo and favicon

## Quick Start

### 1. Navigate to the demo folder
```bash
cd demo
```

### 2. Install dependencies (already done)
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open your browser
Navigate to `http://localhost:5173`

## Next Steps

### Customize for Your Restaurant

1. **Replace Restaurant Information**
   - Edit `src/config/restaurant.ts`
   - Update name, description, contact info
   - Change branding colors
   - Add your social media links

2. **Add Your Menu**
   - Edit `src/config/menu.ts`
   - Replace demo dishes with your actual menu
   - Update prices, descriptions, and images
   - Add categories and modifiers

3. **Set Up Locations**
   - Edit `src/config/branches.ts`
   - Add your restaurant locations
   - Update addresses and contact details
   - Set correct map coordinates

4. **Add Your Logo**
   - Place your logo in `public/assets/logo.svg`
   - Update the logo path in restaurant config

5. **Configure Offers**
   - Edit `src/config/offers.ts`
   - Create your promotional offers
   - Set discount codes and validity periods

## Demo vs Production

### Current Demo Settings:
- Restaurant Name: "Demo Restaurant"
- Currency: USD
- Sample Locations: Generic city locations
- Sample Menu: Gourmet dishes with Unsplash images
- Sample Offers: Demo promotional codes

### To Make Production-Ready:
1. Replace all placeholder content with real data
2. Add your actual restaurant images
3. Set correct contact information
4. Configure real opening hours
5. Add actual Google Maps coordinates
6. Set up real promotional codes

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
- **Vercel**: `vercel` (recommended)
- **Netlify**: Upload `dist` folder
- **Static Hosting**: Upload `dist` folder contents

## Important Notes

⚠️ **This is a Demo Version**
- All content is placeholder data
- Images are from Unsplash (free to use)
- Contact information is generic
- Map coordinates are for demonstration

🔒 **Before Going Live**
- Replace all demo content
- Test all functionality
- Verify contact information
- Check mobile responsiveness
- Test language switching

## Need Help?

- Check `CUSTOMIZATION.md` for detailed setup instructions
- Review `README.md` for general information
- Ensure all dependencies are installed
- Check browser console for any errors

## File Structure

```
demo/
├── public/
│   ├── assets/
│   │   ├── logo.svg          # Replace with your logo
│   │   └── README.md
│   └── favicon.svg
├── src/
│   ├── components/           # React components
│   ├── config/              # Configuration files
│   ├── hooks/               # Custom hooks
│   ├── i18n/                # Translations
│   ├── pages/               # Page components
│   └── services/            # Business logic
├── CUSTOMIZATION.md         # Setup guide
├── README.md               # General info
├── package.json
└── vite.config.ts
```

## Support

For questions about the METACODE Restaurant Platform, please contact the development team.

---

**Enjoy your new restaurant platform! 🍽️**
