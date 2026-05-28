"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Stat {
  value: string;
  label: string;
}

interface StatsTickerProps {
  stats: Stat[];
}

export function StatsTicker({ stats }: StatsTickerProps) {
  // Duplicate stats for seamless loop
  const items = [...stats, ...stats, ...stats];

  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--color-site-border)] py-5">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[
          AutoScroll({
            playOnInit: true,
            speed: 0.5,
            stopOnInteraction: false,
            stopOnFocusIn: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {items.map((stat, i) => (
            <CarouselItem
              key={i}
              className="flex basis-auto items-center pl-0"
            >
              <div className="flex items-baseline gap-2.5 px-8 md:px-12 whitespace-nowrap">
                <span className="font-heading text-[clamp(1.25rem,2.5vw,2rem)] tracking-[-0.02em] text-[var(--color-site-text)]">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--color-site-muted)]">
                  {stat.label}
                </span>
              </div>
              <span className="text-[var(--color-site-border)] text-lg select-none">/</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
