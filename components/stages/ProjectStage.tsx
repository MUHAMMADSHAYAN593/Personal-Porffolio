"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { RotateCcw } from "lucide-react";
import {
  Badge,
  Bar,
  Card,
  Chart,
  Code,
  Collapse,
  Connector,
  Count,
  Field,
  Icon,
  Phone,
  Prompt,
  Row,
  Segmented,
  Stage,
  States,
  Stream,
  Text,
  Window,
  type Act,
} from "@/kit";
import "./stages.css";

type CommonProps = {
  theme: "light" | "dark";
  accent: string;
};

/* ---------------- 1. PrepAI ---------------- */

type PrepS = { on: boolean; score: number };
const prepPlay = async (a: Act<PrepS>) => {
  await a.wait(450);
  await a.set({ on: true, score: 88 });
  await a.wait(3200);
  await a.set({ on: false, score: 0 });
  await a.wait(700);
};

function PrepAIStage({ theme, accent }: CommonProps) {
  return (
    <Stage<PrepS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ on: false, score: 0 }}
      poster={{ on: true, score: 88 }}
      play="loop"
      script={prepPlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s, _r, layout) => (
        <>
          <Window url="prepai.dev/report" className="sh-proj-win">
            <div className="sh-proj-body">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: 600, fontSize: 13 }}>Candidate Evaluation</Text>
                <Badge tone={s.on ? "success" : "neutral"} icon={s.on ? <Icon name="check" size={11} /> : undefined}>
                  <States value={s.on ? "ok" : "wait"} states={{ wait: "Parsing", ok: "Zod Validated" }} />
                </Badge>
              </div>
              <Card pad="small" gap={8}>
                <Row
                  pad={8}
                  title={<Text style={{ fontWeight: 600, fontSize: 12 }}>Full-Stack AI Engineer</Text>}
                  subtitle={<Text style={{ fontSize: 11 }}>Resume + Job Description Match</Text>}
                  meta={
                    <span className="sh-hero-score-wrap">
                      <Count value={s.score} duration={800} className="sh-hero-score" />
                      <span className="sh-hero-score-max">/100</span>
                    </span>
                  }
                />
                <Collapse open={s.on} reveal="drop">
                  <Row
                    pad={8}
                    title={<Text style={{ fontSize: 12 }}>7-Day Preparation Roadmap</Text>}
                    subtitle={<Text style={{ fontSize: 11 }}>STAR behavioral answers ready</Text>}
                    meta={<Badge tone="accent">Ready</Badge>}
                  />
                </Collapse>
              </Card>
              {layout === "wide" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <Bar w="78%" h={6} tone={2} />
                  <Bar w="56%" h={6} tone={1} />
                </div>
              )}
            </div>
          </Window>

          <Card pad="small" gap={6} lift className="sh-proj-sat">
            <Text style={{ fontSize: 11, fontWeight: 600, fontFamily: "var(--ss-mono)" }}>Solar-Pro JSON Gate</Text>
            <Code lines={["z.object({ fit: 88, gaps: 3 })"]} numbers={false} style={{ fontSize: 10 }} />
          </Card>
        </>
      )}
    </Stage>
  );
}

/* ---------------- 2. Deep Research Agent ---------------- */

const DR_LINE = "12 peer-reviewed citations anchored across 3 synthesis passes.";
const DR_WORDS = DR_LINE.split(" ").length;
type DRS = { step: number; words: number };

const drPlay = async (a: Act<DRS>) => {
  await a.wait(400);
  await a.set({ step: 1 });
  await a.wait(500);
  await a.set({ step: 2 });
  for (let i = 1; i <= DR_WORDS; i++) {
    a.put({ words: i });
    await a.wait(45);
  }
  await a.set({ step: 3 });
  await a.wait(3000);
  await a.set({ step: 0, words: 0 });
  await a.wait(700);
};

