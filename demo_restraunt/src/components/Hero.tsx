/**
 * HERO — Cinematic full-screen entrance.
 * Parallax background, staggered text reveal, dual CTAs.
 */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n/LanguageContext';
import { useRestaurantData } from '../services/RestaurantDataContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t, lang } = useLanguage();
  const { config } = useRestaurantData();
  const rootRef = useRef<HTMLDivElement>(null);

  const isAr = lang === 'ar';
  const name = config ? (isAr ? config.nameAr : config.name) : '';
  const headline = config
    ? isAr
      ? config.hero.headlineAr
      : config.hero.headline
    : '';
  const sub = config
    ? isAr
      ? config.hero.subheadlineAr
      : config.hero.subheadline
    : '';
  const heroImage = config?.heroImage ?? '/assets/hero.svg';
  const logo = config?.logo ?? '/assets/logo.svg';

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        '.hero-bg',
        { scale: 1.15, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
      )
        .fromTo(
          '.hero-logo',
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=1.2'
        )
        .fromTo(
          '.hero-name',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-word',
          { opacity: 0, y: 60, rotateX: 90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .fromTo(
          '.hero-sub',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.2'
        );

      // Parallax on scroll
      gsap.to('.hero-bg', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const words = headline.split(' ');

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0 will-change-transform">
<img
          src={heroImage}
          alt={name}
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/45 to-secondary/95" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-transparent"
          dir="ltr"
        />
      </div>

      {/* Content */}
      <div className="container-rest relative z-10 mx-auto pt-24 pb-16">
        <div className="max-w-2xl">
<div className="hero-logo mb-6 flex items-center gap-3">
            <img
              src={logo}
              alt={name}
              className="h-14 w-14 rounded-2xl object-contain shadow-lg"
            />
          </div>

          <h1 className="hero-name mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary-light">
            {name}
          </h1>

          <h2 className="font-heading text-4xl leading-[1.15] font-bold text-white sm:text-5xl md:text-6xl">
            {words.map((word, i) => (
              <span key={i} className="mr-2 inline-block overflow-hidden">
                <span className="hero-word inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <p className="hero-sub mt-6 max-w-lg text-lg leading-relaxed text-white/85">
            {sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/menu" className="btn-primary hero-cta">
              {t('exploreMenu')}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform rtl:rotate-180"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/reservation" className="btn-outline-light hero-cta">
              {t('reserveTable')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-white/70">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest">
          {t('scrollToExplore')}
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
