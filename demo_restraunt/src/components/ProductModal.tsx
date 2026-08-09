/**
 * PRODUCT MODAL — Animated product detail drawer with image,
 * description, ingredients, modifiers, quantity, and add-to-order.
 */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Product } from '../config/menu';
import { useCart } from '../services/cartStore';
import { useToast } from '../services/ToastContext';
import { useRestaurantData } from '../services/RestaurantDataContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const { config } = useRestaurantData();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const currency = config?.currency || 'USD';

  // Reset state when product changes.
  useEffect(() => {
    setQuantity(1);
    setSelected({});
  }, [product?.id]);

  // Lock body scroll while open and handle Escape key.
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
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
  }, [product, onClose]);

  if (!product) return null;

  const name = lang === 'ar' ? product.nameAr : product.name;
  const description = lang === 'ar' ? product.descriptionAr : product.description;
  const ingredients = lang === 'ar' ? product.ingredientsAr : product.ingredients;

  const modifiers = product.modifiers ?? [];

  const toggleOption = (modId: string, optId: string, multiple: boolean) => {
    setSelected((prev) => {
      const current = prev[modId] ?? [];
      if (multiple) {
        const exists = current.includes(optId);
        return {
          ...prev,
          [modId]: exists
            ? current.filter((o) => o !== optId)
            : [...current, optId],
        };
      }
      return { ...prev, [modId]: [optId] };
    });
  };

  const handleAdd = () => {
    addItem(product, quantity, selected);
    showToast(`${name} ${t('addedToOrder')}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-cardlg bg-white shadow-cinematic sm:rounded-cardlg"
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow transition-transform hover:scale-105"
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

            <div className="grid max-h-[92vh] overflow-y-auto sm:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full">
                <img
                  src={product.image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
                {product.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-primary-gradient px-3 py-1 text-xs font-semibold text-white">
                    {t('featured')}
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl font-bold text-secondary">
                    {name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-lg font-bold text-primary">
                    {product.price} {currency}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>

                {/* Ingredients */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {t('ingredients')}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modifiers */}
                {modifiers.map((mod) => {
                  const modName = lang === 'ar' ? mod.nameAr : mod.name;
                  return (
                    <div key={mod.id} className="mt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {modName}
                        {mod.required && (
                          <span className="text-destructive"> *</span>
                        )}
                      </h4>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {mod.options.map((opt) => {
                          const optName =
                            lang === 'ar' ? opt.nameAr : opt.name;
                          const active = (selected[mod.id] ?? []).includes(
                            opt.id
                          );
                          return (
                            <button
                              key={opt.id}
                              onClick={() =>
                                toggleOption(mod.id, opt.id, mod.multiple)
                              }
                              className={`flex items-center justify-between rounded-full border px-3 py-2 text-sm font-medium transition-all ${
                                active
                                  ? 'border-primary bg-primary/5 text-primary'
                                  : 'border-borderline text-foreground hover:border-primary/40'
                              }`}
                            >
                              <span>{optName}</span>
                              {opt.price > 0 && (
                                <span className="text-xs text-muted">
                                  +{opt.price}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* Quantity + Add */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-borderline">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="flex h-11 w-11 items-center justify-center text-foreground"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-lg font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="flex h-11 w-11 items-center justify-center text-foreground"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAdd}
                    disabled={!product.available}
                    className="flex-1 rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-white shadow-primary transition-transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {t('addToOrder')} ·{' '}
                    {product.price * quantity} {currency}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
