"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-8 h-8 rounded border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] opacity-0 pointer-events-none"
      >
        <Sun className="w-3.5 h-3.5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="w-8 h-8 rounded border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--surface-subtle)] text-[var(--foreground)] flex items-center justify-center transition-colors focus-visible:ring-1 focus-visible:ring-[var(--ring)]"
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-amber-400 transition-transform" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[var(--foreground)] transition-transform" />
      )}
    </button>
  );
}
