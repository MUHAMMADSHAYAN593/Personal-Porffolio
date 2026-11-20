"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { CopyAction } from "@/components/motion-primitives";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 450);
  };

  return (
    <main className="min-h-screen pt-24 md:pt-28">
      <div className="editorial-container">
        <div className="max-w-2xl mb-14 hero-enter hero-enter-1">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
            Let’s build something useful.
          </h1>
          <p className="text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">
            Whether you are discussing an engineering role, collaborating on an AI/ML system,
            or exploring a software product, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[var(--border)]">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-8 hero-enter hero-enter-2">
            <div>
              <h2 className="text-xs font-mono text-[var(--muted-foreground)] mb-3">
                Direct Channels
              </h2>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
                Email is the fastest way to reach me for technical or professional inquiries.
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:muhammadshayanakhlaq@gmail.com"
                    className="text-sm md:text-base font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                  >
                    muhammadshayanakhlaq@gmail.com
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)]" />
                  </a>
                  <CopyAction value="muhammadshayanakhlaq@gmail.com" label="Copy" />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="tel:03149765922"
                    className="text-sm font-mono text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                  >
                    0314 9765922
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  </a>
                  <CopyAction value="03149765922" label="Copy" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <h2 className="text-xs font-mono text-[var(--muted-foreground)] mb-3">
                Profiles
              </h2>
              <div className="space-y-2.5 text-xs font-mono">
                <div>
                  <a
                    href="https://github.com/MUHAMMADSHAYAN593"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
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
                    className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                  >
                    linkedin.com/in/muhammad-shayan-akhlaq
                    <ArrowUpRight className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)] text-xs font-mono text-[var(--muted-foreground)] space-y-1.5">
              <div>Karachi, Pakistan (UTC +5)</div>
              <div>Typical response within 24 hours</div>
            </div>
          </div>

          {/* Contact Console */}
          <div className="lg:col-span-7 hero-enter hero-enter-3">
            <div className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              {status === "sent" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">
                    Message Received
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--muted-foreground)] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. I’ve logged your note and will
                    follow up shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs font-mono text-[var(--accent)] hover:underline pt-2 cursor-pointer"
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none text-sm transition-colors"
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none text-sm transition-colors"
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
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="What are you building, or what would you like to discuss?"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[var(--foreground)] text-[var(--background)] font-medium text-xs font-mono hover:opacity-90 disabled:opacity-60 transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>
                      {status === "sending" ? "Sending..." : "Send message"}
                    </span>
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
