"use client";

import { useEffect, useRef, useState } from "react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 11: Sticky Split "Milestones & tiny trophies." Scrollytelling Cabinet */

const MILESTONES = [
  {
    num: "01",
    year: "2026",
    headline: "Frontend Dev",
    subhead: "DHA HEAD OFFICE · KARACHI",
    description:
      "Building, maintaining, and unifying reusable React & Next.js App Router production interfaces.",
    stamp: "SHIPPED",
    bg: "#DBEAFE",
    icon: "🚀",
  },
  {
    num: "02",
    year: "2026",
    headline: "ML Intern",
    subhead: "FLYRANK AI · SEARCH & LLMS",
    description:
      "Engineered organic visibility automation and Python data pipelines across LLM answer engines.",
    stamp: "ACCEPTED",
    bg: "#FFFFFF",
    icon: "⚡",
  },
  {
    num: "03",
    year: "2026",
    headline: "BCG Forage",
    subhead: "DATA SCIENCE SIMULATION",
    description:
      "Analyzed customer churn in Python (Pandas, NumPy) and trained a Random Forest classifier.",
    stamp: "VERIFIED",
    bg: "#DCFCE7",
    icon: "📊",
  },
  {
    num: "04",
    year: "2026",
    headline: "React Certified",
    subhead: "HACKERRANK · FRONTEND DEV",
    description:
      "Verified component architecture, hooks state management, and modern frontend engineering.",
    stamp: "CERTIFIED",
    bg: "#FEF9C3",
    icon: "⚛️",
  },
  {
    num: "05",
    year: "2026",
    headline: "84% F1 Score",
    subhead: "NYC HOUSING ML · 48,895 ROWS",
    description:
      "Geo-engineered Haversine distance features across 48,895 NYC listings in Scikit-Learn.",
    stamp: "LIVE MODEL",
    bg: "#FCE7F3",
    icon: "🧠",
  },
  {
    num: "06",
    year: "2026",
    headline: "<50ms Query",
    subhead: "CINEMATCH · 42,000+ TITLES",
    description:
      "Sparse TF-IDF cosine similarity API reducing RAM footprint by 90% in FastAPI.",
    stamp: "BENCHMARK",
    bg: "#FFFFFF",
    icon: "🎬",
  },
  {
    num: "07",
    year: "2025",
    headline: "Python Dev",
    subhead: "DECODELABS · KARACHI",
    description:
      "Authored, tested, and debugged modular Python automation tools with team delivery cycles.",
    stamp: "PRODUCTION",
    bg: "#F3E8FF",
    icon: "🐍",
  },
  {
    num: "08",
    year: "2024",
    headline: "BS AI Cohort",
    subhead: "DHA SUFFA UNIVERSITY",
    description:
      "Pursuing BS Artificial Intelligence alongside algorithmic problem solving & systems builds.",
    stamp: "ACTIVE",
    bg: "#E0F2FE",
    icon: "🎓",
  },
];

const YEARS = ["All", "2026", "2025", "2024"];

const STAMPS = [
  "DHA HEAD OFFICE",
  "FLYRANK AI",
  "DECODELABS",
  "BCG FORAGE",
  "HACKERRANK",
  "SIMPLILEARN",
  "DHA SUFFA UNIV.",
];

