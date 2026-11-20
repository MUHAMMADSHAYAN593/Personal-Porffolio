"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-btn";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";
import { ArrowUpRight, Menu, Volume2, VolumeX, X } from "lucide-react";

const navLinks = [
  { name: "Overview", href: "/", num: "01" },
  { name: "Work", href: "/projects", num: "02" },
  { name: "About", href: "/about", num: "03" },
  { name: "Writing", href: "/blog", num: "04" },
  { name: "Contact", href: "/contact", num: "05" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { soundEnabled, toggleSound, playTick, playPop } =
    usePortfolioUX();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-3.5 inset-x-0 z-40 pointer-events-none px-3 sm:px-6">
      <div className="mx-auto max-w-[1160px] flex justify-center">
        <div
          className={`pointer-events-auto w-full flex items-center justify-between h-14 px-2.5 sm:px-3.5 rounded-full border backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-[var(--card)]/72 border-[var(--border-strong)] shadow-[0_14px_34px_-12px_rgba(0,0,0,0.28)]"
              : "bg-[var(--card)]/35 border-white/35 dark:border-white/15 shadow-[0_8px_28px_-8px_rgba(0,0,0,0.18)]"
          }`}
        >
          {/* Left: Brand Logo Badge + Desktop Section Links (matches Image 0 navbar) */}
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href="/"
              onClick={() => playPop()}
              className="group inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#111113] dark:bg-[#fafafa] text-white dark:text-[#0a0a0b] text-xs font-extrabold tracking-tight shadow-sm border border-black/10 dark:border-white/20 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0"
            >
              <span className="tracking-tight uppercase">SHAYAN&apos;S FOLIO</span>
            </Link>

            <nav className="hidden xl:flex items-center gap-3.5 text-[11px] font-medium text-[var(--foreground)]/80">
              <Link href="/#work" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Work</Link>
              <Link href="/#sites" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Sites</Link>
              <Link href="/#transit" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Open source</Link>
              <Link href="/#motion" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Motion</Link>
              <Link href="/#capabilities" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Systems</Link>
              <Link href="/#archive" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Index</Link>
              <Link href="/#trophies" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Trophies</Link>
              <Link href="/blog" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Writing</Link>
              <Link href="/contact" onMouseEnter={() => playTick()} className="hover:text-[var(--foreground)] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Right Utility Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2 relative">
            {/* Sound Toggle Circle */}
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={soundEnabled}
              aria-label={soundEnabled ? "Mute UI sounds" : "Enable tactile UI sounds"}
              title={soundEnabled ? "Sound: On" : "Sound: Off"}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                soundEnabled
                  ? "border-[var(--accent)]/60 bg-[var(--card)]/75 text-[var(--accent)]"
                  : "border-[var(--border)] bg-[var(--card)]/55 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)]"
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Theme Toggle */}
            <div className="[&>button]:w-9 [&>button]:h-9 [&>button]:rounded-full [&>button]:bg-[var(--card)]/65">
              <ModeToggle />
            </div>

            {/* Primary Black Pill CTA */}
            <Link
              href="/contact"
              onMouseEnter={() => playTick()}
              onClick={() => playPop()}
              className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#111113] dark:bg-[#fafafa] text-white dark:text-[#0a0a0b] text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              Let&apos;s build
            </Link>

            {/* Menu Pill Trigger */}
            <button
              type="button"
              onClick={() => {
                playPop();
                setMenuOpen((o) => !o);
              }}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full border border-[var(--border-strong)]/60 bg-[var(--card)]/65 hover:bg-[var(--card)] text-xs font-medium text-[var(--foreground)] transition-colors cursor-pointer"
            >
              <span>Menu</span>
              {menuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>

            {/* Sleek Dropdown Navigation Popover */}
            <div
              className={`absolute right-0 top-13 w-60 rounded-2xl border border-[var(--border-strong)] bg-[var(--card)]/90 backdrop-blur-xl p-2 shadow-2xl transition-[opacity,transform] duration-200 origin-top-right ${
                menuOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
              }`}
            >
              <div className="space-y-0.5">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onMouseEnter={() => playTick()}
                      onClick={() => playPop()}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--surface-subtle)] text-[var(--foreground)] font-semibold"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-subtle)]/70"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="font-mono text-[10px] opacity-55">
                          {link.num}
                        </span>
                        <span>{link.name}</span>
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-45" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
