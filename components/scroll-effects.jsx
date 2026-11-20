"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

/**
 * 1. Global Scroll-Linked Progress Bar (scrubbed continuously by window.scrollY)
 */
export function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = barRef.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${p.toFixed(4)})`;
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
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-[#E5484D] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

/**
 * 2. Scroll-Triggered Text & Mask Reveal (clip-path wipe + crisp rise)
 */
export function ScrollTextMask({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`scroll-text-mask ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * 3. Scroll-Linked Parallax Layer (shifts Y at a differential speed as user scrolls)
 */
export function ParallaxBox({ children, speed = 0.08, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      const y = Math.max(-44, Math.min(44, centerOffset * speed));
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
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
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

/**
 * 4. Sticky Stacking + Scroll-Linked Scale/Depth Card (for Featured Projects 01–06)
 */
export function StickyStackCard({ index, total, children }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      if (window.innerWidth < 768) {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const stickyTop = 84 + index * 12;
      // How far past its sticky resting point this card has been pushed by following cards
      const past = Math.max(0, stickyTop - rect.top);
      const shrinkProgress = Math.min(1, past / 420);
      const isLast = index === total - 1;
      const targetScale = isLast ? 1 : 1 - shrinkProgress * 0.045;
      const targetOpacity = isLast ? 1 : 1 - shrinkProgress * 0.18;
      card.style.transform = `scale(${targetScale.toFixed(4)})`;
      card.style.opacity = targetOpacity.toFixed(3);
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
  }, [index, total]);

  return (
    <div
      ref={wrapRef}
      className="md:sticky mb-8 last:mb-0"
      style={{ top: `${84 + index * 12}px`, zIndex: index + 1 }}
    >
      <div
        ref={cardRef}
        className="rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] px-6 md:px-10 shadow-[0_14px_40px_-16px_rgba(10,10,11,0.12)] dark:shadow-[0_16px_44px_-16px_rgba(0,0,0,0.65)] transition-shadow will-change-transform origin-top"
      >
        {children}
      </div>
    </div>
  );
}

/**
 * 5. Scroll-Linked Horizontal Scroll Track (vertical scroll drives X-axis translation)
 */
export function HorizontalScrollTrack({ items }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const p = scrolled / scrollable;
      setProgress(p);

      const maxTranslate = Math.max(0, track.scrollWidth - track.parentElement.clientWidth + 24);
      const tx = -p * maxTranslate;
      track.style.transform = `translate3d(${tx.toFixed(1)}px, 0, 0)`;
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
  }, [items.length]);

  return (
    <div ref={outerRef} className="relative md:min-h-[165vh]">
      <div className="md:sticky md:top-24 py-6">
        <div className="editorial-container mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5484D]" />
              <span>Horizontal Scroll Showcase</span>
              <span className="tabular-nums opacity-70">{Math.round(progress * 100)}%</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              More from the Archive
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-xs font-mono text-[#E5484D] hover:underline inline-flex items-center gap-1.5"
          >
            Browse all {items.length}+ archive builds
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Viewport Window */}
        <div className="editorial-container overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-nowrap gap-5 will-change-transform pb-4"
          >
            {items.map((project) => (
              <div
                key={project.slug}
                className="w-[290px] sm:w-[340px] flex-shrink-0 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] p-5 flex flex-col justify-between shadow-sm hover:border-[var(--foreground)] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted-foreground)] mb-3 tabular-nums">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[#E5484D] transition-colors inline-flex items-center gap-1.5"
                    >
                      {project.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--muted-foreground)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-xs font-mono">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[var(--foreground)] font-semibold hover:text-[#E5484D] transition-colors"
                    >
                      Inspect →
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
                      >
                        Live <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track Progress Indicator */}
          <div className="mt-4 h-1 w-full rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className="h-full bg-[#E5484D] origin-left transition-transform duration-75"
              style={{ transform: `scaleX(${Math.max(0.08, progress)})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
