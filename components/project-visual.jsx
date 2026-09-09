"use client";

import React from "react";
import { Terminal, Database, Sparkles, Network, Cpu, Compass, Activity, Layers } from "lucide-react";

/**
 * Editorial technical diagrams / interface visual mockups for featured projects.
 * Avoids broken external image URLs and provides high-credibility technical visuals.
 */
export default function ProjectVisual({ slug, title }) {
  if (slug === "prepai") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="font-semibold text-[var(--foreground)]">PrepAI Engine v2.4</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">Zod Validated</span>
        </div>

        {/* Middle Diagrammatic Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded border border-[var(--border)] bg-[var(--card)]">
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">Input Layer</span>
            <div className="text-[var(--foreground)] font-semibold mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-500" /> Resume & JD
            </div>
            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">PDF/DOCX extraction → Prompt construction</p>
          </div>

          <div className="p-3 rounded border border-blue-500/30 bg-blue-500/5">
            <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">Defensive Schema</span>
            <div className="text-[var(--foreground)] font-semibold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Solar-Pro LLM
            </div>
            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">json_object mode → Zod schema pass</p>
          </div>

          <div className="p-3 rounded border border-[var(--border)] bg-[var(--card)]">
            <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">Output Dossier</span>
            <div className="text-[var(--foreground)] font-semibold mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-500" /> Fit: 88/100
            </div>
            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed">STAR answers + 7-Day skill gap plan</p>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Schema: interviewReportSchema.strict()</span>
          <span className="text-emerald-600 dark:text-emerald-400">Status: Verified OK</span>
        </div>
      </div>
    );
  }

  if (slug === "deep-research-agent") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-[var(--foreground)]">Agent Swarm Pipeline</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">Env: uv 0.4.x</span>
        </div>

        <div className="space-y-2.5 my-3">
          <div className="flex items-center justify-between p-2.5 rounded border border-[var(--border)] bg-[var(--card)]">
            <span className="font-medium text-[var(--foreground)]">01. Query Deconstruction</span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400">Planner Agent</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded border border-[var(--border)] bg-[var(--card)]">
            <span className="font-medium text-[var(--foreground)]">02. Paper Discovery & Citation Anchoring</span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400">Retrieval Subsystem</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded border border-[var(--border)] bg-[var(--card)]">
            <span className="font-medium text-[var(--foreground)]">03. Cross-Document Synthesis</span>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Synthesizer Agent</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Output: Markdown Literature Briefing</span>
          <span>Zero Hallucination Protocol</span>
        </div>
      </div>
    );
  }

  if (slug === "architecture-visualizer") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-500" />
            <span className="font-semibold text-[var(--foreground)]">React Flow Infinite Canvas</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">Local Ollama</span>
        </div>

        {/* Node Graph Mockup */}
        <div className="relative h-40 my-2 rounded border border-dashed border-[var(--border)] bg-[var(--card)] flex items-center justify-around px-4">
          <div className="px-3 py-2 rounded border border-blue-500/40 bg-blue-500/10 text-center">
            <span className="block text-[10px] text-[var(--muted-foreground)]">Trigger Node</span>
            <span className="font-semibold text-[var(--foreground)]">Auth Request</span>
          </div>
          <div className="h-0.5 w-8 bg-blue-500/60 relative">
            <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-blue-500 transform rotate-45"></div>
          </div>
          <div className="px-3 py-2 rounded border border-emerald-500/40 bg-emerald-500/10 text-center">
            <span className="block text-[10px] text-[var(--muted-foreground)]">Branch</span>
            <span className="font-semibold text-[var(--foreground)]">Stripe Billing</span>
          </div>
          <div className="h-0.5 w-8 bg-emerald-500/60 relative">
            <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-emerald-500 transform rotate-45"></div>
          </div>
          <div className="px-3 py-2 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-center">
            <span className="block text-[10px] text-[var(--muted-foreground)]">Sink</span>
            <span className="font-semibold text-[var(--foreground)]">Webhook Emit</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Execution Playback: Step 2 of 3</span>
          <span className="text-blue-600 dark:text-blue-400">100% Private Local Inference</span>
        </div>
      </div>
    );
  }

  if (slug === "roomify") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-[var(--foreground)]">Spatial Viewport</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">Three.js / WebGL</span>
        </div>

        {/* 3D Wireframe Representation */}
        <div className="relative h-40 my-2 rounded border border-[var(--border)] bg-[var(--card)] flex items-center justify-center overflow-hidden">
          <div className="w-28 h-28 border border-[var(--foreground)]/25 rounded transform rotate-45 flex items-center justify-center">
            <div className="w-20 h-20 border border-dashed border-blue-500/50 rounded flex items-center justify-center">
              <span className="text-[11px] font-sans font-semibold text-[var(--muted-foreground)]">Studio 3D</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Palette: Architectural Clean</span>
          <span>Centralized Token System</span>
        </div>
      </div>
    );
  }

  if (slug === "nyc-house-type-predictor") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500" />
            <span className="font-semibold text-[var(--foreground)]">NYC Real Estate ML Model</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">N = 48,895 listings</span>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2.5 my-3">
          <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--card)] text-center">
            <span className="text-[10px] text-[var(--muted-foreground)] block">ACCURACY</span>
            <span className="text-base font-bold text-[var(--foreground)]">84%</span>
          </div>
          <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--card)] text-center">
            <span className="text-[10px] text-[var(--muted-foreground)] block">F1-SCORE</span>
            <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">0.84</span>
          </div>
          <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--card)] text-center">
            <span className="text-[10px] text-[var(--muted-foreground)] block">SCALING</span>
            <span className="text-xs font-semibold text-[var(--foreground)]">Robust</span>
          </div>
        </div>

        <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--card)] text-[11px] space-y-1">
          <div className="flex justify-between">
            <span className="text-[var(--muted-foreground)]">Haversine NYC Center:</span>
            <span className="font-medium text-[var(--foreground)]">Times Sq Geodesic</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--muted-foreground)]">Class Balancing:</span>
            <span className="font-medium text-[var(--foreground)]">Subsample Weighting</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Engine: RandomForest + Streamlit</span>
          <span className="text-emerald-600 dark:text-emerald-400">Streamlit Deployed</span>
        </div>
      </div>
    );
  }

  if (slug === "cinematch") {
    return (
      <div className="w-full h-full min-h-[260px] md:min-h-[340px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-[var(--foreground)]">NLP Sparse Similarity Engine</span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--card)]">FastAPI + TF-IDF</span>
        </div>

        <div className="my-3 space-y-2">
          <div className="p-2 rounded border border-[var(--border)] bg-[var(--card)] flex items-center justify-between">
            <span className="text-[var(--muted-foreground)]">Movie Corpus</span>
            <span className="font-semibold text-[var(--foreground)]">42,000+ Titles</span>
          </div>
          <div className="p-2 rounded border border-blue-500/30 bg-blue-500/5 flex items-center justify-between">
            <span className="text-blue-600 dark:text-blue-400">Sparse Cosine Calc</span>
            <span className="font-semibold text-[var(--foreground)]">&lt; 50ms On Demand</span>
          </div>
          <div className="p-2 rounded border border-[var(--border)] bg-[var(--card)] flex items-center justify-between">
            <span className="text-[var(--muted-foreground)]">Memory Savings</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">&gt; 90% vs Dense Matrix</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--muted-foreground)]">
          <span>Weighted: Overviews + Taglines + Genres</span>
          <span className="text-blue-600 dark:text-blue-400">Render Deployed</span>
        </div>
      </div>
    );
  }

  // Fallback minimalist card for any other project
  return (
    <div className="w-full h-full min-h-[220px] rounded-lg border border-[var(--border)] bg-[var(--surface-subtle)] p-5 flex flex-col justify-between font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-2 border-b border-[var(--border)] text-[var(--muted-foreground)]">
        <span className="font-semibold text-[var(--foreground)]">{title}</span>
        <span>Technical Architecture</span>
      </div>
      <div className="py-6 flex items-center justify-center text-[var(--muted-foreground)]">
        <Cpu className="w-8 h-8 opacity-40" />
      </div>
      <div className="pt-2 border-t border-[var(--border)] text-[11px] text-[var(--muted-foreground)] flex justify-between">
        <span>Verified Codebase</span>
        <span>Muhammad Shayan</span>
      </div>
    </div>
  );
}
