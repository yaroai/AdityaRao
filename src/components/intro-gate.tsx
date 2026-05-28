"use client";

import { useEffect, useState } from "react";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

// Fullscreen spiral "Enter" gate. Renders over the page, then fades away and
// unmounts (stopping the animation) once the visitor clicks Enter.
export function IntroGate({ children }: { children: React.ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [gone, setGone] = useState(false);
  const [startVisible, setStartVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStartVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setEntered(true);
    // Unmount the canvas after the fade completes so it stops rendering.
    setTimeout(() => setGone(true), 1100);
  };

  return (
    <>
      {children}

      {!gone && (
        <div
          className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-out ${
            entered ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0">
            <SpiralAnimation />
          </div>

          <div
            className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
              startVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button
              onClick={handleEnter}
              className="animate-pulse text-2xl font-extralight uppercase tracking-[0.2em] text-white transition-all duration-700 hover:tracking-[0.3em]"
            >
              Enter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
