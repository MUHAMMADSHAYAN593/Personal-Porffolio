"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 7: Horizontal Desktop + Phone Clips Strip with Scroll-Scrubbed NLE Timeline Bar */

const MOTION_CLIPS = [
  {
    id: "clip-01",
    slug: "prepai",
    clipLabel: "Clip 01 · Schema gate",
    title: "PrepAI",
    caption: "Strict Zod contract validates LLM output in <30s.",
    device: "browser",
    color: "#FB923C",
    accent: "#16A34A",
    dark: true,
    timeStart: "00:00:02",
  },
  {
    id: "clip-02",
    slug: "react-native-movie-app",
    clipLabel: "Clip 02 · Mobile discovery",
    title: "Movie App",
    caption: "Debounced search & trending cards slide smoothly.",
    device: "phone",
    color: "#38BDF8",
    accent: "#2563EB",
    dark: false,
    timeStart: "00:00:07",
  },
  {
    id: "clip-03",
    slug: "mystery-message",
    clipLabel: "Clip 03 · Anonymous pulse",
    title: "One inbox, typed",
    caption: "Realtime AI suggested replies & Zod validation.",
    device: "phone",
    color: "#818CF8",
    accent: "#A855F7",
    dark: true,
    timeStart: "00:00:12",
  },
  {
    id: "clip-04",
    slug: "roomify",
    clipLabel: "Clip 04 · 3D architectural",
    title: "Roomify Studio",
    caption: "Orbital camera, depth lighting, live grid snaps.",
    device: "browser",
    color: "#FACC15",
    accent: "#0EA5E9",
    dark: true,
    timeStart: "00:00:16",
  },
  {
    id: "clip-05",
    slug: "architecture-visualizer",
    clipLabel: "Clip 05 · Local Ollama graph",
    title: "Arch Canvas",
    caption: "Animated React Flow edges streamed from LLM.",
    device: "browser",
    color: "#34D399",
    accent: "#8B5CF6",
    dark: false,
    timeStart: "00:00:21",
  },
  {
    id: "clip-06",
    slug: "cinematch",
    clipLabel: "Clip 06 · Sparse matrix",
    title: "CineMatch",
    caption: "Sub-50ms TF-IDF vector queries on 42k+ titles.",
    device: "browser",
    color: "#F472B6",
    accent: "#E5484D",
    dark: true,
    timeStart: "00:00:26",
  },
];

