"use client";

import { useState } from "react";
import { Check, Copy, Terminal, FileCode2 } from "lucide-react";

const snippets = [
  {
    filename: "prepai_schema.ts",
    language: "TypeScript",
    badge: "Defensive AI",
    code: `// Strict Zod schema enforcing structured AI response contracts
import { z } from "zod";

export const InterviewDossierSchema = z.object({
  candidateScore: z.number().min(0).max(100),
  skillGaps: z.array(
    z.object({
      technology: z.string(),
      severity: z.enum(["low", "medium", "critical"]),
      recommendedAction: z.string(),
    })
  ),
  technicalQuestions: z.array(
    z.object({
      prompt: z.string(),
      expectedConcepts: z.array(z.string()),
      difficulty: z.enum(["junior", "mid", "senior"]),
    })
  ),
  behavioralSTAR: z.array(
    z.object({
      situation: z.string(),
      task: z.string(),
      action: z.string(),
      result: z.string(),
    })
  ),
});

export type InterviewDossier = z.infer<typeof InterviewDossierSchema>;`,
  },
  {
    filename: "agent_pipeline.py",
    language: "Python",
    badge: "Multi-Agent System",
    code: `# Multi-agent research & citation extraction loop
from dataclasses import dataclass
from typing import List

@dataclass
class ResearchDossier:
    topic: str
    verified_citations: List[str]
    synthesis: str

class ResearchCoordinator:
    def __init__(self, retrieval_agent, fact_checker):
        self.retrieval = retrieval_agent
        self.verifier = fact_checker

    async def execute_review(self, query: str) -> ResearchDossier:
        # Deconstruct query into vector hypotheses
        papers = await self.retrieval.fetch_candidates(query, top_k=8)
        verified = await self.verifier.anchor_claims(papers)
        return ResearchDossier(
            topic=query,
            verified_citations=verified.citations,
            synthesis=verified.generate_briefing()
        )`,
  },
  {
    filename: "spatial_features.py",
    language: "Python",
    badge: "NYC Airbnb ML",
    code: `# Geodesic Haversine modeling for NYC market classification
import numpy as np

def haversine_distance(lat1, lon1, lat2=40.7580, lon2=-73.9855):
    """Computes geodesic distance (km) from Times Square (NYC Center)."""
    R = 6371.0 # Earth radius in km
    dlat = np.radians(lat1 - lat2)
    dlon = np.radians(lon1 - lon2)
    
    a = (np.sin(dlat / 2.0) ** 2 +
         np.cos(np.radians(lat2)) * np.cos(np.radians(lat1)) *
         np.sin(dlon / 2.0) ** 2)
    c = 2 * np.arcsin(np.sqrt(a))
    return R * c

# Log-transform pricing to normalize right-skewed distributions
def normalize_features(df):
    df['dist_times_square'] = haversine_distance(df['latitude'], df['longitude'])
    df['log_price'] = np.log1p(df['price'])
    return df`,
  },
];

export default function CodeSnippetBox() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm font-mono text-xs">
      {/* Chrome Header with Window Dots & Tabs */}
      <div className="px-3.5 py-2.5 bg-[var(--surface-subtle)] border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>

          {/* File Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {snippets.map((snip, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={snip.filename}
                  onClick={() => setActiveTab(idx)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] font-semibold shadow-xs"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <FileCode2 className="w-3 h-3 text-blue-500" />
                  {snip.filename}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Info & Copy */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            {current.badge}
          </span>
          <button
            onClick={handleCopy}
            title="Copy code"
            aria-label="Copy code snippet"
            className="p-1 rounded hover:bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[10px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 overflow-x-auto max-h-[300px] bg-[var(--card)] leading-relaxed text-[11.5px]">
        <pre className="text-[var(--foreground)]">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Status Footer */}
      <div className="px-4 py-1.5 bg-[var(--surface-subtle)] border-t border-[var(--border)] flex items-center justify-between text-[10px] text-[var(--muted-foreground)] select-none">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-blue-500" />
          Production Engineering Snippet
        </span>
        <span>{current.language} • Verified Logic</span>
      </div>
    </div>
  );
}
