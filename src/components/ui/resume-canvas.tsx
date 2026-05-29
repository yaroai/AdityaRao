"use client";

import { useEffect, useRef, useState } from "react";

// Renders page 1 of a PDF to a <canvas> using pdf.js — no browser PDF-viewer
// chrome and no gray "desk" background. Just the page itself.
export function ResumeCanvas({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let renderTask: { promise: Promise<unknown>; cancel: () => void } | null =
      null;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdf = await pdfjs.getDocument({ url: src }).promise;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        // Render at a fixed intrinsic width; CSS scales it down for crispness.
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: 1600 / base.width });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        renderTask = page.render({ canvas, canvasContext: ctx, viewport });
        await renderTask.promise;
        if (!cancelled) setReady(true);
      } catch {
        if (!cancelled) setError(true);
      }
    })();

    return () => {
      cancelled = true;
      try {
        renderTask?.cancel();
      } catch {
        /* ignore */
      }
    };
  }, [src]);

  if (error) {
    return (
      <p className="p-6 text-sm text-white/60">
        Couldn&apos;t render the resume inline.{" "}
        <a href={src} download className="underline">
          Download the PDF
        </a>
        .
      </p>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`${className ?? ""} transition-opacity duration-500 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
