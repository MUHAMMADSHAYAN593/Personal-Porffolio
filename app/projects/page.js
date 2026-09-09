"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import LivePreviewBox from "@/components/live-preview-box";
import { categories, projects } from "@/app/data/projects";
import { Globe, ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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

  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
            Portfolio & Systems
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Selected Work
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Machine-learning applications, autonomous agents, and full-stack software products.
            Every project represents real problems, defensive architectures, and working code.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-12 border-b border-[var(--border)] text-xs font-mono">
          <span className="text-[var(--muted-foreground)] mr-2">Filter:</span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors inline-flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[var(--foreground)] text-[var(--background)] font-medium"
                    : "bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--border)]"
                }`}
              >
                {cat === "Live Projects" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                )}
                {cat}
                {cat === "Live Projects" && (
                  <span className="text-[10px] opacity-75">({liveProjects.length})</span>
                )}
              </button>
            );
          })}
          <span className="ml-auto text-[var(--muted-foreground)] hidden sm:inline">
            Showing {filteredProjects.length} of {projects.length}
          </span>
        </div>

        {/* Dedicated Live Projects Preview Showcase when "Live Projects" is selected */}
        {activeCategory === "Live Projects" && selectedLiveProject && (
          <section className="mb-16 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                  Active Live Deployment
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                  {selectedLiveProject.title}
                </h2>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                  {selectedLiveProject.subtitle}
                </p>
              </div>

              {/* Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                <span className="text-xs font-mono text-[var(--muted-foreground)] whitespace-nowrap">
                  Switch App:
                </span>
                <select
                  value={selectedLiveSlug}
                  onChange={(e) => setSelectedLiveSlug(e.target.value)}
                  className="px-3 py-1.5 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] text-xs font-mono focus:outline-none focus:border-blue-500"
                >
                  {liveProjects.map((lp) => (
                    <option key={lp.slug} value={lp.slug}>
                      {lp.title} ({lp.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Interactive Browser Preview Box */}
            <LivePreviewBox
              url={selectedLiveProject.liveUrl}
              title={selectedLiveProject.title}
            />

            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <Link
                href={`/projects/${selectedLiveProject.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                Read {selectedLiveProject.title} Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={selectedLiveProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
              >
                Open directly in new tab
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </section>
        )}

        {/* Featured Projects Section */}
        {featured.length > 0 && (
          <section className="mb-20">
            <div className="mb-8">
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider">
                Primary Case Studies
              </span>
            </div>
            <div className="space-y-4">
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

        {/* Archive / Additional Projects Section */}
        {archive.length > 0 && (
          <section className="pt-10 border-t border-[var(--border)]">
            <div className="mb-8 flex items-baseline justify-between">
              <div>
                <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">
                  Repository Archive
                </span>
                <h2 className="text-2xl font-bold text-[var(--foreground)]">
                  Additional Projects & Tools
                </h2>
              </div>
              <span className="text-xs font-mono text-[var(--muted-foreground)]">
                {archive.length} items
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            No projects found in category "{activeCategory}".
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
