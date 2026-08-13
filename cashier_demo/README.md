# Meta Cashier — Website Demo (`cashier_demo`)

Static browser demo for your company website. Visitors can try a simplified POS register with sample products, Arabic/English UI, and decimal prices.

> **Note:** This is a **browser demo only**. The full Meta Cashier app is a Windows desktop application (Electron + SQLite). It cannot run entirely inside a web page.

## Upload to your website

1. Copy the entire `cashier_demo` folder to your web server, for example:
   - `https://yourcompany.com/cashier_demo/`
2. Open `https://yourcompany.com/cashier_demo/` in a browser to test.

### Optional: embed in a page (iframe)

```html
<iframe
  src="/cashier_demo/"
  title="Meta Cashier Demo"
  width="100%"
  height="820"
  style="border:1px solid #d4d4d8; max-width:1200px;"
  loading="lazy"
></iframe>
```

### Optional: Windows installer download

Place your built installer in this folder and rename it to:

`Meta-Cashier-Setup.exe`

The **Download Windows app** button will link to it automatically.

Or edit `DOWNLOAD_URL` at the top of `demo.js` to point to your CDN URL.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Demo page |
| `styles.css` | Layout and Meta Cashier styling |
| `demo.js` | Cart logic and sample catalog |
| `README.md` | Deployment notes |

## Demo features

- Barcode scan simulation (Enter after typing)
- Product search (English, Arabic, SKU)
- Cart with quantity and decimal prices (e.g. 2.50)
- Tax and change calculation
- Receipt preview
- English / Arabic (RTL) toggle

## Try in demo

- Barcode: `6291000123456` (milk / حليب)
- Search: `حليب`, `bread`, `RCE-004`

## Local preview

Open `index.html` in a browser, or run a simple static server:

```powershell
cd cashier_demo
npx --yes serve .
```

Then open the URL shown (usually `http://localhost:3000`).
