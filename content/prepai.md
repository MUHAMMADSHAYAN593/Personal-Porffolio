---
title: "PrepAI – AI Interview Intelligence Platform"
excerpt: "AI-powered interview preparation tool that generates a personalized interview report based on resume upload, job description, and self-description."
category: "AI / ML"
year: "2026"
technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenRouter", "Zod", "SCSS"]
---

## Overview

Most developers spend hours searching for "common interview questions for [role]" and get the same generic lists every time. Nothing is tailored to their specific resume, and nothing targets the actual requirements of the job they are applying for.

**PrepAI** fixes that by generating a fully tailored, multi-section interview report in under 30 seconds.

## The Problem

Preparing for technical and behavioral interviews is currently broken:
- Generic question banks fail to test the candidate's exact tech stack.
- Candidates lack an objective way to see where their profile conflicts with or falls short of the job description.
- Finding realistic behavioral questions with structured STAR-method (Situation, Task, Action, Result) answers is difficult and time-consuming.

## What I Built

An end-to-end full-stack web platform consisting of:
- **Landing Page**: Product hero with live interactive mockup cards, feature highlights, and clear value messaging.
- **Input Studio**: Drag-and-drop resume ingestion (PDF and DOCX), job description text parsing, and optional candidate context.
- **Processing Engine**: Real-time step-by-step progress tracker that visually communicates AI evaluation stages.
- **Three-Panel Report Interface**:
  - Left navigation sidebar for rapid switching between question modules.
  - Central dossier with role-specific technical questions and behavioral scenarios with STAR-method model responses.
  - Right telemetry panel displaying a dynamic 0–100 match score and a targeted skill gap breakdown.
- **7-Day Roadmap**: A day-by-day tactical preparation plan to close identified skill gaps before the interview.

## How It Works

1. The candidate uploads their resume and pastes the target job description.
2. The Node.js/Express backend extracts text and builds an optimized prompt for OpenRouter (leveraging models like `upstage/solar-pro-3:free`).
3. The response is generated in `json_object` mode and validated against strict Zod schemas on the server.
4. Validated dossiers are stored in MongoDB and streamed to the React frontend.

## Technical Decisions & Defensive Engineering

The trickiest engineering challenge was getting free-tier and open-weight AI models to reliably return structured JSON that strictly conforms to a Zod schema. Many free models fail at native `json_schema` response enforcement and hallucinate markdown fences, missing keys, or unstructured conversational text.

### Defensive Output Protocol:
- Forced `response_format: { type: "json_object" }` on the provider API call.
- Authored a surgical system prompt that spells out every JSON key, data type, and boundary condition explicitly.
- Implemented automated sanitization that strips markdown backticks before passing data to Zod's `.safeParse()`.
- Added a fallback retry loop with simplified prompts if schema validation fails, guaranteeing zero unhandled runtime crashes in the client.

## What I Learned

Building PrepAI proved that production AI engineering is not simply calling an API endpoint—it is 80% defensive input/output handling, schema contracts, and graceful error boundaries.
