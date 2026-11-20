"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/**
 * Calm, reduced-motion-safe IntersectionObserver reveal for major sections.
 */
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-block ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Subtle magnetic hover micro-interaction for primary interactive controls.
 */
export function Magnetic({ children, strength = 0.18, className = "" }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * 2px reading progress indicator pinned at top of viewport for long-form essays and case studies.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-[var(--accent)] origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

/**
 * Sliding pill tab bar using measured offsets so active indicator glides on transform alone.
 */
export function SlidingTabs({ items, activeIndex, onSelect, className = "" }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const { playTick, playPop } = usePortfolioUX();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeIndex];
    if (!container || !activeEl) return;
    setPill({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      ready: true,
    });
  }, [activeIndex, items.length]);

  useEffect(() => {
    const onResize = () => {
      const activeEl = itemRefs.current[activeIndex];
      if (!activeEl) return;
      setPill({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
        ready: true,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      className={`relative inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] ${className}`}
    >
      {pill.ready && (
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 rounded-md bg-[var(--card)] border border-[var(--border)] shadow-xs transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
          style={{
            width: pill.width,
            transform: `translateX(${pill.left - 4}px)`,
          }}
        />
      )}
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={item.key ?? idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            onMouseEnter={() => playTick()}
            onClick={() => {
              playPop();
              onSelect(idx, item);
            }}
            className={`relative z-10 px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 inline-flex items-center gap-1.5 cursor-pointer ${
              isActive
                ? "text-[var(--foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {item.dot && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            )}
            <span>{item.label}</span>
            {item.count !== undefined && (
              <span className="text-[11px] font-mono opacity-65 tabular-nums">
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Copy button with crossfading icon/label confirmation and optional tactile chime.
 */
export function CopyAction({ value, label = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);
  const { playSuccess } = usePortfolioUX();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      playSuccess();
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API fallback ignored if blocked
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface-subtle)] text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-[colors,transform] active:scale-95 cursor-pointer ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
