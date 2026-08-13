/**
 * SCROLL REVEAL — GSAP ScrollTrigger
 * Reusable scroll-triggered reveal animations for sections.
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

/**
 * Returns a ref to attach to a container. Children with class
 * `.reveal-up`, `.reveal-fade`, `.reveal-mask .reveal-inner`
 * will be animated on scroll.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const {
      y = 40,
      x = 0,
      scale = 1,
      duration = 0.9,
      stagger = 0.12,
      start = 'top 85%',
      once = true,
    } = options;

    const targets = el.querySelectorAll<HTMLElement>(
      '.reveal-up, .reveal-fade, .reveal-mask .reveal-inner'
    );

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        x,
        scale,
        opacity: 0,
        duration,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export default useScrollReveal;