function DeepResearchStage({ theme, accent }: CommonProps) {
  return (
    <Stage<DRS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ step: 0, words: 0 }}
      poster={{ step: 3, words: DR_WORDS }}
      play="loop"
      script={drPlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s, rect, layout) => {
        const compact = layout === "compact";
        const out = rect("pdr-out");
        const agents = ["Planner", "Retriever", "Synthesizer"];
        return (
          <>
            <Window title="Deep Research Agent" className="sh-proj-win">
              <div className="sh-proj-body">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ fontWeight: 600, fontSize: 13 }}>Autonomous Literature Review</Text>
                  <Badge tone={s.step >= 3 ? "success" : "neutral"}>uv · Python</Badge>
                </div>
                <div className="sh-res-graph" style={{ gridTemplateColumns: compact ? "1fr" : "112px 1fr", gap: compact ? 10 : 38 }}>
                  <div className="sh-res-agents">
                    {agents.map((name, i) => (
                      <div key={name} className="sh-res-node" data-target={`pdr-${i}`} data-active={s.step > i || undefined}>
                        <span>{name}</span>
                        {s.step > i ? <Icon name="check" size={11} /> : null}
                      </div>
                    ))}
                  </div>
                  <div className="sh-res-output" data-target="pdr-out" style={{ minHeight: 102 }}>
                    <Text style={{ fontSize: 11.5, fontWeight: 600 }}>Executive Briefing</Text>
                    <div className="sh-res-stream">
                      {s.words > 0 ? <Stream text={DR_LINE} count={s.words} /> : <Bar w="86%" h={6} tone={2} />}
                    </div>
                  </div>
                </div>
              </div>
            </Window>
            {!compact &&
              out.width > 0 &&
              agents.map((_, i) => {
                const ar = rect(`pdr-${i}`);
                if (!ar.width) return null;
                return (
                  <Connector
                    key={i}
                    from={{ x: ar.x + ar.width, y: ar.y + ar.height / 2 }}
                    to={{ x: out.x, y: out.y + out.height / 2 }}
                    route="step"
                    show={s.step >= i + 1}
                    dots="end"
                  />
                );
              })}
          </>
        );
      }}
    </Stage>
  );
}

/* ---------------- 3. Architecture Visualizer ---------------- */

type ArchS = { step: number };
const archPlay = async (a: Act<ArchS>) => {
  await a.wait(400);
  await a.set({ step: 1 });
  await a.wait(480);
  await a.set({ step: 2 });
  await a.wait(480);
  await a.set({ step: 3 });
  await a.wait(3000);
  await a.set({ step: 0 });
  await a.wait(700);
};

function ArchStage({ theme, accent }: CommonProps) {
  return (
    <Stage<ArchS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ step: 0 }}
      poster={{ step: 3 }}
      play="loop"
      script={archPlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s, rect, layout) => {
        const compact = layout === "compact";
        const n1 = rect("pa-1");
        const n2 = rect("pa-2");
        const n3 = rect("pa-3");
        return (
          <>
            <Window url="canvas.local:3000" className="sh-proj-win">
              <div className="sh-proj-body" style={{ height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <Field value="Billing + webhook pipeline" focused={false} style={{ flex: 1 }} />
                  <Badge tone="accent">Ollama</Badge>
                </div>
                <div className="sh-arch-canvas" style={{ minHeight: 168 }}>
                  <div className="sh-arch-node" data-target="pa-1" data-lit={s.step >= 1 || undefined} style={{ left: 16, top: 24, width: 112 }}>
                    <div className="sh-arch-node__tag">Trigger</div>
                    <div className="sh-arch-node__name">Auth API</div>
                  </div>
                  <div className="sh-arch-node" data-target="pa-2" data-lit={s.step >= 2 || undefined} style={{ left: compact ? 156 : 186, top: compact ? 84 : 78, width: 118 }}>
                    <div className="sh-arch-node__tag">Branch</div>
                    <div className="sh-arch-node__name">Stripe Plan</div>
                  </div>
                  {!compact && (
                    <div className="sh-arch-node" data-target="pa-3" data-lit={s.step >= 3 || undefined} style={{ left: 346, top: 26, width: 118 }}>
                      <div className="sh-arch-node__tag">Sink</div>
                      <div className="sh-arch-node__name">Webhook</div>
                    </div>
                  )}
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
          </>
        );
      }}
    </Stage>
  );
}

/* ---------------- 4. Roomify ---------------- */

type RoomS = { view: number; scale: number };
const roomPlay = async (a: Act<RoomS>) => {
  await a.wait(600);
  await a.set({ view: 1, scale: 1 });
  await a.wait(3000);
  await a.set({ view: 0, scale: 0 });
  await a.wait(800);
};

