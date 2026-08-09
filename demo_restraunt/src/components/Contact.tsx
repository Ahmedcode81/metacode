/**
 * CONTACT — Configurable contact, social, address, and map.
 */
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantData } from '../services/RestaurantDataContext';

export default function Contact() {
  const { t, lang } = useLanguage();
  const { config, branches } = useRestaurantData();
  const contact = config?.contact;
  const social = config?.social;
  const name = lang === 'ar' ? config?.nameAr : config?.name;
  const address = lang === 'ar' ? contact?.addressAr : contact?.address;

  // Featured branch drives the map + opening hours.
  const featuredBranch = branches[0];

const socialLinks = social
    ? [
        { key: 'instagram', href: social.instagram, label: 'Instagram' },
        { key: 'snapchat', href: social.snapchat, label: 'Snapchat' },
        { key: 'tiktok', href: social.tiktok, label: 'TikTok' },
        { key: 'x', href: social.x, label: 'X' },
      ]
    : [];

  if (!contact) return null;

  return (
    <section id="contact" className="py-20">
      <div className="container-rest mx-auto">
        <div className="mb-12 text-center">
          <span className="section-eyebrow">{t('contact')}</span>
          <h2 className="section-title mt-3">{t('contactTitle')}</h2>
          <p className="section-sub mx-auto">{t('contactSubtitle')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2 content-start"
          >
            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 rounded-card border border-borderline bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted">{t('phone')}</p>
                <p className="font-semibold text-secondary" dir="ltr">
                  {contact.phone}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-card border border-borderline bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-success/10 text-success">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <p className="font-semibold text-secondary">{t('chat')}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 rounded-card border border-borderline bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted">{t('email')}</p>
                <p className="truncate font-semibold text-secondary">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 rounded-card border border-borderline bg-white p-5 shadow-card">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted">{t('address')}</p>
                <p className="font-semibold text-secondary">{address}</p>
              </div>
            </div>

            {/* Opening hours from first branch */}
            <div className="flex items-center gap-4 rounded-card border border-borderline bg-white p-5 shadow-card sm:col-span-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted">{t('openingHours')}</p>
                <p className="font-semibold text-secondary">
                  {lang === 'ar'
                    ? branches[0]?.openingHoursAr
                    : branches[0]?.openingHours}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 sm:col-span-2">
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-borderline bg-white text-muted transition-all hover:bg-primary-gradient hover:text-white hover:shadow-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    {s.key === 'instagram' && (
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .4 1.4.8.4.4.7.8.8 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.4 1-.8 1.4-.4.4-.8.7-1.4.8-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.4-1.4-.8-.4-.4-.7-.8-.8-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.4-1 .8-1.4.4-.4.8-.7 1.4-.8.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
                    )}
                    {s.key === 'snapchat' && (
                      <path d="M12 2c2.9 0 5.2 2.3 5.4 5.2.1.9.2 1.8.5 2.6.1.3.2.4.5.5 1.2.4 2.4.9 3.4 1.7.3.2.4.5.3.8-.1.6-.6 1-1.2 1.1-.2 0-.4.1-.6.2-.1.3-.1.7-.2 1-.1.3-.3.4-.6.4-.9.1-1.8.3-2.6.7-.3.2-.5.5-.6.8-.1.2-.3.5-.5.8-.3.4-.7.5-1.1.3-.3-.1-.6-.3-.9-.4-.3-.1-.6-.1-.9 0-.1 0-.3.1-.5.2-.6.3-1.2.5-1.9.6-.3 0-.6.1-.9.1-.2 0-.4-.1-.5-.3-.3-.4-.6-.7-1-1-.1-.1-.2-.2-.3-.3-.2-.2-.5-.2-.7-.2-.3 0-.6 0-.9-.1-.5-.1-1-.3-1.5-.7-.3-.2-.4-.5-.3-.8.1-.3.1-.7.2-1 .1-.2.3-.3.5-.3.2 0 .4-.1.6-.2.3-.1.5-.3.7-.5.5-.4 1.1-.7 1.7-.9.3-.1.5-.3.6-.6.2-.8.4-1.6.5-2.5.1-.3.2-.6.2-.9.2-2.9 2.5-5.2 5.4-5.2z" />
                    )}
                    {s.key === 'tiktok' && (
                      <path d="M19.6 6.7a4.8 4.8 0 01-3.5-3.5 5 5 0 01-.1-.9h-3.2V15.7a2.6 2.6 0 11-2.6-2.6c.3 0 .6 0 .9.1V9.9a5.9 5.9 0 00-.9-.1 5.8 5.8 0 105.8 5.8V8.9a7.9 7.9 0 004.6 1.5V7.2c-.3 0-.6-.1-1-.2z" />
                    )}
                    {s.key === 'x' && (
                      <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.4 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z" />
                    )}
                  </svg>
                </a>
              ))}
              <span className="ml-auto text-sm font-semibold text-secondary">
                {name}
              </span>
            </div>
          </motion.div>

          {/* Map iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-cardlg border border-borderline bg-white shadow-card"
          >
            <iframe
              title="Restaurant location"
              src={`https://www.google.com/maps?q=${featuredBranch?.latitude || 24.7136},${featuredBranch?.longitude || 46.6753}&z=14&output=embed`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