export default function TrophyCabinet() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef([]);
  const { playTick, playPop } = usePortfolioUX();

  const visibleItems =
    selectedYear === "All"
      ? MILESTONES
      : MILESTONES.filter((m) => m.year === selectedYear);

  useEffect(() => {
    setActiveIdx(0);
  }, [selectedYear]);

  useEffect(() => {
    const onScroll = () => {
      const centerY = window.innerHeight * 0.48;
      let closest = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          closest = idx;
        }
      });
      setActiveIdx(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleItems.length]);

  const currentItem = visibleItems[activeIdx] || visibleItems[0];
  const progressPct = ((activeIdx + 1) / Math.max(1, visibleItems.length)) * 100;

  return (
    <section
      id="trophies"
      className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sticky Counter & Stamps Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-2">
                The Trophy Cabinet · 2024 → 2026
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                Milestones &amp; tiny trophies<span className="text-[#09B66D]">.</span>
              </h2>
            </div>

            {/* Huge Live Scrollytelling Counter */}
            <div>
              <div className="flex items-baseline gap-1 font-extrabold tabular-nums">
                <span className="text-5xl sm:text-6xl text-[var(--foreground)]">
                  {String(activeIdx + 1).padStart(2, "0")}
                </span>
                <span className="text-xl text-[var(--muted-foreground)]">
                  /{String(visibleItems.length).padStart(2, "0")}
                </span>
              </div>

              <div className="h-1.5 w-full max-w-xs rounded-full bg-[var(--surface-subtle)] overflow-hidden mt-3 border border-[var(--border)]">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progressPct}%`,
                    background: "linear-gradient(90deg, #EC4899, #6366F1, #09B66D)",
                  }}
                />
              </div>
            </div>

            {/* Year Filters */}
            <div className="flex flex-wrap items-center gap-1.5">
              {YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => {
                    playPop();
                    setSelectedYear(y);
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono border transition-colors cursor-pointer ${
                    selectedYear === y
                      ? "bg-[#111113] dark:bg-white text-white dark:text-[#111113] border-[#111113] dark:border-white font-semibold"
                      : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border-strong)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* Credential Dashed Stamps */}
            <div>
              <div className="text-[10px] font-mono text-[var(--muted-foreground)] mb-2">
                Credentials &amp; Teams ({STAMPS.length}/7 verified)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {STAMPS.map((st) => (
                  <span
                    key={st}
                    className="px-2 py-1 rounded border border-dashed border-[var(--border-strong)] text-[10px] font-mono text-[var(--muted-foreground)] bg-[var(--surface-subtle)]/60"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Now Landing Note */}
            {currentItem && (
              <div className="pt-3 border-t border-[var(--border)]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#09B66D] mb-1">
                  Now Landing
                </div>
                <div className="text-sm font-semibold text-[var(--foreground)]">
                  {currentItem.headline} — {currentItem.subhead}
                </div>
                <div className="text-[11px] font-mono text-[var(--muted-foreground)] mt-2">
                  Keep scrolling, more milestones incoming ↓
                </div>
              </div>
            )}
          </div>

          {/* Right Scrolling Pastel & Bordered Milestone Cards */}
          <div className="lg:col-span-7 space-y-8">
            {visibleItems.map((item, idx) => {
              const isFocused = idx === activeIdx;
              const tilt = idx % 2 === 0 ? "-rotate-[1deg]" : "rotate-[1deg]";
              return (
                <article
                  key={item.num}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onMouseEnter={() => playTick()}
                  style={{ backgroundColor: item.bg }}
                  className={`relative rounded-2xl border-2 border-[#18181b] p-6 sm:p-7 text-[#111113] shadow-[0_6px_0_#18181b] transition-all duration-300 ${tilt} ${
                    isFocused ? "scale-[1.015] rotate-0" : "opacity-90"
                  }`}
                >
                  {/* Top Row: Index + Icon + Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-extrabold tabular-nums">
                        {item.num}
                      </span>
                      <span className="w-8 h-8 rounded-full border border-[#18181b] bg-white flex items-center justify-center text-sm shadow-xs">
                        {item.icon}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#111113] text-white text-[10px] font-mono font-bold tabular-nums">
                      {item.year}
                    </span>
                  </div>

                  {/* Center Title + Stamp */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
                        {item.headline}
                      </h3>
                      <div className="text-[10px] font-mono uppercase tracking-wider opacity-70 mt-1.5">
                        {item.subhead}
                      </div>
                    </div>

                    {/* Circular Ink Stamp Seal */}
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#09B66D] flex items-center justify-center text-[9px] font-mono font-extrabold text-[#059669] rotate-[-12deg] flex-shrink-0 bg-white/60">
                      {item.stamp}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#111113]/80 mt-4 pt-3 border-t border-black/10 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
