import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
}

/**
 * Returns a ref and a boolean `isVisible`.
 * Attach the ref to any DOM element — when it enters the viewport,
 * `isVisible` flips to true (once only).
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <p ref={ref} className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}>
 */
export default function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
