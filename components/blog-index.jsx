"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SlidingTabs } from "@/components/motion-primitives";

const TOPICS = ["All", "AI / ML", "JavaScript", "Architecture", "Java & DSA"];

export default function BlogIndex({ posts }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const topic = TOPICS[activeIdx];

  const filtered = useMemo(() => {
    if (topic === "All") return posts;
    if (topic === "AI / ML") {
      return posts.filter((p) =>
        p.tags?.some((t) =>
          ["AI", "Machine Learning", "Generative AI", "LLM", "NLP"].includes(t)
        )
      );
    }
    if (topic === "JavaScript") {
      return posts.filter((p) =>
        p.tags?.some((t) => ["JavaScript", "Web Dev", "Full Stack"].includes(t))
      );
    }
    if (topic === "Architecture") {
      return posts.filter((p) =>
        p.tags?.some((t) => ["Architecture", "System Design", "DevOps"].includes(t))
      );
    }
    return posts.filter((p) =>
      p.tags?.some((t) => ["Java", "OOP", "DSA"].includes(t))
    );
  }, [posts, topic]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-4 border-b border-[var(--border)] hero-enter hero-enter-2">
        <SlidingTabs
          items={TOPICS.map((t) => ({ key: t, label: t }))}
          activeIndex={activeIdx}
          onSelect={(idx) => setActiveIdx(idx)}
        />
        <span className="text-xs font-mono text-[var(--muted-foreground)] tabular-nums">
          {filtered.length} {filtered.length === 1 ? "essay" : "essays"}
        </span>
      </div>

      <div className="divide-y divide-[var(--border)] border-b border-[var(--border)] mb-16">
        {filtered.map((post) => (
          <article key={post.slug} className="py-8 group">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="md:col-span-3 text-xs font-mono text-[var(--muted-foreground)] flex md:flex-col items-center md:items-start gap-3 md:gap-1 tabular-nums">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              <div className="md:col-span-9">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2"
                  >
                    {post.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
                  </Link>
                </h2>

                <p className="text-xs md:text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--muted-foreground)] border border-[var(--border)]"
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
    </>
  );
}
