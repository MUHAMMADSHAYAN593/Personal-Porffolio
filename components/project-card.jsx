"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import ProjectStage from "@/components/stages/ProjectStage";

export default function ProjectCard({ project, index, isFeatured = false }) {
  const isEven = index % 2 === 0;

  if (isFeatured) {
    const labelNum = project.number || `0${index + 1}`;
    return (
      <article className="group pt-7">
        {/* Protruding Signature Folder Tab (matches Image 4) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-t-xl border-t-[1.5px] border-x-[1.5px] border-[#18181b] dark:border-white/30 bg-[#EF532D] text-[#111113] text-xs font-bold -mb-[1.5px] relative z-10 shadow-xs">
          <span className="px-1.5 py-0.5 rounded-full bg-[#111113] text-white text-[10px] font-mono tabular-nums">
            {labelNum}
          </span>
          <span>{project.title}</span>
        </div>

        <div className="rounded-b-2xl rounded-tr-2xl folio-hard-card bg-[var(--card)] p-6 sm:p-8 md:p-10">
          <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
              isEven ? "" : "lg:grid-flow-dense"
            }`}
          >
          {/* Narrative Column */}
          <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-8"}`}>
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted-foreground)] mb-3 tabular-nums">
              <span className="text-[var(--foreground)] font-semibold">
                {project.number || `0${index + 1}`}
              </span>
              <span>{project.category}</span>
              <span>{project.year}</span>
              {project.liveUrl && (
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium ml-auto lg:ml-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
              >
                {project.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
              </Link>
            </h3>

            <p className="text-sm font-medium text-[var(--foreground)]/80 mb-3">
              {project.subtitle}
            </p>

            <p className="text-sm md:text-[15px] text-[var(--muted-foreground)] leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 text-xs font-mono">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                Read case study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Live app
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Interactive Stageshow Product Stage */}
          <div className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-1"}`}>
            <Link
              href={`/projects/${project.slug}`}
              data-cursor-label="Case study ↗"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded-2xl"
              aria-label={`Inspect ${project.title} case study`}
            >
              <ProjectStage
                slug={project.slug}
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
              />
            </Link>
          </div>
        </div>
        </div>
      </article>
    );
  }

  // Archive Card with pointer-reactive surface highlight
  const onCardPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={onCardPointerMove}
      className="card-spotlight group p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-strong)] transition-[border-color,transform,box-shadow] duration-250 hover:-translate-y-0.5 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--muted-foreground)] mb-3 tabular-nums">
          <span>{project.category}</span>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            )}
            <span>{project.year}</span>
          </div>
        </div>

        <h4 className="text-base font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5">
            {project.title}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </h4>

        <p className="text-xs text-[var(--muted-foreground)] line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--muted-foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] text-xs font-mono">
          <Link
            href={`/projects/${project.slug}`}
            className="text-[var(--accent)] hover:underline inline-flex items-center gap-1"
          >
            Case study
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                title="Live preview"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                title="GitHub repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
