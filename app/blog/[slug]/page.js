import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import { blogs } from "@/app/data/blogs";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Muhammad Shayan" };
  }

  return {
    title: `${post.title} | Muhammad Shayan`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Writing
          </Link>
        </div>

        {/* Article Header */}
        <header className="pb-8 border-b border-[var(--border)] mb-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--muted-foreground)] mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              {post.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-subtle)] text-[var(--foreground)] border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-3xl prose prose-neutral dark:prose-invert text-[var(--foreground)] prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-p:text-base prose-p:leading-relaxed prose-p:text-[var(--muted-foreground)] prose-li:text-base prose-li:text-[var(--muted-foreground)] prose-code:font-mono prose-code:text-xs prose-code:bg-[var(--surface-subtle)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
          {post.content}
        </article>

        {/* Bottom Link */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Explore all articles
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
