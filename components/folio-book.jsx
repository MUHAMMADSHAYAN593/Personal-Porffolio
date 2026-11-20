"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

const PAGES = [
  {
    num: "01",
    tag: "Cover · Vol. 01",
    title: "Shayan's Engineering Folio",
    subtitle: "AI/ML Systems & Full-Stack Interfaces",
    body: "A curated physical-style dossier covering structured LLM pipelines, multi-agent research workflows, spatial 3D tools, and predictive ML built in Karachi.",
    meta: "DHA Suffa University · DHA Head Office",
    accent: "#111113",
    href: "/about",
    cta: "Read full bio",
  },
  {
    num: "02",
    tag: "AI Systems · PrepAI",
    title: "Defensive LLM Contracts",
    subtitle: "OpenRouter + Zod Runtime Validation",
    body: "Free-tier models frequently break raw JSON shapes. PrepAI enforces strict Zod object schemas before persisting interview dossiers and 7-day preparation plans.",
    meta: "Score: 88/100 · < 30s generation",
    accent: "#22C55E",
    href: "/projects/prepai",
    cta: "Inspect PrepAI",
  },
  {
    num: "03",
    tag: "Agents · Deep Research",
    title: "Multi-Agent Synthesis",
    subtitle: "Planner · Retriever · Fact-Verifier",
    body: "Instead of one overloaded prompt, specialized Python agents decompose queries, anchor real citations, and output verified Markdown research briefings.",
    meta: "Python · uv · Streamlit",
    accent: "#3B82F6",
    href: "/projects/deep-research-agent",
    cta: "Inspect Pipeline",
  },
  {
    num: "04",
    tag: "Spatial & ML · Roomify & NYC",
    title: "3D Canvases & Geodesic ML",
    subtitle: "Three.js WebGL + 48,895 NYC Listings",
    body: "From browser-based 3D architectural planning in Roomify to Random Forest room-type classification with Haversine distance features from Times Square.",
    meta: "84% Weighted F1 · WebGL",
    accent: "#F59E0B",
    href: "/projects/nyc-house-type-predictor",
    cta: "Explore ML model",
  },
  {
    num: "05",
    tag: "Colophon · Open Source",
    title: "21+ Shipped Builds",
    subtitle: "Frontend Production to FastAPI",
    body: "Every project is built around working code—from sparse TF-IDF vector search across 42,000+ films in CineMatch to React Native & Socket.io apps.",
    meta: "Available for AI/ML & Full-Stack Roles",
    accent: "#E5484D",
    href: "/projects",
    cta: "Browse all 21 projects",
  },
];

export default function FolioBook() {
  const [pageIdx, setPageIdx] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const { playPop, playTick } = usePortfolioUX();

  const turnTo = (nextIdx) => {
    if (nextIdx === pageIdx || nextIdx < 0 || nextIdx >= PAGES.length) return;
    playPop();
    setFlipping(true);
    setTimeout(() => {
      setPageIdx(nextIdx);
      setFlipping(false);
    }, 180);
  };

  const current = PAGES[pageIdx];

  return (
    <div className="rounded-3xl border border-[var(--border-strong)] bg-[var(--surface-subtle)] p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-[var(--foreground)]" />
          <span className="text-xs font-mono font-semibold text-[var(--foreground)]">
            SHAYAN&apos;S FOLIO — VOL. 01
          </span>
          <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
            ({current.num} / 0{PAGES.length})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => turnTo(pageIdx - 1)}
            disabled={pageIdx === 0}
            aria-label="Previous folio page"
            className="w-8 h-8 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--foreground)] disabled:opacity-35 hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => turnTo(pageIdx + 1)}
            disabled={pageIdx === PAGES.length - 1}
            aria-label="Next folio page"
            className="w-8 h-8 rounded-full border border-[var(--border-strong)] bg-[var(--card)] flex items-center justify-center text-[var(--foreground)] disabled:opacity-35 hover:bg-[var(--surface-subtle)] transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive 3D Book Spread */}
      <div className="folio-perspective">
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] shadow-lg overflow-hidden">
          {/* Left Spine / Cover Index */}
          <div className="md:col-span-5 bg-[#111113] text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[260px]">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 pointer-events-none"
              style={{ backgroundColor: current.accent }}
            />
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-mono tracking-wider mb-4">
                {current.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                {current.title}
              </h3>
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/70">
              <span>Muhammad Shayan</span>
              <span className="tabular-nums">Page {current.num}</span>
            </div>
          </div>

          {/* Right Turning Page Surface */}
          <div
            onClick={() => turnTo((pageIdx + 1) % PAGES.length)}
            data-cursor-label="Flip page"
            className={`md:col-span-7 p-6 md:p-8 flex flex-col justify-between bg-[var(--card)] cursor-pointer transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left ${
              flipping
                ? "opacity-40 [transform:rotateY(-16deg)_scale(0.98)]"
                : "opacity-100 [transform:rotateY(0deg)_scale(1)]"
            }`}
          >
            <div>
              <div className="text-xs font-mono text-[var(--muted-foreground)] mb-2">
                {current.subtitle}
              </div>
              <p className="text-sm md:text-base text-[var(--foreground)]/90 leading-relaxed mb-6">
                {current.body}
              </p>
              <div className="inline-block px-3 py-1 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)]">
                {current.meta}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
              <Link
                href={current.href}
                onClick={(e) => {
                  e.stopPropagation();
                  playPop();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#E5484D] hover:underline"
              >
                {current.cta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Page Selector Dots */}
              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {PAGES.map((p, i) => (
                  <button
                    key={p.num}
                    type="button"
                    onMouseEnter={() => playTick()}
                    onClick={() => turnTo(i)}
                    aria-label={`Jump to folio page ${p.num}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === pageIdx
                        ? "w-6 bg-[var(--foreground)]"
                        : "w-2 bg-[var(--border-strong)] hover:bg-[var(--muted-foreground)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
