"use client";

import { useState } from "react";
import { ExternalLink, RefreshCw, Globe, ShieldCheck } from "lucide-react";

export default function LivePreviewBox({ url, title }) {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  if (!url) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm">
      {/* Browser Bar */}
      <div className="px-4 py-2.5 bg-[var(--surface-subtle)] border-b border-[var(--border)] flex items-center justify-between gap-4 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/20" />
        </div>

        <div className="flex-1 max-w-xl flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)] truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleRefresh}
            aria-label="Reload preview"
            title="Reload preview"
            className="p-1.5 rounded-md hover:bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in new tab"
            className="p-1.5 rounded-md hover:bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Frame Viewport */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-white">
        {isLoading && (
          <div className="absolute inset-0 bg-[var(--surface-subtle)] flex flex-col items-center justify-center gap-3 font-mono text-xs text-[var(--muted-foreground)] z-10">
            <div className="w-5 h-5 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
            <span>Connecting to {title}...</span>
          </div>
        )}

        <iframe
          key={key}
          src={url}
          title={`Live preview of ${title}`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>

      {/* Footer Status */}
      <div className="px-4 py-2 bg-[var(--surface-subtle)] border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-[var(--muted-foreground)] gap-2">
        <span className="flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-[var(--accent)]" />
          Interactive deployment: {title}
        </span>
        <span>
          Blocked by X-Frame-Options?{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline font-semibold"
          >
            Open in new tab
          </a>
        </span>
      </div>
    </div>
  );
}
