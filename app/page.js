import Link from "next/link";
import Footer from "@/components/footer";
import HeroCover from "@/components/hero-cover";
import InteractiveBio from "@/components/interactive-bio";
import ReceiptsCard from "@/components/receipts-card";
import SevenActsStrip from "@/components/seven-acts-strip";
import ActBanner from "@/components/act-banner";
import ProjectCard from "@/components/project-card";
import SitesFanDeck from "@/components/sites-fan-deck";
import ScrollTransitMap from "@/components/scroll-transit-map";
import MotionReelStrip from "@/components/motion-reel-strip";
import FolioBook from "@/components/folio-book";
import HeroShowcase from "@/components/stages/HeroShowcase";
import CapabilitiesBento from "@/components/stages/CapabilitiesBento";
import ScrollCardArchive from "@/components/scroll-card-archive";
import TrophyCabinet from "@/components/trophy-cabinet";
import ExperienceTimeline from "@/components/experience-timeline";
import GitHubActivity from "@/components/github-activity";
import SectionTracker from "@/components/section-tracker";
import { ParallaxBox, ScrollTextMask, StickyStackCard } from "@/components/scroll-effects";
import { Reveal } from "@/components/motion-primitives";
import { getFeaturedProjects, projects } from "@/app/data/projects";
import { blogs } from "@/app/data/blogs";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const recentArticles = blogs.slice(0, 3);

  return (
    <main className="min-h-screen">
      <SectionTracker />

      {/* 0. Cover Stage — Full-Bleed "ta-da!" Figma Studio Scene */}
      <HeroCover />

      {/* 1. ACT 01 — Graphical Inline Icon Hero + "Receipts, not vibes." */}
      <section
        id="hero"
        className="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[var(--border)] bg-[var(--background)]"
      >
        <div className="editorial-container">
          <div className="max-w-5xl">
            <InteractiveBio />
            <ReceiptsCard />
          </div>
        </div>
      </section>

      {/* 2. Chapters Roadmap — "The story, in seven acts." + Infinite Ticker */}
      <SevenActsStrip />

      {/* 3. ACT 02 Interstitial Banner — Vermillion "Things with my fingerprints on them." */}
      <ActBanner
        id="act-making"
        variant="making"
        actNum="02"
        eyebrow="Act 02 of 07 · The making"
        prefix="Things with my"
        highlight="fingerprints"
        suffix="on them."
        description="Six featured AI & WebGL systems, twelve interactive builds, seven live transit lines, and screen proofs showing them running in production."
        anchors={[
          { code: "2.1", label: "Selected work", href: "#work" },
          { code: "2.2", label: "Sites & apps", href: "#sites" },
          { code: "2.3", label: "Open source", href: "#transit" },
          { code: "2.4", label: "Motion clips", href: "#motion" },
        ]}
        stickers={[
          { content: "🚀 Shipped", top: "4%", left: "14%", rotate: "-8deg" },
          { content: "⚛️ Next.js 15", top: "8%", left: "62%", rotate: "9deg" },
          { content: "✓ Zod Gate", top: "56%", left: "46%", rotate: "-5deg" },
          { content: "🤖 Multi-Agent", top: "64%", left: "6%", rotate: "6deg" },
        ]}
      />

      {/* 4. ACT 02.1 — Selected Work ("Stuff I couldn't stop building." + Giant 01/06 + Folder Cards + Folio Vol. 01) */}
      <section id="work" className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="editorial-container space-y-16">
          <ScrollTextMask>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
                  <span className="text-[#EF532D] font-bold">02.1</span>
                  <span>●</span>
                  <span>Selected Work · 2024 → 2026</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                  Stuff I couldn&apos;t stop building<span className="text-[#EF532D]">.</span>
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">
                  Six systems, architected and shipped end to end with live interactive stages.
                </p>
              </div>

              <div className="flex items-baseline gap-1 font-extrabold tabular-nums">
                <span className="text-4xl sm:text-5xl text-[var(--foreground)]">01</span>
                <span className="text-sm font-mono text-[var(--muted-foreground)]">
                  /{String(featuredProjects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </ScrollTextMask>

          {/* Interactive 3D Folio Vol. 01 + Live Workbench */}
          <div id="folio" className="space-y-14">
            <ParallaxBox speed={-0.04}>
              <FolioBook />
            </ParallaxBox>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-mono text-[var(--muted-foreground)]">
                  Live Stageshow Workbench
                </span>
                <ScrollTextMask>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                    Watch the pipelines run live.
                  </h3>
                </ScrollTextMask>
                <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
                  Switch between PrepAI&apos;s Zod validation gate, Deep Research&apos;s multi-agent
                  citation graph, and Architecture Visualizer&apos;s local Ollama node flow.
                </p>
              </div>
              <div className="lg:col-span-7">
                <ParallaxBox speed={0.04}>
                  <HeroShowcase />
                </ParallaxBox>
              </div>
            </div>
          </div>

          {/* Sticky Stacking Folder-Tab Project Cards */}
          <div className="relative pt-4">
            {featuredProjects.map((project, idx) => (
              <StickyStackCard
                key={project.slug}
                index={idx}
                total={featuredProjects.length}
              >
                <ProjectCard project={project} index={idx} isFeatured={true} />
              </StickyStackCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACT 02.2 — "Sites & apps I've built." Curved Fanning Deck */}
      <SitesFanDeck />

      {/* 6. ACT 02.3 — Sticky Scroll-Scrubbed "Open source Love!" Transit Map */}
      <section
        id="transit"
        className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/45"
      >
        <div className="editorial-container">
          <ScrollTransitMap />
        </div>
      </section>

      {/* 7. ACT 02.4 — Motion & Screen Clips + Scrubbable NLE Timeline */}
      <MotionReelStrip />

      {/* 8. ACT 03 — Systems & Capabilities Bento */}
      <section
        id="capabilities"
        className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/45"
      >
        <div className="editorial-container">
          <ScrollTextMask>
            <div className="max-w-xl mb-10">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
                <span className="text-[#2455FF] font-bold">03</span>
                <span>●</span>
                <span>The Systems</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)] mb-2">
                Systems &amp; Capabilities<span className="text-[#2455FF]">.</span>
              </h2>
              <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
                Bridging defensive AI orchestration with fast, type-safe web interfaces.
              </p>
            </div>
          </ScrollTextMask>

          <CapabilitiesBento />
        </div>
      </section>

      {/* 9. ACT 04 — Sunny Yellow Banner + Playing Card Spiral-to-Grid Archive */}
      <ActBanner
        id="act-archive"
        variant="archive"
        actNum="04"
        eyebrow="Act 04 of 07 · The archive"
        prefix="All of it, in"
        highlight="one spiral"
        suffix="."
        description="Twenty-two builds, from weekend ML models to full-stack platforms. Scroll to unwind the spiral into the playing-card deck, then pick one."
        anchors={[{ code: "4.1", label: "The index deck", href: "#archive" }]}
        stickers={[
          { content: "📁 ALL WORK", top: "8%", left: "24%", rotate: "-7deg" },
          { content: "✸ 22 PROJECTS", top: "48%", left: "58%", rotate: "8deg" },
          { content: "🖱 Pick one", top: "65%", left: "12%", rotate: "-4deg" },
        ]}
      />
      <ScrollCardArchive projects={projects} />

      {/* 10. ACT 05 — Sticky Split "Milestones & tiny trophies." + Work Timeline */}
      <TrophyCabinet />

      <section
        id="experience"
        className="py-16 md:py-24 border-b border-[var(--border)] bg-[var(--surface-subtle)]/45"
      >
        <div className="editorial-container">
          <ScrollTextMask>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                  Experience Timeline
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  Production frontend engineering, AI search automation, and Python tooling.
                </p>
              </div>
              <Link
                href="/about"
                className="text-xs font-mono text-[#E5484D] hover:underline inline-flex items-center gap-1.5"
              >
                Full resume &amp; certifications
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollTextMask>

          <Reveal delay={60}>
            <ExperienceTimeline />
          </Reveal>
        </div>
      </section>

      {/* 11. ACT 06 — Open Source & Engineering Telemetry */}
      <section id="activity" className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <ScrollTextMask>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                  Code &amp; Activity
                </h2>
              </ScrollTextMask>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Daily commits across production web applications, Streamlit ML models, and open-source utilities.
              </p>
              <div className="pt-2 space-y-2 text-xs font-mono text-[var(--muted-foreground)]">
                <div>Karachi, Pakistan (UTC +5)</div>
                <div>DHA Suffa University — BS AI</div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ParallaxBox speed={0.03}>
                <GitHubActivity />
              </ParallaxBox>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ACT 07 — Technical Journal */}
      <section id="journal" className="py-16 md:py-24">
        <div className="editorial-container">
          <ScrollTextMask>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                  Technical Journal
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  Engineering notes on system design, algorithms, and generative AI.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1.5"
              >
                Read all articles
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollTextMask>

          <div className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {recentArticles.map((article) => (
              <article
                key={article.slug}
                className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
              >
                <div className="max-w-2xl">
                  <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[#E5484D] transition-colors mb-1.5">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted-foreground)] flex-shrink-0 tabular-nums">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. ACT 08 — Electric Cobalt CTA + Directory + Bookmark + Colophon */}
      <div id="contact-cta">
        <Footer />
      </div>
    </main>
  );
}
