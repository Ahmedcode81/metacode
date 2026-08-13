/** Meta Cashier browser demo — in-memory POS only (no backend). */
;(function () {
  const TAX_RATE = 0.15
  const DOWNLOAD_URL = './Meta-Cashier-Setup.exe'
  const STORE = { nameEn: 'Al Noor Mini Market', nameAr: 'سوبرماركت النور', vat: '300123456700003', phone: '+966 11 234 5678' }

  const CATEGORIES = {
    all: { en: 'All', ar: 'الكل' },
    dairy: { en: 'Dairy', ar: 'ألبان' },
    bakery: { en: 'Bakery', ar: 'مخبوزات' },
    beverages: { en: 'Beverages', ar: 'مشروبات' },
    groceries: { en: 'Groceries', ar: 'بقالة' },
    snacks: { en: 'Snacks', ar: 'وجبات خفيفة' },
    household: { en: 'Household', ar: 'منزلية' },
  }

  const PRODUCTS = [
    { id: '1', sku: 'MLK-001', barcode: '6291000123456', category: 'dairy', unitEn: '1 L', unitAr: '1 لتر', stock: 24, nameEn: 'Fresh Milk 1L', nameAr: 'حليب طازج 1 لتر', price: 2.5, tax: 15 },
    { id: '2', sku: 'BRD-002', barcode: '6291000123457', category: 'bakery', unitEn: 'pack', unitAr: 'كيس', stock: 40, nameEn: 'Arabic Bread', nameAr: 'خبز عربي', price: 1.75, tax: 15 },
    { id: '3', sku: 'WTR-003', barcode: '6291000123458', category: 'beverages', unitEn: '500 ml', unitAr: '500 مل', stock: 60, nameEn: 'Mineral Water', nameAr: 'ماء معدني', price: 0.5, tax: 15 },
    { id: '4', sku: 'RCE-004', barcode: '6291000123459', category: 'groceries', unitEn: '1 kg', unitAr: '1 كجم', stock: 18, nameEn: 'Basmati Rice 1kg', nameAr: 'أرز بسمتي 1 كجم', price: 10.99, tax: 15 },
    { id: '5', sku: 'OIL-005', barcode: '6291000123460', category: 'groceries', unitEn: '1 L', unitAr: '1 لتر', stock: 12, nameEn: 'Sunflower Oil', nameAr: 'زيت دوار الشمس', price: 8.25, tax: 15 },
    { id: '6', sku: 'EGG-006', barcode: '6291000123461', category: 'dairy', unitEn: '12 pcs', unitAr: '12 حبة', stock: 8, nameEn: 'Eggs (12 pack)', nameAr: 'بيض (12 حبة)', price: 6.5, tax: 15 },
    { id: '7', sku: 'CHZ-007', barcode: '6291000123462', category: 'dairy', unitEn: '400 g', unitAr: '400 جم', stock: 15, nameEn: 'White Cheese', nameAr: 'جبنة بيضاء', price: 4.25, tax: 15 },
    { id: '8', sku: 'TEA-008', barcode: '6291000123463', category: 'groceries', unitEn: '100 bags', unitAr: '100 كيس', stock: 22, nameEn: 'Black Tea', nameAr: 'شاي أسود', price: 3.2, tax: 15 },
    { id: '9', sku: 'YGT-009', barcode: '6291000123464', category: 'dairy', unitEn: '170 g', unitAr: '170 جم', stock: 20, nameEn: 'Plain Yogurt', nameAr: 'زبادي طبيعي', price: 1.25, tax: 15 },
    { id: '10', sku: 'JCE-010', barcode: '6291000123465', category: 'beverages', unitEn: '1 L', unitAr: '1 لتر', stock: 14, nameEn: 'Orange Juice', nameAr: 'عصير برتقال', price: 5.75, tax: 15 },
    { id: '11', sku: 'CHP-011', barcode: '6291000123466', category: 'snacks', unitEn: '150 g', unitAr: '150 جم', stock: 30, nameEn: 'Potato Chips', nameAr: 'شيبس بطاطس', price: 2.95, tax: 15 },
    { id: '12', sku: 'CHO-012', barcode: '6291000123467', category: 'snacks', unitEn: '80 g', unitAr: '80 جم', stock: 25, nameEn: 'Chocolate Bar', nameAr: 'لوح شوكولاتة', price: 3.5, tax: 15 },
    { id: '13', sku: 'SGR-013', barcode: '6291000123468', category: 'groceries', unitEn: '1 kg', unitAr: '1 كجم', stock: 35, nameEn: 'White Sugar', nameAr: 'سكر أبيض', price: 2.8, tax: 15 },
    { id: '14', sku: 'FLR-014', barcode: '6291000123469', category: 'groceries', unitEn: '2 kg', unitAr: '2 كجم', stock: 16, nameEn: 'All-Purpose Flour', nameAr: 'دقيق متعدد الاستخدام', price: 4.5, tax: 15 },
    { id: '15', sku: 'SOA-015', barcode: '6291000123470', category: 'household', unitEn: '500 ml', unitAr: '500 مل', stock: 10, nameEn: 'Dish Soap', nameAr: 'سائل غسيل الأطباق', price: 7.25, tax: 15 },
    { id: '16', sku: 'TIS-016', barcode: '6291000123471', category: 'household', unitEn: '200 sheets', unitAr: '200 ورقة', stock: 28, nameEn: 'Facial Tissues', nameAr: 'مناديل وجه', price: 4.99, tax: 15 },
    { id: '17', sku: 'CRO-017', barcode: '6291000123472', category: 'bakery', unitEn: '6 pcs', unitAr: '6 حبات', stock: 12, nameEn: 'Croissants', nameAr: 'كرواسون', price: 9.5, tax: 15 },
    { id: '18', sku: 'COL-018', barcode: '6291000123473', category: 'beverages', unitEn: '330 ml', unitAr: '330 مل', stock: 48, nameEn: 'Cola Can', nameAr: 'علبة كولا', price: 1.5, tax: 15 },
  ]

  const I18N = {
    en: {
      title: 'Meta Cashier',
      subtitle: 'Interactive browser demo — sample data only',
      download: 'Download Windows app',
      backToMetacode: 'Back to METACODE',
      banner: 'Demo mode: sales are not saved. Install the desktop app for full inventory, reports, and offline SQLite storage.',
      register: 'Register',
      cashier: 'Cashier',
      clock: 'Time',
      cartItems: 'Cart items',
      sessionSales: 'Session sales',
      barcode: 'Barcode / SKU',
      search: 'Product search',
      clear: 'Clear cart',
      catalog: 'Product catalog',
      colSku: 'SKU',
      colProduct: 'Product',
      colCategory: 'Category',
      colQty: 'Qty',
      colPrice: 'Price',
      colTotal: 'Total',
      emptyCart: 'Scan a barcode, browse the catalog, or search to add products.',
      summary: 'Ticket summary',
      lineCount: 'Line items',
      subtotal: 'Subtotal',
      discount: 'Discount',
      tax: 'Tax (15%)',
      total: 'Total',
      paymentMethod: 'Payment method',
      payCash: 'Cash',
      payCard: 'Card',
      discountPct: 'Discount (%)',
      cashTendered: 'Cash tendered',
      change: 'Change',
      cardNote: 'Card payment — exact amount will be charged.',
      complete: 'Complete sale',
      receipt: 'Receipt',
      printReceipt: 'Print',
      sessionSummary: 'Session summary',
      sessionRevenue: 'Revenue',
      lastReceipt: 'Last receipt',
      tryBarcode: 'Try barcode',
      searchPlaceholder: 'Name, SKU, or Arabic name',
      notFound: 'No product found.',
      needItems: 'Add at least one product.',
      needCash: 'Cash tendered is less than total.',
      saleDone: 'Sale completed (demo).',
      remove: 'Remove',
      lowStock: 'Low stock',
      outOfStock: 'Out of stock',
      exact: 'Exact',
      stockLabel: 'Stock',
      demoReceipt: 'DEMO RECEIPT',
      thankYou: 'Thank you for shopping!',
      vatNo: 'VAT No.',
      receiptNo: 'Receipt',
      payment: 'Payment',
      qty: 'Qty',
      unitPrice: 'Unit',
    },
    ar: {
      title: 'ميتا كاشير',
      subtitle: 'عرض تفاعلي في المتصفح — بيانات تجريبية فقط',
      download: 'تحميل تطبيق Windows',
      backToMetacode: 'العودة إلى METACODE',
      banner: 'وضع تجريبي: المبيعات لا تُحفظ. ثبّت تطبيق سطح المكتب للمخزون والتقارير وقاعدة SQLite المحلية.',
      register: 'الكاشير',
      cashier: 'البائع',
      clock: 'الوقت',
      cartItems: 'عناصر السلة',
      sessionSales: 'مبيعات الجلسة',
      barcode: 'الباركود / رمز المنتج',
      search: 'بحث المنتجات',
      clear: 'مسح السلة',
      catalog: 'قائمة المنتجات',
      colSku: 'رمز المنتج',
      colProduct: 'المنتج',
      colCategory: 'الفئة',
      colQty: 'الكمية',
      colPrice: 'السعر',
      colTotal: 'الإجمالي',
      emptyCart: 'امسح باركود أو تصفح القائمة أو ابحث لإضافة منتجات.',
      summary: 'ملخص الفاتورة',
      lineCount: 'عدد الأصناف',
      subtotal: 'المجموع الفرعي',
      discount: 'الخصم',
      tax: 'الضريبة (15%)',
      total: 'الإجمالي',
      paymentMethod: 'طريقة الدفع',
      payCash: 'نقداً',
      payCard: 'بطاقة',
      discountPct: 'الخصم (%)',
      cashTendered: 'النقد المدفوع',
      change: 'الباقي',
      cardNote: 'دفع بالبطاقة — سيتم خصم المبلغ بالكامل.',
      complete: 'إتمام البيع',
      receipt: 'الإيصال',
      printReceipt: 'طباعة',
      sessionSummary: 'ملخص الجلسة',
      sessionRevenue: 'الإيرادات',
      lastReceipt: 'آخر إيصال',
      tryBarcode: 'جرّب الباركود',
      searchPlaceholder: 'الاسم أو رمز المنتج أو الاسم بالعربية',
      notFound: 'لم يتم العثور على منتج.',
      needItems: 'أضف منتجاً واحداً على الأقل.',
      needCash: 'النقد المدفوع أقل من الإجمالي.',
      saleDone: 'تم إتمام البيع (تجريبي).',
      remove: 'حذف',
      lowStock: 'مخزون منخفض',
      outOfStock: 'نفد المخزون',
      exact: 'بالضبط',
      stockLabel: 'المخزون',
      demoReceipt: 'إيصال تجريبي',
      thankYou: 'شكراً لتسوقكم!',
      vatNo: 'الرقم الضريبي',
      receiptNo: 'إيصال',
      payment: 'الدفع',
      qty: 'الكمية',
      unitPrice: 'السعر',
    },
  }

  let lang = 'en'
  let cart = []
  let activeCategory = 'all'
  let receiptCounter = 1001
  let session = { sales: 0, revenue: 0, lastReceipt: '—' }

  const els = {
    body: document.body,
    langToggle: document.getElementById('lang-toggle'),
    downloadLink: document.getElementById('download-link'),
    barcodeInput: document.getElementById('barcode-input'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    categoryTabs: document.getElementById('category-tabs'),
    productGrid: document.getElementById('product-grid'),
    catalogCount: document.getElementById('catalog-count'),
    cartBody: document.getElementById('cart-body'),
    lineCount: document.getElementById('line-count'),
    subtotal: document.getElementById('subtotal'),
    discountAmount: document.getElementById('discount-amount'),
    tax: document.getElementById('tax'),
    total: document.getElementById('total'),
    discountInput: document.getElementById('discount-input'),
    cashInput: document.getElementById('cash-input'),
    change: document.getElementById('change'),
    cashPanel: document.getElementById('cash-panel'),
    cardNote: document.getElementById('card-note'),
    quickCash: document.getElementById('quick-cash'),
    clearCart: document.getElementById('clear-cart'),
    completeSale: document.getElementById('complete-sale'),
    receiptBox: document.getElementById('receipt-box'),
    receiptText: document.getElementById('receipt-text'),
    printReceipt: document.getElementById('print-receipt'),
    clock: document.getElementById('clock'),
    cartCount: document.getElementById('cart-count'),
    sessionSales: document.getElementById('session-sales'),
    sessionSalesSide: document.getElementById('session-sales-side'),
    sessionRevenue: document.getElementById('session-revenue'),
    lastReceipt: document.getElementById('last-receipt'),
    cashierName: document.getElementById('cashier-name'),
    year: document.getElementById('year'),
  }

  function t(key) {
    return I18N[lang][key] ?? key
  }

  function categoryLabel(key) {
    const cat = CATEGORIES[key]
    if (!cat) return key
    return lang === 'ar' ? cat.ar : cat.en
  }

  function storeName() {
    return lang === 'ar' ? STORE.nameAr : STORE.nameEn
  }

  function normalizeText(value) {
    return String(value ?? '').normalize('NFC').trim()
  }

  function parseMoney(raw) {
    const cleaned = String(raw ?? '').trim().replace(/,/g, '.')
    const n = Number(cleaned)
    return Number.isFinite(n) ? n : 0
  }

  function formatMoney(amount) {
    return amount.toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  function productName(product) {
    return lang === 'ar' && product.nameAr ? product.nameAr : product.nameEn
  }

  function productUnit(product) {
    return lang === 'ar' && product.unitAr ? product.unitAr : product.unitEn
  }

  function paymentMethod() {
    const selected = document.querySelector('input[name="payment"]:checked')
    return selected ? selected.value : 'cash'
  }

  function discountPct() {
    return Math.min(100, Math.max(0, parseMoney(els.discountInput.value)))
  }

  function findByBarcode(value) {
    const q = normalizeText(value)
    return PRODUCTS.find((p) => p.barcode === q || p.sku.toLowerCase() === q.toLowerCase()) ?? null
  }

  function searchProducts(query) {
    const q = normalizeText(query).toLowerCase()
    if (!q) return []
    return PRODUCTS.filter((p) => {
      return (
        p.sku.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        normalizeText(p.nameAr).includes(q) ||
        p.barcode.includes(q) ||
        categoryLabel(p.category).toLowerCase().includes(q)
      )
    }).slice(0, 8)
  }

  function filteredProducts() {
    if (activeCategory === 'all') return PRODUCTS
    return PRODUCTS.filter((p) => p.category === activeCategory)
  }

  function addToCart(product) {
    if (product.stock <= 0) {
      toast(t('outOfStock'))
      return
    }
    const existing = cart.find((line) => line.id === product.id)
    const nextQty = existing ? existing.qty + 1 : 1
    if (nextQty > product.stock) {
      toast(`${t('stockLabel')}: ${product.stock}`)
      return
    }
    if (existing) {
      existing.qty += 1
    } else {
      cart.push({ id: product.id, qty: 1, price: product.price, tax: product.tax, product })
    }
    if (product.stock - nextQty <= 3 && product.stock - nextQty >= 0) {
      toast(`${t('lowStock')}: ${productName(product)} (${product.stock - nextQty})`)
    }
    render()
  }

  function removeFromCart(id) {
    cart = cart.filter((line) => line.id !== id)
    render()
  }

  function setQty(id, qty) {
    const line = cart.find((item) => item.id === id)
    if (!line) return
    const max = line.product.stock
    line.qty = Math.max(1, Math.min(max, Math.floor(qty) || 1))
    render()
  }

  function calcTotals() {
    let subtotal = 0
    let tax = 0
    for (const line of cart) {
      const lineSub = line.price * line.qty
      subtotal += lineSub
      tax += lineSub * (line.tax / 100)
    }
    const discount = subtotal * (discountPct() / 100)
    const discountedSubtotal = subtotal - discount
    const discountRatio = subtotal > 0 ? discountedSubtotal / subtotal : 1
    tax = tax * discountRatio
    return {
      subtotal,
      discount,
      tax,
      total: discountedSubtotal + tax,
      itemCount: cart.reduce((sum, line) => sum + line.qty, 0),
      lineCount: cart.length,
    }
  }

  function applyI18n() {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    els.body.dir = lang === 'ar' ? 'rtl' : 'ltr'
    els.langToggle.textContent = lang === 'ar' ? 'English' : 'العربية'
    els.searchInput.placeholder = t('searchPlaceholder')
    els.cashierName.textContent = lang === 'ar' ? 'مستخدم تجريبي' : 'Demo User'
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n')
      if (key) node.textContent = t(key)
    })
  }

  function renderCategories() {
    els.categoryTabs.innerHTML = Object.keys(CATEGORIES)
      .map(
        (key) =>
          `<button type="button" class="category-tab${activeCategory === key ? ' active' : ''}" data-category="${key}" role="tab" aria-selected="${activeCategory === key}">${categoryLabel(key)}</button>`,
      )
      .join('')
    els.categoryTabs.querySelectorAll('.category-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-category')
        renderCategories()
        renderCatalog()
      })
    })
  }

  function stockClass(stock) {
    if (stock <= 0) return 'stock-out'
    if (stock <= 5) return 'stock-low'
    return ''
  }

  function renderCatalog() {
    const items = filteredProducts()
    els.catalogCount.textContent = `${items.length} ${lang === 'ar' ? 'منتج' : 'items'}`
    els.productGrid.innerHTML = items
      .map((p) => {
        const disabled = p.stock <= 0 ? ' disabled' : ''
        return `<button type="button" class="product-card${disabled ? ' is-disabled' : ''}" data-id="${p.id}"${disabled}>
          <span class="product-card-name" dir="auto">${productName(p)}</span>
          <span class="product-card-meta">${p.sku} · ${categoryLabel(p.category)}</span>
          <span class="product-card-foot">
            <strong>${formatMoney(p.price)}</strong>
            <span class="product-stock ${stockClass(p.stock)}">${t('stockLabel')}: ${p.stock}</span>
          </span>
        </button>`
      })
      .join('')

    els.productGrid.querySelectorAll('.product-card:not(.is-disabled)').forEach((btn) => {
      btn.addEventListener('click', () => {
        const product = PRODUCTS.find((p) => p.id === btn.getAttribute('data-id'))
        if (product) addToCart(product)
      })
    })
  }

  function renderQuickCash(total) {
    const amounts = [total, 10, 20, 50, 100, 200].filter((v, i, arr) => arr.indexOf(v) === i && v > 0)
    els.quickCash.innerHTML = amounts
      .map((amount, index) => {
        const label = index === 0 && Math.abs(amount - total) < 0.001 ? t('exact') : formatMoney(amount)
        return `<button type="button" class="quick-cash-btn" data-amount="${amount}">${label}</button>`
      })
      .join('')
    els.quickCash.querySelectorAll('.quick-cash-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        els.cashInput.value = formatMoney(Number(btn.getAttribute('data-amount')))
        renderTotals()
      })
    })
  }

  function renderSearchResults(items) {
    if (items.length === 0) {
      els.searchResults.hidden = true
      els.searchResults.innerHTML = ''
      return
    }
    els.searchResults.hidden = false
    els.searchResults.innerHTML = items
      .map(
        (p) =>
          `<button type="button" class="search-item" data-id="${p.id}">
            <span><strong dir="auto">${productName(p)}</strong><small>${p.sku} · ${categoryLabel(p.category)} · ${t('stockLabel')}: ${p.stock}</small></span>
            <span>${formatMoney(p.price)}</span>
          </button>`,
      )
      .join('')
    els.searchResults.querySelectorAll('.search-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const product = PRODUCTS.find((p) => p.id === btn.getAttribute('data-id'))
        if (product) addToCart(product)
        els.searchInput.value = ''
        renderSearchResults([])
      })
    })
  }

  function renderCart() {
    if (cart.length === 0) {
      els.cartBody.innerHTML = `<tr class="empty-row"><td colspan="7">${t('emptyCart')}</td></tr>`
      return
    }
    els.cartBody.innerHTML = cart
      .map((line) => {
        const lineSub = line.price * line.qty
        const lineTotal = lineSub * (1 + line.tax / 100)
        return `<tr>
          <td>${line.product.sku}</td>
          <td dir="auto">${productName(line.product)}<small class="line-unit">${productUnit(line.product)}</small></td>
          <td>${categoryLabel(line.product.category)}</td>
          <td class="num"><input class="qty-input field input" type="number" min="1" max="${line.product.stock}" value="${line.qty}" data-qty="${line.id}" /></td>
          <td class="num">${formatMoney(line.price)}</td>
          <td class="num">${formatMoney(lineTotal)}</td>
          <td><button type="button" class="icon-btn" data-remove="${line.id}">${t('remove')}</button></td>
        </tr>`
      })
      .join('')

    els.cartBody.querySelectorAll('[data-qty]').forEach((input) => {
      input.addEventListener('change', () => setQty(input.getAttribute('data-qty'), Number(input.value)))
    })
    els.cartBody.querySelectorAll('[data-remove]').forEach((btn) => {
      btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-remove')))
    })
  }

  function renderTotals() {
    const totals = calcTotals()
    els.lineCount.textContent = String(totals.lineCount)
    els.subtotal.textContent = formatMoney(totals.subtotal)
    els.discountAmount.textContent = totals.discount > 0 ? `-${formatMoney(totals.discount)}` : formatMoney(0)
    els.tax.textContent = formatMoney(totals.tax)
    els.total.textContent = formatMoney(totals.total)
    els.cartCount.textContent = String(totals.itemCount)

    const isCard = paymentMethod() === 'card'
    els.cashPanel.hidden = isCard
    els.cardNote.hidden = !isCard

    if (isCard) {
      els.cashInput.value = formatMoney(totals.total)
      els.change.textContent = formatMoney(0)
    } else {
      const cash = parseMoney(els.cashInput.value)
      els.change.textContent = formatMoney(Math.max(0, cash - totals.total))
      renderQuickCash(totals.total)
    }
  }

  function renderSession() {
    els.sessionSales.textContent = String(session.sales)
    els.sessionSalesSide.textContent = String(session.sales)
    els.sessionRevenue.textContent = formatMoney(session.revenue)
    els.lastReceipt.textContent = session.lastReceipt
  }

  function renderClock() {
    els.clock.textContent = new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  function render() {
    renderCart()
    renderTotals()
    renderCatalog()
    renderSession()
  }

  function toast(message) {
    let node = document.querySelector('.toast')
    if (!node) {
      node = document.createElement('div')
      node.className = 'toast'
      document.body.appendChild(node)
    }
    node.textContent = message
    node.classList.add('show')
    window.clearTimeout(toast._timer)
    toast._timer = window.setTimeout(() => node.classList.remove('show'), 2600)
  }

  function buildReceipt(totals, receiptNo, snapshot) {
    const lines = snapshot
      .map((line) => {
        const name = productName(line.product)
        const lineSub = line.price * line.qty
        const lineTotal = lineSub * (1 + line.tax / 100)
        return `${name}\n  ${line.product.sku} · ${t('qty')} ${line.qty} · ${formatMoney(line.price)}\n  ${formatMoney(lineTotal)}`
      })
      .join('\n')

    const payLabel = paymentMethod() === 'card' ? t('payCard') : t('payCash')
    const discountLine =
      totals.discount > 0 ? `${t('discount')} (${discountPct()}%): -${formatMoney(totals.discount)}` : null

    return [
      storeName(),
      `${t('demoReceipt')} · ${t('receiptNo')} #${receiptNo}`,
      new Date().toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-GB'),
      `${t('vatNo')}: ${STORE.vat}`,
      STORE.phone,
      '================================',
      lines,
      '================================',
      `${t('subtotal')}: ${formatMoney(totals.subtotal)}`,
      ...(discountLine ? [discountLine] : []),
      `${t('tax')}: ${formatMoney(totals.tax)}`,
      `${t('total')}: ${formatMoney(totals.total)}`,
      `${t('payment')}: ${payLabel}`,
      ...(paymentMethod() === 'cash'
        ? [`${t('cashTendered')}: ${formatMoney(parseMoney(els.cashInput.value))}`, `${t('change')}: ${els.change.textContent}`]
        : []),
      '--------------------------------',
      t('thankYou'),
    ].join('\n')
  }

  els.barcodeInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return
    const product = findByBarcode(els.barcodeInput.value)
    if (!product) {
      toast(t('notFound'))
      return
    }
    addToCart(product)
    els.barcodeInput.value = ''
  })

  els.searchInput.addEventListener('input', () => {
    renderSearchResults(searchProducts(els.searchInput.value))
  })

  els.discountInput.addEventListener('input', () => renderTotals())
  els.discountInput.addEventListener('blur', () => {
    els.discountInput.value = String(discountPct())
    renderTotals()
  })

  els.cashInput.addEventListener('input', () => renderTotals())
  els.cashInput.addEventListener('blur', () => {
    els.cashInput.value = formatMoney(parseMoney(els.cashInput.value))
    renderTotals()
  })

  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    input.addEventListener('change', () => renderTotals())
  })

  els.clearCart.addEventListener('click', () => {
    cart = []
    els.receiptBox.hidden = true
    els.discountInput.value = '0'
    render()
  })

  els.completeSale.addEventListener('click', () => {
    if (cart.length === 0) {
      toast(t('needItems'))
      return
    }
    const totals = calcTotals()
    if (paymentMethod() === 'cash') {
      const cash = parseMoney(els.cashInput.value)
      if (cash + 0.001 < totals.total) {
        toast(t('needCash'))
        return
      }
    }

    const snapshot = cart.map((line) => ({ ...line, product: { ...line.product } }))
    const receiptNo = receiptCounter++
    els.receiptText.textContent = buildReceipt(totals, receiptNo, snapshot)
    els.receiptBox.hidden = false

    for (const line of snapshot) {
      const product = PRODUCTS.find((p) => p.id === line.id)
      if (product) product.stock = Math.max(0, product.stock - line.qty)
    }

    session.sales += 1
    session.revenue += totals.total
    session.lastReceipt = `#${receiptNo}`

    toast(t('saleDone'))
    cart = []
    els.discountInput.value = '0'
    els.cashInput.value = formatMoney(0)
    render()
  })

  els.printReceipt.addEventListener('click', () => {
    if (els.receiptBox.hidden) return
    window.print()
  })

  els.langToggle.addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en'
    applyI18n()
    renderCategories()
    render()
  })

  els.downloadLink.href = DOWNLOAD_URL
  els.downloadLink.addEventListener('click', (event) => {
    if (DOWNLOAD_URL.startsWith('./Meta-Cashier')) {
      event.preventDefault()
      toast(
        lang === 'ar'
          ? 'ضع ملف التثبيت Meta-Cashier-Setup.exe في مجلد cashier_demo'
          : 'Place Meta-Cashier-Setup.exe in the cashier_demo folder, or update DOWNLOAD_URL in demo.js',
      )
    }
  })

  els.year.textContent = String(new Date().getFullYear())
  applyI18n()
  renderCategories()
  renderCatalog()
  renderClock()
  window.setInterval(renderClock, 1000)
  render()
})()
