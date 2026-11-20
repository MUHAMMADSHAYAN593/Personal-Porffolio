# Rehearsal: Portfolio Stageshow Demos

- **Gold references used:**
  - `hero-demo` + `dark-hero` + `static-card` for `HeroShowcase` (PrepAI corner-bleed window with terminal satellite, Research Agent multi-agent connector pipeline, Architecture Visualizer local Ollama node canvas).
  - `bento` + `ruled-bento` for `CapabilitiesBento` (2x1 hero window tile, 1x1 inverted stat tile, 1x1 Zod contract card, 1x1 sparse TF-IDF bar chart diagram, 1x1 bleeding stack collection).
  - `ai-chat` + `annotations` + `phone-touch` patterns for `ProjectStage` across featured and archive projects.
- **Captured & visually inspected (headless Chromium 2x DPR against `next start`):**
  - `/` at `1280×900` (hero, bento, featured projects, light & dark themes via theme toggle click)
  - `/` at `390×844` (compact layouts on hero & project stages, zero horizontal overflow)
  - `/projects`, `/about`, `/contact` at `1280×900`
- **Visual fixes applied after first capture pass:**
  - Widened `.sh-hero-win` and `.sh-proj-win` so right and bottom bleeds cross the stage boundary cleanly (> 24px) instead of ending near the edge.
  - Moved PrepAI hero cursor rest point (`prep-rest` / `REST`) to empty canvas below the dossier card so it never rests over the `0 /100` readout.
  - Moved `ProjectStage` Replay button below the stage frame so it never overlaps the macOS window titlebar.
- **Not checked:**
  - `stageshow/scripts/film.mjs --gate` (`playwright-core` is not installed in this repository; verified instead via headless Chromium CDP screenshots, runtime error tracking, and stage/overflow metrics).
  - External iframe embed rendering inside `LivePreviewBox` (offline sandbox).