export default function MotionReelStrip() {
  const sectionRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0.35);
  const [pinnedClip, setPinnedClip] = useState(null);
  const { playTick, playPop } = usePortfolioUX();

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (vh * 0.75 + rect.height)));
      setScrollPos(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeIdx =
    pinnedClip !== null
      ? pinnedClip
      : Math.min(MOTION_CLIPS.length - 1, Math.floor(scrollPos * MOTION_CLIPS.length));

  const playheadPct =
    pinnedClip !== null
      ? ((pinnedClip + 0.5) / MOTION_CLIPS.length) * 100
      : Math.min(96, Math.max(4, scrollPos * 100));

  const timecodeSec = String(Math.round(playheadPct * 0.3)).padStart(2, "0");

  return (
    <section
      id="motion"
      ref={sectionRef}
      className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background)] overflow-hidden"
    >
      <div className="editorial-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
              <span className="text-[#EF532D] font-bold">02.4</span>
              <span>●</span>
              <span>Motion &amp; Screen Proofs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Proof that they move<span className="text-[#EF532D]">.</span>
            </h2>
          </div>

          <span className="text-xs font-mono text-[var(--muted-foreground)]">
            Scroll to scrub the timeline · Click any clip
          </span>
        </div>

        {/* Side-by-side Browser + Phone Frames Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
          {MOTION_CLIPS.map((clip, idx) => {
            const isActive = idx === activeIdx;
            const isPhone = clip.device === "phone";

            return (
              <div
                key={clip.id}
                onMouseEnter={() => {
                  setPinnedClip(idx);
                  playTick();
                }}
                onMouseLeave={() => setPinnedClip(null)}
                className={`group transition-transform duration-300 ${
                  isPhone ? "lg:col-span-1" : "lg:col-span-1"
                } ${isActive ? "-translate-y-1.5" : ""}`}
              >
                <Link
                  href={`/projects/${clip.slug}`}
                  onClick={() => playPop()}
                  data-cursor-label="Inspect ↗"
                  className="block"
                >
                  {/* Device Mockup Frame */}
                  <div
                    className={`overflow-hidden border transition-all duration-300 ${
                      isPhone ? "rounded-[1.6rem] p-2 mx-auto max-w-[165px]" : "rounded-xl"
                    } ${
                      isActive
                        ? "border-[#18181b] dark:border-white shadow-xl ring-2 ring-[#EF532D]/35"
                        : "border-[var(--border-strong)] shadow-sm opacity-90"
                    } ${
                      clip.dark
                        ? "bg-[#111113] text-white"
                        : "bg-[#F8FAFC] text-[#111113]"
                    }`}
                  >
                    {/* Header notch or browser dots */}
                    {isPhone ? (
                      <div className="w-10 h-1.5 rounded-full bg-current opacity-20 mx-auto mb-2" />
                    ) : (
                      <div className="flex items-center gap-1 px-2.5 py-1.5 border-b border-current/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                    )}

                    {/* Animated Live Micro-UI inside screen */}
                    <div className={`${isPhone ? "h-44 p-2" : "h-32 p-3"} flex flex-col justify-between relative`}>
                      <div className="flex items-center justify-between">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: clip.accent }}
                        />
                        <ArrowUpRight className="w-3 h-3 opacity-45 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Motion bars that pulse/shift when clip is active */}
                      <div className="space-y-1.5 my-auto">
                        <div
                          className="h-2 rounded-full transition-all duration-500"
                          style={{
                            width: isActive ? "88%" : "60%",
                            backgroundColor: clip.accent,
                          }}
                        />
                        <div className="h-2 w-4/5 rounded-full bg-current opacity-15" />
                        <div
                          className="h-2 rounded-full bg-current opacity-20 transition-all duration-500"
                          style={{ width: isActive ? "70%" : "42%" }}
                        />
                      </div>

                      <div className="text-[9px] font-mono opacity-65 truncate">
                        {clip.timeStart}
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="mt-2.5">
                    <div className="text-[10px] font-mono text-[var(--muted-foreground)]">
                      {clip.clipLabel}
                    </div>
                    <div className="text-xs font-bold text-[var(--foreground)] group-hover:text-[#EF532D] transition-colors mt-0.5">
                      {clip.title}
                    </div>
                    <div className="text-[11px] text-[var(--muted-foreground)] line-clamp-2 mt-0.5 leading-snug">
                      {clip.caption}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* NLE Scrubbable Video Timeline Bar (matches bottom of Image 7) */}
        <div className="mt-8 relative pt-5">
          {/* Playhead Timestamp & Needle */}
          <div
            className="absolute top-0 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center transition-[left] duration-150 ease-out"
            style={{ left: `${playheadPct}%` }}
          >
            <span className="px-1.5 py-0.5 rounded bg-[#111113] dark:bg-white text-white dark:text-[#111113] text-[9px] font-mono font-bold tabular-nums shadow">
              00:00:{timecodeSec}
            </span>
            <span className="w-0.5 h-8 bg-[#EF532D]" />
          </div>

          <div className="rounded-xl border border-[#18181b] dark:border-white/30 bg-[var(--card)] px-2 py-2 flex items-center gap-1.5 shadow-sm overflow-x-auto">
            {MOTION_CLIPS.map((clip, i) => {
              const active = i === activeIdx;
              return (
                <button
                  key={clip.id}
                  type="button"
                  onClick={() => {
                    setPinnedClip(pinnedClip === i ? null : i);
                    playPop();
                  }}
                  style={{ backgroundColor: `${clip.color}33`, borderColor: clip.color }}
                  className={`flex-1 min-w-[90px] px-2.5 py-1 rounded border text-[10px] font-mono font-semibold text-left truncate transition-all cursor-pointer ${
                    active ? "ring-1 ring-[#18181b] dark:ring-white scale-[1.02]" : "opacity-75 hover:opacity-100"
                  }`}
                >
                  {clip.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
