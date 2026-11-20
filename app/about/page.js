import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import ExperienceTimeline from "@/components/experience-timeline";
import { CopyAction, Reveal } from "@/components/motion-primitives";
import { ArrowUpRight, ArrowRight, Award, CheckCircle2, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "About | Muhammad Shayan — AI/ML & Full-Stack Engineer",
  description:
    "AI/ML student at DHA Suffa University building multi-agent AI systems and full-stack web applications. Frontend Developer at DHA Head Office.",
};

export default function AboutPage() {
  const education = [
    {
      degree: "BS in Artificial Intelligence",
      institution: "DHA Suffa University, Karachi",
      period: "2024 — Present",
      details:
        "Building multi-agent AI systems, deep learning models, algorithms, and full-stack applications. Competitive programming with a focus on algorithms and problem-solving.",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "Army Public College Saddar",
      period: "Completed",
      details:
        "Coursework in advanced mathematics, physics, and analytical problem-solving.",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "C++", "Java", "SQL"],
    },
    {
      category: "AI & Machine Learning",
      items: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis", "Data Science"],
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "HTML", "CSS", "MongoDB"],
    },
    {
      category: "Tooling",
      items: ["Git", "GitHub", "uv", "Streamlit"],
    },
  ];

  const certifications = [
    {
      title: "BCG — Data Science Job Simulation",
      issuer: "Forage",
      date: "Aug 2026",
      credentialId: "6a70235f1ebe2d46f820fb24",
      link: null,
      bullets: [
        "Completed a customer churn analysis simulation for XYZ Analytics, identifying essential client data and outlining a strategic investigation approach.",
        "Conducted data analysis using Python (Pandas, NumPy) and visualization techniques for trend interpretation.",
        "Built and optimized a random forest model, reaching a 50% recall rate in predicting customer churn.",
        "Delivered an executive summary with actionable recommendations based on the analysis.",
      ],
    },
    {
      title: "Machine Learning Using Python",
      issuer: "Simplilearn",
      date: "Jul 2026",
      credentialId: "simpli-web.app.link/e/PoTdREstY4b",
      link: "https://simpli-web.app.link/e/PoTdREstY4b",
    },
    {
      title: "Frontend Developer — React",
      issuer: "HackerRank",
      date: "Jul 2026",
      credentialId: "hackerrank.com/certificates/f3b821ef22c3",
      link: "https://www.hackerrank.com/certificates/f3b821ef22c3",
    },
    {
      title: "SQL Certificate",
      issuer: "HackerRank",
      date: "Jul 2026",
      credentialId: "hackerrank.com/certificates/39beacc17c8b",
      link: "https://www.hackerrank.com/certificates/39beacc17c8b",
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "HackerRank",
      date: "Jul 2026",
      credentialId: "hackerrank.com/certificates/5b5bc29706de",
      link: "https://www.hackerrank.com/certificates/5b5bc29706de",
    },
  ];

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <div className="editorial-container">
        {/* Intro Dossier */}
        <section className="pb-16 border-b border-[var(--border)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-xs font-mono text-[var(--muted-foreground)] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Karachi, Pakistan · UTC +5</span>
              </div>

              <h1 className="hero-enter hero-enter-2 text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6 leading-tight">
                AI/ML Student &amp; Full-Stack Engineer
              </h1>

              <div className="hero-enter hero-enter-3 space-y-4 text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                <p>
                  AI/ML student at DHA Suffa University building multi-agent AI systems and
                  full-stack web applications. Recent work includes an autonomous literature
                  synthesis pipeline in Python and Presidium, a decision-driven governance
                  simulation with a supervised ML grading engine.
                </p>
                <p>
                  Core stack: React, Next.js, and Node.js on the product side; Python, NumPy,
                  Pandas, and Scikit-learn for AI and machine learning. Competitive programmer
                  focused on algorithms and practical systems.
                </p>
              </div>

              <div className="hero-enter hero-enter-4 flex flex-wrap items-center gap-4 mt-8 text-xs font-mono">
                <a
                  href="mailto:muhammadshayanakhlaq@gmail.com"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  muhammadshayanakhlaq@gmail.com
                </a>
                <CopyAction value="muhammadshayanakhlaq@gmail.com" label="Copy email" />
                <a
                  href="tel:03149765922"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  0314 9765922
                </a>
                <a
                  href="https://github.com/MUHAMMADSHAYAN593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="lg:col-span-4 hero-enter hero-enter-stage">
              <div className="p-3 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[var(--surface-subtle)]">
                  <Image
                    src="/images/image1.jpg"
                    alt="Muhammad Shayan"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                    priority
                  />
                </div>
                <div className="pt-3 pb-1 text-center font-mono text-xs text-[var(--muted-foreground)]">
                  Muhammad Shayan — Karachi, PK
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-10">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((grp) => (
                <div
                  key={grp.category}
                  className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]"
                >
                  <span className="text-xs font-mono text-[var(--foreground)] font-semibold block pb-2.5 mb-3 border-b border-[var(--border)]">
                    {grp.category}
                  </span>
                  <ul className="space-y-1.5 text-xs md:text-sm text-[var(--muted-foreground)]">
                    {grp.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-10">
              Experience
            </h2>
            <ExperienceTimeline />
          </Reveal>
        </section>

        {/* Education */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-10">
              Academic Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)] mb-2 tabular-nums">
                    <span>{edu.period}</span>
                    <span>Karachi, PK</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-[var(--accent)] mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)] mb-10">
              Certifications &amp; Simulations
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[var(--accent)]" />
                    {certifications[0].title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
                    {certifications[0].issuer} · {certifications[0].date}
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--muted-foreground)] mb-4">
                  Credential ID: {certifications[0].credentialId}
                </p>
                <ul className="space-y-2 text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {certifications[0].bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.slice(1).map((cert) => (
                  <div
                    key={cert.title}
                    className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)] mb-1.5 tabular-nums">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[var(--foreground)] mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[var(--muted-foreground)] break-all mb-3">
                        ID: {cert.credentialId}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1 self-start"
                      >
                        Verify certificate
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
              Explore the interactive case studies
            </h3>
            <p className="text-xs md:text-sm text-[var(--muted-foreground)]">
              Inspect architecture diagrams, live deployments, and product demos across 21 projects.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-mono font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
          >
            Browse projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
