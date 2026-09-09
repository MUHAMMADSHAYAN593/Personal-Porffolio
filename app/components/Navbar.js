"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-btn";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Writing", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-[var(--background)] border-b border-transparent"
      }`}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Personal Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-[var(--foreground)]"
          >
            <span className="w-5 h-5 rounded bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center font-mono text-[11px] font-bold">
              S
            </span>
            <span>
              Shayan<span className="text-[var(--muted-foreground)] font-normal">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? "text-[var(--foreground)] font-medium"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--foreground)]" />
                  )}
                </Link>
              );
            })}

            <div className="pl-2 border-l border-[var(--border)]">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="w-8 h-8 rounded border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--foreground)]"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean, Non-bloated) */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--background)] px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-2 text-sm font-medium ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
