/**
 * CONTACT PAGE — Dedicated contact view with header.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import Contact from '../components/Contact';

export default function ContactPage() {
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
          <span className="section-eyebrow">{t('contact')}</span>
          <h2 className="section-title mt-3">{t('contactTitle')}</h2>
          <p className="section-sub mx-auto">{t('contactSubtitle')}</p>
        </div>
      </div>
      <Contact />
    </motion.main>
  );
}
