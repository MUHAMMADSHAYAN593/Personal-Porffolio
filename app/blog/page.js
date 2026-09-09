import Link from "next/link";
import Footer from "@/components/footer";
import { blogs } from "@/app/data/blogs";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Writing | Muhammad Shayan – Technical Journal",
  description:
    "Engineering essays, notes, and architectural breakdowns on AI/ML, distributed backends, algorithms, and full-stack systems.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
            Journal & Field Notes
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Writing
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Technical breakdowns, programming paradigms, and engineering lessons learned while
            building machine learning models and web systems.
          </p>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)] mb-16">
          {blogs.map((post) => (
            <article key={post.slug} className="py-8 group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                {/* Meta Date & Read Time */}
                <div className="md:col-span-3 text-xs font-mono text-[var(--muted-foreground)] flex md:flex-col items-center md:items-start gap-2 md:gap-1">
                  <span>{post.date}</span>
                  <span className="md:hidden">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Article Content */}
                <div className="md:col-span-9">
                  <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                      {post.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-blue-600 dark:text-blue-400" />
                    </Link>
                  </h2>

                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--muted-foreground)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
