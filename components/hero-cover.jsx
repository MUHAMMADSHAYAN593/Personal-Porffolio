"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Coffee, Sparkles } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 0: Full-bleed Terracotta "ta-da!" Hero Cover tailored to Muhammad Shayan */

function MultiplayerCursor({ label, color, className = "", textColor = "#fff" }) {
  return (
    <div
      className={`pointer-events-none select-none hidden md:flex items-start gap-1 ${className}`}
    >
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
        <path
          d="M1 1.5L12.5 7L7 8.8L4.8 14.2L1 1.5Z"
          fill={color}
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="mt-2.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-tight shadow-sm whitespace-nowrap"
        style={{ backgroundColor: color, color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}

export default function HeroCover() {
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [deskHovered, setDeskHovered] = useState(false);
  const { playTick, playPop } = usePortfolioUX();

  useEffect(() => {
    const onScroll = () => setScrollY(Math.min(window.scrollY, 640));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: nx, y: ny });
  };

  return (
    <section
      id="hero-cover"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-black/15 dark:border-white/10"
      style={{
        background:
          "radial-gradient(circle at 50% 34%, #D95738 0%, #BD4124 46%, #8F2B17 100%)",
      }}
    >
      {/* Subtle studio lighting spotlight & halftone noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="editorial-container relative pt-24 md:pt-28 pb-6 md:pb-8 flex flex-col items-center text-center min-h-screen justify-between">
        {/* Top Metadata Capsule Strip (matches Image 0) */}
        <div className="hero-enter hero-enter-1 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span className="px-3 py-1 rounded-full bg-[#111113]/85 text-white text-xs font-mono font-medium border border-white/10">
            Muhammad Shayan
          </span>
          <span className="px-3 py-1 rounded-full bg-[#111113]/85 text-white/90 text-xs font-mono border border-white/10">
            engineers
          </span>
          <span className="px-3 py-1 rounded-full bg-[#111113]/85 text-white/90 text-xs font-mono border border-white/10">
            &amp; ships
          </span>
          <span className="px-3 py-1 rounded-full bg-[#F45D9D] text-white text-xs font-semibold shadow-sm">
            from Karachi
          </span>
          <a
            href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playPop()}
            className="px-3 py-1 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold inline-flex items-center gap-1 shadow-sm transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Center Figma-framed Display + Subtitle */}
        <div
          className="relative my-8 md:my-10 w-full max-w-4xl flex flex-col items-center"
          style={{
            transform: `translate3d(0px, ${(scrollY * -0.06).toFixed(1)}px, 0px)`,
          }}
        >
          {/* Floating Left Notification Card */}
          <div
            className="hidden lg:flex items-center gap-2.5 absolute -left-4 xl:-left-10 top-6 px-3.5 py-2.5 rounded-xl bg-white text-[#111113] shadow-lg border border-black/10 text-left max-w-[205px]"
            style={{
              transform: `translate3d(${(pointer.x * -14).toFixed(1)}px, ${(pointer.y * -10 + scrollY * 0.05).toFixed(1)}px, 0px)`,
            }}
          >
            <span className="w-6 h-6 rounded-full bg-[#111113] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              MS
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold leading-tight">
                Shayan <span className="font-normal text-black/45">just now</span>
              </div>
              <div className="text-[10px] text-black/75 truncate">
                Shipping PrepAI Zod gate v2.4
              </div>
            </div>
          </div>

          {/* Floating Right Notification Card */}
          <div
            className="hidden lg:flex items-center gap-2.5 absolute -right-4 xl:-right-10 top-14 px-3.5 py-2.5 rounded-xl bg-white text-[#111113] shadow-lg border border-black/10 text-left max-w-[215px]"
            style={{
              transform: `translate3d(${(pointer.x * 16).toFixed(1)}px, ${(pointer.y * -8 + scrollY * 0.04).toFixed(1)}px, 0px)`,
            }}
          >
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
              CI
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold leading-tight">
                Pipeline <span className="font-normal text-black/45">2m ago</span>
              </div>
              <div className="text-[10px] text-black/75 truncate">
                Merged PR #18. 84% F1 score live.
              </div>
            </div>
          </div>

          {/* Scattered Figma Cursors */}
          <MultiplayerCursor
            label="AI Systems"
            color="#EC4899"
            className="absolute -top-6 left-[52%]"
          />
          <MultiplayerCursor
            label="ML Engineer"
            color="#EA580C"
            className="absolute -left-2 -top-2"
          />
          <MultiplayerCursor
            label="Full-Stack"
            color="#F472B6"
            className="absolute right-8 -top-6"
          />
          <MultiplayerCursor
            label="Frontend Dev"
            color="#0284C7"
            className="absolute right-4 top-10"
          />
          <MultiplayerCursor
            label="You"
            color="#111113"
            className="absolute left-14 bottom-6"
          />

          {/* Figma Selection Frame around "ta-da!" */}
          <div className="relative inline-block px-5 sm:px-9 py-2 sm:py-3 border border-dashed border-[#93C5FD]/85 bg-white/[0.02] group">
            {/* 4 Corner Handles */}
            <span className="w-2 h-2 bg-white border border-[#2563EB] absolute -top-1 -left-1" />
            <span className="w-2 h-2 bg-white border border-[#2563EB] absolute -top-1 -right-1" />
            <span className="w-2 h-2 bg-white border border-[#2563EB] absolute -bottom-1 -left-1" />
            <span className="w-2 h-2 bg-white border border-[#2563EB] absolute -bottom-1 -right-1" />

            <h1 className="text-6xl sm:text-8xl md:text-[7.25rem] font-extrabold tracking-[-0.045em] leading-[0.9] text-[#FFF3E3] select-none transition-transform duration-300 group-hover:scale-[1.015]">
              ta-da<span className="text-[#FDE047]">!</span>
            </h1>

            <span className="inline-block px-2 py-0.5 rounded bg-[#2563EB] text-white text-[10px] font-mono font-semibold shadow-sm -mb-6 mt-1">
              595 × 212
            </span>
          </div>

          <p className="mt-7 max-w-xl text-sm sm:text-[15px] text-[#FFE8DA]/95 leading-relaxed">
            AI/ML engineer who ships the interface too. I architect models, wire multi-agent
            pipelines, and{" "}
            <span className="px-1.5 py-0.5 rounded bg-[#FDE047] text-[#111113] font-semibold">
              ship them
            </span>
            : Frontend Dev at DHA Head Office, creator of PrepAI, Deep Research Agent &amp; Roomify.
          </p>
        </div>

        {/* Bottom Studio Desk Card with Sticky Notes (matches Image 0 desk vignette) */}
        <div
          className="relative w-full max-w-3xl mx-auto mt-4"
          onMouseEnter={() => {
            setDeskHovered(true);
            playTick();
          }}
          onMouseLeave={() => setDeskHovered(false)}
          style={{
            transform: `translate3d(0px, ${(scrollY * -0.04).toFixed(1)}px, 0px)`,
          }}
        >
          {/* Floating Sticky Notes pinned along top edge */}
          <div className="hidden sm:block absolute -top-8 left-4 z-20 px-3 py-3 w-24 rounded-sm bg-[#FDE047] text-[#111113] text-[10px] font-semibold leading-tight text-left shadow-md -rotate-6 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1">
            Prompt it?
            <span className="block font-normal mt-1 opacity-75">+ Zod gate</span>
          </div>
          <div className="hidden sm:block absolute -top-9 left-[35%] z-20 px-3 py-3 w-24 rounded-sm bg-[#7DD3FC] text-[#111113] text-[10px] font-semibold leading-tight text-left shadow-md -rotate-3 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1">
            Quiet the
            <br />
            noise.
          </div>
          <div className="hidden sm:block absolute -top-7 right-5 z-20 px-3 py-3 w-24 rounded-sm bg-[#A3E635] text-[#111113] text-[10px] font-semibold leading-tight text-left shadow-md rotate-6 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1">
            Ship it,
            <br />
            then sip ☕
          </div>

          {/* Wide Studio Monitor Illustration Card */}
          <div className="relative rounded-2xl border-2 border-black/35 bg-gradient-to-b from-[#60A5FA] via-[#93C5FD] to-[#E2E8F0] p-4 sm:p-5 shadow-2xl overflow-hidden">
            {/* Window cityscape skyline bar */}
            <div className="grid grid-cols-12 gap-3 items-end">
              {/* Left IDE Monitor */}
              <div className="col-span-4 rounded-xl bg-[#0F172A] border border-white/15 p-2.5 text-left shadow-lg">
                <div className="flex gap-1 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-1 font-mono text-[8px] text-sky-300/90">
                  <div className="text-emerald-300">const agent = graph()</div>
                  <div className="h-1.5 w-4/5 rounded bg-white/10" />
                  <div className="h-1.5 w-3/5 rounded bg-sky-400/30" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                </div>
              </div>

              {/* Center Retro Orange Monitor "SHAYAN'S WORLD" */}
              <div className="col-span-4 rounded-2xl bg-[#F97316] p-2 shadow-xl border border-black/25">
                <div className="rounded-xl bg-[#FFFBEB] px-2 py-4 flex flex-col items-center justify-center relative">
                  <span className="font-mono text-[10px] sm:text-xs font-extrabold tracking-tight text-[#111113] leading-tight">
                    SHAYAN&apos;S
                    <br />
                    WORLD
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[8px] font-mono text-emerald-700">
                    <Sparkles className="w-2.5 h-2.5" />
                    {deskHovered ? "22 builds live" : "ready to ship"}
                  </span>
                </div>
              </div>

              {/* Right System Output Monitor */}
              <div className="col-span-4 rounded-xl bg-[#18181B] border border-white/15 p-2.5 text-left shadow-lg">
                <div className="flex items-center justify-between text-[8px] font-mono text-white/60 mb-1.5">
                  <span>Roomify 3D</span>
                  <Coffee className="w-2.5 h-2.5 text-amber-400" />
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-7 rounded bg-indigo-500/30 border border-indigo-400/30" />
                  <div className="h-7 rounded bg-emerald-500/30 border border-emerald-400/30" />
                  <div className="h-7 rounded bg-amber-500/30 border border-amber-400/30" />
                </div>
              </div>
            </div>

            {/* Desk edge & nameplate banner */}
            <div className="mt-3 pt-2 border-t border-black/15 flex items-center justify-center">
              <span className="px-3 py-0.5 rounded bg-[#111113] text-white text-[9px] font-mono tracking-wider uppercase shadow">
                SHAYAN&apos;S LAB · POPULATION: ONE ENGINEER, MANY MODELS
              </span>
            </div>
          </div>

          {/* Scroll Cue */}
          <div className="mt-4 flex flex-col items-center gap-1">
            <Link
              href="#hero"
              onClick={() => playPop()}
              className="text-[10px] font-mono tracking-[0.25em] text-[#FFE8DA]/85 hover:text-white uppercase inline-flex flex-col items-center gap-1"
            >
              <span>SCROLL</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
