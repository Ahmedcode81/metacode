/**
 * OFFERS PAGE — Dedicated promotions view with header.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import Offers from '../components/Offers';

export default function OffersPage() {
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
          <span className="section-eyebrow">{t('offers')}</span>
          <h2 className="section-title mt-3">{t('offersTitle')}</h2>
          <p className="section-sub mx-auto">{t('offersSubtitle')}</p>
        </div>
      </div>
      <Offers />
    </motion.main>
  );
}
