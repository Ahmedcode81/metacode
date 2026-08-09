/**
 * BRANCHES — Visually impressive branch section.
 * Data-driven; supports multiple branches with maps.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { branches, Branch } from '../config/branches';

export default function Branches() {
  const { t, lang } = useLanguage();

  return (
    <section id="branches" className="py-20">
      <div className="container-rest mx-auto">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">{t('branches')}</span>
          <h2 className="section-title mt-3">{t('branchesTitle')}</h2>
          <p className="section-sub mx-auto">{t('branchesSubtitle')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch: Branch, i) => {
            const name = lang === 'ar' ? branch.nameAr : branch.name;
            const address =
              lang === 'ar' ? branch.addressAr : branch.address;
            const hours =
              lang === 'ar'
                ? branch.openingHoursAr
                : branch.openingHours;
            return (
              <motion.article
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-cardlg border border-borderline bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
              >
                {/* Branch image */}
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/9] overflow-hidden bg-background"
                >
                  <img
                    src={branch.image}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  {branch.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary-gradient px-3 py-1 text-xs font-semibold text-white">
                      {t('featured')}
                    </span>
                  )}
                </a>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-secondary">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{address}</p>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      <span dir="ltr">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 text-primary"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>{hours}</span>
                    </div>
                  </div>

                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    {t('getDirections')}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4 rtl:rotate-180"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
