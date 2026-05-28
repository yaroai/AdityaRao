"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReelCarouselProps {
  reels: string[];
}

export function ReelCarousel({ reels }: ReelCarouselProps) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const dragX = useMotionValue(0);
  const count = reels.length;

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, count - perView);
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -30) goNext();
    else if (x >= 30) goPrev();
  };

  // Clamp index when perView changes
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          style={{ x: dragX }}
          animate={{ translateX: `-${index * (100 / perView)}%` }}
          onDragEnd={onDragEnd}
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="flex cursor-grab active:cursor-grabbing"
        >
          {reels.map((reel, i) => {
            const tiktokId = reel.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/)?.[1];
            const embedSrc = tiktokId
              ? `https://www.tiktok.com/embed/v2/${tiktokId}`
              : `${reel}embed/`;
            return (
              <div
                key={i}
                className="shrink-0 px-1.5 sm:px-2 first:pl-0 last:pr-0"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="rounded-xl overflow-hidden border border-[var(--color-site-border)] bg-black aspect-[9/16]">
                  <iframe
                    src={embedSrc}
                    className="w-full h-full border-0"
                    scrolling="no"
                    loading="lazy"
                    allowTransparency
                    title={`Reel ${i + 1}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                i === index
                  ? "bg-[var(--color-site-text)] w-5"
                  : "bg-[var(--color-site-border)] w-1.5 hover:bg-[var(--color-site-muted)]"
              )}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={goPrev}
            className="w-7 h-7 rounded-full border border-[var(--color-site-border)] flex items-center justify-center hover:bg-[var(--color-site-border)]/50 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={goNext}
            className="w-7 h-7 rounded-full border border-[var(--color-site-border)] flex items-center justify-center hover:bg-[var(--color-site-border)]/50 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
