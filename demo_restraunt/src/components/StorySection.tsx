/**
 * STORY SECTION — Cinematic storytelling with parallax imagery
 * and scroll-driven text reveal.
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../i18n/LanguageContext';
import { restaurantConfig } from '../config/restaurant';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const { t, lang } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const isAr = lang === 'ar';

  const title = isAr
    ? restaurantConfig.story.titleAr
    : restaurantConfig.story.title;
  const paragraphs = isAr
    ? restaurantConfig.story.paragraphsAr
    : restaurantConfig.story.paragraphs;
  const quote = isAr
    ? restaurantConfig.story.quoteAr
    : restaurantConfig.story.quote;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Parallax on the featured image
      const img = el.querySelector<HTMLElement>('.story-parallax');
      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: el.querySelector('.story-image-wrap'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

// Text reveal masks
      gsap.utils
        .toArray<HTMLElement>('.story-reveal-mask')
        .forEach((mask) => {
          const inner = mask.querySelector('.story-reveal-inner');
          if (!inner) return;
          gsap.fromTo(
            inner,
            { yPercent: 110 },
            {
              yPercent: 0,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });

      // Paragraph reveal
      gsap.from('.reveal-up', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: el.querySelector('.story-text-col'),
          start: 'top 85%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-secondary py-24 text-white"
    >
      <div className="container-rest relative z-10 mx-auto grid items-center gap-16 lg:grid-cols-2">
        {/* Image side */}
        <div className="story-image-wrap relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-cardlg">
            <img
              src={restaurantConfig.storyImages[0]}
              alt={title}
              loading="lazy"
              className="story-parallax h-[120%] w-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          </div>
          {/* Floating quote card */}
          <div className="absolute -bottom-6 -right-4 max-w-xs rounded-card bg-white p-6 shadow-cinematic sm:-right-6">
            <p className="font-heading text-lg font-semibold italic text-secondary">
              “{quote}”
            </p>
          </div>
        </div>

{/* Text side */}
        <div className="story-text-col order-1 lg:order-2">
          <span className="section-eyebrow text-primary-light">
            {t('storyTitle')}
          </span>
          <h2 className="story-reveal-mask mt-4 overflow-hidden">
            <span className="story-reveal-inner block font-heading text-4xl font-bold leading-tight sm:text-5xl">
              {title}
            </span>
          </h2>

          <div className="mt-8 space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal-up max-w-lg text-base leading-relaxed text-white/80"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-primary-light" />
            <span className="text-sm font-medium uppercase tracking-widest text-white/60">
              {restaurantConfig.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
