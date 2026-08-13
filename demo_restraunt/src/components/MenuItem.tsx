/**
 * MENU ITEM CARD — Premium product card with image zoom,
 * card lift, and quick-add.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCart } from '../services/cartStore';
import { useToast } from '../services/ToastContext';
import { useRestaurantData } from '../services/RestaurantDataContext';
import { Product } from '../config/menu';

interface MenuItemProps {
  product: Product;
  onOpen: () => void;
}

export default function MenuItemCard({ product, onOpen }: MenuItemProps) {
  const { t, lang } = useLanguage();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const { config } = useRestaurantData();

  const name = lang === 'ar' ? product.nameAr : product.name;
  const desc = lang === 'ar' ? product.descriptionAr : product.description;
  const currency = config?.currency || 'USD';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.available) return;
    addItem(product, 1, {});
    showToast(`${name} ${t('addedToOrder')}`);
  };

  return (
    <motion.article
      onClick={onOpen}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative cursor-pointer overflow-hidden rounded-card bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Featured badge */}
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-primary-gradient px-3 py-1 text-xs font-semibold text-white shadow">
            {t('featured')}
          </span>
        )}

        {/* Unavailable overlay */}
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <span className="rounded-full bg-foreground/80 px-4 py-1.5 text-sm font-semibold text-white">
              {t('unavailable')}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-bold text-secondary">
            {name}
          </h3>
          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            {product.price} {currency}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {desc}
        </p>

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          disabled={!product.available}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          {t('addToOrder')}
        </button>
      </div>
    </motion.article>
  );
}
