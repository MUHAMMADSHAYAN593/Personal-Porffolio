"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-btn";
import { FaHome, FaUser, FaEnvelope, FaBlog, FaProjectDiagram } from "react-icons/fa";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Loading Bar
  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(70), 100);
    setTimeout(() => setProgress(100), 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setProgress(0), 500);
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <LoadingBar
        color="#9333ea" // Purple-600 to match theme
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  S
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Shayan<span className="text-purple-600">.dev</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${pathname === link.path
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-600 transition-all duration-300 ${pathname === link.path ? "w-full" : "w-0 hover:w-full"}`}></span>
                </Link>
              ))}
              <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 md:hidden">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-transform hover:scale-110"
            >
              <span className="text-purple-600">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
