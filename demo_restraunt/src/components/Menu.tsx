/**
 * MENU — Interactive premium menu with horizontal category
 * navigation and animated product grid.
 */
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { menu, MenuCategory, Product } from '../config/menu';
import MenuItemCard from './MenuItem';
import ProductModal from './ProductModal';

export default function Menu() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(menu[0]?.id ?? '');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Reset to first category when language changes.
  useEffect(() => {
    setActiveCategory(menu[0]?.id ?? '');
}, [lang]);

  const activeProducts = useMemo(
    () => menu.find((c) => c.id === activeCategory)?.products ?? [],
    [activeCategory]
  );

  const handleOpen = (product: Product) => setSelectedProduct(product);

  return (
    <section id="menu" className="py-20">
      <div className="container-rest mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="section-eyebrow">{t('signature')}</span>
          <h2 className="section-title mt-3">{t('menuTitle')}</h2>
          <p className="section-sub mx-auto">{t('menuSubtitle')}</p>
        </div>

        {/* Category navigation */}
        <div className="no-scrollbar mb-10 flex gap-3 overflow-x-auto pb-2">
          {menu.map((cat: MenuCategory) => {
            const active = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? 'text-white'
                    : 'bg-white text-muted hover:bg-primary/5 hover:text-primary border border-borderline'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 rounded-full bg-primary-gradient"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {lang === 'ar' ? cat.nameAr : cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="contents"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {activeProducts.map((product) => (
                <MenuItemCard
                  key={product.id}
                  product={product}
                  onOpen={() => handleOpen(product)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Product modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
