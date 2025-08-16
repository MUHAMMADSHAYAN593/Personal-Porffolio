"use client"

import Footer from "/components/footer";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaCloud, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMysql, SiOpenai, SiC, SiExpress, SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import { Button } from "/components/ui/button"
import Typed from 'typed.js';
import React , {useEffect , useRef} from "react";
export default function Home() {
  const blogs = [
  {
    title: "Twitter Clone",
    description:
      "A responsive Twitter-like social media UI built with HTML, CSS, and JavaScript, featuring tweets, likes, and profile sections. Deployed on GitHub Pages.",
    image: "./images/Twitter.avif",
    link: "/projects",
  },
  {
    title: "Todo List App",
    description:
      "A fully functional Todo List app made with React.js, featuring task creation, completion toggling, deletion, and persistence in localStorage.",
    image: "./images/Todo.png",
    link: "/projects",
  },
  {
    title: "Voice Command Chatbot",
    description:
      "A React and JavaScript-based chatbot with voice command support, using the Web Speech API for speech recognition and text-to-speech responses.",
    image: "./images/Voice.jpeg",
    link: "/projects",
  },
];

  const el = useRef(null);

useEffect(() => {
  // Only run if ref exists
  if (!el.current) return;

  const typed = new Typed(el.current, {
    strings: ['Muhammad Shayan'],
    typeSpeed: 50,
  });

  return () => {
    typed.destroy();
  };
}, []);


  return (
    <>
      {/* Hero + About Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              <span ref={el}></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl leading-relaxed">
            I’m a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Artificial Intelligence student </span>
            and full-stack developer skilled in
            <span className="font-semibold"> Java, C, HTML, CSS, JavaScript, Node.js, Express.js, React, and Next.js</span>.
            My expertise includes building responsive and visually appealing interfaces,
            developing backend systems, working with <span className="font-semibold">MySQL databases</span>,
            integrating APIs, and leveraging <span className="font-semibold">AI tools</span> to create innovative solutions.
            I thrive on solving complex problems, learning new technologies,
            and delivering user-focused, high-quality software.
          </p>

          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
          >
            View My Work
          </Link>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Developer Illustration"
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

            <div className="flex flex-col items-center">
              <FaJava className="text-5xl text-orange-600" />
              <span className="mt-2">Java</span>
            </div>

            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-500" />
              <span className="mt-2">HTML</span>
            </div>

            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-5xl text-blue-500" />
              <span className="mt-2">CSS</span>
            </div>

            <div className="flex flex-col items-center">
              <FaJs className="text-5xl text-yellow-400" />
              <span className="mt-2">JavaScript</span>
            </div>

            <div className="flex flex-col items-center">
              <SiMysql className="text-5xl text-blue-700" />
              <span className="mt-2">MySQL</span>
            </div>

            <div className="flex flex-col items-center">
              <FaCloud className="text-5xl text-indigo-500" />
              <span className="mt-2">APIs & Cloud</span>
            </div>

            <div className="flex flex-col items-center">
              <SiOpenai className="text-5xl text-purple-500" />
              <span className="mt-2">AI Tools</span>
            </div>

            <div className="flex flex-col items-center">
              <SiC className="text-5xl text-gray-500" />
              <span className="mt-2">C</span>
            </div>

            <div className="flex flex-col items-center">
              <FaNodeJs className="text-5xl text-green-600" />
              <span className="mt-2">Node.js</span>
            </div>

            <div className="flex flex-col items-center">
              <SiExpress className="text-5xl text-gray-700 dark:text-gray-300" />
              <span className="mt-2">Express.js</span>
            </div>

            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-cyan-400" />
              <span className="mt-2">React</span>
            </div>

            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-5xl text-black dark:text-white" />
              <span className="mt-2">Next.js</span>
            </div>

          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">My Top Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {blog.description}
                </p>
                <div className="mt-4 text-white">
                  <Link href={blog.link}>
                    <Button variant="default" className="w-full text-white">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Footer */}
      <Footer />
    </>
  );
}
