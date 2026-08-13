/**
 * RESERVATION PAGE — Dedicated reservation flow with header.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import Reservation from '../components/Reservation';

export default function ReservationPage() {
  const { t } = useLanguage();
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-28"
    >
      <div className="container-rest mx-auto">
        <div className="mb-10 text-center">
          <span className="section-eyebrow">{t('reserve')}</span>
          <h2 className="section-title mt-3">{t('reservationTitle')}</h2>
          <p className="section-sub mx-auto">{t('reservationSubtitle')}</p>
        </div>
      </div>
      <Reservation />
    </motion.main>
  );
}
