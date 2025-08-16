import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Generate all slugs at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(".md", ""),
    }));
}

// ✅ (Optional) Generate SEO metadata per project
export async function generateMetadata({ params }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { title: "Project Not Found" };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data?.title || "Project",
    description: data?.description || "Project details",
  };
}

export default function SingleProject({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <p className="text-center py-10">Project not found</p>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-p:leading-relaxed prose-a:text-purple-500 hover:prose-a:underline prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
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
                      background: "var(--code-bg)", // match theme
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
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
