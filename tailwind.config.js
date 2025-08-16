/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: { color: "var(--primary)", textDecoration: "none", fontWeight: "500" },
            strong: { color: "var(--primary)" },
            h1: { color: "var(--foreground)", fontWeight: "700" },
            h2: { color: "var(--foreground)", fontWeight: "600" },
            h3: { color: "var(--foreground)" },
            code: {
              backgroundColor: "var(--code-bg)",
              color: "var(--primary)",
              borderRadius: "0.3rem",
              padding: "0.2rem 0.4rem",
            },
            blockquote: {
              borderLeftColor: "var(--primary)",
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
              fontStyle: "italic",
              paddingLeft: "1rem",
            },
            "ul > li::marker": { color: "var(--primary)" },
            hr: { borderColor: "var(--border)" },
          },
        },
        invert: {
          css: {
            color: "var(--foreground)",
            a: { color: "var(--primary)" },
            strong: { color: "var(--primary)" },
            code: { backgroundColor: "var(--code-bg)", color: "var(--primary)" },
            blockquote: {
              borderLeftColor: "var(--primary)",
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
