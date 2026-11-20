"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Box,
  Brain,
  Building2,
  Car,
  Clapperboard,
  CloudSun,
  Coffee,
  Code2,
  FileCheck2,
  Film,
  Gamepad2,
  GitBranch,
  Grid,
  HeartPulse,
  Home,
  KeyRound,
  Landmark,
  Map,
  MessageCircle,
  MessageSquareLock,
  SearchCheck,
  Share2,
  Sparkles,
  Utensils,
  Wand2,
} from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Images 9 & 10: Scroll-Linked Playing Card Spiral -> Morphing into Organized Deck Grid */

const SUITS = ["♠", "♥", "♣", "♦"];
const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const CARD_PALETTES = [
  { bg: "#DC2626", text: "#FFFFFF", arch: "#FFF1F2", iconBg: "#FFE4E6", iconFg: "#BE123C" },
  { bg: "#EAB308", text: "#111113", arch: "#FEFCE8", iconBg: "#FEF08A", iconFg: "#A16207" },
  { bg: "#2563EB", text: "#FFFFFF", arch: "#EFF6FF", iconBg: "#DBEAFE", iconFg: "#1D4ED8" },
  { bg: "#16A34A", text: "#FFFFFF", arch: "#F0FDF4", iconBg: "#DCFCE7", iconFg: "#15803D" },
  { bg: "#F97316", text: "#FFFFFF", arch: "#FFF7ED", iconBg: "#FFEDD5", iconFg: "#C2410C" },
  { bg: "#111113", text: "#FFFFFF", arch: "#F4F4F5", iconBg: "#E4E4E7", iconFg: "#18181B" },
  { bg: "#0D9488", text: "#FFFFFF", arch: "#F0FDFA", iconBg: "#CCFBF1", iconFg: "#0F766E" },
  { bg: "#9333EA", text: "#FFFFFF", arch: "#FAF5FF", iconBg: "#F3E8FF", iconFg: "#7E22CE" },
  { bg: "#65A30D", text: "#111113", arch: "#F7FEE7", iconBg: "#ECFCCB", iconFg: "#3F6212" },
];

const PROJECT_ICON_MAP = {
  prepai: FileCheck2,
  "deep-research-agent": SearchCheck,
  presidium: Landmark,
  "architecture-visualizer": GitBranch,
  roomify: Box,
  "nyc-house-type-predictor": Building2,
  cinematch: Film,
  "student-mental-health-prediction": Brain,
  "heart-disease-prediction": HeartPulse,
  restate: Home,
  "react-native-movie-app": Clapperboard,
  "mystery-message": MessageSquareLock,
  "ai-social-media-post-generator": Share2,
  "road-map-teller": Map,
  "uber-clone": Car,
  "food-reel-mern": Utensils,
  "lumina-edit": Wand2,
  "get-me-a-chai": Coffee,
  "pass-op": KeyRound,
  "weather-app": CloudSun,
  "snake-game": Gamepad2,
  "twitter-clone": MessageCircle,
};

function ArchivePlayingCard({
  project,
  index,
  style,
  className = "",
  cursorLabel,
  onHover,
  onClick,
}) {
  const palette = CARD_PALETTES[index % CARD_PALETTES.length];
  const rank = RANKS[index % RANKS.length];
  const suit = SUITS[index % SUITS.length];
  const Icon = PROJECT_ICON_MAP[project.slug] || Code2;

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={onHover}
      onClick={onClick}
      data-cursor-label={cursorLabel}
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        ...style,
      }}
      className={`group rounded-xl border border-black/35 p-2 flex flex-col justify-between ${className}`}
    >
      <div className="flex items-center justify-between text-[10px] font-bold leading-none">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>

      {/* Arched cutout window with centered icon badge + compact title */}
      <div
        className="rounded-t-full rounded-b-lg px-2 pt-3 pb-2 text-center flex flex-col items-center justify-center flex-1 my-1.5 overflow-hidden"
        style={{ backgroundColor: palette.arch, color: "#111113" }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center mb-1.5 shadow-2xs transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-6 flex-shrink-0"
          style={{ backgroundColor: palette.iconBg, color: palette.iconFg }}
        >
          <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
        </div>

        <div className="text-[10px] font-extrabold leading-[1.15] line-clamp-2 px-0.5">
          {project.title}
        </div>
        <div className="text-[8px] font-mono opacity-60 mt-0.5 tabular-nums">
          {project.year}
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-bold leading-none rotate-180">
        <span>{rank}</span>
        <span>{suit}</span>
      </div>
    </Link>
  );
}

