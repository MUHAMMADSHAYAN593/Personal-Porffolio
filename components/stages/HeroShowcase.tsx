"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { RotateCcw } from "lucide-react";
import {
  Badge,
  Bar,
  Button,
  Caret,
  Collapse,
  Connector,
  Count,
  Field,
  Icon,
  Prompt,
  Row,
  Segmented,
  Spinner,
  Stage,
  States,
  Stream,
  Text,
  Window,
  type Act,
} from "@/kit";
import { SlidingTabs } from "@/components/motion-primitives";
import "./stages.css";

/* --------------------------------------------------------------------------
   Story 1: PrepAI — Structured LLM Dossier & Zod Validation Gate
   -------------------------------------------------------------------------- */

type PrepState = {
  phase: "idle" | "validating" | "verified";
  score: number;
  open: boolean;
  termStep: number;
};

const PREP_INITIAL: PrepState = { phase: "idle", score: 0, open: false, termStep: 0 };
const PREP_POSTER: PrepState = { phase: "verified", score: 88, open: true, termStep: 3 };

async function prepScript(a: Act<PrepState>) {
  await a.wait(650);
  await a.move({ at: "prep-run", x: 0.78, y: 0.55 });
  await a.click();
  await a.set({ phase: "validating", termStep: 1 });
  await a.move("prep-rest", { duration: 420 });
  await a.wait(450);
  await a.set({ termStep: 2 });
  await a.wait(550);
  await a.set({ phase: "verified", score: 88, open: true, termStep: 3 });
  await a.wait(2800);
  // Caused reset: click reset button inside app
  await a.move({ at: "prep-reset", x: 0.65, y: 0.55 });
  await a.click();
  await a.set({ open: false, phase: "idle", score: 0, termStep: 0 });
  await a.wait(550);
}

