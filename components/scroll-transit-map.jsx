"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

const TRACKS = [
  {
    id: "prepai",
    name: "PrepAI",
    sub: "Zod-enforced LLM interview reports",
    color: "#22C55E",
    href: "/projects/prepai",
    stationX: 230,
    y: 44,
    bendX: 340,
    endY: 44,
    metric: "88/100 fit · 2026",
  },
  {
    id: "deep-research-agent",
    name: "Deep Research",
    sub: "Multi-agent literature & citation graph",
    color: "#3B82F6",
    href: "/projects/deep-research-agent",
    stationX: 320,
    y: 80,
    bendX: 430,
    endY: 74,
    metric: "12 anchored papers",
  },
  {
    id: "architecture-visualizer",
    name: "Arch Canvas",
    sub: "Local Ollama to React Flow execution",
    color: "#A855F7",
    href: "/projects/architecture-visualizer",
    stationX: 410,
    y: 116,
    bendX: 520,
    endY: 108,
    metric: "0ms cloud egress",
  },
  {
    id: "roomify",
    name: "Roomify",
    sub: "Three.js spatial 3D studio builder",
    color: "#0EA5E9",
    href: "/projects/roomify",
    stationX: 500,
    y: 152,
    bendX: 600,
    endY: 146,
    metric: "WebGL · Live",
  },
  {
    id: "nyc-house-type-predictor",
    name: "NYC Housing ML",
    sub: "Random Forest + Haversine geodesics",
    color: "#F59E0B",
    href: "/projects/nyc-house-type-predictor",
    stationX: 590,
    y: 188,
    bendX: 675,
    endY: 182,
    metric: "48,895 listings · 84% F1",
  },
  {
    id: "cinematch",
    name: "CineMatch",
    sub: "On-demand sparse TF-IDF cosine engine",
    color: "#E5484D",
    href: "/projects/cinematch",
    stationX: 680,
    y: 224,
    bendX: 745,
    endY: 218,
    metric: "42,000+ films · < 50ms",
  },
  {
    id: "dha-head-office",
    name: "DHA Head Office",
    sub: "Production Next.js App Router UI",
    color: "#14B8A6",
    href: "/about",
    stationX: 770,
    y: 260,
    bendX: 820,
    endY: 256,
    metric: "Apr 2026 — Present",
  },
];

