"use client";
import Link from "next/link";
import { ExternalLink, Github, Code2 } from "lucide-react"; // Assuming lucide-react is available as it was in package.json

const projects = [
  {
    title: "Smart Weather App",
    description: "A real-time weather application providing accurate forecasts, built with HTML, CSS, and vanilla JavaScript for optimal performance.",
    image: "/images/weather.jpeg",
    liveLink: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Shopify Clone",
    description: "A feature-rich e-commerce platform clone replicating key Shopify functionalities, demonstrating complex state management and UI design.",
    image: "/images/Spotify.png",
    liveLink: "https://muhammadshayan593.github.io/passOP/",
    tags: ["HTML", "JS", "CSS"],
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and dynamic content loading.",
    image: "/images/next.jpeg",
    liveLink: "#",
    tags: ["Next.js", "Tailwind", "React"],
  },
  {
    title: "Twitter Clone",
    description: "A responsive social media clone mimicking Twitter's core interface and interactions, styled with Tailwind CSS.",
    image: "/images/Twitter.avif",
    liveLink: "https://muhammadshayan593.github.io/Twitter-clone/",
    tags: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Password Manager",
    description: "A secure and responsive password management tool built with React and Tailwind CSS, focusing on user data privacy.",
    image: "/images/password.png",
    liveLink: "https://muhammadshayan593.github.io/passOP/",
    tags: ["React", "Tailwind", "Security"],
  },
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with visualized data charts.",
    image: "/images/next.jpeg",
    liveLink: "#",
    tags: ["Next.js", "Chart.js", "Tailwind"],
  },
  {
    title: "Lumina Edit",
    description: "A modern, browser-based image editing tool built with pure JavaScript and HTML5 Canvas. Offers a Lightroom-like experience directly in the browser.",
    image: "https://placehold.co/600x400/purple/white?text=Lumina+Edit",
    liveLink: "https://image-editor-lovat-eight.vercel.app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Road Map Teller",
    description: "A comprehensive, interactive web app designed to guide you through your tech journey! Find the best resources for Data Science, AI, and more.",
    image: "https://placehold.co/600x400/blue/white?text=Road+Map+Teller",
    liveLink: "https://road-map-teller.vercel.app/",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Classic Snake Game",
    description: "An amazing journey into the core concepts of web development. A fully functional Classic Snake Game built with Vanilla JavaScript.",
    image: "https://placehold.co/600x400/green/white?text=Snake+Game",
    liveLink: "https://snake-game-ebon-kappa-92.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "GSAP Landing Page",
    description: "A stunning, interactive, and responsive landing page focusing on smooth animations and modern UI/UX design using GSAP.",
    image: "https://placehold.co/600x400/orange/white?text=GSAP+Landing",
    liveLink: "https://cocktails-landing-page-bay.vercel.app/",
    tags: ["GSAP", "React"],
  },
  {
    title: "Get Me A Chai",
    description: "A modern, full-stack Next.js platform where users can support their favorite creators by buying them a virtual chai! Features NextAuth and GitHub OAuth.",
    image: "https://placehold.co/600x400/yellow/black?text=Get+Me+A+Chai",
    liveLink: "https://get-me-a-chai-amber.vercel.app/",
    tags: ["Next.js", "GitHub OAuth", "Tailwind"],
  },
  {
    title: "PDF Chat Application",
    description: "Upload PDF documents and conserve with them using AI. Secure, private, and powered by OpenRouter. Built with Next.js and Clerk.",
    image: "https://placehold.co/600x400/red/white?text=PDF+Chat+AI",
    liveLink: "#", // No live link provided
    tags: ["Next.js", "Tailwind CSS", "Clerk", "OpenRouter"],
  },
  {
    title: "Uber Clone",
    description: "Real-time ride booking system with interactive maps (OpenStreetMap), socket communication, and secure authentication.",
    image: "https://placehold.co/600x400/black/white?text=Uber+Clone",
    liveLink: "https://github.com/MUHAMMADSHAYAN593/Uber-Clone",
    tags: ["React.js", "Node.js", "Socket.io", "Leaflet"],
  },
  {
    title: "Food Reel-MERN",
    description: "A fullstack platform for food partners to showcase short video reels. Combines modern UI with a robust Node/Express backend.",
    image: "https://placehold.co/600x400/pink/white?text=Food+Reel",
    liveLink: "https://github.com/MUHAMMADSHAYAN593/Reels-App",
    tags: ["MERN Stack", "Multer", "JWT"],
  },
];

export default function Projects() {
  return (
    <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900 dark:text-white">
            My <span className="text-purple-600">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-gray-400">
            Explore my latest work, featuring web applications, clones, and tools built with modern technologies.
            Click "Live Preview" to see them in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-white text-gray-900 font-bold rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300"
                  >
                    Live Preview <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-1 text-xs font-medium tracking-wide text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="title-font text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h2>

                <p className="leading-relaxed mb-4 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 inline-flex items-center md:mb-2 lg:mb-0 font-medium transition-colors"
                  >
                    Live Preview
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  {/* Placeholder for GitHub link if available later */}
                  {/* <Github className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
