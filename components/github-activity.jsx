"use client";

import { useState } from "react";
import { Github, ArrowUpRight, GitBranch, Activity } from "lucide-react";
import { SlidingTabs } from "@/components/motion-primitives";

const accounts = [
  {
    key: "primary",
    label: "@MUHAMMADSHAYAN593",
    username: "MUHAMMADSHAYAN593",
    url: "https://github.com/MUHAMMADSHAYAN593",
    role: "Main Engineering Profile",
    description:
      "Primary repository hub for full-stack apps, AI systems, and open-source tools.",
    chartUrl: "https://ghchart.rshah.org/1d4ed8/MUHAMMADSHAYAN593",
  },
  {
    key: "secondary",
    label: "@shayan123-svg",
    username: "shayan123-svg",
    url: "https://github.com/shayan123-svg/Muhammad-Shayan",
    role: "Production & ML Lab Profile",
    description:
      "Machine-learning experiments, Streamlit deployments, and research pipelines.",
    chartUrl: "https://ghchart.rshah.org/1d4ed8/shayan123-svg",
  },
];

export default function GitHubActivity() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [imgError, setImgError] = useState({});
  const current = accounts[activeIdx];

  return (
    <div className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 md:p-6 font-mono text-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2.5">
          <Github className="w-4 h-4 text-[var(--foreground)]" />
          <span className="font-sans font-semibold text-sm text-[var(--foreground)] tracking-tight">
            GitHub Activity
          </span>
        </div>

        <SlidingTabs
          items={accounts.map((a) => ({ key: a.key, label: a.label }))}
          activeIndex={activeIdx}
          onSelect={(idx) => setActiveIdx(idx)}
        />
      </div>

      {/* Account Summary */}
      <div className="my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="font-sans font-semibold text-sm text-[var(--foreground)] block">
            {current.role}
          </span>
          <span className="font-sans text-xs text-[var(--muted-foreground)]">
            {current.description}
          </span>
        </div>

        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--accent)] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <span>Open profile</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Contribution Graph */}
      <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] overflow-x-auto">
        <div className="min-w-[580px]">
          <div className="flex items-center justify-between mb-3 text-[11px] text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              Contribution graph for @{current.username}
            </span>
            <span>Past 12 months</span>
          </div>

          <div className="w-full overflow-hidden flex items-center justify-center py-1 min-h-[96px]">
            {imgError[current.username] ? (
              <div className="text-[11px] text-[var(--muted-foreground)] py-6">
                Contribution SVG unavailable offline — view directly on{" "}
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline"
                >
                  github.com/{current.username}
                </a>
              </div>
            ) : (
              <img
                key={current.username}
                src={current.chartUrl}
                alt={`${current.username}'s GitHub contribution chart`}
                onError={() =>
                  setImgError((prev) => ({ ...prev, [current.username]: true }))
                }
                className="w-full max-w-full h-auto dark:invert-[0.88] dark:hue-rotate-180 transition-opacity duration-300 select-none"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--muted-foreground)]">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
          <span className="inline-flex items-center gap-1">
            <GitBranch className="w-3 h-3" />
            main
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MUHAMMADSHAYAN593"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] hover:underline"
          >
            github.com/MUHAMMADSHAYAN593
          </a>
          <a
            href="https://github.com/shayan123-svg/Muhammad-Shayan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] hover:underline"
          >
            github.com/shayan123-svg
          </a>
        </div>
      </div>
    </div>
  );
}
