/**
 * FOOTER — Restaurant footer with METACODE attribution.
 * Consumes restaurant data via the contextual data hook and uses
 * real router Links for navigation.
 */
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantData } from '../services/RestaurantDataContext';

export default function Footer() {
  const { t, lang } = useLanguage();
  const { config } = useRestaurantData();

  const displayName = config
    ? lang === 'ar'
      ? config.nameAr
      : config.name
    : '';
  const logo = config?.logo ?? '/assets/logo.svg';
  const description = config
    ? lang === 'ar'
      ? config.descriptionAr
      : config.description
    : '';
  const social = config?.social;

  const navLinks = [
    { to: '/menu', key: 'navMenu' },
    { to: '/reservation', key: 'navReservation' },
    { to: '/branches', key: 'navBranches' },
    { to: '/offers', key: 'navOffers' },
    { to: '/contact', key: 'navContact' },
  ];

  const socialLinks = social
    ? [
        { href: social.instagram, label: 'Instagram' },
        { href: social.snapchat, label: 'Snapchat' },
        { href: social.tiktok, label: 'TikTok' },
        { href: social.x, label: 'X' },
      ]
    : [];

  return (
    <footer className="border-t border-borderline bg-secondary text-white">
      <div className="container-rest mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={displayName}
                className="h-11 w-11 rounded-card bg-white/10 object-contain p-1"
              />
              <span className="font-heading text-xl font-bold">
                {displayName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {description}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t('footerNav')}
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/80 transition-colors hover:text-primary-light"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              {t('follow')}
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:bg-primary-gradient hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    {s.label === 'Instagram' && (
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .4 1.4.8.4.4.7.8.8 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.4 1-.8 1.4-.4.4-.8.7-1.4.8-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.4-1.4-.8-.4-.4-.7-.8-.8-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.4-1 .8-1.4.4-.4.8-.7 1.4-.8.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
                    )}
                    {s.label === 'Snapchat' && (
                      <path d="M12 2c2.9 0 5.2 2.3 5.4 5.2.1.9.2 1.8.5 2.6.1.3.2.4.5.5 1.2.4 2.4.9 3.4 1.7.3.2.4.5.3.8-.1.6-.6 1-1.2 1.1-.2 0-.4.1-.6.2-.1.3-.1.7-.2 1-.1.3-.3.4-.6.4-.9.1-1.8.3-2.6.7-.3.2-.5.5-.6.8-.1.2-.3.5-.5.8-.3.4-.7.5-1.1.3-.3-.1-.6-.3-.9-.4-.3-.1-.6-.1-.9 0-.1 0-.3.1-.5.2-.6.3-1.2.5-1.9.6-.3 0-.6.1-.9.1-.2 0-.4-.1-.5-.3-.3-.4-.6-.7-1-1-.1-.1-.2-.2-.3-.3-.2-.2-.5-.2-.7-.2-.3 0-.6 0-.9-.1-.5-.1-1-.3-1.5-.7-.3-.2-.4-.5-.3-.8.1-.3.1-.7.2-1 .1-.2.3-.3.5-.3.2 0 .4-.1.6-.2.3-.1.5-.3.7-.5.5-.4 1.1-.7 1.7-.9.3-.1.5-.3.6-.6.2-.8.4-1.6.5-2.5.1-.3.2-.6.2-.9.2-2.9 2.5-5.2 5.4-5.2z" />
                    )}
                    {s.label === 'TikTok' && (
                      <path d="M19.6 6.7a4.8 4.8 0 01-3.5-3.5 5 5 0 01-.1-.9h-3.2V15.7a2.6 2.6 0 11-2.6-2.6c.3 0 .6 0 .9.1V9.9a5.9 5.9 0 00-.9-.1 5.8 5.8 0 015.8 5.8V8.9a7.9 7.9 0 004.6 1.5V7.2c-.3 0-.6-.1-1-.2z" />
                    )}
                    {s.label === 'X' && (
                      <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.4 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} {displayName}
          </p>
          <p className="flex items-center gap-2 text-sm text-white/50">
            <span>{t('poweredBy')}</span>
            <span className="font-bold text-primary-light">METACODE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
