import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/footer";
import ProjectVisual from "@/components/project-visual";
import LivePreviewBox from "@/components/live-preview-box";
import { projects, getProjectBySlug, getNextProject } from "@/app/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

// Generate all slugs at build time
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

// Generate SEO metadata per project
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | Muhammad Shayan" };
  }

  return {
    title: `${project.title} – Case Study | Muhammad Shayan`,
    description: project.description || project.tagline,
  };
}

export default async function SingleProject({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  // Attempt to read custom markdown file if available
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  let markdownBody = null;

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(fileContent);
    markdownBody = parsed.content;
  }

  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        {/* Header Block */}
        <header className="pb-10 border-b border-[var(--border)] mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider mb-4">
            <span className="font-semibold text-[var(--foreground)]">
              {project.number ? `PROJECT ${project.number}` : "PROJECT"}
            </span>
            <span>/</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl leading-relaxed mb-8">
            {project.subtitle || project.tagline}
          </p>

          {/* Action Links & Tech Stack */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--border)]">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
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
                  className="px-4 py-2 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium hover:bg-[var(--surface-subtle)] transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Visual Architecture Showcase */}
        <section className="mb-12">
          <ProjectVisual slug={project.slug} title={project.title} />
        </section>

        {/* Live Interactive Application Preview Box */}
        {project.liveUrl && (
          <section className="mb-16">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider">
                Live Interactive Application
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Deployed Live
              </span>
            </div>
            <LivePreviewBox url={project.liveUrl} title={project.title} />
          </section>
        )}

        {/* Case Study Content */}
        <article className="max-w-3xl space-y-12">
          {/* If Markdown exists, render the full article */}
          {markdownBody ? (
            <div className="max-w-none text-[var(--foreground)]">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] mt-12 mb-4 pb-2 border-b border-[var(--border)]">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] mt-10 mb-4 pb-2 border-b border-[var(--border)]">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--foreground)] mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-5">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[var(--foreground)]">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2.5 my-4 pl-5 list-disc text-sm md:text-base text-[var(--muted-foreground)] marker:text-blue-500">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2.5 my-4 pl-5 list-decimal text-sm md:text-base text-[var(--muted-foreground)] marker:text-blue-500">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="p-4 my-6 rounded border-l-4 border-blue-500 bg-[var(--surface-subtle)] text-sm italic text-[var(--foreground)]">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="p-4 rounded-lg bg-[var(--surface-subtle)] border border-[var(--border)] overflow-x-auto text-xs font-mono my-6">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium inline-flex items-center gap-1"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {markdownBody}
              </ReactMarkdown>
            </div>
          ) : (
            /* Structured fallback from project data */
            <div className="space-y-10 text-sm md:text-base leading-relaxed text-[var(--muted-foreground)]">
              {project.sections?.overview && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    Overview
                  </h2>
                  <p>{project.sections.overview}</p>
                </div>
              )}

              {project.sections?.theProblem && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    The Problem
                  </h2>
                  <p>{project.sections.theProblem}</p>
                </div>
              )}

              {project.sections?.whatIBuilt && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    What I Built
                  </h2>
                  <p>{project.sections.whatIBuilt}</p>
                </div>
              )}

              {project.sections?.howItWorks && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    How It Works
                  </h2>
                  <p>{project.sections.howItWorks}</p>
                </div>
              )}

              {project.sections?.technicalDecisions && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    Technical Decisions
                  </h2>
                  <p>{project.sections.technicalDecisions}</p>
                </div>
              )}

              {project.sections?.challenges && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    Challenges & Solutions
                  </h2>
                  <p>{project.sections.challenges}</p>
                </div>
              )}

              {project.sections?.lessons && (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
                    What I Learned
                  </h2>
                  <p>{project.sections.lessons}</p>
                </div>
              )}
            </div>
          )}
        </article>

        {/* Next Project Footer Card */}
        {nextProject && (
          <div className="mt-20 pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider">
              Next Project
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 text-lg font-bold text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>{nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
