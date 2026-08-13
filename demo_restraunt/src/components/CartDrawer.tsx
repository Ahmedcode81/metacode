/**
 * CART DRAWER — Animated slide-in order summary.
 * Prepared for future API-driven checkout.
 */
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCart } from '../services/cartStore';
import { useRestaurantData } from '../services/RestaurantDataContext';

export default function CartDrawer() {
  const { t, lang } = useLanguage();
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    total,
  } = useCart();
  const { config } = useRestaurantData();

  const currency = config?.currency || 'USD';

  // Lock body scroll while open and handle Escape key.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeCart();
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[95] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            className={`fixed inset-y-0 z-[96] flex w-full max-w-md flex-col bg-white shadow-cinematic ${
              lang === 'ar' ? 'left-0' : 'right-0'
            }`}
            initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-borderline px-6 py-5">
              <h2 className="font-heading text-xl font-bold text-secondary">
                {t('yourOrder')}
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-background"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-14 w-14 text-borderline"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 2.707H17l-1-5" />
                  </svg>
                  <p className="font-medium text-muted">{t('cartEmpty')}</p>
                </div>
              ) : (
                <ul className="divide-y divide-borderline">
                  {items.map((item) => {
                    const itemName =
                      lang === 'ar'
                        ? item.product.nameAr
                        : item.product.name;
                    return (
                      <li key={item.key} className="flex gap-4 py-4">
                        <img
                          src={item.product.image}
                          alt={itemName}
                          className="h-20 w-20 shrink-0 rounded-card object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-secondary">
                              {itemName}
                            </h3>
                            <span className="shrink-0 text-sm font-bold text-primary">
                              {item.unitPrice * item.quantity}{' '}
                              {currency}
                            </span>
                          </div>
                          {/* Modifier summary */}
                          {Object.values(item.selectedModifiers).some(
                            (arr) => arr.length > 0
                          ) && (
                            <p className="text-xs text-muted">
                              {Object.values(item.selectedModifiers)
                                .flat()
                                .join(', ')}
                            </p>
                          )}
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center rounded-full border border-borderline">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.key,
                                    item.quantity - 1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center text-muted"
                              >
                                −
                              </button>
                              <span className="w-6 text-center text-sm font-bold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.key,
                                    item.quantity + 1
                                  )
                                }
                                className="flex h-8 w-8 items-center justify-center text-muted"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.key)}
                              className="text-xs font-medium text-destructive hover:underline"
                            >
                              {t('remove')}
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-borderline px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted">
                    {t('total')}
                  </span>
                  <span className="font-heading text-2xl font-bold text-secondary">
                    {total} {currency}
                  </span>
                </div>
                <button className="w-full rounded-full bg-primary-gradient py-3.5 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02]">
                  {t('checkout')}
                </button>
                <button
                  onClick={clearCart}
                  className="mt-2 w-full text-center text-xs font-medium text-muted hover:text-destructive"
                >
                  {t('clearOrder')}
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
