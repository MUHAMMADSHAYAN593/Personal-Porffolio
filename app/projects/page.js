"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import LivePreviewBox from "@/components/live-preview-box";
import { SlidingTabs } from "@/components/motion-primitives";
import { categories, projects } from "@/app/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = categories[activeIdx];

  const liveProjects = projects.filter((p) => Boolean(p.liveUrl));
  const [selectedLiveSlug, setSelectedLiveSlug] = useState(
    liveProjects[0]?.slug || "roomify"
  );

  const selectedLiveProject =
    liveProjects.find((p) => p.slug === selectedLiveSlug) || liveProjects[0];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : activeCategory === "Live Projects"
      ? liveProjects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const featured = filteredProjects.filter((p) => p.featured);
  const archive = filteredProjects.filter((p) => !p.featured);

  const tabItems = categories.map((cat) => ({
    key: cat,
    label: cat,
    dot: cat === "Live Projects",
    count:
      cat === "All"
        ? projects.length
        : cat === "Live Projects"
        ? liveProjects.length
        : undefined,
  }));

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <div className="editorial-container">
        {/* Header */}
        <div className="max-w-2xl mb-10 hero-enter hero-enter-1">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Selected Work
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Machine-learning applications, autonomous research pipelines, and full-stack software
            built around defensive architectures and working code.
          </p>
        </div>

        {/* Animated Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-10 border-b border-[var(--border)] hero-enter hero-enter-2">
          <SlidingTabs
            items={tabItems}
            activeIndex={activeIdx}
            onSelect={(idx) => setActiveIdx(idx)}
          />
          <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
            Showing {filteredProjects.length} of {projects.length}
          </span>
        </div>

        {/* Live Deployments Interactive Preview */}
        {activeCategory === "Live Projects" && selectedLiveProject && (
          <section className="mb-16 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live Deployment
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  {selectedLiveProject.title}
                </h2>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  {selectedLiveProject.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <label
                  htmlFor="live-app-select"
                  className="text-xs font-mono text-[var(--muted-foreground)] whitespace-nowrap"
                >
                  App:
                </label>
                <select
                  id="live-app-select"
                  value={selectedLiveSlug}
                  onChange={(e) => setSelectedLiveSlug(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-xs font-mono focus:outline-none focus:border-[var(--accent)]"
                >
                  {liveProjects.map((lp) => (
                    <option key={lp.slug} value={lp.slug}>
                      {lp.title} ({lp.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <LivePreviewBox
              url={selectedLiveProject.liveUrl}
              title={selectedLiveProject.title}
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <Link
                href={`/projects/${selectedLiveProject.slug}`}
                className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
              >
                Read {selectedLiveProject.title} case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={selectedLiveProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
              >
                Open in new tab
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </section>
        )}

        {/* Featured Case Studies */}
        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-mono text-[var(--muted-foreground)] mb-2">
              Primary Case Studies
            </h2>
            <div>
              {featured.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={idx}
                  isFeatured={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* Archive Grid */}
        {archive.length > 0 && (
          <section className="pt-10 border-t border-[var(--border)]">
            <div className="mb-8 flex items-baseline justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Additional Projects &amp; Tools
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
                {archive.length} projects
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {archive.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={idx}
                  isFeatured={false}
                />
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[var(--muted-foreground)] font-mono text-sm">
            No projects found in &quot;{activeCategory}&quot;.
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
