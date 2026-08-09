/**
 * NAVBAR — Fixed translucent navbar with language toggle,
 * navigation links, and cart button.
 */
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCart } from '../services/cartStore';
import { useRestaurantData } from '../services/RestaurantDataContext';

const navItems = [
  { to: '/', key: 'navHome' },
  { to: '/menu', key: 'navMenu' },
  { to: '/reservation', key: 'navReservation' },
  { to: '/branches', key: 'navBranches' },
  { to: '/offers', key: 'navOffers' },
  { to: '/contact', key: 'navContact' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { count, openCart } = useCart();
  const { config } = useRestaurantData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

const brandName = config ? (lang === 'ar' ? config.nameAr : config.name) : '';
  const name = brandName || (lang === 'ar' ? 'سافورا' : 'Savora');
  const logo = config?.logo ?? '/assets/logo.svg';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-borderline'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-rest mx-auto flex h-20 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
<img
            src={logo}
            alt={name}
            className="h-11 w-11 rounded-xl object-contain"
          />
          <span className="font-heading text-2xl font-bold text-secondary">
            {name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted hover:text-primary'
                }`
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex h-10 items-center gap-1 rounded-full border border-borderline bg-white px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            aria-label="Switch language"
          >
            {t('langLabelShort')}
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient text-white shadow-primary transition-transform hover:scale-105"
            aria-label={t('cartTitle')}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-destructive px-1 text-xs font-bold text-white"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-borderline bg-white text-secondary lg:hidden"
            aria-label="Menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-borderline bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-rest flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-background'
                    }`
                  }
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
