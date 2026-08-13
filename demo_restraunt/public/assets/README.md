# Assets Folder

Place your restaurant's logo and other static assets here.

## Logo
Replace `logo.svg` with your restaurant's logo file. Supported formats:
- SVG (recommended)
- PNG
- JPG

## Other Images
You can add additional images here and reference them in the config files using paths like:
- `/assets/your-image.jpg`
- `/assets/your-image.png`
- `/assets/your-image.svg`

## Example
To use your own logo:
1. Upload your logo file to this folder
2. Update `src/config/restaurant.ts`:
   ```typescript
   logo: '/assets/your-logo.png'
   ```