function RoomifyStage({ theme, accent }: CommonProps) {
  return (
    <Stage<RoomS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ view: 0, scale: 0 }}
      poster={{ view: 1, scale: 1 }}
      play="loop"
      script={roomPlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s) => (
        <Window url="roomify-three-indol.vercel.app" className="sh-proj-win">
          <div className="sh-proj-body" style={{ height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <Text style={{ fontWeight: 600, fontSize: 13 }}>Spatial Studio</Text>
              <Segmented items={["Plan", "3D Mesh"]} value={s.view} />
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 8,
                border: "1px solid var(--ss-line)",
                background: "var(--ss-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: 132,
                  height: 92,
                  border: "1.5px solid var(--ss-accent)",
                  borderRadius: 8,
                  background: "var(--ss-surface)",
                  transform: s.scale ? "perspective(420px) rotateX(28deg) rotateZ(-16deg)" : "none",
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--ss-shadow-card)",
                }}
              >
                <span style={{ fontSize: 11, fontFamily: "var(--ss-mono)", color: "var(--ss-text-strong)", fontWeight: 600 }}>
                  4.8m × 3.6m
                </span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "var(--ss-mono)", color: "var(--ss-text-faint)" }}>
              <span>Three.js WebGL</span>
              <span>Unified Design Tokens</span>
            </div>
          </div>
        </Window>
      )}
    </Stage>
  );
}

/* ---------------- 5. NYC House Type Predictor ---------------- */

type NycS = { on: boolean };
const nycPlay = async (a: Act<NycS>) => {
  await a.wait(450);
  await a.set({ on: true });
  await a.wait(3200);
  await a.set({ on: false });
  await a.wait(700);
};

function NYCHouseStage({ theme, accent }: CommonProps) {
  return (
    <Stage<NycS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ on: false }}
      poster={{ on: true }}
      play="loop"
      script={nycPlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s, _r, layout) => (
        <Window url="nyc-house-predictor.streamlit.app" className="sh-proj-win">
          <div className="sh-proj-body">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: 600, fontSize: 13 }}>Property Classification</Text>
              <Badge tone="success">48,895 listings</Badge>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Card pad="small" gap={4}>
                <Text style={{ fontSize: 10.5, color: "var(--ss-text-faint)" }}>Weighted F1</Text>
                <span style={{ fontSize: 22, fontWeight: 700, color: "var(--ss-text-strong)", fontVariantNumeric: "tabular-nums" }}>
                  <Count value={s.on ? 84 : 0} duration={850} />%
                </span>
              </Card>
              <Card pad="small" gap={4}>
                <Text style={{ fontSize: 10.5, color: "var(--ss-text-faint)" }}>Geodesic Anchor</Text>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>Times Sq (km)</Text>
              </Card>
            </div>
            <Chart
              data={[28, 36, 44, 52, 68, 76, 84]}
              width={layout === "compact" ? 270 : 450}
              height={76}
              show={s.on}
            />
          </div>
        </Window>
      )}
    </Stage>
  );
}

/* ---------------- 6. CineMatch ---------------- */

type CineS = { q: string; open: boolean };
const cinePlay = async (a: Act<CineS>) => {
  await a.wait(450);
  await a.type("q", "Inception", { interval: 50 });
  await a.wait(250);
  await a.set({ open: true });
  await a.wait(3000);
  await a.set({ open: false, q: "" });
  await a.wait(650);
};

function CineMatchStage({ theme, accent }: CommonProps) {
  return (
    <Stage<CineS>
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      initial={{ q: "", open: false }}
      poster={{ q: "Inception", open: true }}
      play="loop"
      script={cinePlay}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {(s) => (
        <Window url="cinematch.onrender.com" className="sh-proj-win">
          <div className="sh-proj-body">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: 600, fontSize: 13 }}>Sparse TF-IDF Engine</Text>
              <Badge tone="accent">&lt; 50ms</Badge>
            </div>
            <Field value={s.q} placeholder="Search 42,000+ films..." focused={!s.open} />
            <Collapse open={s.open} reveal="drop">
              <div className="sh-hero-dossier">
                <Row
                  pad={8}
                  title={<Text style={{ fontWeight: 600, fontSize: 12 }}>Interstellar</Text>}
                  subtitle={<Text style={{ fontSize: 10.5 }}>Sci-Fi · Sparse Cosine Match</Text>}
                  meta={<Badge tone="success">94%</Badge>}
                />
                <Row
                  pad={8}
                  title={<Text style={{ fontWeight: 600, fontSize: 12 }}>Shutter Island</Text>}
                  subtitle={<Text style={{ fontSize: 10.5 }}>Thriller · Narrative Vector</Text>}
                  meta={<Badge tone="neutral">89%</Badge>}
                />
              </div>
            </Collapse>
          </div>
        </Window>
      )}
    </Stage>
  );
}

