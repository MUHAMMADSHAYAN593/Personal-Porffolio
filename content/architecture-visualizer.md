---
title: "Architecture Visualizer – AI-Powered System & Flow Canvas"
excerpt: "AI-powered platform that turns natural-language ideas into interactive visual diagrams with node graphs, decision branches, and execution flows."
category: "AI / ML"
year: "2026"
technologies: ["Next.js 14", "React Flow", "Clerk", "MongoDB", "Ollama", "Framer Motion"]
---

## Overview

**Architecture Visualizer** is an AI-powered system canvas that converts natural-language prompts into interactive visual diagrams in seconds.

Instead of staring at a blank whiteboard or manually placing boxes and connectors, developers type their requirements (e.g. *"Show me how a SaaS subscription billing cycle works"*), and the system dynamically generates node graphs, decision branches, and animated execution sequences.

## The Problem

Explaining complex distributed architectures or logic flows through plain text is abstract, while drawing them manually in conventional tools takes focus away from system thinking. Whiteboard tools are either too static or too manual.

## What I Built

An interface designed as a fusion between two interaction paradigms:
- **Chat-First Prompt Experience**: Clean, focused input bar that slides seamlessly to reveal system reasoning.
- **Infinite Canvas Editor**: React Flow canvas rendering nodes, edges, conditional branches, and subgraphs.
- **Step-by-Step Play Mode**: Nodes light up in sequential execution order, simulating how data or control flows through the architecture in real time.
- **Private Local Inference**: Integrated with local Ollama LLMs so that proprietary system architectures never leave the developer's machine.

## Technical Decisions & Challenges

### Structured React Flow JSON from Local LLMs
The most difficult engineering challenge was enforcing strict React Flow JSON generation from local models without formatting errors:
- Crafted a surgical system prompt mandating exact node coordinate arrays, edge relationships, labels, and playback sequence indices.
- Implemented automated overlap-prevention algorithms to prevent messy node collisions.
- Used Framer Motion for state transitions and Clerk for secure user authentication with MongoDB diagram persistence.

## What I Learned

Giving developers visual playback of logic flows provides immense cognitive clarity. Structuring LLM outputs into spatial UI coordinates bridges the gap between conversational AI and interactive software design.
