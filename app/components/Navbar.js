"use client";

import { useState , useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-btn";
import { FaHome, FaUser, FaEnvelope, FaBlog , FaRProject } from "react-icons/fa";
import LoadingBar, { useLoadingBar } from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setprogress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setprogress(30)

    setTimeout(() => {
      setprogress(70)
    }, 100);

    setTimeout(() => {
      setprogress(100)
    }, 400);
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setprogress(0)
    }, 500);
  }, [])
  
  

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
    { name: "Projects", path: "/projects", icon: <FaRProject /> },
  ];

  return (
    <nav className="w-full bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50 text-gray-900 dark:text-white backdrop-blur-lg">
      <LoadingBar
        color="blue"
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Shayan<span className="text-blue-600">Blog</span>
              </span>
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium transition group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden 
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                       dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-56 h-screen transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} bg-gray-50 dark:bg-gray-800 md:hidden`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-semibold text-blue-600">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 dark:text-gray-400">
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-900 dark:text-white 
                           hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-700 dark:hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <ModeToggle />
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