/* ---------------- Mobile Phone Stage (Restate / React Native Movie App) ---------------- */

function MobileProjectStage({ title, subtitle, theme, accent }: CommonProps & { title: string; subtitle: string }) {
  return (
    <Stage
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {() => (
        <div className="sh-proj-phone-wrap">
          <Phone width={246} frame="silver" dark={theme === "dark"}>
            <div className="sh-proj-phone-screen">
              <Text style={{ fontWeight: 700, fontSize: 16 }}>{title}</Text>
              <Text style={{ fontSize: 12, color: "var(--ss-text-faint)" }}>{subtitle}</Text>
              <Card pad="small" gap={8}>
                <Row pad={6} title={<Text style={{ fontSize: 13, fontWeight: 600 }}>Live API Feed</Text>} meta={<Badge tone="success">Expo</Badge>} />
                <Bar w="85%" h={7} tone={2} />
                <Bar w="62%" h={7} tone={1} />
              </Card>
            </div>
          </Phone>
        </div>
      )}
    </Stage>
  );
}

/* ---------------- Generic Archive Technical Stage ---------------- */

function GenericProjectStage({ title, subtitle, theme, accent }: CommonProps & { title: string; subtitle: string }) {
  return (
    <Stage
      width={560}
      height={320}
      compact={{ below: 480, width: 340, height: 280 }}
      theme={theme}
      greys="cool"
      accent={accent}
      className="sh-proj"
    >
      {() => (
        <Window title={title} className="sh-proj-win">
          <div className="sh-proj-body">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: 600, fontSize: 13 }}>{title}</Text>
              <Badge tone="neutral">Architecture</Badge>
            </div>
            <Text style={{ fontSize: 11.5, color: "var(--ss-text)" }} wrap>
              {subtitle}
            </Text>
            <Card pad="small" gap={8}>
              <Prompt path="~/project">status --verify</Prompt>
              <Bar w="82%" h={6} tone={2} />
              <Bar w="64%" h={6} tone={1} />
            </Card>
          </div>
        </Window>
      )}
    </Stage>
  );
}

/* ---------------- Public Export ---------------- */

export default function ProjectStage({
  slug,
  title,
  subtitle = "",
  category = "",
}: {
  slug: string;
  title: string;
  subtitle?: string;
  category?: string;
}) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = isDark ? "dark" : "light";
  const accent = isDark ? "#EF5350" : "#2563EB";
  const [run, setRun] = useState(0);

  const hasAnimation = [
    "prepai",
    "deep-research-agent",
    "architecture-visualizer",
    "roomify",
    "nyc-house-type-predictor",
    "cinematch",
  ].includes(slug);

  const renderStage = () => {
    switch (slug) {
      case "prepai":
        return <PrepAIStage key={run} theme={theme} accent={accent} />;
      case "deep-research-agent":
        return <DeepResearchStage key={run} theme={theme} accent={accent} />;
      case "architecture-visualizer":
        return <ArchStage key={run} theme={theme} accent={accent} />;
      case "roomify":
        return <RoomifyStage key={run} theme={theme} accent={accent} />;
      case "nyc-house-type-predictor":
        return <NYCHouseStage key={run} theme={theme} accent={accent} />;
      case "cinematch":
        return <CineMatchStage key={run} theme={theme} accent={accent} />;
      case "restate":
      case "react-native-movie-app":
        return <MobileProjectStage title={title} subtitle={subtitle || category} theme={theme} accent={accent} />;
      default:
        return <GenericProjectStage title={title} subtitle={subtitle || category} theme={theme} accent={accent} />;
    }
  };

  return (
    <div className="space-y-2">
      <div className="sh-proj-frame">
        {renderStage()}
      </div>
      {hasAnimation && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setRun((r) => r + 1);
            }}
            aria-label={`Replay ${title} animation`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface-subtle)] text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Replay demo</span>
          </button>
        </div>
      )}
    </div>
  );
}
