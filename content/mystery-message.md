---
title: "Mystery Message – Anonymous Social Feedback Platform"
excerpt: "Modern Next.js application with credentials auth, Resend email verification, and AI message prompts."
category: "Full Stack"
year: "2026"
technologies: ["Next.js App Router", "TypeScript", "NextAuth", "MongoDB Atlas", "Mongoose", "Resend", "OpenRouter"]
---

## Overview

**Mystery Message** is an anonymous social feedback application built using the modern Next.js App Router stack.

## Architecture Highlights

- **NextAuth Integration**: Custom credentials provider supporting both email and username authentication.
- **Email Verification**: Production verification pipeline powered by Resend with expiring security tokens.
- **Cached DB Connections**: Global cached MongoDB connection strategy tailored for Next.js serverless route handlers.
- **Public Profile Links**: Unique user endpoints (`/u/[username]`) with dynamic message acceptance toggling.
- **AI Prompt Assist**: OpenRouter integration providing message starter ideas with graceful fallback handlers when third-party APIs are rate-limited.
