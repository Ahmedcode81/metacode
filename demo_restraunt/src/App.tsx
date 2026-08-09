/**
 * APP — Root layout & routing
 * Uses hash-free router with animated page transitions.
 */
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import BranchesPage from './pages/BranchesPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import { applyBranding } from './config/restaurant';
import { useRestaurantData } from './services/RestaurantDataContext';
import { useToast } from './services/ToastContext';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();
  const location = useLocation();
  const { config } = useRestaurantData();
  const { toast, dismissToast } = useToast();

  // Apply restaurant branding as CSS variables once config is loaded.
  useEffect(() => {
    if (config) applyBranding(config);
  }, [config]);

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
<Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
<Toast toast={toast} onDismiss={dismissToast} />
    </div>
  );
}
