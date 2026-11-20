"use client";

import Link from "next/link";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 2: "The story, in seven acts." Staggered Color Chapters + Infinite Stack Ticker */

const ACTS = [
  {
    num: "01",
    title: "Hello",
    sub: "who I am",
    href: "#hero",
    bg: "#111113",
    fg: "#FFFFFF",
    icon: "✨",
    tall: true,
  },
  {
    num: "02",
    title: "The making",
    sub: "what I've shipped",
    href: "#act-making",
    bg: "#EF532D",
    fg: "#111113",
    icon: "🚀",
    tall: false,
  },
  {
    num: "03",
    title: "The systems",
    sub: "how I architect",
    href: "#capabilities",
    bg: "#2455FF",
    fg: "#FFFFFF",
    icon: "🔍",
    tall: true,
  },
  {
    num: "04",
    title: "The archive",
    sub: "every project",
    href: "#act-archive",
    bg: "#FFD54F",
    fg: "#111113",
    icon: "📁",
    tall: false,
  },
  {
    num: "05",
    title: "Milestones",
    sub: "roles & trophies",
    href: "#trophies",
    bg: "#09B66D",
    fg: "#111113",
    icon: "🏆",
    tall: true,
  },
  {
    num: "06",
    title: "Inside my head",
    sub: "code & telemetry",
    href: "#activity",
    bg: "#EFE9DD",
    fg: "#111113",
    icon: "💡",
    tall: false,
  },
  {
    num: "07",
    title: "Journal",
    sub: "engineering notes",
    href: "#journal",
    bg: "#0B0E1E",
    fg: "#FFFFFF",
    icon: "🌙",
    tall: true,
  },
  {
    num: "→",
    title: "Work with me",
    sub: "roles & builds",
    href: "#contact-cta",
    bg: "#FFFFFF",
    fg: "#111113",
    border: true,
    icon: "💬",
    tall: false,
  },
];

const TICKER_TOOLS = [
  "Next.js",
  "TypeScript",
  "Three.js",
  "Python",
  "OpenRouter",
  "Zod",
  "Scikit-Learn",
  "React Flow",
  "Streamlit",
  "uv",
  "MongoDB",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Pandas",
  "NumPy",
];

export default function SevenActsStrip() {
  const { playTick, playPop } = usePortfolioUX();

  return (
    <section className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background)] overflow-hidden">
      <div className="editorial-container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>How this corner is laid out</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            The story, in seven acts<span className="text-[#EF532D]">.</span>
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mt-3 leading-relaxed">
            Each act has its own colour. When the colour changes, you&apos;ve turned the page.
          </p>
        </div>

        {/* 8 Staggered Vertical Chapter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center max-w-5xl mx-auto mb-16">
          {ACTS.map((act) => (
            <Link
              key={act.title}
              href={act.href}
              onMouseEnter={() => playTick()}
              onClick={() => playPop()}
              data-cursor-label={act.title}
              style={{
                backgroundColor: act.bg,
                color: act.fg,
              }}
              className={`group relative rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:shadow-xl ${
                act.tall ? "h-52 sm:h-56" : "h-44 sm:h-48"
              } ${
                act.border
                  ? "border border-[#18181b]/25 shadow-sm"
                  : "border border-black/10 dark:border-white/15 shadow-sm"
              }`}
            >
              <div className="text-2xl font-extrabold tracking-tight leading-none">
                {act.num}
              </div>

              <div>
                <div className="text-xs font-bold leading-snug">{act.title}</div>
                <div className="flex items-end justify-between gap-1 mt-1.5">
                  <span className="text-[10px] font-mono opacity-70 leading-tight">
                    {act.sub}
                  </span>
                  <span className="text-lg transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                    {act.icon}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Full-width Seamless Tool Stack Marquee Ticker */}
      <div className="folio-marquee-wrap border-t border-b border-[var(--border)] bg-[var(--surface-subtle)]/65 py-3.5 overflow-hidden">
        <div className="folio-marquee-track flex items-center gap-8 sm:gap-12">
          {[...TICKER_TOOLS, ...TICKER_TOOLS].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="text-xs sm:text-sm font-medium text-[var(--foreground)]/80 whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
