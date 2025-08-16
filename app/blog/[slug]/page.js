import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Tell Next.js all possible slugs at build time
export async function generateStaticParams() {
    const blogsDir = path.join(process.cwd(), "content", "blogs");
    const files = fs.readdirSync(blogsDir);

    return files.map((file) => ({
        slug: file.replace(/\.md$/, ""), // remove .md extension
    }));
}

export default function SingleBlog({ params }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return <p className="text-center py-10">Blog not found</p>;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Blog Title */}
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            {data.excerpt && (
                <p className="text-lg text-gray-500 mb-8">{data.excerpt}</p>
            )}

            {/* Blog Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">

                <ReactMarkdown
                    components={{
                        code({ inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={{
                                        ...oneDark,
                                        'pre[class*="language-"]': {
                                            ...oneDark['pre[class*="language-"]'],
                                            background: "var(--code-bg)",
                                            padding: "1rem",
                                            borderRadius: "0.5rem",
                                            lineHeight: "1.6",
                                            fontSize: "0.95rem",
                                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                        },
                                        'code[class*="language-"]': {
                                            ...oneDark['code[class*="language-"]'],
                                            background: "transparent",
                                        },
                                    }}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code
                                    className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}
