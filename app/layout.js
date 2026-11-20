import "./globals.css";
import Navbar from "./components/Navbar";
import AmbientBackdrop from "@/components/ambient-backdrop";
import PointerFollower from "@/components/pointer-follower";
import { ScrollProgressBar } from "@/components/scroll-effects";
import { PortfolioUXProvider } from "@/components/portfolio-ux-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Muhammad Shayan — AI/ML & Full-Stack Engineer",
  description:
    "AI/ML student and full-stack developer building structured LLM workflows, multi-agent pipelines, and production web interfaces.",
  keywords: [
    "Muhammad Shayan",
    "AI Developer",
    "Machine Learning",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Python",
    "Karachi",
  ],
  authors: [{ name: "Muhammad Shayan" }],
  openGraph: {
    title: "Muhammad Shayan — AI/ML & Full-Stack Engineer",
    description:
      "AI/ML student and full-stack developer building intelligent systems, data products, and modern web experiences.",
    url: "https://shayan.dev",
    siteName: "Muhammad Shayan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PortfolioUXProvider>
            <ScrollProgressBar />
            <AmbientBackdrop />
            <PointerFollower />
            <Navbar />
            <div className="flex-1 relative z-10">{children}</div>
          </PortfolioUXProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
