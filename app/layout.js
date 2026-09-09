import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Shayan | AI/ML & Full-Stack Developer",
  description:
    "AI/ML student and full-stack developer focused on building practical AI systems, machine-learning applications, and modern web products.",
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
    title: "Muhammad Shayan | AI/ML & Full-Stack Developer",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
