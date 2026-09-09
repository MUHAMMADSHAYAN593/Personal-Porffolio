"use client";

import { useState } from "react";
import { GitCommit, Github, ArrowUpRight, GitBranch, Activity } from "lucide-react";

export default function GitHubActivity() {
  const [activeAccount, setActiveAccount] = useState("primary");

  const accounts = {
    primary: {
      username: "MUHAMMADSHAYAN593",
      url: "https://github.com/MUHAMMADSHAYAN593",
      label: "Main Engineering Profile",
      repo: "MUHAMMADSHAYAN593",
      description: "Primary repository hub for full-stack apps, AI systems, and open-source tools.",
      chartUrl: "https://ghchart.rshah.org/2563eb/MUHAMMADSHAYAN593",
    },
    secondary: {
      username: "shayan123-svg",
      url: "https://github.com/shayan123-svg/Muhammad-Shayan",
      label: "Active Production & Lab Profile",
      repo: "shayan123-svg/Muhammad-Shayan",
      description: "Machine-learning experiments, Streamlit deployments, and research pipelines.",
      chartUrl: "https://ghchart.rshah.org/2563eb/shayan123-svg",
    },
  };

  const current = accounts[activeAccount];

  return (
    <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm font-mono text-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-[var(--foreground)]" />
          <span className="font-semibold text-sm text-[var(--foreground)] tracking-tight">
            GitHub Contribution Matrices
          </span>
        </div>

        {/* Account Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[var(--surface-subtle)] p-1 rounded-lg border border-[var(--border)]">
          <button
            onClick={() => setActiveAccount("primary")}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              activeAccount === "primary"
                ? "bg-[var(--card)] text-[var(--foreground)] font-semibold shadow-xs"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            @MUHAMMADSHAYAN593
          </button>
          <button
            onClick={() => setActiveAccount("secondary")}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              activeAccount === "secondary"
                ? "bg-[var(--card)] text-[var(--foreground)] font-semibold shadow-xs"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            @shayan123-svg
          </button>
        </div>
      </div>

      {/* Account Telemetry */}
      <div className="my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-semibold text-[var(--foreground)] block">
            {current.label}
          </span>
          <span className="text-[11px] text-[var(--muted-foreground)]">
            {current.description}
          </span>
        </div>

        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
        >
          <span>View Profile</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Contribution Heatmap Container */}
      <div className="p-3.5 rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] overflow-x-auto">
        <div className="min-w-[620px]">
          <div className="flex items-center justify-between mb-2 text-[10px] text-[var(--muted-foreground)]">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-emerald-500" />
              Recent Year Contribution Graph • @{current.username}
            </span>
            <span>Live Commit Tracking</span>
          </div>

          <div className="w-full overflow-hidden flex items-center justify-center py-2 bg-transparent">
            {/* Real GitHub Contribution Chart SVG with dark-mode filter handling */}
            <img
              src={current.chartUrl}
              alt={`${current.username}'s GitHub contribution chart`}
              className="w-full max-w-full h-auto dark:invert-[0.88] dark:hue-rotate-180 transition-all select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--muted-foreground)]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Active Developer
          </span>
          <span className="inline-flex items-center gap-1">
            <GitBranch className="w-3 h-3 text-[var(--muted-foreground)]" />
            main
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/MUHAMMADSHAYAN593"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] hover:underline"
          >
            github.com/MUHAMMADSHAYAN593
          </a>
          <span>•</span>
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
