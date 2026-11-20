"use client";

import Link from "next/link";
import { ParallaxBox } from "@/components/scroll-effects";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Images 3 & 8: Full-bleed Act Interstitial Chapter Banners with Stickers & Giant Watermark */

const THEMES = {
  making: {
    bg: "#EF532D",
    text: "#111113",
    accentWord: "#FFFFFF",
    pillBg: "#111113",
    pillText: "#FFFFFF",
    dotColor: "#FACC15",
    watermarkStroke: "rgba(17, 17, 19, 0.16)",
  },
  archive: {
    bg: "#FFD54F",
    text: "#111113",
    accentWord: "#B93B22",
    pillBg: "#111113",
    pillText: "#FFFFFF",
    dotColor: "#FFFFFF",
    watermarkStroke: "rgba(17, 17, 19, 0.14)",
  },
};

export default function ActBanner({
  id,
  variant = "making",
  actNum = "02",
  eyebrow = "Act 02 of 07 · The making",
  prefix = "Things with my",
  highlight = "fingerprints",
  suffix = "on them.",
  description,
  anchors = [],
  stickers = [],
}) {
  const theme = THEMES[variant] || THEMES.making;
  const { playTick, playPop } = usePortfolioUX();

  return (
    <section
      id={id}
      className="relative overflow-hidden border-b border-black/15 py-24 md:py-36"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Subtle square blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Giant Outline Number Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 right-4 md:right-12 text-[10rem] sm:text-[15rem] md:text-[19rem] font-extrabold leading-none tracking-tighter"
        style={{
          color: "transparent",
          WebkitTextStroke: `2px ${theme.watermarkStroke}`,
        }}
      >
        {actNum}
      </div>

      <div className="editorial-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold"
              style={{ backgroundColor: theme.pillBg, color: theme.pillText }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: theme.dotColor }}
              />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-[4.25rem] font-extrabold tracking-[-0.035em] leading-[1.02]">
              {prefix}{" "}
              <span
                className="font-editorial-italic"
                style={{ color: theme.accentWord }}
              >
                {highlight}
              </span>{" "}
              <span className="block">{suffix}</span>
            </h2>

            <p className="max-w-lg text-sm sm:text-base leading-relaxed opacity-85">
              {description}
            </p>

            {anchors.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {anchors.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    onMouseEnter={() => playTick()}
                    onClick={() => playPop()}
                    className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1 rounded-full border border-[#18181b] bg-white/15 hover:bg-[#111113] hover:text-white text-xs font-mono font-semibold transition-colors"
                  >
                    <span className="px-1.5 py-0.5 rounded-full bg-[#111113] text-white text-[10px]">
                      {a.code}
                    </span>
                    <span>{a.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Floating Parallax Sticker Decals */}
          <div className="lg:col-span-5 relative h-52 sm:h-64 hidden sm:block">
            <ParallaxBox speed={-0.06} className="w-full h-full relative">
              {stickers.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    top: s.top,
                    left: s.left,
                    "--sticker-rot": s.rotate || "0deg",
                    animationDelay: `${idx * 0.7}s`,
                  }}
                  className="sticker-float absolute inline-flex items-center justify-center rounded-2xl border-2 border-[#18181b] bg-white text-[#111113] shadow-[0_6px_0_#18181b] px-3.5 py-2 text-sm font-extrabold select-none"
                >
                  {s.content}
                </div>
              ))}
            </ParallaxBox>
          </div>
        </div>
      </div>
    </section>
  );
}
