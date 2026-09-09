import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] py-12 text-sm">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Info */}
          <div>
            <div className="font-semibold text-[var(--foreground)] tracking-tight">
              Shayan<span className="text-[var(--muted-foreground)] font-normal">.dev</span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              AI/ML Student & Full-Stack Developer • Karachi, PK
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="https://github.com/MUHAMMADSHAYAN593"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              LinkedIn
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="mailto:muhammadshayanakhlaq@gmail.com"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              Email
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Muhammad Shayan
          </div>
        </div>
      </div>
    </footer>
  );
}
