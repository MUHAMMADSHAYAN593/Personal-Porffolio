import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-16 pb-24">
      <div className="editorial-container text-center max-w-md">
        <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
          404 Error
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-6">
          The requested route or case study does not exist in this portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[var(--foreground)] text-[var(--background)] text-xs font-mono font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Return Home
        </Link>
      </div>
    </main>
  );
}
