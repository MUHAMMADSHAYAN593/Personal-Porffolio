"use client";

import { useEffect, useRef, useState } from "react";

export default function PointerFollower() {
  const pillRef = useRef(null);
  const [label, setLabel] = useState("");
  const targetPos = useRef({ x: -200, y: -200 });
  const currentPos = useRef({ x: -200, y: -200 });
  const activeRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;

    const tick = () => {
      const el = pillRef.current;
      if (el && activeRef.current) {
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.24;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.24;
        el.style.transform = `translate3d(${currentPos.current.x + 12}px, ${currentPos.current.y + 14}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      const target = e.target?.closest?.("[data-cursor-label]");
      const next = target ? target.getAttribute("data-cursor-label") || "" : "";
      activeRef.current = Boolean(next);
      setLabel((prev) => (prev === next ? prev : next));
    };

    const onLeave = () => {
      activeRef.current = false;
      setLabel("");
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={pillRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 z-50 pointer-events-none select-none px-2.5 py-0.5 rounded-md bg-[#E5484D] text-white text-[11px] font-semibold shadow-md transition-opacity duration-150 ${
        label ? "opacity-100" : "opacity-0"
      }`}
    >
      {label}
    </div>
  );
}
