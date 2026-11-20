"use client";

import Link from "next/link";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 1: Underlined Quick Action Links + Cream "Receipts, not vibes." Ledger Card */

export default function ReceiptsCard() {
  const { playTick, playPop } = usePortfolioUX();

  return (
    <div className="mt-8 space-y-8">
      {/* Three underlined mono action links (matches Image 1) */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-[var(--foreground)]">
        <Link
          href="#work"
          onClick={() => playPop()}
          onMouseEnter={() => playTick()}
          className="underline underline-offset-4 decoration-[var(--border-strong)] hover:text-[#E5484D] hover:decoration-[#E5484D] transition-colors"
        >
          Poke the work
        </Link>
        <Link
          href="#trophies"
          onClick={() => playPop()}
          onMouseEnter={() => playTick()}
          className="underline underline-offset-4 decoration-[var(--border-strong)] hover:text-[#E5484D] hover:decoration-[#E5484D] transition-colors"
        >
          Count the receipts
        </Link>
        <Link
          href="#folio"
          onClick={() => playPop()}
          onMouseEnter={() => playTick()}
          className="underline underline-offset-4 decoration-[var(--border-strong)] hover:text-[#E5484D] hover:decoration-[#E5484D] transition-colors"
        >
          Flip through Folio Vol. 01
        </Link>
      </div>

      {/* Cream "Receipts, not vibes." Card with overlapping rotated Golden Seal */}
      <div className="relative rounded-2xl folio-hard-card bg-[#FFFBE2] dark:bg-[#181710] px-6 sm:px-8 py-6 sm:py-7 text-[#111113] dark:text-[#fafafa]">
        {/* Rotated Gold Seal SVG badge in top-right */}
        <div
          className="hidden sm:flex items-center justify-center w-16 h-16 -top-6 -right-4 absolute rounded-full bg-[#FACC15] border-2 border-[#18181b] shadow-md rotate-12 select-none"
          title="Verified builds & credentials"
        >
          <div className="text-[7px] font-mono font-extrabold text-center uppercase leading-tight text-[#111113]">
            VERIFIED
            <span className="block text-sm leading-none my-0.5">★</span>
            LEGIT
          </div>
        </div>

        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-dashed border-black/20 dark:border-white/15">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Receipts, not vibes<span className="text-[#EF532D]">.</span>
          </h2>
          <p className="text-xs font-mono text-black/55 dark:text-white/55">
            Small brag, big smile. Every line checks out.
          </p>
        </div>

        {/* 4 Columns of Highlighted Proof */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-black/50 dark:text-white/50 mb-1.5">
              Education &amp; Base
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums leading-none">
              2024
            </div>
            <div className="text-[11px] font-mono text-black/55 dark:text-white/55 mt-1.5">
              BS AI · DHA Suffa Univ.
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">
              🏆 Certifications
            </div>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <span className="bg-[#FCE7F3] dark:bg-pink-950/60 px-1.5 py-0.5 rounded">
                  HackerRank React Dev
                </span>
              </li>
              <li>
                <span className="bg-[#FCE7F3] dark:bg-pink-950/60 px-1.5 py-0.5 rounded">
                  BCG Data Science (Forage)
                </span>
              </li>
              <li>
                <span className="bg-[#FCE7F3] dark:bg-pink-950/60 px-1.5 py-0.5 rounded">
                  Simplilearn ML Python
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">
              🚀 Experience
            </div>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <span className="bg-[#DBEAFE] dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                  DHA Head Office (Frontend)
                </span>
              </li>
              <li>
                <span className="bg-[#DBEAFE] dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                  FlyRank AI (ML Intern)
                </span>
              </li>
              <li>
                <span className="bg-[#DBEAFE] dark:bg-blue-950/60 px-1.5 py-0.5 rounded">
                  Decodelabs (Python Dev)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">
              👑 Shipped Metrics
            </div>
            <ul className="space-y-1.5 text-xs font-semibold">
              <li>
                <span className="bg-[#DCFCE7] dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  22 Full-Stack &amp; ML Builds
                </span>
              </li>
              <li>
                <span className="bg-[#DCFCE7] dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  84% F1 · 48.8k NYC Listings
                </span>
              </li>
              <li>
                <span className="bg-[#DCFCE7] dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  &lt;50ms · 42k+ Movie TF-IDF
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom-left playful pill matching Image 1 */}
        <div className="mt-5 -mb-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#111113] border border-[#18181b] dark:border-white/25 text-[11px] font-mono shadow-sm">
          <span className="w-4 h-4 rounded-full bg-[#F97316] text-white flex items-center justify-center text-[9px] font-bold">
            ⚡
          </span>
          <span>next receipt: yours? 👀</span>
        </div>
      </div>
    </div>
  );
}