export default function ScrollTransitMap() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0.15);
  const [manualId, setManualId] = useState(null);
  const { playTick, playPop } = usePortfolioUX();

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf = 0;
    const update = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const scrollable = Math.max(200, outer.offsetHeight - vh * 0.72);
      const traveled = Math.max(0, vh * 0.72 - rect.top);
      const clamped = Math.max(0.06, Math.min(1, traveled / scrollable));
      setProgress(clamped);
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

  // Automatically advance highlighted station as user scrolls through the sticky container
  const scrollIdx = Math.min(
    TRACKS.length - 1,
    Math.floor(progress * TRACKS.length)
  );
  const activeId = manualId || TRACKS[scrollIdx].id;
  const activeTrack = TRACKS.find((t) => t.id === activeId) || TRACKS[0];

  return (
    <div ref={outerRef} className="relative md:min-h-[155vh]">
      <div className="md:sticky md:top-24">
        <div className="rounded-3xl border border-[var(--border-strong)] bg-[var(--card)] p-6 md:p-8 shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[var(--border)]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] mb-2">
                <span
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: activeTrack.color }}
                />
                <span>Pinned Scroll-Driven Transit</span>
                <span className="tabular-nums font-semibold text-[var(--foreground)]">
                  {Math.round(progress * 100)}%
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--foreground)] inline-flex items-center gap-2">
                <span>Open source Love!</span>
                <span aria-hidden="true">❤️</span>
              </h2>
            </div>

            {/* Selected station inspector */}
            <Link
              href={activeTrack.href}
              onClick={() => playPop()}
              data-cursor-label="Go"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-subtle)] hover:border-[var(--foreground)] transition-colors"
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: activeTrack.color }}
              />
              <div className="text-left">
                <div className="text-xs font-bold text-[var(--foreground)]">
                  {activeTrack.name}{" "}
                  <span className="font-mono font-normal text-[11px] text-[var(--muted-foreground)] ml-1">
                    {activeTrack.metric}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--muted-foreground)]">
                  {activeTrack.sub}
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)]" />
            </Link>
          </div>

          {/* Scroll-Scrubbed SVG Metro Lines */}
          <div className="relative my-6 overflow-x-auto">
            {/* Pinned Lab Snapshot Polaroids tucked top-left matching Image 6 */}
            <div className="hidden lg:flex flex-col gap-3 absolute left-3 top-2 z-10 pointer-events-none">
              <div className="w-32 rounded-lg bg-white dark:bg-[#18181B] border border-black/15 dark:border-white/15 p-1.5 shadow-md -rotate-3">
                <div className="h-12 rounded bg-gradient-to-br from-emerald-500/25 via-sky-500/20 to-indigo-500/25 flex items-center justify-center text-[10px] font-mono font-semibold">
                  Zod + Solar Pro
                </div>
                <div className="text-[8px] font-mono text-black/65 dark:text-white/65 mt-1 truncate">
                  PrepAI Schema Gate
                </div>
              </div>
              <div className="w-32 rounded-lg bg-white dark:bg-[#18181B] border border-black/15 dark:border-white/15 p-1.5 shadow-md rotate-3 ml-3">
                <div className="h-12 rounded bg-gradient-to-br from-amber-500/25 via-rose-500/20 to-purple-500/25 flex items-center justify-center text-[10px] font-mono font-semibold">
                  48,895 Rows
                </div>
                <div className="text-[8px] font-mono text-black/65 dark:text-white/65 mt-1 truncate">
                  NYC ML · 84% F1
                </div>
              </div>
            </div>

            <svg
              viewBox="0 0 920 300"
              className="w-full min-w-[660px] h-auto select-none"
              role="img"
              aria-label="Interactive scroll-driven transit lines mapping Shayan's projects"
            >
              {[140, 280, 420, 560, 700, 840].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={16}
                  x2={x}
                  y2={284}
                  stroke="var(--border)"
                  strokeDasharray="3 5"
                  strokeWidth="1"
                />
              ))}

              {TRACKS.map((track, idx) => {
                const d = `M 28 ${track.y} L ${track.bendX} ${track.y} L ${track.bendX + 36} ${track.endY} L 892 ${track.endY}`;
                const isActive = track.id === activeId;
                const trackProg = Math.max(0.04, Math.min(1, progress * 1.15 - idx * 0.03));
                const stationThreshold = track.stationX / 920;
                const stationLit = trackProg >= stationThreshold * 0.85;

                return (
                  <g
                    key={track.id}
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setManualId(track.id);
                      playTick();
                    }}
                    onMouseLeave={() => setManualId(null)}
                    onClick={() => {
                      setManualId(track.id);
                      playPop();
                    }}
                  >
                    <path
                      d={d}
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth={isActive ? 6 : 4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d={d}
                      fill="none"
                      stroke={track.color}
                      strokeWidth={isActive ? 5.5 : 3.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      strokeDasharray="1"
                      strokeDashoffset={1 - trackProg}
                      style={{
                        opacity: isActive ? 1 : 0.78,
                        transition: "stroke-width 0.2s ease, opacity 0.2s ease",
                      }}
                    />

                    <text
                      x="32"
                      y={track.y - 9}
                      fill="var(--foreground)"
                      fontSize="11"
                      fontWeight={isActive ? "700" : "500"}
                      fontFamily="var(--font-mono-stack)"
                      opacity={isActive ? 1 : 0.7}
                    >
                      {track.name}
                    </text>

                    <circle
                      cx={track.stationX}
                      cy={track.y}
                      r={isActive ? 8 : 6}
                      fill="var(--card)"
                      stroke={stationLit ? track.color : "var(--border-strong)"}
                      strokeWidth={isActive ? 4 : 3}
                      style={{
                        transformOrigin: `${track.stationX}px ${track.y}px`,
                        transform: stationLit ? "scale(1)" : "scale(0.6)",
                        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    />

                    <circle
                      cx="892"
                      cy={track.endY}
                      r={trackProg > 0.96 ? 4.5 : 0}
                      fill={track.color}
                      style={{ transition: "r 0.25s ease" }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Line Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[var(--border)]">
            {TRACKS.map((t) => {
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  type="button"
                  onMouseEnter={() => {
                    setManualId(t.id);
                    playTick();
                  }}
                  onMouseLeave={() => setManualId(null)}
                  onClick={() => {
                    setManualId(t.id);
                    playPop();
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all cursor-pointer ${
                    isActive
                      ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)] font-semibold"
                      : "border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
