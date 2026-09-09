"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { ArrowUpRight, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Client-side simulation
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-12 md:pt-16">
      <div className="editorial-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
            Initiate Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Let’s build something useful.
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Whether you are discussing an engineering position, looking to collaborate on an AI/ML
            system, or exploring a software project, I’d be glad to connect.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[var(--border)]">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
                Direct Channels
              </span>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                Email is the fastest way to reach me directly for technical or professional inquiries.
              </p>
              <a
                href="mailto:muhammadshayanakhlaq@gmail.com"
                className="text-base md:text-lg font-semibold text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
              >
                muhammadshayanakhlaq@gmail.com
                <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)]" />
              </a>
              <div className="pt-2">
                <a
                  href="tel:03149765922"
                  className="text-sm font-mono text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  Phone: 0314 9765922
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <span className="text-xs font-mono text-[var(--muted-foreground)] uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="https://github.com/MUHAMMADSHAYAN593"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                  >
                    github.com/MUHAMMADSHAYAN593
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                  >
                    linkedin.com/in/muhammad-shayan-akhlaq
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)] space-y-1">
              <div>Location: Karachi, Pakistan</div>
              <div>Timezone: UTC +5</div>
              <div>Response Time: Usually within 24 hours</div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-lg border border-[var(--border)] bg-[var(--card)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Message Received</h3>
                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. I’ve received your note and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-[var(--muted-foreground)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-[var(--muted-foreground)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-[var(--muted-foreground)] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What are you building, or what would you like to discuss?"
                      className="w-full px-3.5 py-2.5 rounded border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-blue-500 focus:outline-none text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded bg-[var(--foreground)] text-[var(--background)] font-medium text-xs font-mono hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
