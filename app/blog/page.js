import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function BlogList() {
  const blogDir = path.join(process.cwd(), "content", "blogs");
  const files = fs.readdirSync(blogDir);

  const blogs = files.map((file) => {
    const slug = file.replace(".md", "");
    const fileContent = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "No description available.",
    };
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Programming Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.slug}
            className="p-4 border rounded-lg hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.excerpt}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="text-purple-500 hover:underline"
            >
              Read More →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
