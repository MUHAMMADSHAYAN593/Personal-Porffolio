"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  Badge,
  Bar,
  Chart,
  Code,
  Connector,
  Count,
  Icon,
  Stage,
  States,
  Text,
  Window,
  useReducedMotion,
  type Act,
} from "@/kit";
import "./stages.css";

const STEP = 140;
const LEAD = 320;

type Beat = { on: boolean };
const BEFORE: Beat = { on: false };
const AFTER: Beat = { on: true };

// Stable module-level script references so ResizeObserver updates never abort running animations
const heroLoopScript = async (a: Act<Beat>) => {
  await a.wait(500);
  await a.set({ on: true });
  await a.wait(3200);
  await a.set({ on: false });
  await a.wait(800);
};

const makeOnceBeat = (i: number) => async (a: Act<Beat>) => {
  await a.wait(LEAD + i * STEP);
  await a.set({ on: true });
};

const BEAT_2 = makeOnceBeat(2);
const BEAT_3 = makeOnceBeat(3);
const BEAT_4 = makeOnceBeat(4);

function usePictureWidth(defaultWidth = 360) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(defaultWidth);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const measure = () => setWidth(Math.max(240, Math.floor(node.getBoundingClientRect().width)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

function useInViewOnce(delay: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => setSeen(true), delay);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);
  return [ref, seen] as const;
}

/* ---------------- Tile 1: Hero UI (2x1, ONLY Window in grid, calm loop) ---------------- */

