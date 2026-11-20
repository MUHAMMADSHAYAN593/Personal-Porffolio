"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

const SECTIONS = [
  { id: "hero-cover", act: "ACT 00", label: "Ta-da!", pillBg: "#111113", pillFg: "#FFFFFF", dot: "#FACC15" },
  { id: "hero", act: "ACT 01", label: "Hello", pillBg: "#111113", pillFg: "#FFFFFF", dot: "#FACC15" },
  { id: "act-making", act: "ACT 02", label: "The making", pillBg: "#EF532D", pillFg: "#FFFFFF", dot: "#FACC15" },
  { id: "capabilities", act: "ACT 03", label: "Systems", pillBg: "#2455FF", pillFg: "#FFFFFF", dot: "#FFFFFF" },
  { id: "act-archive", act: "ACT 04", label: "The archive", pillBg: "#FFD54F", pillFg: "#111113", dot: "#B93B22" },
  { id: "trophies", act: "ACT 05", label: "Milestones", pillBg: "#09B66D", pillFg: "#FFFFFF", dot: "#FFFFFF" },
  { id: "activity", act: "ACT 06", label: "Telemetry", pillBg: "#111113", pillFg: "#FFFFFF", dot: "#38BDF8" },
  { id: "journal", act: "ACT 07", label: "Writing", pillBg: "#0B0E1E", pillFg: "#FFFFFF", dot: "#FACC15" },
  { id: "contact-cta", act: "ACT 08", label: "Work with me", pillBg: "#2563EB", pillFg: "#FFFFFF", dot: "#FFFFFF" },
];

export default function SectionTracker() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const { playTick, playPop } = usePortfolioUX();

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = SECTIONS.findIndex((s) => s.id === visible[0].target.id);
          if (idx !== -1) setActiveIdx(idx);
        }
      },
      { rootMargin: "-22% 0px -55% 0px", threshold: [0.1, 0.4] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = SECTIONS[activeIdx] || SECTIONS[0];

  const jumpTo = (id, idx) => {
    playPop();
    setActiveIdx(idx);
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
      {/* Popover Menu */}
      <div
        className={`mb-2 w-52 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)]/95 backdrop-blur-md p-1.5 shadow-xl transition-[opacity,transform] duration-200 origin-bottom-left ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        {SECTIONS.map((sec, idx) => {
          const isCurrent = idx === activeIdx;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => jumpTo(sec.id, idx)}
              onMouseEnter={() => playTick()}
              className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-mono flex items-center justify-between transition-colors cursor-pointer ${
                isCurrent
                  ? "bg-[var(--surface-subtle)] text-[var(--foreground)] font-semibold"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-subtle)]/60"
              }`}
            >
              <span>{sec.label}</span>
              <span className="text-[10px] opacity-60">{sec.act}</span>
            </button>
          );
        })}
      </div>

      {/* Floating Color-Adaptive ACT Pill (matches Images 1, 4, 10, 11, 12) */}
      <button
        type="button"
        onClick={() => {
          playPop();
          setOpen((v) => !v);
        }}
        aria-expanded={open}
        aria-label="Toggle section index"
        style={{ backgroundColor: current.pillBg, color: current.pillFg }}
        className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-black/20 dark:border-white/20 shadow-lg text-xs font-mono hover:opacity-95 transition-[transform,opacity,background-color,color] duration-200 active:scale-95 cursor-pointer"
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: current.dot }}
        />
        <span className="opacity-70">{current.act}</span>
        <span className="font-semibold">{current.label}</span>
        <ChevronUp
          className={`w-3.5 h-3.5 opacity-65 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}
