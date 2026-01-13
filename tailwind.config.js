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
            maxWidth: "100%",
            color: "var(--foreground)",
            a: {
              color: "var(--primary)",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "var(--secondary-foreground)",
              }
            },
            strong: { color: "var(--foreground)", fontWeight: "700" },
            h1: { color: "var(--foreground)", fontWeight: "800", marginTop: "2em", marginBottom: "0.5em" },
            h2: { color: "var(--foreground)", fontWeight: "700", marginTop: "1.5em", marginBottom: "0.5em" },
            h3: { color: "var(--foreground)", fontWeight: "600", marginTop: "1em", marginBottom: "0.5em" },
            code: {
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
              borderRadius: "0.25rem",
              padding: "0.2rem 0.3rem",
              fontWeight: "600",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            blockquote: {
              borderLeftColor: "var(--primary)",
              backgroundColor: "var(--muted)",
              color: "var(--foreground)",
              fontStyle: "italic",
              padding: "1rem",
              borderRadius: "0.5rem",
              fontWeight: "500",
            },
            "ul > li::marker": { color: "var(--primary)" },
            hr: { borderColor: "var(--border)", marginTop: "2em", marginBottom: "2em" },
            img: {
              borderRadius: "0.5rem",
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
          },
        },
        invert: {
          css: {
            color: "var(--foreground)",
            a: { color: "var(--primary)" },
            strong: { color: "var(--foreground)" },
            h1: { color: "var(--foreground)" },
            h2: { color: "var(--foreground)" },
            h3: { color: "var(--foreground)" },
            code: { backgroundColor: "var(--muted)", color: "var(--foreground)" },
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
