import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { ArrowUpRight, ArrowRight, Award, CheckCircle2, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "About | Muhammad Shayan – AI/ML & Full-Stack Developer",
  description:
    "AI/ML student at DHA Suffa University building multi-agent AI systems and full-stack web applications. Frontend Developer at DHA Head Office.",
};

export default function AboutPage() {
  const experiences = [
    {
      period: "Apr 2026 — Present",
      role: "Frontend Developer",
      organization: "DHA Head Office, Karachi",
      tech: "React · Next.js (App Router) · Production UI",
      details: [
        "Built, updated, and maintained reusable frontend UI components with React and Next.js (App Router) inside an existing production codebase.",
        "Translated design requirements and UI specifications into responsive, functional web interfaces, keeping layouts consistent across screen sizes.",
        "Modified and extended existing pages and components, adding frontend features without disrupting the established application structure.",
        "Identified and resolved frontend UI issues covering layout, responsiveness, component behavior, and styling inconsistencies, reusing and improving existing components to cut down duplication.",
        "Worked within the team's existing frontend architecture and coding conventions, studying implementation patterns before making changes.",
      ],
    },
    {
      period: "Jul 2026 — Aug 2026",
      role: "Machine Learning Intern",
      organization: "FlyRank AI",
      tech: "Python · AI Automation · Search",
      details: [
        "Joined FlyRank's AI Internship Program, working on automation for how brands appear in classic search and AI-driven search engines.",
        "Contributed to organic-growth automation problems as part of a small, fast-moving product team.",
      ],
    },
    {
      period: "Jun 2026 — Jul 2026",
      role: "Python Developer",
      organization: "Decodelabs, Karachi",
      tech: "Python · Scripting & Applications",
      details: [
        "Wrote and debugged Python scripts and applications as part of ongoing internship work.",
        "Applied core programming and problem-solving skills in a production team setting.",
      ],
    },
  ];

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
      details: "Comprehensive coursework in advanced mathematics, physics, and analytical problem-solving.",
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "C++", "Java", "SQL"],
    },
    {
      category: "AI / Machine Learning",
      items: ["NumPy", "Pandas", "Scikit-learn", "Data Analysis", "Data Science"],
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "HTML", "CSS", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub"],
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
        "Conducted data analysis using Python, including Pandas and NumPy, and used data visualization techniques for trend interpretation.",
        "Built and optimized a random forest model, reaching a 50% recall rate in predicting customer churn.",
        "Wrote an executive summary for the team, delivering actionable insights for decision-making based on the analysis.",
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
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Intro Section */}
        <section className="pb-16 border-b border-[var(--border)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-3">
                About Muhammad Shayan
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6 leading-tight">
                AI/ML Student & Full-Stack Developer
              </h1>

              {/* Verified Resume Summary */}
              <div className="space-y-4 text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                <p>
                  AI/ML student at DHA Suffa University building multi-agent AI systems and
                  full-stack web applications. Recent work includes a multi-agent research
                  pipeline in Python that automates literature review and synthesis, and
                  Presidium, a decision-driven governance simulation with a full grading engine.
                </p>
                <p>
                  Core stack: React, Next.js, and Node.js on the frontend; Python, NumPy, Pandas,
                  and Scikit-learn for AI and machine learning. Competitive programmer with a focus
                  on algorithms and problem-solving. Open to AI/ML and full-stack roles.
                </p>
              </div>

              {/* Direct Resume Contact Info */}
              <div className="flex flex-wrap items-center gap-6 mt-8 text-xs font-mono">
                <a
                  href="tel:03149765922"
                  className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  0314 9765922
                </a>
                <a
                  href="mailto:muhammadshayanakhlaq@gmail.com"
                  className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  muhammadshayanakhlaq@gmail.com
                </a>
                <a
                  href="https://github.com/MUHAMMADSHAYAN593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Profile Image */}
            <div className="lg:col-span-4">
              <div className="p-3 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <div className="relative aspect-[4/5] w-full rounded overflow-hidden bg-[var(--surface-subtle)]">
                  <Image
                    src="/images/image1.jpg"
                    alt="Muhammad Shayan"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
                <div className="pt-3 pb-1 text-center font-mono text-xs text-[var(--muted-foreground)]">
                  Muhammad Shayan • Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills (Categorized exactly as on Resume) */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((grp) => (
              <div key={grp.category} className="p-5 rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold block pb-2 mb-3 border-b border-[var(--border)]">
                  {grp.category}
                </span>
                <ul className="space-y-1.5 text-xs md:text-sm text-[var(--muted-foreground)]">
                  {grp.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline (Verbatim from Resume) */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Career
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Experience
            </h2>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 text-xs font-mono text-[var(--muted-foreground)]">
                  {item.period}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-base font-bold text-[var(--foreground)]">
                    {item.role}
                  </h3>
                  <p className="text-xs font-medium text-[var(--muted-foreground)] mt-0.5">
                    {item.organization}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                    {item.tech}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <ul className="space-y-2.5 text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] mt-1.5 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Education
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)] mb-2">
                    <span>{edu.period}</span>
                    <span>Karachi, PK</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications (Verified Credentials from Resume Page 2) */}
        <section className="py-16 md:py-20 border-b border-[var(--border)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
              Verification
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--foreground)]">
              Certifications & Simulations
            </h2>
          </div>

          <div className="space-y-6">
            {/* BCG Forage Simulation Feature Card */}
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <h3 className="text-lg font-bold text-[var(--foreground)] flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {certifications[0].title}
                </h3>
                <span className="text-xs font-mono text-[var(--muted-foreground)]">
                  {certifications[0].issuer} • {certifications[0].date}
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--muted-foreground)] mb-4">
                Credential ID: {certifications[0].credentialId}
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed">
                {certifications[0].bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Verified Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.slice(1).map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-[var(--border)] bg-[var(--card)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--muted-foreground)] mb-1">
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
                      className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 self-start"
                    >
                      Verify Certificate
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
              Interested in seeing what I&apos;ve engineered?
            </h3>
            <p className="text-xs md:text-sm text-[var(--muted-foreground)]">
              Explore in-depth technical case studies across my primary projects.
            </p>
          </div>
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded bg-[var(--foreground)] text-[var(--background)] text-xs font-mono font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
          >
            Explore Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
