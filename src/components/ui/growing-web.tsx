"use client";

import { useEffect, useRef } from "react";

// Generative dendrite background: thin branches creep in from the edges, sprout
// child branches off one another, and slowly accumulate to fill the page.
// The canvas is never cleared during animation, so growth persists over time.
export function GrowingWeb({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Branch = {
      x: number;
      y: number;
      angle: number;
      width: number;
      life: number;
      speed: number;
    };

    const branches: Branch[] = [];
    const MAX = 520;
    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const spawn = (
      x: number,
      y: number,
      angle: number,
      w: number,
      life: number
    ) => {
      if (branches.length >= MAX) return;
      branches.push({ x, y, angle, width: w, life, speed: 0.55 + Math.random() * 0.9 });
    };

    const seedEdges = (count: number) => {
      for (let i = 0; i < count; i++) {
        const edge = Math.floor(Math.random() * 4);
        let x = 0;
        let y = 0;
        let angle = 0;
        const jitter = (Math.random() - 0.5) * 1.0;
        if (edge === 0) {
          x = Math.random() * width;
          y = -10;
          angle = Math.PI / 2 + jitter;
        } else if (edge === 1) {
          x = width + 10;
          y = Math.random() * height;
          angle = Math.PI + jitter;
        } else if (edge === 2) {
          x = Math.random() * width;
          y = height + 10;
          angle = -Math.PI / 2 + jitter;
        } else {
          x = -10;
          y = Math.random() * height;
          angle = 0 + jitter;
        }
        spawn(x, y, angle, 0.9 + Math.random() * 0.7, 220 + Math.random() * 260);
      }
    };

    const tick = () => {
      frame++;
      // Periodically introduce fresh edge seeds so the web keeps expanding.
      if (frame % 80 === 0 && branches.length < MAX * 0.65) seedEdges(2);

      ctx.lineCap = "round";
      for (let i = branches.length - 1; i >= 0; i--) {
        const b = branches[i];
        const nx = b.x + Math.cos(b.angle) * b.speed;
        const ny = b.y + Math.sin(b.angle) * b.speed;

        ctx.strokeStyle = `rgba(165, 172, 196, ${0.035 + b.width * 0.03})`;
        ctx.lineWidth = b.width;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        b.x = nx;
        b.y = ny;
        b.angle += (Math.random() - 0.5) * 0.28; // organic wander
        b.life -= 1;
        b.width *= 0.9975;

        // Sprout a child branch off this one.
        if (Math.random() < 0.02 && b.width > 0.32) {
          spawn(
            b.x,
            b.y,
            b.angle + (Math.random() - 0.5) * 1.2,
            b.width * 0.68,
            b.life * 0.7
          );
          b.width *= 0.9;
        }

        if (
          b.life <= 0 ||
          b.width < 0.22 ||
          b.x < -40 ||
          b.x > width + 40 ||
          b.y < -40 ||
          b.y > height + 40
        ) {
          branches.splice(i, 1);
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      branches.length = 0;
      frame = 0;
      seedEdges(6);
    };

    // Grow for this long, then freeze the finished web in place.
    const DURATION_MS = 20000;
    let start = 0;

    const loop = () => {
      tick();
      if (performance.now() - start < DURATION_MS) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0; // stop; the accumulated web stays drawn
      }
    };

    const begin = () => {
      if (reduce) {
        // Render a static web for reduced-motion users.
        for (let k = 0; k < 700; k++) tick();
        return;
      }
      start = performance.now();
      if (!raf) raf = requestAnimationFrame(loop);
    };

    resize();
    begin();

    // Re-grow for another DURATION_MS after a resize (which clears the canvas).
    const onResize = () => {
      resize();
      begin();
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
