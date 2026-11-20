"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const UXContext = createContext({
  soundEnabled: true,
  toggleSound: () => {},
  playTick: () => {},
  playPop: () => {},
  playSuccess: () => {},
});

export function usePortfolioUX() {
  return useContext(UXContext);
}

export function PortfolioUXProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  const getCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtxRef.current = new AC();
    }
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  // Unlock AudioContext on first user gesture so default-on audio plays smoothly
  useEffect(() => {
    const unlock = () => {
      if (!soundEnabled) return;
      getCtx();
    };
    window.addEventListener("pointerdown", unlock, { passive: true, once: true });
    window.addEventListener("keydown", unlock, { passive: true, once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [soundEnabled, getCtx]);

  const playTone = useCallback(
    (freqStart, freqEnd, duration = 0.045, gainPeak = 0.035, type = "sine") => {
      if (!soundEnabled) return;
      const ctx = getCtx();
      if (!ctx || ctx.state !== "running") return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, now);
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), now + duration);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gainPeak, now + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + duration + 0.01);
      } catch {
        // Ignore AudioContext errors if blocked before gesture
      }
    },
    [soundEnabled, getCtx]
  );

  const playTick = useCallback(() => {
    playTone(620, 420, 0.032, 0.024, "triangle");
  }, [playTone]);

  const playPop = useCallback(() => {
    playTone(340, 560, 0.055, 0.035, "sine");
  }, [playTone]);

  const playSuccess = useCallback(() => {
    if (!soundEnabled) return;
    playTone(523.25, 659.25, 0.07, 0.03, "sine");
    setTimeout(() => playTone(659.25, 783.99, 0.09, 0.025, "sine"), 55);
  }, [soundEnabled, playTone]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        const ctx = getCtx();
        if (ctx) {
          try {
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(660, now + 0.06);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.exponentialRampToValueAtTime(0.03, now + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
          } catch {}
        }
      }
      return next;
    });
  }, [getCtx]);

  return (
    <UXContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playTick,
        playPop,
        playSuccess,
      }}
    >
      {children}
    </UXContext.Provider>
  );
}
