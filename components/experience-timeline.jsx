"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePortfolioUX } from "@/components/portfolio-ux-provider";

const EXPERIENCE = [
  {
    period: "Apr 2026 — Present",
    role: "Frontend Developer",
    company: "DHA Head Office, Karachi",
    stack: ["React", "Next.js App Router", "Production UI"],
    summary:
      "Building, updating, and maintaining reusable frontend UI components with React and Next.js App Router inside an existing production codebase.",
    highlights: [
      "Translated design requirements and UI specifications into responsive, functional web interfaces across screen sizes.",
      "Extended existing pages and component modules while preserving established application structure and coding conventions.",
      "Resolved layout, responsiveness, and styling inconsistencies by consolidating duplicated UI into shared components.",
    ],
  },
  {
    period: "Jul 2026 — Aug 2026",
    role: "Machine Learning Intern",
    company: "FlyRank AI",
    stack: ["Python", "AI Search", "Automation"],
    summary:
      "Worked on organic-growth automation and brand visibility workflows across classic search and AI-driven search engines.",
    highlights: [
      "Contributed to search visibility pipelines and automated evaluation tasks in a fast-moving AI product team.",
      "Applied Python scripting and data analysis to measure brand presence across LLM answer engines.",
    ],
  },
  {
    period: "Jun 2026 — Jul 2026",
    role: "Python Developer",
    company: "Decodelabs, Karachi",
    stack: ["Python", "Application Logic", "Debugging"],
    summary:
      "Wrote, tested, and debugged production Python scripts and utility applications inside an engineering team.",
    highlights: [
      "Built modular Python automation utilities and resolved runtime edge cases in team deliverables.",
    ],
  },
];

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(0);
  const { playPop } = usePortfolioUX();

  return (
    <div className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
      {EXPERIENCE.map((exp, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={exp.company} className="py-6 md:py-7">
            <button
              type="button"
              onClick={() => {
                playPop();
                setOpenIndex(isOpen ? -1 : i);
              }}
              aria-expanded={isOpen}
              className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start cursor-pointer group"
            >
              <div className="md:col-span-3 text-xs font-mono text-[var(--muted-foreground)] tabular-nums pt-0.5">
                {exp.period}
              </div>

              <div className="md:col-span-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {exp.role}
                  </h3>
                  {i === 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-xs font-medium text-[var(--muted-foreground)] mt-0.5">
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--muted-foreground)] border border-[var(--border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 flex items-start justify-between gap-4">
                <p className="text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {exp.summary}
                </p>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--muted-foreground)] flex-shrink-0 mt-0.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-180 text-[var(--foreground)]" : ""
                  }`}
                />
              </div>
            </button>

            {/* Smooth CSS Grid Height Expand */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pt-4 md:grid md:grid-cols-12 md:gap-6">
                  <div className="md:col-start-4 md:col-span-9">
                    <ul className="space-y-2 border-l-2 border-[var(--accent)]/40 pl-4 text-xs md:text-sm text-[var(--muted-foreground)]">
                      {exp.highlights.map((h) => (
                        <li key={h} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
