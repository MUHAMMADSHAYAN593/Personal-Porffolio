"use client";
import Link from "next/link";

const blogs = [
  {
    slug: "weather-app",
    title: "Smart Weather App",
    description: "A weather app built with HTML, CSS, and JavaScript...",
    image: "./images/weather.jpeg",
  },
  {
    slug: "shopify-clone",
    title: "Shopify Clone",
    description: "A amazing Shopify Clone made with HTML , JS , CSS",
    image: "./images/Spotify.png",
  },
  {
    slug: "/",
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with Next.js...",
    image: "./images/next.jpeg",
  },
  {
    slug: "twitter-clone",
    title: "Twitter Clone",
    description: "Responsive Twitter Clone made with tailwind Css",
    image: "./images/Twitter.avif",
  },
  {
    slug: "pass-op",
    title: "Password Manager",
    description: "Responsive Password Manager Made with React and tailwind",
    image: "./images/password.png",
  }
];

export default function BlogList() {
  return (
    <section className="text-gray-600 body-font">
      
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-white">Projects</h1>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <div key={blog.slug} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden text-white">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">{blog.title}</h2>
                  <p className="leading-relaxed mb-3">{blog.description}</p>
                  <Link href={`/projects/${blog.slug}`}>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
