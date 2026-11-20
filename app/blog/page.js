import Footer from "@/components/footer";
import BlogIndex from "@/components/blog-index";
import { blogs } from "@/app/data/blogs";

export const metadata = {
  title: "Writing | Muhammad Shayan — Technical Journal",
  description:
    "Engineering essays, notes, and architectural breakdowns on AI/ML, distributed backends, algorithms, and full-stack systems.",
};

export default function BlogPage() {
  const postsMeta = blogs.map(({ slug, title, excerpt, date, readTime, tags }) => ({
    slug,
    title,
    excerpt,
    date,
    readTime,
    tags,
  }));

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <div className="editorial-container">
        <div className="max-w-2xl mb-10 hero-enter hero-enter-1">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Technical Journal
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Technical breakdowns, programming paradigms, and engineering lessons learned while
            building machine-learning models and web systems.
          </p>
        </div>

        <BlogIndex posts={postsMeta} />
      </div>

      <Footer />
    </main>
  );
}
