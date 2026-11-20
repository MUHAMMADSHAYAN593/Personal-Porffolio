"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 5: "Sites I've built." Interactive 3D Curved Fanning Browser Deck */

const SHOWCASE_SITES = [
  {
    slug: "prepai",
    title: "PrepAI",
    blurb: "Tailored interview dossiers via Zod gates",
    domain: "prepai.shayan.dev",
    accent: "#16A34A",
    bg: "#F8FAFC",
    dark: false,
    tag: "AI / Full-Stack",
  },
  {
    slug: "deep-research-agent",
    title: "Deep Research",
    blurb: "Autonomous multi-agent literature pipeline",
    domain: "research.shayan.dev",
    accent: "#2563EB",
    bg: "#0F172A",
    dark: true,
    tag: "Multi-Agent",
  },
  {
    slug: "architecture-visualizer",
    title: "Arch Canvas",
    blurb: "Plain English to interactive React Flow",
    domain: "archcanvas.shayan.dev",
    accent: "#8B5CF6",
    bg: "#18181B",
    dark: true,
    tag: "Ollama + Canvas",
  },
  {
    slug: "roomify",
    title: "Roomify",
    blurb: "Browser 3D spatial room architect in WebGL",
    domain: "roomify.shayan.dev",
    accent: "#0EA5E9",
    bg: "#F0F9FF",
    dark: false,
    tag: "Three.js 3D",
  },
  {
    slug: "nyc-house-type-predictor",
    title: "NYC Housing ML",
    blurb: "84% F1 classification on 48,895 listings",
    domain: "nychousing.shayan.dev",
    accent: "#F59E0B",
    bg: "#111113",
    dark: true,
    tag: "Scikit-Learn",
  },
  {
    slug: "cinematch",
    title: "CineMatch",
    blurb: "<50ms vector similarity across 42k+ titles",
    domain: "cinematch.shayan.dev",
    accent: "#E5484D",
    bg: "#FFF1F2",
    dark: false,
    tag: "FastAPI + TF-IDF",
  },
  {
    slug: "presidium",
    title: "Presidium",
    blurb: "Decision-driven governance simulation + ML grader",
    domain: "presidium.shayan.dev",
    accent: "#6366F1",
    bg: "#EEF2FF",
    dark: false,
    tag: "Python + ML",
  },
  {
    slug: "restate",
    title: "ReState",
    blurb: "Full-stack real estate marketplace & discovery",
    domain: "restate.shayan.dev",
    accent: "#10B981",
    bg: "#064E3B",
    dark: true,
    tag: "Full-Stack",
  },
  {
    slug: "mystery-message",
    title: "Mystery Message",
    blurb: "Anonymous Q&A SaaS with AI prompt suggestions",
    domain: "mystery.shayan.dev",
    accent: "#A855F7",
    bg: "#1E1B4B",
    dark: true,
    tag: "Next.js + Zod",
  },
  {
    slug: "ai-social-media-post-generator",
    title: "Social AI Studio",
    blurb: "Multi-channel copy & thread generation engine",
    domain: "social.shayan.dev",
    accent: "#EC4899",
    bg: "#FDF2F8",
    dark: false,
    tag: "GenAI SaaS",
  },
  {
    slug: "lumina-edit",
    title: "Lumina Edit",
    blurb: "In-browser visual editor & preset pipeline",
    domain: "lumina.shayan.dev",
    accent: "#F97316",
    bg: "#1C1917",
    dark: true,
    tag: "Canvas UI",
  },
  {
    slug: "uber-clone",
    title: "RideFlow Mobile",
    blurb: "Cross-platform route & fare estimation app",
    domain: "rideflow.shayan.dev",
    accent: "#06B6D4",
    bg: "#ECFEFF",
    dark: false,
    tag: "React Native",
  },
];

