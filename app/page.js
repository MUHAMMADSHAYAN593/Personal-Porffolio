import Link from "next/link";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import CodeSnippetBox from "@/components/code-snippet-box";
import GitHubActivity from "@/components/github-activity";
import { getFeaturedProjects, projects } from "@/app/data/projects";
import { blogs } from "@/app/data/blogs";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const archivePreview = projects.filter((p) => !p.featured).slice(0, 4);
  const recentArticles = blogs.slice(0, 3);

  const skills = {
    languages: ["Python", "JavaScript", "C++", "Java", "SQL"],
    aiml: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis", "Data Science"],
    webDev: ["React", "Next.js", "Node.js", "HTML", "CSS", "MongoDB"],
    tools: ["Git", "GitHub"],
  };

  const experience = [
    {
      period: "Apr 2026 — Present",
      role: "Frontend Developer",
      company: "DHA Head Office, Karachi",
      tech: "React · Next.js (App Router) · Production UI",
      description:
        "Built, updated, and maintained reusable frontend UI components with React and Next.js (App Router) inside an existing production codebase. Translated design requirements and UI specifications into responsive web interfaces. Reused and improved existing components to cut down duplication.",
    },
    {
      period: "Jul 2026 — Aug 2026",
      role: "Machine Learning Intern",
      company: "FlyRank AI",
      tech: "Python · AI Search · Automation",
      description:
        "Joined FlyRank's AI Internship Program, working on automation for how brands appear in classic search and AI-driven search engines. Contributed to organic-growth automation problems.",
    },
    {
      period: "Jun 2026 — Jul 2026",
      role: "Python Developer",
      company: "Decodelabs, Karachi",
      tech: "Python · Scripts & Applications",
      description:
        "Wrote and debugged Python scripts and applications as part of ongoing internship work. Applied core programming and problem-solving skills in a production team setting.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. Editorial Hero with Interactive Code Snippets & GitHub Matrices */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Hero Narrative & Code Studio */}
            <div className="lg:col-span-7">
              {/* Identity Tagline */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] tracking-wide mb-6 uppercase">
                <span>AI / ML</span>
                <span>•</span>
                <span>Full-Stack</span>
                <span>•</span>
                <span>Product Engineering</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1] mb-6">
                I build intelligent systems and the products around them.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-2xl mb-8">
                AI/ML student and full-stack developer focused on building practical AI
                systems, machine-learning applications, and modern web products.
              </p>

              {/* Action Buttons & Links */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono mb-8">
                <Link
                  href="#work"
                  className="px-5 py-2.5 rounded bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  View selected work
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-medium hover:bg-[var(--surface-subtle)] transition-colors inline-flex items-center gap-2"
                >
                  Get in touch
                  <Mail className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                </Link>
              </div>

              {/* Subtle Social Links */}
              <div className="flex items-center gap-6 text-xs font-mono text-[var(--muted-foreground)] mb-10">
                <a
                  href="https://github.com/MUHAMMADSHAYAN593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Code Snippets Terminal Element */}
              <div>
                <CodeSnippetBox />
              </div>
            </div>

            {/* Right Column: Status Card + Dual GitHub Contribution Matrices */}
            <div className="lg:col-span-5 lg:pt-3 space-y-6">
              {/* Currently Status Block */}
              <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)] space-y-5 text-xs font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <span className="text-[11px] text-[var(--muted-foreground)] uppercase tracking-wider">
                    Currently
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Active
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">
                    Role
                  </span>
                  <p className="font-semibold text-[var(--foreground)]">Frontend Developer</p>
                  <p className="text-[var(--muted-foreground)]">DHA Head Office, Karachi • Production UI</p>
                </div>

                <div>
                  <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wider block mb-1">
                    Education
                  </span>
                  <p className="font-semibold text-[var(--foreground)]">BS in Artificial Intelligence</p>
                  <p className="text-[var(--muted-foreground)]">DHA Suffa University (2024–Present)</p>
                </div>

                <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[var(--muted-foreground)]">
                  <span>Location: Karachi, PK</span>
                  <span>UTC +5</span>
                </div>
              </div>

              {/* GitHub Contribution Matrices Component (Supporting both repos) */}
              <div>
                <GitHubActivity />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Selected Work (Centerpiece 01–06) */}
      <section id="work" className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[var(--border)]">
            <div>
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
                Selected Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
            >
              View all 21 projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
                isFeatured={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. What I Build / Core Capabilities */}
      <section className="py-20 md:py-28 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
        <div className="editorial-container">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              What I build.
            </h2>
            <p className="text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed">
              Bridging machine-learning pipelines with resilient full-stack architecture to build
              fast, dependable tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-3">
                01 / AI & LLM Systems
              </span>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                Structured AI Workflows
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Multi-agent architectures, defensive prompt engineering, Zod schema validation,
                and local LLM orchestration using Ollama and OpenRouter.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-3">
                02 / Modern Web & Mobile
              </span>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Production Next.js App Router, React, React Native, Node.js, and Express systems
                with strict component boundaries and clean data flow.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 block mb-3">
                03 / Applied Data Science
              </span>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                Predictive ML Models
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Feature engineering, spatial geodesic mathematics, TF-IDF NLP pipelines,
                classification ensembles, and interactive Streamlit analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience Timeline */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Work Experience
            </h2>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 text-xs font-mono text-[var(--muted-foreground)]">
                  {exp.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-[var(--muted-foreground)] mt-0.5">
                    {exp.company}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                    {exp.tech}
                  </span>
                </div>
                <div className="md:col-span-5 text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Stack */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
              Technical Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold block pb-3 mb-4 border-b border-[var(--border)]">
                Languages
              </span>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {skills.languages.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold block pb-3 mb-4 border-b border-[var(--border)]">
                AI / Machine Learning
              </span>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {skills.aiml.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold block pb-3 mb-4 border-b border-[var(--border)]">
                Web Development
              </span>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {skills.webDev.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold block pb-3 mb-4 border-b border-[var(--border)]">
                Tools
              </span>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                {skills.tools.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. More Projects Archive Preview */}
      <section className="py-20 md:py-28 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
                Archive
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Additional Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-3 md:mt-0 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              Browse entire project archive ({projects.length} projects)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {archivePreview.map((item, idx) => (
              <ProjectCard key={item.slug} project={item} index={idx} isFeatured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Writing / Technical Journal Preview */}
      <section className="py-20 md:py-28 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
                Writing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
                Technical Journal
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-3 md:mt-0 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] inline-flex items-center gap-1"
            >
              Read all articles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {recentArticles.map((article) => (
              <article
                key={article.slug}
                className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group"
              >
                <div className="max-w-2xl">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted-foreground)] flex-shrink-0">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About Preview */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="editorial-container">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-3">
              About
            </span>
            <p className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed font-normal mb-6">
              I’m an AI student and full-stack developer interested in the intersection of
              machine learning, intelligent systems, and product engineering.
            </p>
            <Link
              href="/about"
              className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              More about my background and education
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Minimal Contact CTA */}
      <section className="py-24">
        <div className="editorial-container">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-3">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Have an idea worth building? Let’s talk.
            </h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-8">
              Available for technical roles, AI engineering discussions, and software projects.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="mailto:muhammadshayanakhlaq@gmail.com"
                className="px-5 py-2.5 rounded bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity"
              >
                Send an email
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-subtle)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MUHAMMADSHAYAN593"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface-subtle)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
