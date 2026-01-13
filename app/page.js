"use client";

import Footer from "/components/footer";
import Link from "next/link";
import { Button } from "/components/ui/button";
import Typed from 'typed.js';
import React, { useEffect, useRef } from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaCloud, FaNodeJs, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiOpenai, SiC, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
    });
    return () => typed.destroy();
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="dark:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Java", icon: <FaJava className="text-orange-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "AI Tools", icon: <SiOpenai className="text-green-500" /> },
  ];

  const recentProjects = [
    {
      title: "Smart Weather App",
      desc: "Real-time accuracy with a beautiful UI.",
      tags: ["JS", "API"],
      link: "/projects"
    },
    {
      title: "Personal Portfolio",
      desc: "Modern Next.js portfolio with dark mode.",
      tags: ["Next.js", "Tailwind"],
      link: "/projects"
    },
    {
      title: "Twitter Clone",
      desc: "Social media platform replica.",
      tags: ["React", "Firebase"],
      link: "/projects"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-purple-200 dark:border-purple-800 rounded-full bg-purple-50 dark:bg-purple-900/10 backdrop-blur-sm">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Available for hire
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-gray-900 dark:text-white">Muhammad Shayan</span>
          </h1>

          <div className="text-2xl md:text-4xl font-bold mb-8 h-12 text-gray-600 dark:text-gray-400">
            I am a <span ref={el} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            Passionate about building scalable web applications and exploring the frontiers of Artificial Intelligence.
            Transforming ideas into seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button className="h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all w-full sm:w-auto">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-12 px-8 rounded-full border-2 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold text-lg w-full sm:w-auto">
                Contact Me <Mail className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/MUHAMMADSHAYAN593/Muhammad-Shayan" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
              <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-purple-600 font-semibold hover:underline">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Link href={project.link} key={index} className="group block">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-1 border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 transition-colors">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="mb-4">
                      <span className="inline-block p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 mb-4">
                        <SiNextdotjs className="bg-transparent" />
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.desc}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-600 dark:text-gray-300 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center text-purple-600 font-semibold hover:underline">
              View All Projects <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