export default function SitesFanDeck() {
  const [active, setActive] = useState(5);
  const { playTick, playPop } = usePortfolioUX();

  const total = SHOWCASE_SITES.length;
  const activeSite = SHOWCASE_SITES[active];

  const step = (dir) => {
    playPop();
    setActive((prev) => (prev + dir + total) % total);
  };

  return (
    <section id="sites" className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="editorial-container">
        {/* Header Row matching Image 5 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
              <span className="text-[#EF532D] font-bold">02.2</span>
              <span>●</span>
              <span>Built by me, shipped as products</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              Sites &amp; apps I&apos;ve built<span className="text-[#EF532D]">.</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-[var(--muted-foreground)] max-w-[230px] leading-relaxed">
            Twelve highlights. Hover the fan, pick a window, go explore.
          </p>
        </div>

        {/* Rounded Fanning Browser Stage */}
        <div className="relative rounded-3xl folio-hard-card bg-gradient-to-b from-[var(--surface-subtle)] via-[var(--card)] to-[#ECFDF5]/40 dark:to-[#0f172a]/50 p-5 sm:p-8 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-mono text-[var(--muted-foreground)] mb-8">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              SHIPPED &amp; INTERACTIVE
            </span>
            <span className="tabular-nums">
              {String(active + 1).padStart(2, "0")} / {total}
            </span>
          </div>

          {/* Left / Right Fan Controls */}
          <div className="relative flex items-center justify-center min-h-[260px] sm:min-h-[300px]">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous site card"
              className="z-30 w-9 h-9 rounded-full border border-[var(--border-strong)] bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)] flex items-center justify-center shadow-sm transition-colors cursor-pointer mr-2 sm:mr-6 flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Overlapping Arc of Miniature Browser Windows */}
            <div className="relative flex items-center justify-center w-full max-w-3xl h-[230px] sm:h-[260px]">
              {SHOWCASE_SITES.map((site, i) => {
                const offset = i - active;
                const abs = Math.abs(offset);
                const visible = abs <= 5;
                if (!visible) return null;

                const isCenter = offset === 0;
                const tx = offset * 48;
                const ty = Math.pow(abs, 1.55) * 5;
                const rot = offset * 4.5;
                const scale = isCenter ? 1.08 : Math.max(0.76, 1 - abs * 0.055);
                const zIndex = 20 - abs;

                return (
                  <button
                    key={site.slug}
                    type="button"
                    onMouseEnter={() => {
                      if (active !== i) {
                        setActive(i);
                        playTick();
                      }
                    }}
                    onClick={() => {
                      setActive(i);
                      playPop();
                    }}
                    data-cursor-label={site.title}
                    style={{
                      transform: `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0px) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(3)})`,
                      zIndex,
                    }}
                    className={`absolute w-[200px] sm:w-[240px] h-[145px] sm:h-[170px] rounded-xl border text-left overflow-hidden shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                      isCenter
                        ? "border-[#18181b] dark:border-white ring-2 ring-[#EF532D]/40 shadow-2xl"
                        : "border-black/20 dark:border-white/20 opacity-95"
                    }`}
                  >
                    {/* Browser Chrome Bar */}
                    <div
                      className={`h-5 px-2 flex items-center justify-between border-b ${
                        site.dark
                          ? "bg-[#111113] border-white/10 text-white/60"
                          : "bg-white border-black/10 text-black/50"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-[7px] font-mono truncate max-w-[110px]">
                        {site.domain}
                      </span>
                    </div>

                    {/* Mini Rendered Interface */}
                    <div
                      className="h-[calc(100%-20px)] p-3 flex flex-col justify-between"
                      style={{
                        backgroundColor: site.bg,
                        color: site.dark ? "#FAFAFA" : "#111113",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="px-1.5 py-0.5 rounded text-[8px] font-mono font-semibold text-white"
                          style={{ backgroundColor: site.accent }}
                        >
                          {site.tag}
                        </span>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: site.accent }} />
                      </div>

                      <div>
                        <div className="text-sm font-extrabold tracking-tight leading-tight">
                          {site.title}
                        </div>
                        <div className="text-[10px] opacity-70 line-clamp-2 mt-0.5 leading-snug">
                          {site.blurb}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next site card"
              className="z-30 w-9 h-9 rounded-full border border-[var(--border-strong)] bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)] flex items-center justify-center shadow-sm transition-colors cursor-pointer ml-2 sm:ml-6 flex-shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Focused Card Quick Inspection Strip */}
          <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[var(--foreground)] mr-2">
                {activeSite.title}
              </span>
              <span className="text-xs text-[var(--muted-foreground)]">
                — {activeSite.blurb}
              </span>
            </div>
            <Link
              href={`/projects/${activeSite.slug}`}
              onClick={() => playPop()}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2563EB] hover:underline whitespace-nowrap"
            >
              <span>Inspect {activeSite.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Clean Multi-Column Clickable Directory Underneath (matches bottom of Image 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-5 mt-8">
          {SHOWCASE_SITES.map((site, idx) => {
            const isSelected = idx === active;
            return (
              <Link
                key={site.slug}
                href={`/projects/${site.slug}`}
                onMouseEnter={() => {
                  setActive(idx);
                  playTick();
                }}
                onClick={() => playPop()}
                className="group block"
              >
                <div
                  className={`text-xs font-semibold transition-colors ${
                    isSelected
                      ? "text-[#2563EB]"
                      : "text-[#0284C7] dark:text-sky-400 group-hover:underline"
                  }`}
                >
                  {site.title}
                </div>
                <div className="text-[11px] text-[var(--muted-foreground)] line-clamp-2 mt-0.5 leading-snug">
                  {site.blurb}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
