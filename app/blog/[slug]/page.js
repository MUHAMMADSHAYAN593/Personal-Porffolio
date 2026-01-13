import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogs } from "@/app/data/blogs";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }) {
    const post = blogs.find((b) => b.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blogs
                </Link>

                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-purple-500" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                    {post.content}
                </div>

                {/* Footer Navigation */}
                <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
                    <Link
                        href="/blog"
                        className="inline-flex items-center font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Read more articles
                    </Link>
                </div>
            </div>
        </article>
    );
}
