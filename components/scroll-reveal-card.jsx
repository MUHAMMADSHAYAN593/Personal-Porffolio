"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-scrubbed gentle elevation & scale progression as each featured work item enters view.
 * Locks cleanly to scale(1) translateY(0) once settled in the reading zone.
 */
export default function ScrollRevealCard({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      // Progress 0 -> 1 as top travels from bottom of viewport to 62% height
      const raw = (vh - rect.top) / (vh * 0.42);
      const t = Math.max(0, Math.min(1, raw));
      const eased = 1 - Math.pow(1 - t, 3);
      const ty = (1 - eased) * 26;
      const sc = 0.965 + eased * 0.035;
      el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${sc.toFixed(4)})`;
      el.style.opacity = (0.35 + eased * 0.65).toFixed(3);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