function PrepAIHero({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  return (
    <Stage<PrepState>
      width={680}
      height={420}
      compact={{ below: 560, width: 358, height: 396 }}
      initial={PREP_INITIAL}
      poster={PREP_POSTER}
      script={prepScript}
      cursor={{
        at: { wide: { x: 520, y: 315 }, compact: { x: 260, y: 245 } },
        ripple: true,
      }}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-hero"
    >
      {(s, _rect, layout) => {
        const compact = layout === "compact";
        return (
          <>
            <Window
              url="app.prepai.dev/dossier"
              className="sh-hero-win"
              sidebarWidth={152}
              sidebar={
                compact ? undefined : (
                  <nav className="sh-hero-side">
                    <div className="sh-hero-side__brand">
                      <Bar w={16} h={16} r={4} tone={5} />
                      <span className="sh-hero-side__name">PrepAI</span>
                    </div>
                    <div className="sh-hero-side__item" data-active>
                      <Icon name="file" size={13} />
                      <span>Dossier</span>
                    </div>
                    <div className="sh-hero-side__item">
                      <Bar w={13} h={13} r={3} tone={2} />
                      <Bar w={68} h={6} tone={2} />
                    </div>
                    <div className="sh-hero-side__item">
                      <Bar w={13} h={13} r={3} tone={2} />
                      <Bar w={54} h={6} tone={2} />
                    </div>
                  </nav>
                )
              }
            >
              <div className="sh-hero-main">
                <div className="sh-hero-head">
                  <div>
                    <Text className="sh-hero-title">Interview Dossier</Text>
                    <div className="sh-hero-sub">Solar-Pro LLM · Zod Schema Gate</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Button
                      size="small"
                      variant="ghost"
                      data-target="prep-reset"
                      style={{ opacity: s.phase === "verified" ? 1 : 0.35 }}
                    >
                      Reset
                    </Button>
                    <Button
                      size="small"
                      variant="primary"
                      data-target="prep-run"
                      icon={
                        s.phase === "validating" ? (
                          <Spinner size={12} />
                        ) : s.phase === "verified" ? (
                          <Icon name="check" size={12} />
                        ) : undefined
                      }
                    >
                      <States
                        value={s.phase}
                        states={{
                          idle: "Run Check",
                          validating: "Validating",
                          verified: "Verified",
                        }}
                      />
                    </Button>
                  </div>
                </div>

                <div className="sh-hero-dossier">
                  <Row
                    pad={12}
                    title={<Text style={{ fontWeight: 600, fontSize: 12.5 }}>Muhammad_Shayan_CV.pdf</Text>}
                    subtitle={<Text style={{ fontSize: 11 }}>Target: AI Systems Engineer</Text>}
                    meta={
                      <span className="sh-hero-score-wrap">
                        <Count value={s.score} duration={750} className="sh-hero-score" />
                        <span className="sh-hero-score-max">/100</span>
                      </span>
                    }
                  />

                  <Collapse open={s.open} reveal="drop">
                    <div className="sh-hero-gap-row">
                      <Row
                        pad={10}
                        title={<Text style={{ fontSize: 12 }}>7-Day Skill Gap Roadmap</Text>}
                        subtitle={<Text style={{ fontSize: 11 }}>STAR answers + Zod validated</Text>}
                        meta={
                          <Badge tone="success" icon={<Icon name="check" size={11} />}>
                            Schema OK
                          </Badge>
                        }
                      />
                    </div>
                  </Collapse>
                </div>

                {!compact && (
                  <div className="sh-hero-filler-list" data-crop>
                    <Row pad={8} title={<Bar w={164} h={7} tone={2} />} meta={<Bar w={48} h={16} r={8} tone={1} />} />
                    <Row pad={8} title={<Bar w={132} h={7} tone={2} />} meta={<Bar w={42} h={16} r={8} tone={1} />} />
                  </div>
                )}
              </div>
            </Window>

            {/* Satellite: Zod Schema Validation Terminal straddling sidebar / bottom */}
            <Window chrome="terminal" title="zod-gate.ts" className="sh-hero-term">
              <div className="sh-hero-term__body">
                <Prompt path="~/prepai">parse(DossierSchema)</Prompt>
                <div className="sh-hero-term__line" data-on={s.termStep >= 1 || undefined}>
                  <span className="dim">mode:</span> json_object
                </div>
                <div className="sh-hero-term__line" data-on={s.termStep >= 2 || undefined}>
                  <span className="dim">keys:</span> score, gaps, star
                </div>
                <div className="sh-hero-term__line" data-on={s.termStep >= 3 || undefined}>
                  <span className="ok">✓</span> Validated 0 errors
                </div>
                {s.termStep === 0 && (
                  <Prompt path="~/prepai">
                    <Caret />
                  </Prompt>
                )}
              </div>
            </Window>

            <span
              data-target="prep-rest"
              style={{
                position: "absolute",
                left: compact ? 260 : 520,
                top: compact ? 245 : 315,
                width: 4,
                height: 4,
              }}
            />
          </>
        );
      }}
    </Stage>
  );
}

/* --------------------------------------------------------------------------
   Story 2: Deep Research Agent — Multi-Agent Literature Synthesis
   -------------------------------------------------------------------------- */

const RESEARCH_TEXT =
  "Cross-encoder reranking over sparse BM25 candidates cuts citation hallucination by 64% across 12 anchored papers.";
const RESEARCH_WORDS = RESEARCH_TEXT.split(" ").length;

type ResearchState = {
  query: string;
  step: "idle" | "planning" | "retrieving" | "synthesizing" | "done";
  words: number;
};

const RES_INITIAL: ResearchState = {
  query: "Sparse attention & citation grounding",
  step: "idle",
  words: 0,
};
const RES_POSTER: ResearchState = {
  query: "Sparse attention & citation grounding",
  step: "done",
  words: RESEARCH_WORDS,
};

async function researchScript(a: Act<ResearchState>) {
  await a.wait(600);
  await a.move({ at: "res-run", x: 0.72, y: 0.55 });
  await a.click();
  await a.set({ step: "planning" });
  await a.move("res-rest", { duration: 400 });
  await a.wait(650);
  await a.set({ step: "retrieving" });
  await a.wait(750);
  await a.set({ step: "synthesizing" });
  for (let i = 1; i <= RESEARCH_WORDS; i++) {
    a.put({ words: i });
    await a.wait(48);
  }
  await a.set({ step: "done" });
  await a.wait(2800);
  await a.set({ step: "idle", words: 0 });
  await a.wait(500);
}

function ResearchHero({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  return (
    <Stage<ResearchState>
      width={680}
      height={420}
      compact={{ below: 560, width: 358, height: 400 }}
      initial={RES_INITIAL}
      poster={RES_POSTER}
      script={researchScript}
      cursor={{
        at: { wide: { x: 460, y: 310 }, compact: { x: 280, y: 300 } },
        ripple: true,
      }}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-hero"
    >
      {(s, rect, layout) => {
        const compact = layout === "compact";
        const synth = rect("res-synth");
        const activeIdx =
          s.step === "planning" ? 0 : s.step === "retrieving" ? 1 : s.step === "synthesizing" || s.step === "done" ? 2 : -1;
        const agents = ["Planner", "Retriever", "Verifier"];

        return (
          <>
            <Window url="research.shayan.dev" title="Deep Research Agent" className="sh-hero-win">
              <div className="sh-res-body">
                <div className="sh-res-prompt-row">
                  <div style={{ flex: 1 }}>
                    <Field label="Research topic" value={s.query} focused={false} />
                  </div>
                  <Button
                    size="medium"
                    variant="primary"
                    data-target="res-run"
                    icon={
                      s.step === "planning" || s.step === "retrieving" ? (
                        <Spinner size={12} />
                      ) : s.step === "done" ? (
                        <Icon name="check" size={12} />
                      ) : undefined
                    }
                  >
                    <States
                      value={s.step === "idle" ? "idle" : s.step === "done" ? "done" : "busy"}
                      states={{ idle: "Synthesize", busy: "Running", done: "Anchored" }}
                    />
                  </Button>
                </div>

                <div className="sh-res-graph">
                  <div className="sh-res-agents">
                    {agents.map((name, i) => (
                      <div
                        key={name}
                        className="sh-res-node"
                        data-target={`res-a-${i}`}
                        data-active={activeIdx >= i || undefined}
                      >
                        <span>{name}</span>
                        {activeIdx > i || s.step === "done" ? (
                          <Icon name="check" size={12} />
                        ) : activeIdx === i ? (
                          <Spinner size={11} />
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="sh-res-output" data-target="res-synth">
                    <div className="sh-res-output__head">
                      <span>Synthesis Briefing</span>
                      <Badge tone={s.step === "done" ? "success" : "neutral"}>
                        {s.step === "done" ? "12 Citations" : "uv 0.4 · Python"}
                      </Badge>
                    </div>
                    <div className="sh-res-stream">
                      {s.words > 0 ? (
                        <Stream text={RESEARCH_TEXT} count={s.words} />
                      ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 4 }}>
                          <Bar w="92%" h={7} tone={2} />
                          <Bar w="78%" h={7} tone={2} />
                          <Bar w="64%" h={7} tone={1} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Window>

            {!compact &&
              synth.width > 0 &&
              agents.map((_, i) => {
                const aRect = rect(`res-a-${i}`);
                if (!aRect.width) return null;
                return (
                  <Connector
                    key={i}
                    from={{ x: aRect.x + aRect.width, y: aRect.y + aRect.height / 2 }}
                    to={{ x: synth.x, y: synth.y + synth.height / 2 }}
                    route="step"
                    show={activeIdx >= i}
                    dots="end"
                  />
                );
              })}

            <span
              data-target="res-rest"
              style={{
                position: "absolute",
                left: compact ? 290 : 540,
                top: compact ? 310 : 320,
                width: 4,
                height: 4,
              }}
            />
          </>
        );
      }}
    </Stage>
  );
}

/* --------------------------------------------------------------------------
   Story 3: Architecture Visualizer — Natural Language to Node Graph
   -------------------------------------------------------------------------- */

type ArchState = {
  mode: number;
  step: number;
};

const ARCH_INITIAL: ArchState = { mode: 0, step: 0 };
const ARCH_POSTER: ArchState = { mode: 1, step: 3 };

async function archScript(a: Act<ArchState>) {
  await a.wait(650);
  await a.move("arch-play");
  await a.click();
  await a.set({ mode: 1, step: 1 });
  await a.move("arch-rest", { duration: 400 });
  await a.wait(700);
  await a.set({ step: 2 });
  await a.wait(700);
  await a.set({ step: 3 });
  await a.wait(2600);
  await a.move("arch-edit");
  await a.click();
  await a.set({ mode: 0, step: 0 });
  await a.wait(500);
}

function ArchHero({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  return (
    <Stage<ArchState>
      width={680}
      height={420}
      compact={{ below: 560, width: 358, height: 396 }}
      initial={ARCH_INITIAL}
      poster={ARCH_POSTER}
      script={archScript}
      cursor={{
        at: { wide: { x: 460, y: 310 }, compact: { x: 280, y: 290 } },
        ripple: true,
      }}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-hero"
    >
      {(s, rect, layout) => {
        const compact = layout === "compact";
        const n1 = rect("arch-n1");
        const n2 = rect("arch-n2");
        const n3 = rect("arch-n3");

        return (
          <>
            <Window url="canvas.shayan.dev" title="Architecture Visualizer" className="sh-hero-win">
              <div className="sh-arch-body">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <Field value="SaaS subscription billing cycle" focused={false} />
                  </div>
                  <Segmented
                    items={["Edit", "Play Flow"]}
                    targets={["arch-edit", "arch-play"]}
                    value={s.mode}
                    cursor="hand"
                  />
                </div>

                <div className="sh-arch-canvas">
                  <div
                    className="sh-arch-node"
                    data-target="arch-n1"
                    data-lit={s.step >= 1 || undefined}
                    style={{ left: compact ? 16 : 28, top: compact ? 24 : 52 }}
                  >
                    <div className="sh-arch-node__tag">01 · Trigger</div>
                    <div className="sh-arch-node__name">Auth Request</div>
                  </div>

                  <div
                    className="sh-arch-node"
                    data-target="arch-n2"
                    data-lit={s.step >= 2 || undefined}
                    style={{ left: compact ? 168 : 210, top: compact ? 86 : 112 }}
                  >
                    <div className="sh-arch-node__tag">02 · Branch</div>
                    <div className="sh-arch-node__name">Stripe Billing</div>
                  </div>

                  {!compact && (
                    <div
                      className="sh-arch-node"
                      data-target="arch-n3"
                      data-lit={s.step >= 3 || undefined}
                      style={{ left: 396, top: 44 }}
                    >
                      <div className="sh-arch-node__tag">03 · Sink</div>
                      <div className="sh-arch-node__name">Webhook Emit</div>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "var(--ss-text-faint)", fontFamily: "var(--ss-mono)" }}>
                  <span>Ollama local inference · React Flow</span>
                  <Badge tone={s.step === 3 ? "success" : "neutral"}>
                    {s.step === 0 ? "Ready" : `Step ${s.step} / 3`}
                  </Badge>
                </div>
              </div>
            </Window>

            {n1.width > 0 && n2.width > 0 && (
              <Connector
                from={{ x: n1.x + n1.width, y: n1.y + n1.height / 2 }}
                to={{ x: n2.x, y: n2.y + n2.height / 2 }}
                route="curve"
                arrow
                show={s.step >= 2}
              />
            )}
            {!compact && n2.width > 0 && n3.width > 0 && (
              <Connector
                from={{ x: n2.x + n2.width, y: n2.y + n2.height / 2 }}
                to={{ x: n3.x, y: n3.y + n3.height / 2 }}
                route="curve"
                arrow
                show={s.step >= 3}
              />
            )}

            <span
              data-target="arch-rest"
              style={{
                position: "absolute",
                left: compact ? 290 : 540,
                top: compact ? 310 : 320,
                width: 4,
                height: 4,
              }}
            />
          </>
        );
      }}
    </Stage>
  );
}

/* --------------------------------------------------------------------------
   Host Wrapper with Story Switcher & Explicit Replay
   -------------------------------------------------------------------------- */

const HERO_TABS = [
  { key: "prepai", label: "PrepAI" },
  { key: "research", label: "Research Agent" },
  { key: "arch", label: "Arch Visualizer" },
];

export default function HeroShowcase() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const stageTheme = isDark ? "dark" : "light";
  const accent = isDark ? "#EF5350" : "#111113";

  const [activeTab, setActiveTab] = useState(0);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="w-full space-y-3">
      {/* Host Controls: Story Switcher + Replay */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SlidingTabs
          items={HERO_TABS}
          activeIndex={activeTab}
          onSelect={(idx) => {
            setActiveTab(idx);
            setReplayKey((k) => k + 1);
          }}
        />
        <button
          type="button"
          onClick={() => setReplayKey((k) => k + 1)}
          aria-label="Replay active demo"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface-subtle)] text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Replay</span>
        </button>
      </div>

      {/* Stage Frame */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-well)] overflow-hidden shadow-sm">
        {activeTab === 0 && <PrepAIHero key={`prep-${replayKey}`} theme={stageTheme} accent={accent} />}
        {activeTab === 1 && <ResearchHero key={`res-${replayKey}`} theme={stageTheme} accent={accent} />}
        {activeTab === 2 && <ArchHero key={`arch-${replayKey}`} theme={stageTheme} accent={accent} />}
      </div>
    </div>
  );
}
