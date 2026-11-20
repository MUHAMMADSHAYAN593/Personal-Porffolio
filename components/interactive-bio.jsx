"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Bespoke miniature graphical icons for each inline pill (no plain dots) */

function PrepAIGraphic() {
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="8" fill="#ECFDF5" stroke="#22C55E" strokeWidth="1.5" />
      <rect x="6" y="7" width="16" height="14" rx="3" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.2" />
      <path d="M9 12h6M9 15.5h4" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="19" cy="18" r="4.5" fill="#22C55E" />
      <path d="M17.2 18l1.2 1.2 2.4-2.4" fill="none" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResearchGraphic() {
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M8 9h4M8 14h4M8 19h4" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 9c3 0 3 5 6 5M12 14h6M12 19c3 0 3-5 6-5" fill="none" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20" cy="14" r="3" fill="#2563EB" />
    </svg>
  );
}

function ArchCanvasGraphic() {
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="8" fill="#1E1B4B" stroke="#8B5CF6" strokeWidth="1.5" />
      <rect x="5.5" y="7.5" width="7" height="5" rx="1.5" fill="#A855F7" />
      <rect x="15.5" y="15.5" width="7" height="5" rx="1.5" fill="#38BDF8" />
      <path d="M12.5 10h2a2 2 0 0 1 2 2v3.5" fill="none" stroke="#E9D5FF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RoomifyGraphic() {
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="8" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="1.5" />
      <path d="M14 6.5 21 10.5v7L14 21.5 7 17.5v-7Z" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M14 14v7.5M14 14l7-3.5M14 14 7 10.5" fill="none" stroke="#0284C7" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function TransitGraphic() {
  return (
    <svg viewBox="0 0 32 24" className="w-8 h-6 flex-shrink-0" aria-hidden="true">
      <rect x="0.75" y="0.75" width="30.5" height="22.5" rx="6.5" fill="#FAFAFA" stroke="#E4E4E7" strokeWidth="1.2" />
      <path d="M4 6.5h12l3 2h9" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 11.5h10l3-1.5h11" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 16.5h14l2.5-1.5h7.5" fill="none" stroke="#E5484D" strokeWidth="2" strokeLinecap="round" />
      <circle cx="11" cy="6.5" r="1.8" fill="#fff" stroke="#22C55E" strokeWidth="1.2" />
      <circle cx="22" cy="10" r="1.8" fill="#fff" stroke="#3B82F6" strokeWidth="1.2" />
      <circle cx="15" cy="16.5" r="1.8" fill="#fff" stroke="#E5484D" strokeWidth="1.2" />
    </svg>
  );
}

const STORY_ITEMS = [
  {
    id: "prepai",
    label: "PrepAI",
    metric: "88/100",
    href: "/projects/prepai",
    variant: "light",
    tag: "LLM + Zod",
    summary: "Tailored interview reports & 7-day gap roadmaps enforced by strict Zod contracts.",
    accent: "#22C55E",
    Graphic: PrepAIGraphic,
    nodes: ["Resume PDF", "Solar-Pro", "Zod Gate"],
    delay: 60,
  },
  {
    id: "deep-research-agent",
    label: "Deep Research",
    metric: "12 cites",
    href: "/projects/deep-research-agent",
    variant: "light",
    tag: "Multi-Agent",
    summary: "Planner, Retrieval, and Fact-Verifier Python agents synthesizing anchored briefings.",
    accent: "#3B82F6",
    Graphic: ResearchGraphic,
    nodes: ["Planner", "Retriever", "Synthesizer"],
    delay: 140,
  },
  {
    id: "architecture-visualizer",
    label: "Arch Canvas",
    metric: "Ollama",
    href: "/projects/architecture-visualizer",
    variant: "dark",
    tag: "Local LLM",
    summary: "Plain-English system requirements transformed into animated React Flow node graphs.",
    accent: "#A855F7",
    Graphic: ArchCanvasGraphic,
    nodes: ["Prompt", "Ollama", "React Flow"],
    delay: 220,
  },
  {
    id: "roomify",
    label: "Roomify",
    metric: "WebGL",
    href: "/projects/roomify",
    variant: "light",
    tag: "Three.js 3D",
    summary: "Browser-based 3D architectural spatial designer with unified design tokens.",
    accent: "#0EA5E9",
    Graphic: RoomifyGraphic,
    nodes: ["Plan", "WebGL", "Studio 3D"],
    delay: 300,
  },
  {
    id: "open-source",
    label: "21+ builds",
    metric: "ML & Web",
    href: "/projects",
    variant: "transit",
    tag: "Transit Map",
    summary: "NYC Housing ML (84% F1), CineMatch (<50ms TF-IDF), mobile apps, and production UI.",
    accent: "#E5484D",
    Graphic: TransitGraphic,
    transit: true,
    nodes: ["AI/ML", "Full-Stack", "Mobile"],
    delay: 380,
  },
];