export default function ScrollCardArchive({ projects }) {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [forceMode, setForceMode] = useState(null); // null = scroll-driven, 'spiral' | 'grid'
  const { playTick, playPop } = usePortfolioUX();

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      const passed = Math.min(total, Math.max(0, -rect.top));
      setProgress(passed / total);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll 0 -> 0.55 rotates spiral; 0.55 -> 1.0 settles cleanly into grid
  const effectiveProgress =
    forceMode === "spiral" ? 0.15 : forceMode === "grid" ? 1 : progress;
  const gridFactor = Math.min(1, Math.max(0, (effectiveProgress - 0.52) / 0.38));

  const cards = projects.slice(0, 22);

  return (
    <section
      id="archive"
      ref={wrapRef}
      className="relative border-b border-black/15 min-h-[160vh] md:min-h-[210vh]"
      style={{
        background:
          "linear-gradient(180deg, #F6C445 0%, #E69D38 45%, #D37D2A 100%)",
      }}
    >
      <div className="md:sticky md:top-20 py-14 md:py-16 min-h-[calc(100vh-5rem)] flex flex-col justify-between">
        <div className="editorial-container">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#111113] text-white text-[10px] font-mono uppercase tracking-wider">
                The Complete Deck · {cards.length} Builds
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111113] mt-2">
                {gridFactor > 0.65 ? "The arranged archive deck." : "Scroll to unwind the spiral."}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playPop();
                  setForceMode((m) => (m === "spiral" ? null : "spiral"));
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#18181b] text-xs font-mono cursor-pointer transition-colors ${
                  forceMode === "spiral" || (forceMode === null && gridFactor < 0.5)
                    ? "bg-[#111113] text-white"
                    : "bg-white/75 text-[#111113]"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Spiral
              </button>
              <button
                type="button"
                onClick={() => {
                  playPop();
                  setForceMode((m) => (m === "grid" ? null : "grid"));
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#18181b] text-xs font-mono cursor-pointer transition-colors ${
                  forceMode === "grid" || (forceMode === null && gridFactor >= 0.5)
                    ? "bg-[#111113] text-white"
                    : "bg-white/75 text-[#111113]"
                }`}
              >
                <Grid className="w-3 h-3" />
                Grid
              </button>
            </div>
          </div>

          {/* Desktop Scroll-Linked Morph Stage (Spiral -> Clean Organized Card Grid) */}
          <div className="hidden md:block">
            {gridFactor < 0.78 ? (
              <div className="relative h-[510px] flex items-center justify-center overflow-hidden">
                {cards.map((proj, i) => {
                  const angle = i * 0.62 + effectiveProgress * 6.5;
                  const radius = 38 + i * 7.8 * (1 - gridFactor * 0.4);
                  const spiralX = Math.cos(angle) * radius;
                  const spiralY = Math.sin(angle) * (radius * 0.72);
                  const spiralRot = (angle * 180) / Math.PI + (i % 2 === 0 ? -8 : 8);

                  const col = i % 8;
                  const row = Math.floor(i / 8);
                  const targetX = (col - 3.5) * 116;
                  const targetY = (row - 1) * 165;

                  const x = spiralX + (targetX - spiralX) * gridFactor;
                  const y = spiralY + (targetY - spiralY) * gridFactor;
                  const rot = spiralRot * (1 - gridFactor);

                  return (
                    <ArchivePlayingCard
                      key={proj.slug}
                      project={proj}
                      index={i}
                      cursorLabel={proj.title}
                      onHover={() => playTick()}
                      onClick={() => playPop()}
                      style={{
                        transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0px) rotate(${rot.toFixed(1)}deg)`,
                        zIndex: cards.length - i,
                      }}
                      className="absolute w-[110px] h-[162px] shadow-xl hover:z-50 hover:scale-110 transition-transform duration-150"
                    />
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-4 lg:grid-cols-8 gap-2.5">
                {cards.map((proj, i) => (
                  <ArchivePlayingCard
                    key={proj.slug}
                    project={proj}
                    index={i}
                    cursorLabel="Open ↗"
                    onHover={() => playTick()}
                    onClick={() => playPop()}
                    className="h-[174px] shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Mobile Responsive Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:hidden">
            {cards.map((proj, i) => (
              <ArchivePlayingCard
                key={proj.slug}
                project={proj}
                index={i}
                cursorLabel={proj.title}
                onHover={() => playTick()}
                onClick={() => playPop()}
                className="h-[164px] shadow"
              />
            ))}
          </div>

          <div className="text-center mt-5 text-[11px] font-mono text-[#111113]/75">
            scroll to spin · click any card to inspect the build
          </div>
        </div>
      </div>
    </section>
  );
}
