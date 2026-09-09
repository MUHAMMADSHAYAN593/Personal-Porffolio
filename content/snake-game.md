---
title: "Classic Snake Game – Vanilla JavaScript"
excerpt: "Fully functional classic Snake game built with vanilla JavaScript, featuring custom game loops, grid coordinates, and score tracking."
category: "Full Stack"
year: "2025"
technologies: ["HTML5", "CSS3", "JavaScript"]
liveUrl: "https://snake-game-ebon-kappa-92.vercel.app/"
---

## Overview

A deterministic implementation of the classic arcade Snake game written in pure vanilla JavaScript, HTML5, and CSS3.

Live Demo: [Classic Snake Game](https://snake-game-ebon-kappa-92.vercel.app/)

## Technical Highlights

- **Game Loop Execution**: Utilized `requestAnimationFrame` for stutter-free 60fps frame synchronization.
- **Matrix Collision Math**: Custom grid coordinate math handling boundary wrapping and self-collision checks.
- **Input Buffer**: Queued directional keyboard events to prevent suicidal 180-degree self-turn bugs.
