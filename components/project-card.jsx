"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import ProjectVisual from "./project-visual";

export default function ProjectCard({ project, index, isFeatured = false }) {
  const isEven = index % 2 === 0;

  if (isFeatured) {
    return (
      <article className="group py-12 md:py-16 border-b border-[var(--border)] last:border-b-0">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}>
          {/* Text Content Column */}
          <div className={`lg:col-span-6 ${isEven ? "" : "lg:col-start-7"}`}>
            {/* Project Number & Category */}
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted-foreground)] tracking-wider mb-3">
              <span className="font-semibold text-[var(--foreground)]">{project.number || `0${index + 1}`}</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              {project.liveUrl && (
                <>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-600 dark:text-blue-400" />
              </Link>
            </h3>

            {/* Subtitle */}
            <p className="text-sm font-medium text-[var(--muted-foreground)] mb-4">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links Bar */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  Live Demo
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
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Visual Column */}
          <div className={`lg:col-span-6 ${isEven ? "" : "lg:col-start-1"}`}>
            <Link href={`/projects/${project.slug}`} className="block transform transition-transform duration-300 group-hover:scale-[1.01]">
              <ProjectVisual slug={project.slug} title={project.title} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Standard Archive Card
  return (
    <div className="group p-5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-blue-500/40 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)] mb-2">
          <span>{project.category}</span>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Live
              </span>
            )}
            <span>{project.year}</span>
          </div>
        </div>

        <h4 className="text-lg font-bold text-[var(--foreground)] mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1.5">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            Details
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