function MultiAgentTile({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  const [ref, width] = usePictureWidth(680);
  const compact = width < 520;
  return (
    <section className="sh-tile sh-tile--hero">
      <p className="sh-tile__copy">
        <strong>Multi-agent research pipelines.</strong> Queries split into retrieval, verification, and synthesis.
      </p>
      <div ref={ref} className="sh-tile__picture sh-bt-hero">
        <Stage<Beat>
          width={width}
          height={224}
          initial={BEFORE}
          poster={AFTER}
          play="loop"
          script={heroLoopScript}
          theme={theme}
          greys="cool"
          accent={accent}
        >
          {(s, rect) => {
            const synth = rect("bt-synth");
            const workers = ["Planner", "Retriever", "Fact-Check"];
            return (
              <>
                <Window title="Deep Research" className="sh-bt-win">
                  <div className="sh-bt-win-body">
                    <div className="sh-bt-flow">
                      <div className="sh-bt-workers">
                        {workers.map((w, i) => (
                          <div key={w} className="sh-bt-worker" data-target={`bt-w-${i}`}>
                            <Text>{w}</Text>
                          </div>
                        ))}
                      </div>
                      <div className="sh-bt-synth" data-target="bt-synth">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <Text style={{ fontWeight: 600, fontSize: 12 }}>Synthesis Report</Text>
                          <Badge tone={s.on ? "success" : "neutral"}>
                            <States
                              value={s.on ? "done" : "wait"}
                              states={{ wait: "Pending", done: "Verified" }}
                            />
                          </Badge>
                        </div>
                        <Bar w="88%" h={6} tone={2} />
                        <Bar w="64%" h={6} tone={1} />
                      </div>
                    </div>
                  </div>
                </Window>
                {!compact &&
                  synth.width > 0 &&
                  workers.map((_, i) => {
                    const r = rect(`bt-w-${i}`);
                    if (!r.width) return null;
                    return (
                      <Connector
                        key={i}
                        from={{ x: r.x + r.width, y: r.y + r.height / 2 }}
                        to={{ x: synth.x, y: synth.y + synth.height / 2 }}
                        route="step"
                        show={s.on}
                        dots="end"
                      />
                    );
                  })}
              </>
            );
          }}
        </Stage>
      </div>
    </section>
  );
}

/* ---------------- Tile 2: Display Stat (1x1, NO Window) ---------------- */

function ModelAccuracyTile() {
  const reduced = useReducedMotion();
  const [ref, seen] = useInViewOnce(LEAD + STEP);
  return (
    <section ref={ref} className="sh-tile sh-tile--stat">
      <span className="sh-stat-lead">
        <Icon name="bolt" filled size={14} />
        NYC Real Estate ML
      </span>
      <span className="sh-stat-number">
        <Count value={seen || reduced ? 84 : 0} duration={1100} />
        <span className="sh-stat-unit">%</span>
      </span>
      <span className="sh-stat-label">
        weighted F1-score trained across 48,895 Airbnb listings with Haversine distance features.
      </span>
    </section>
  );
}

/* ---------------- Tile 3: One Component (1x1, Zod Card — replays cleanly on hover) ---------------- */

const ZOD_LINES = [
  "const Dossier = z.object({",
  "  score: z.number().max(100),",
  "  gaps: z.array(GapSchema),",
  "});",
];

function ZodComponentTile({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  const [ref, width] = usePictureWidth(360);
  const [hoverRun, setHoverRun] = useState(0);
  return (
    <section className="sh-tile" onMouseEnter={() => setHoverRun((n) => n + 1)}>
      <p className="sh-tile__copy">
        <strong>Defensive AI contracts.</strong> Strict Zod gates prevent malformed JSON from hitting the UI.
      </p>
      <div ref={ref} className="sh-tile__picture sh-bt-comp">
        <Stage<Beat>
          key={hoverRun}
          width={width}
          height={196}
          initial={BEFORE}
          poster={AFTER}
          play="once"
          script={BEAT_2}
          theme={theme}
          greys="cool"
          accent={accent}
        >
          {(s) => (
            <div className="sh-bt-zod-card">
              <div className="sh-bt-zod-head">
                <span className="sh-bt-zod-title">interviewReportSchema</span>
                <Badge
                  tone={s.on ? "success" : "warning"}
                  icon={s.on ? <Icon name="check" size={11} /> : undefined}
                >
                  <States
                    value={s.on ? "ok" : "raw"}
                    states={{ raw: "Raw JSON", ok: "Zod Passed" }}
                  />
                </Badge>
              </div>
              <Code lines={ZOD_LINES} numbers={false} style={{ fontSize: 10.5 }} />
            </div>
          )}
        </Stage>
      </div>
    </section>
  );
}

/* ---------------- Tile 4: Diagram (1x1, Sparse TF-IDF Latency — replays on hover) ---------------- */

const LATENCY_BARS = [18, 34, 24, 42, 28, 36, 22];

function SparseDiagramTile({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  const [ref, width] = usePictureWidth(360);
  const [hoverRun, setHoverRun] = useState(0);
  return (
    <section className="sh-tile" onMouseEnter={() => setHoverRun((n) => n + 1)}>
      <p className="sh-tile__copy">
        <strong>Sparse TF-IDF similarity.</strong> Instant vector queries across 42,000+ titles with 90% less RAM.
      </p>
      <div ref={ref} className="sh-tile__picture sh-bt-diag">
        <Stage<Beat>
          key={hoverRun}
          width={width}
          height={196}
          initial={BEFORE}
          poster={AFTER}
          play="once"
          script={BEAT_3}
          theme={theme}
          greys="cool"
          accent={accent}
        >
          {(s) => (
            <div className="sh-bt-diag-box">
              <div className="sh-bt-diag-top">
                <span className="sh-bt-diag-val">
                  &lt;<Count value={s.on ? 50 : 120} duration={900} />ms
                </span>
                <span className="sh-bt-diag-sub">FastAPI · Pickle</span>
              </div>
              <Chart
                kind="bars"
                data={LATENCY_BARS}
                width={Math.max(180, width - 48)}
                height={88}
                show={s.on}
              />
            </div>
          )}
        </Stage>
      </div>
    </section>
  );
}

/* ---------------- Tile 5: Collection (1x1, Bleeding Stack Chips — replays on hover) ---------------- */

const STACK_ROWS = [
  ["Next.js", "React", "TypeScript", "Tailwind", "Three.js", "Expo"],
  ["Python", "FastAPI", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
  ["Node.js", "Express", "MongoDB", "Ollama", "OpenRouter", "Zod"],
];

function StackCollectionTile({ theme, accent }: { theme: "light" | "dark"; accent: string }) {
  const [ref, width] = usePictureWidth(360);
  const [hoverRun, setHoverRun] = useState(0);
  return (
    <section className="sh-tile" onMouseEnter={() => setHoverRun((n) => n + 1)}>
      <p className="sh-tile__copy">
        <strong>Full-stack &amp; ML runtime.</strong> Production interfaces paired with Python data pipelines.
      </p>
      <div ref={ref} className="sh-tile__picture sh-bt-coll">
        <Stage<Beat>
          key={hoverRun}
          width={width}
          height={196}
          initial={BEFORE}
          poster={AFTER}
          play="once"
          script={BEAT_4}
          theme={theme}
          greys="cool"
          accent={accent}
        >
          {(s) => (
            <div className="sh-bt-rows" data-on={s.on || undefined}>
              {STACK_ROWS.map((row, r) => (
                <div
                  key={r}
                  className="sh-bt-row"
                  style={{
                    ["--dir" as string]: r % 2 === 0 ? -1 : 1,
                    ["--off" as string]: `${[-28, -56, -16][r]}px`,
                  }}
                >
                  {row.map((item) => (
                    <span key={item} className="sh-bt-chip">
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          )}
        </Stage>
      </div>
    </section>
  );
}

export default function CapabilitiesBento() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const theme = isDark ? "dark" : "light";
  const accent = isDark ? "#EF5350" : "#2563EB";

  return (
    <div className="sh-bento-grid">
      <MultiAgentTile theme={theme} accent={accent} />
      <ModelAccuracyTile />
      <ZodComponentTile theme={theme} accent={accent} />
      <SparseDiagramTile theme={theme} accent={accent} />
      <StackCollectionTile theme={theme} accent={accent} />
    </div>
  );
}
