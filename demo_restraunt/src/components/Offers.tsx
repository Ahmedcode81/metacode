/**
 * OFFERS — Premium promotional section.
 * Data-driven from config; management system ready.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { offers, Offer } from '../config/offers';

export default function Offers() {
  const { t, lang } = useLanguage();
  const active = offers.filter((o) => o.active);

  if (active.length === 0) return null;

  return (
    <section id="offers" className="py-20">
      <div className="container-rest mx-auto">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">{t('offers')}</span>
          <h2 className="section-title mt-3">{t('offersTitle')}</h2>
          <p className="section-sub mx-auto">{t('offersSubtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {active.map((offer: Offer, i) => {
            const title = lang === 'ar' ? offer.titleAr : offer.title;
            const desc =
              lang === 'ar' ? offer.descriptionAr : offer.description;
            return (
              <motion.article
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-cardlg bg-secondary text-white shadow-cinematic"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={offer.image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                </div>

                {/* Discount badge */}
                <div className="absolute right-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-primary-gradient text-white shadow-primary">
                  <span className="text-xl font-bold leading-none">
                    {offer.discount}%
                  </span>
                  <span className="text-[10px] font-semibold uppercase">
                    {t('off')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="font-heading text-xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {desc}
                  </p>
                  {offer.code && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-primary-light/50 px-4 py-1.5 text-sm font-bold tracking-wider text-primary-light">
                      {offer.code}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
