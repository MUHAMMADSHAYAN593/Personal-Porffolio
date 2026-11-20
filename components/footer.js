"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

/* Image 12: Electric Cobalt Blue CTA + 4-Col Directory + Tactile Bookmark Quote + Colophon */

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [pktTime, setPktTime] = useState("Karachi (UTC+5)");
  const { playPop, playSuccess, playTick } = usePortfolioUX();

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setPktTime(`${formatted} PKT`);
      } catch {
        setPktTime("UTC +5");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("muhammadshayanakhlaq@gmail.com");
      playSuccess();
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      {/* Full-Bleed Electric Cobalt Blue CTA Hero (matches top of Image 12) */}
      <div
        className="relative overflow-hidden py-16 sm:py-24 text-center border-b border-[var(--border)]"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, #FFFFFF 0%, #93C5FD 34%, #2563EB 72%, #1D4ED8 100%)",
        }}
      >
        <div className="editorial-container relative flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-[#111113] text-[10px] font-mono shadow-xs mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Open to AI/ML &amp; Full-Stack roles · Karachi or remote</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="inline-block px-5 py-1 rounded-2xl bg-[#2563EB] text-white text-4xl sm:text-6xl font-extrabold tracking-tight shadow-md">
              Let&apos;s build
            </span>
            <span className="inline-block px-5 py-1 rounded-2xl bg-[#2563EB] text-white text-4xl sm:text-6xl font-extrabold tracking-tight shadow-md">
              what&apos;s <span className="font-editorial-italic font-normal">next.</span>
            </span>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            <a
              href="mailto:muhammadshayanakhlaq@gmail.com"
              onClick={() => playPop()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111113] text-white text-xs font-mono font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>muhammadshayanakhlaq@gmail.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              onMouseEnter={() => playTick()}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white text-[#111113] text-[10px] font-mono font-bold border border-black/15 shadow-xs hover:bg-neutral-100 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "COPIED" : "COPY"}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playPop()}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white text-[#111113] text-xs font-semibold border border-black/15 shadow-xs hover:bg-neutral-100 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Directory + Testimonial */}
      <div className="editorial-container py-10 border-b border-[var(--border)]">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 text-xs">
          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              Talk
            </div>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5484D] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:muhammadshayanakhlaq@gmail.com"
                  className="hover:text-[#E5484D] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              More work
            </div>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a
                  href="https://github.com/MUHAMMADSHAYAN593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5484D] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E5484D] transition-colors">
                  All Projects (22)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E5484D] transition-colors">
                  Technical Journal
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5484D] transition-colors">
                  Folio &amp; Resume
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              Based in
            </div>
            <div className="font-medium text-[var(--foreground)]">
              Karachi, Pakistan
            </div>
            <div className="font-mono text-[11px] text-[var(--muted-foreground)] tabular-nums">
              {pktTime} · BS AI @ DHA Suffa Univ.
            </div>
          </div>

          <div className="col-span-2 md:col-span-5 space-y-1.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
              ○ Engineering Ethos
            </div>
            <blockquote className="text-xs text-[var(--muted-foreground)] italic leading-relaxed">
              &ldquo;Production AI engineering is 80% defensive input/output handling — pair
              strict schema contracts with interfaces people genuinely enjoy using.&rdquo;
            </blockquote>
            <div className="text-[11px] font-semibold text-[var(--foreground)]">
              Muhammad Shayan · Frontend Dev @ DHA Head Office
            </div>
          </div>
        </div>
      </div>

      {/* Centered Tactile Parchment Bookmark with Red Cord (matches bottom of Image 12) */}
      <div className="editorial-container py-12 flex flex-col items-center text-center border-b border-[var(--border)]">
        <div className="relative max-w-md w-full">
          {/* Decorative red bookmark string */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute -left-5 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#DC2626] -rotate-12 rounded-full"
          />

          <div className="rounded-full border border-[#B48A4E]/60 bg-gradient-to-b from-[#DFC592] via-[#D2B27A] to-[#C39E63] px-8 py-5 shadow-md text-[#2C2012] relative">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--background)] border border-[#8C6834]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--background)] border border-[#8C6834]/50 absolute right-3.5 top-1/2 -translate-y-1/2" />

            <div className="font-editorial-italic text-base sm:text-lg leading-snug">
              Build with clarity, validate every boundary,
              <br />
              and ship what endures.
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs font-editorial-italic text-[var(--muted-foreground)]">
          Whatever you architect, make it dependable in production.
        </p>
      </div>

      {/* Bottom Colophon Bar */}
      <div className="editorial-container py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-[var(--muted-foreground)]">
        <div>
          <span className="font-bold text-[var(--foreground)] mr-2">COLOPHON</span>
          Designed &amp; hand-coded by Muhammad Shayan in Karachi. Built with Next.js 15,
          React 19 &amp; Tailwind CSS.
        </div>
        <div className="tabular-nums flex-shrink-0">
          © {new Date().getFullYear()} SHAYAN.DEV
        </div>
      </div>
    </footer>
  );
}