function MiniTransitPreview() {
  const lines = [
    { color: "#22C55E", y: 12 },
    { color: "#3B82F6", y: 24 },
    { color: "#F59E0B", y: 36 },
    { color: "#A855F7", y: 48 },
    { color: "#E5484D", y: 60 },
  ];
  return (
    <span className="block rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-2 mb-2.5">
      <svg viewBox="0 0 210 72" className="w-full h-16" aria-hidden="true">
        {lines.map((l, idx) => (
          <g key={idx}>
            <path
              d={`M 8 ${l.y} L ${108 + idx * 12} ${l.y} L 198 ${l.y}`}
              fill="none"
              stroke={l.color}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx={42 + idx * 24} cy={l.y} r="3.5" fill="#fff" stroke={l.color} strokeWidth="2" />
            <circle cx={155 - idx * 10} cy={l.y} r="3.5" fill={l.color} />
          </g>
        ))}
      </svg>
    </span>
  );
}

function InlineGraphicPill({ item }) {
  const [open, setOpen] = useState(false);
  const { playTick, playPop } = usePortfolioUX();
  const Graphic = item.Graphic;

  const pillSurface =
    item.variant === "dark"
      ? "bg-[#111113] text-white border-[#111113] dark:bg-[#fafafa] dark:text-[#0a0a0b] dark:border-[#fafafa]"
      : item.variant === "transit"
      ? "bg-white dark:bg-[#141418] text-[var(--foreground)] border-[#3B82F6]/45 shadow-[0_0_0_2px_rgba(59,130,246,0.08)]"
      : "bg-white dark:bg-[#141418] text-[var(--foreground)] border-[var(--border-strong)]";

  return (
    <span
      className="pill-item relative inline-block align-baseline mx-1.5 my-1"
      onMouseEnter={() => {
        setOpen(true);
        playTick();
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        onClick={() => playPop()}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        data-cursor-label="Go"
        style={{ animationDelay: `${item.delay}ms` }}
        className={`hero-pill-morph group inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1 rounded-full border font-semibold text-[0.62em] tracking-tight shadow-xs align-middle ${pillSurface}`}
      >
        <span className="hero-pill-icon inline-flex items-center justify-center">
          <Graphic />
        </span>

        <span>{item.label}</span>

        {/* Springy morphing metric chip that expands cleanly on hover/focus */}
        <span
          className="hero-pill-chip font-mono text-[0.76em] px-1.5 py-0.5 rounded-full whitespace-nowrap"
          style={{
            backgroundColor: item.variant === "dark" ? "rgba(255,255,255,0.14)" : "var(--surface-subtle)",
            color: item.variant === "dark" ? "inherit" : item.accent,
          }}
        >
          {item.metric}
        </span>
      </Link>

      {/* Tilted Floating Miniature Preview Card */}
      <span
        role="tooltip"
        aria-hidden={!open}
        className={`hidden md:block pointer-events-none absolute left-1/2 bottom-full mb-3.5 z-50 w-72 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)] p-3.5 shadow-2xl transition-[opacity,transform] duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          open
            ? "opacity-100 -translate-x-1/2 translate-y-0 rotate-[-2deg] scale-100"
            : "opacity-0 -translate-x-1/2 translate-y-3 rotate-0 scale-90"
        }`}
      >
        <span className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
            <Graphic />
            <span>{item.label}</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]">
            {item.tag}
          </span>
        </span>

        {item.transit ? (
          <MiniTransitPreview />
        ) : (
          <span className="flex items-center justify-between gap-1 px-2.5 py-1.5 rounded-xl bg-[var(--surface-subtle)] border border-[var(--border)] mb-2.5 text-[10px] font-mono text-[var(--muted-foreground)]">
            {item.nodes.map((node, idx) => (
              <span key={node} className="inline-flex items-center gap-1">
                <span className="text-[var(--foreground)] font-medium">{node}</span>
                {idx < item.nodes.length - 1 && <span className="opacity-45">→</span>}
              </span>
            ))}
          </span>
        )}

        <span className="block text-[11.5px] leading-snug text-[var(--muted-foreground)] mb-2.5">
          {item.summary}
        </span>

        <span className="flex items-center justify-between text-[10.5px] font-mono text-[#E5484D]">
          <span>Click to inspect</span>
          <span className="inline-flex items-center gap-0.5 font-semibold">
            Case study <ArrowUpRight className="w-3 h-3" />
          </span>
        </span>
      </span>
    </span>
  );
}

export default function InteractiveBio() {
  return (
    <h1 className="hero-pill-group hero-enter hero-enter-2 text-[clamp(1.75rem,3.6vw,3.05rem)] font-semibold tracking-[-0.03em] text-[var(--foreground)] leading-[1.45]">
      Hi, I&apos;m Shayan — I build AI products people actually keep. An interview intelligence engine{" "}
      <InlineGraphicPill item={STORY_ITEMS[0]} />, a multi-agent{" "}
      <InlineGraphicPill item={STORY_ITEMS[1]} /> pipeline, an infinite{" "}
      <InlineGraphicPill item={STORY_ITEMS[2]} /> powered by local LLMs, a 3D{" "}
      <InlineGraphicPill item={STORY_ITEMS[3]} /> studio, and{" "}
      <InlineGraphicPill item={STORY_ITEMS[4]} /> shipped in the open.
    </h1>
  );
}
