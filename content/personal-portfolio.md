---

title: "Personal Portfolio Website — Showcase Your Work with Next.js"
excerpt: "A modern and responsive developer portfolio built using Next.js, Tailwind CSS, and Markdown content. Features dark mode, projects, blog, and contact section."
date: "2025-08-16"
tags: \["Next.js", "Portfolio", "Tailwind", "React", "Markdown", "Project"]
coverImage: "/images/projects/portfolio/cover.png"
--------------------------------------------------

> A professional **portfolio website** designed to highlight your skills, showcase projects, and share blog posts — built with **Next.js App Router**, **Tailwind CSS**, and **MDX/Markdown**.

---

## ✨ Features

* **Responsive Layout** — works on mobile, tablet, and desktop
* **Dark Mode** — automatic theme toggle
* **Projects Section** — dynamically generated from `.md` files
* **Blog Section** — Markdown/MDX-powered posts
* **About Me** — introduce yourself with a modern design
* **Contact Form** — send messages directly (via API or third-party)
* **SEO Friendly** — metadata, OpenGraph, sitemap
* **Fast & Static Export** — deployable on GitHub Pages, Vercel, or Netlify

---

## 🧱 Tech Stack

* **Next.js (App Router)** — framework
* **Tailwind CSS** — styling and dark mode
* **@tailwindcss/typography** — for prose blog posts
* **gray-matter** — frontmatter parsing from `.md` files
* **react-markdown** + **syntax-highlighter** — render blog content with code blocks
* **Vercel / GitHub Pages** — deployment

---

## 📂 Folder Structure

```bash
personal-portfolio/
├─ app/
│  ├─ layout.js
│  ├─ page.js          # Home (About Me + Projects preview)
│  ├─ projects/
│  │  ├─ page.js       # Projects list
│  │  └─ [slug]/page.js  # Individual project page
│  ├─ blog/
│  │  ├─ page.js
│  │  └─ [slug]/page.js
│  └─ contact/page.js
├─ components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  ├─ ProjectCard.jsx
│  ├─ BlogCard.jsx
│  ├─ MarkdownRenderer.jsx
│  └─ ThemeToggle.jsx
├─ content/
│  ├─ projects/
│  │  └─ personal-portfolio.md
│  └─ blog/
│     └─ getting-started.md
├─ styles/
│  └─ globals.css
├─ public/
│  └─ images/projects/
├─ tailwind.config.js
└─ package.json
```

---

## 🔑 Example Project Markdown (`content/projects/personal-portfolio.md`)

```md
---
title: "Personal Portfolio Website"
excerpt: "A portfolio site built with Next.js, Tailwind, and Markdown to showcase my work and blog posts."
date: "2025-08-16"
tags: ["Next.js", "Tailwind", "Portfolio"]
coverImage: "/images/projects/portfolio/cover.png"
---

This project is a **personal developer portfolio** created to showcase my projects, blog posts, and skills in web development.

### 🚀 Features
- Dynamic project pages using Markdown  
- Blog section with syntax highlighting  
- Fully responsive UI with Tailwind  
- Dark/light mode theme toggle  

### 📌 Tech Used
- **Next.js App Router**  
- **Tailwind CSS**  
- **React Markdown**  
- **gray-matter**  

### 📷 Screenshots
![Portfolio Screenshot](/images/projects/portfolio/screenshot.png)

### 🔗 Live Demo
[View Portfolio](https://your-portfolio-link.com)
```

---

## 🚀 Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
npm start
```

---

## 🛠️ Deployment

* **Vercel** — best option for Next.js
* **GitHub Pages** — with `output: export`
* **Netlify / Render** — supported

---

## 📈 Roadmap

* Add **Testimonials** section
* Add **Download Resume** button
* Add **Project Categories & Filtering**
* Add **CMS (Sanity/Contentful)** integration option

---

## 📜 License

MIT — free to use and adapt.

---
